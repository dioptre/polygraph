/**
 * ProfileManager - Handles Export, Import, and Shareable URL Links for PolyGraph Profiles.
 */
// Whitelists used to sanitize untrusted profile data (share URLs, imports,
// localStorage) before it is merged into app state. Only keys on these lists
// are accepted, each coerced to its expected type, and dangerous prototype
// keys are dropped. This prevents type confusion (e.g. HTML/strings where a
// number is expected) and second-order prototype pollution via __proto__.
const NUMERIC_PARAMS = [
  'sessionDurationMin', 'ejaculationPct', 'fluidActsPerMonth', 'casualActsInitial',
  'coolidgeDecayRate', 'casualActsFloor', 'pctAnalSex', 'pctVaginalSex', 'pctOralSex',
  'pctSkinContact', 'egoPartners', 'monogamousPct', 'polyculePct', 'slutPct',
  'polyculeSize', 'slutAvgPartners', 'sluttinessIndex', 'cheatingLikelihood', 'nDegrees',
  'partyLoopbackPct', 'condomUsageInternal', 'condomUsageExternal', 'condomUsageCheating',
  'newPartnersPerMonth', 'testingCadenceMonths', 'financialAccessIndex', 'maxNodesLimit'
];
const STRING_PARAMS = ['demographicProfile', 'exposureCurveModel'];
const BOOL_PARAMS = ['previewExtended'];
const BOOL_PROPHYLACTICS = ['prepActive', 'doxyPepActive', 'hpvVaccinated', 'hepBVaccinated', 'mpoxVaccinated'];

export class ProfileManager {
  constructor(appController) {
    this.app = appController;
  }

  /**
   * Returns a clean copy of an untrusted profile object, keeping only
   * whitelisted keys coerced to their expected types. `kind` is either
   * 'params' or 'prophylactics'.
   */
  sanitizeProfile(input, kind) {
    const out = {};
    if (!input || typeof input !== 'object') return out;

    const numeric = kind === 'params' ? NUMERIC_PARAMS : [];
    const str = kind === 'params' ? STRING_PARAMS : [];
    const bool = kind === 'params' ? BOOL_PARAMS : BOOL_PROPHYLACTICS;

    // Object.entries only enumerates own keys, so an inherited __proto__ is
    // never copied; we also explicitly skip dangerous key names.
    for (const [key, value] of Object.entries(input)) {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;
      if (numeric.includes(key)) {
        const n = Number(value);
        if (Number.isFinite(n)) out[key] = n;
      } else if (str.includes(key)) {
        out[key] = String(value);
      } else if (bool.includes(key)) {
        out[key] = Boolean(value);
      }
      // Unknown keys are dropped.
    }
    return out;
  }

  /**
   * Generates a clean profile export payload object.
   */
  getExportPayload(profileName = 'PolyGraph Shared Profile') {
    return {
      version: '1.0.0',
      title: profileName,
      exportedAt: new Date().toISOString(),
      params: { ...this.app.params },
      prophylactics: { ...this.app.prophylactics }
    };
  }

  /**
   * Downloads the current profile as a formatted JSON file.
   */
  exportToFile(filename = 'polygraph_profile.json') {
    const payload = this.getExportPayload();
    const jsonStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Parses and validates JSON profile input and applies it to the app state.
   */
  importFromJSON(jsonText) {
    try {
      const data = typeof jsonText === 'string' ? JSON.parse(jsonText) : jsonText;
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid JSON structure.');
      }

      const importedParams = data.params || data;
      const importedProphylactics = data.prophylactics || {};

      // Merge imported parameters into app state
      this.app.params = { ...this.app.params, ...importedParams };
      this.app.prophylactics = { ...this.app.prophylactics, ...importedProphylactics };

      // Update UI & Storage
      this.app.syncUIWithParams();
      this.app.saveToLocalStorage();
      this.app.updateAll();

      return { success: true, message: 'Profile imported successfully!' };
    } catch (err) {
      console.error('Import error:', err);
      return { success: false, message: `Import failed: ${err.message}` };
    }
  }

  /**
   * Generates a compressed shareable URL link for the current profile.
   */
  generateShareableURL() {
    const payload = this.getExportPayload();
    const jsonStr = JSON.stringify({ p: payload.params, pr: payload.prophylactics });
    const b64 = encodeURIComponent(btoa(unescape(encodeURIComponent(jsonStr))));
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}#profile=${b64}`;
  }

  /**
   * Copies the shareable URL to clipboard.
   */
  async copyShareableURLToClipboard() {
    const url = this.generateShareableURL();
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch (err) {
      console.warn('Clipboard write failed, using execCommand fallback:', err);
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      return true;
    }
  }

  /**
   * Checks window URL hash/search on page initialization and loads shared profile if present.
   */
  loadFromURLIfPresent() {
    try {
      const hash = window.location.hash || '';
      const search = window.location.search || '';
      const source = hash.includes('profile=') ? hash : search;
      
      if (!source.includes('profile=')) return false;

      const match = source.match(/profile=([^&]+)/);
      if (!match || !match[1]) return false;

      const rawParam = match[1];
      const jsonStr = decodeURIComponent(escape(atob(decodeURIComponent(rawParam))));
      const data = JSON.parse(jsonStr);

      const params = data.p || data.params;
      const prophylactics = data.pr || data.prophylactics;

      if (params) {
        this.app.params = { ...this.app.params, ...this.sanitizeProfile(params, 'params') };
      }
      if (prophylactics) {
        this.app.prophylactics = { ...this.app.prophylactics, ...this.sanitizeProfile(prophylactics, 'prophylactics') };
      }

      this.app.currentPresetKey = 'me';
      this.app.presetConfigs.me = { ...this.app.params, ...this.app.prophylactics };
      this.app.saveToLocalStorage();
      this.app.syncUIWithParams();
      this.app.updateAll();

      // Clean query string and hash from browser URL bar cleanly after params load
      if (window.history && window.history.replaceState) {
        const cleanUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, '', cleanUrl);
      }

      return true;
    } catch (err) {
      console.error('Error loading shared profile from URL:', err);
      return false;
    }
  }
}
