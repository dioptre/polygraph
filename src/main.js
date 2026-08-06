import { STIDataLoader } from './stiData.js';
import { NetworkGenerator } from './networkGenerator.js';
import { GraphVisualizer } from './graphVisualizer.js';
import { STIRiskCalculator } from './riskCalculator.js';
import { ChartsManager } from './chartsManager.js';

class AppController {
  constructor() {
    this.dataLoader = new STIDataLoader();
    this.networkGen = new NetworkGenerator();
    this.riskCalc = new STIRiskCalculator();
    this.chartsManager = new ChartsManager();
    this.visualizer = null;

    // Default parameters matching user's baseline setup
    this.defaultParams = {
      demographicProfile: 'hetero_mixed',
      
      // Session Duration & Ejaculation Parameters
      sessionDurationMin: 45,
      ejaculationPct: 47,
      exposureCurveModel: 'linear',

      // Dual-Engine Partner Activity Model
      fluidActsPerMonth: 50,
      casualActsInitial: 1,
      coolidgeDecayRate: 0.2,
      casualActsFloor: 10,

      pctAnalSex: 0,
      pctVaginalSex: 100,
      pctOralSex: 100,
      pctSkinContact: 100,

      egoPartners: 2,
      monogamousPct: 32,
      polyculePct: 100,
      slutPct: 50,
      polyculeSize: 7,
      slutAvgPartners: 6,
      sluttinessIndex: 0.86,
      cheatingLikelihood: 10,
      nDegrees: 3,
      condomUsageInternal: 0.0,
      condomUsageExternal: 0.90,
      condomUsageCheating: 0.1,
      newPartnersPerMonth: 0.5,
      previewExtended: false
    };

    this.defaultProphylactics = {
      prepActive: false,
      doxyPepActive: false,
      hpvVaccinated: true,
      hepBVaccinated: true,
      mpoxVaccinated: false
    };

    this.params = { ...this.defaultParams };
    this.prophylactics = { ...this.defaultProphylactics };

    this.presetConfigs = {
      me: {
        ...this.defaultParams,
        ...this.defaultProphylactics
      },
      poly_slut_17: {
        demographicProfile: 'msm_tgnc',
        sessionDurationMin: 30,
        ejaculationPct: 80,
        exposureCurveModel: 'logarithmic',
        fluidActsPerMonth: 10,
        casualActsInitial: 25,
        coolidgeDecayRate: 0.4,
        casualActsFloor: 3,
        pctAnalSex: 50,
        pctVaginalSex: 0,
        pctOralSex: 35,
        pctSkinContact: 15,
        egoPartners: 3,
        monogamousPct: 0,
        polyculePct: 66,
        slutPct: 34,
        polyculeSize: 4,
        slutAvgPartners: 17,
        sluttinessIndex: 0.6,
        cheatingLikelihood: 10,
        condomUsageInternal: 0.8,
        condomUsageExternal: 0.3,
        newPartnersPerMonth: 2,
        previewExtended: true,
        prepActive: false,
        doxyPepActive: false,
        hpvVaccinated: false,
        hepBVaccinated: false,
        mpoxVaccinated: false
      },
      wsw_polycule: {
        demographicProfile: 'wsw_female',
        sessionDurationMin: 45,
        ejaculationPct: 0,
        exposureCurveModel: 'logarithmic',
        fluidActsPerMonth: 12,
        casualActsInitial: 15,
        coolidgeDecayRate: 0.25,
        casualActsFloor: 2,
        pctAnalSex: 0,
        pctVaginalSex: 40,
        pctOralSex: 35,
        pctSkinContact: 25,
        egoPartners: 4,
        monogamousPct: 0,
        polyculePct: 75,
        slutPct: 25,
        polyculeSize: 5,
        slutAvgPartners: 8,
        sluttinessIndex: 0.3,
        cheatingLikelihood: 5,
        condomUsageInternal: 0.9,
        condomUsageExternal: 0.6,
        newPartnersPerMonth: 0.5,
        previewExtended: false,
        prepActive: false,
        doxyPepActive: false,
        hpvVaccinated: true,
        hepBVaccinated: true,
        mpoxVaccinated: false
      },
      closed_polycule: {
        demographicProfile: 'hetero_mixed',
        sessionDurationMin: 35,
        ejaculationPct: 90,
        exposureCurveModel: 'logarithmic',
        fluidActsPerMonth: 14,
        casualActsInitial: 10,
        coolidgeDecayRate: 0.3,
        casualActsFloor: 1,
        pctAnalSex: 20,
        pctVaginalSex: 50,
        pctOralSex: 20,
        pctSkinContact: 10,
        egoPartners: 3,
        monogamousPct: 0,
        polyculePct: 100,
        slutPct: 0,
        polyculeSize: 5,
        slutAvgPartners: 5,
        sluttinessIndex: 0.05,
        cheatingLikelihood: 5,
        condomUsageInternal: 0.9,
        condomUsageExternal: 0.5,
        newPartnersPerMonth: 0,
        previewExtended: false,
        prepActive: false,
        doxyPepActive: false,
        hpvVaccinated: true,
        hepBVaccinated: true,
        mpoxVaccinated: false
      },
      monogamous_cheat: {
        demographicProfile: 'hetero_mixed',
        sessionDurationMin: 20,
        ejaculationPct: 85,
        exposureCurveModel: 'linear',
        fluidActsPerMonth: 16,
        casualActsInitial: 12,
        coolidgeDecayRate: 0.5,
        casualActsFloor: 1,
        pctAnalSex: 10,
        pctVaginalSex: 60,
        pctOralSex: 20,
        pctSkinContact: 10,
        egoPartners: 1,
        monogamousPct: 100,
        polyculePct: 0,
        slutPct: 0,
        polyculeSize: 2,
        slutAvgPartners: 10,
        sluttinessIndex: 0.1,
        cheatingLikelihood: 35,
        condomUsageInternal: 0.1,
        condomUsageExternal: 0.2,
        newPartnersPerMonth: 0.1,
        previewExtended: false,
        prepActive: false,
        doxyPepActive: false,
        hpvVaccinated: false,
        hepBVaccinated: false,
        mpoxVaccinated: false
      },
      high_sluttiness: {
        demographicProfile: 'sf_high_risk',
        sessionDurationMin: 20,
        ejaculationPct: 75,
        exposureCurveModel: 'logarithmic',
        fluidActsPerMonth: 6,
        casualActsInitial: 30,
        coolidgeDecayRate: 0.45,
        casualActsFloor: 2,
        pctAnalSex: 45,
        pctVaginalSex: 15,
        pctOralSex: 30,
        pctSkinContact: 10,
        egoPartners: 6,
        monogamousPct: 10,
        polyculePct: 20,
        slutPct: 70,
        polyculeSize: 4,
        slutAvgPartners: 22,
        sluttinessIndex: 0.9,
        cheatingLikelihood: 25,
        condomUsageInternal: 0.4,
        condomUsageExternal: 0.2,
        newPartnersPerMonth: 6,
        previewExtended: true,
        prepActive: true,
        doxyPepActive: true,
        hpvVaccinated: true,
        hepBVaccinated: true,
        mpoxVaccinated: true
      },
      party_scene: {
        demographicProfile: 'kink_bdsm',
        sessionDurationMin: 90,
        ejaculationPct: 60,
        exposureCurveModel: 'logarithmic',
        fluidActsPerMonth: 4,
        casualActsInitial: 35,
        coolidgeDecayRate: 0.6,
        casualActsFloor: 1,
        pctAnalSex: 30,
        pctVaginalSex: 10,
        pctOralSex: 30,
        pctSkinContact: 30,
        egoPartners: 8,
        monogamousPct: 0,
        polyculePct: 20,
        slutPct: 80,
        polyculeSize: 6,
        slutAvgPartners: 30,
        sluttinessIndex: 0.95,
        cheatingLikelihood: 40,
        condomUsageInternal: 0.2,
        condomUsageExternal: 0.1,
        newPartnersPerMonth: 15,
        previewExtended: true,
        prepActive: false,
        doxyPepActive: false,
        hpvVaccinated: true,
        hepBVaccinated: true,
        mpoxVaccinated: true
      }
    };
  }

  async init() {
    console.log('Initializing PolyGraph Application...');
    
    // 1. Load persisted user state from localStorage if available
    this.loadFromLocalStorage();

    // 2. Load STI dataset
    const pathogens = await this.dataLoader.loadData('./sexual_health_sti_model_data.csv');
    this.riskCalc.setPathogens(pathogens);
    this.populateSTIRawTable(pathogens);

    // 3. Initialize Visualizer & Charts
    const sigmaContainer = document.getElementById('sigma-container');
    const tooltip = document.getElementById('graph-tooltip');
    this.visualizer = new GraphVisualizer(sigmaContainer, tooltip);

    this.chartsManager.init({
      growth: document.getElementById('chart-growth'),
      risk: document.getElementById('chart-sti'),
      longitudinal: document.getElementById('chart-timeline'),
      radar: document.getElementById('chart-radar')
    });

    // 4. Attach Event Listeners
    this.bindEvents();

    // 5. Sync UI & Render
    this.syncUIWithParams();
    this.updateAll();
  }

  loadFromLocalStorage() {
    try {
      const savedState = localStorage.getItem('polygraph_user_profile');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        if (parsed.params) Object.assign(this.params, parsed.params);
        if (parsed.prophylactics) Object.assign(this.prophylactics, parsed.prophylactics);
        
        // Sync "me" preset with loaded user profile
        this.presetConfigs.me = {
          ...this.params,
          ...this.prophylactics
        };
        console.log('Restored "Me" profile from localStorage.');
      }
    } catch (err) {
      console.warn('Failed to load from localStorage:', err);
    }
  }

  saveToLocalStorage() {
    try {
      // Keep "me" preset in sync with user's live changes
      this.presetConfigs.me = {
        ...this.params,
        ...this.prophylactics
      };

      localStorage.setItem('polygraph_user_profile', JSON.stringify({
        params: this.params,
        prophylactics: this.prophylactics
      }));

      // Switch preset select to "me" if custom changes are made
      const presetSelect = document.getElementById('preset-select');
      if (presetSelect && presetSelect.value !== 'me') {
        presetSelect.value = 'me';
      }
    } catch (err) {
      console.warn('Failed to save to localStorage:', err);
    }
  }

  applyPreset(presetKey) {
    const config = this.presetConfigs[presetKey];
    if (!config) return;

    // Extract prophylactics fields if present
    const proKeys = ['prepActive', 'doxyPepActive', 'hpvVaccinated', 'hepBVaccinated', 'mpoxVaccinated'];
    proKeys.forEach(k => {
      if (config[k] !== undefined) {
        this.prophylactics[k] = config[k];
      }
    });

    // Assign remaining params
    Object.keys(config).forEach(k => {
      if (!proKeys.includes(k)) {
        this.params[k] = config[k];
      }
    });

    if (presetKey !== 'me') {
      // Save current selection to 'me' profile
      this.saveToLocalStorage();
    }

    this.syncUIWithParams();
    this.updateAll();
  }

  bindEvents() {
    // Preset dropdown selector
    document.getElementById('preset-select')?.addEventListener('change', (e) => {
      this.applyPreset(e.target.value);
    });

    // Demographic dropdown
    document.getElementById('select-demographic')?.addEventListener('change', (e) => {
      this.params.demographicProfile = e.target.value;
      this.saveToLocalStorage();
      this.updateAll();
    });

    // Exposure Curve Model dropdown
    document.getElementById('select-exposureCurve')?.addEventListener('change', (e) => {
      this.params.exposureCurveModel = e.target.value;
      this.saveToLocalStorage();
      this.updateAll();
    });

    // Sliders input events
    const sliderIds = [
      { id: 'input-sessionDuration', param: 'sessionDurationMin', valId: 'val-sessionDuration', suffix: ' min' },
      { id: 'input-ejaculationPct', param: 'ejaculationPct', valId: 'val-ejaculationPct', suffix: '%' },

      { id: 'input-fluidActsPerMonth', param: 'fluidActsPerMonth', valId: 'val-fluidActsPerMonth', suffix: ' Acts' },
      { id: 'input-casualActsInitial', param: 'casualActsInitial', valId: 'val-casualActsInitial', suffix: ' Acts' },
      { id: 'input-coolidgeDecayRate', param: 'coolidgeDecayRate', valId: 'val-coolidgeDecayRate', suffix: '' },
      { id: 'input-casualActsFloor', param: 'casualActsFloor', valId: 'val-casualActsFloor', suffix: ' Acts' },

      { id: 'input-pctAnalSex', param: 'pctAnalSex', valId: 'val-pctAnalSex', suffix: '%' },
      { id: 'input-pctVaginalSex', param: 'pctVaginalSex', valId: 'val-pctVaginalSex', suffix: '%' },
      { id: 'input-pctOralSex', param: 'pctOralSex', valId: 'val-pctOralSex', suffix: '%' },
      { id: 'input-pctSkinContact', param: 'pctSkinContact', valId: 'val-pctSkinContact', suffix: '%' },
      { id: 'input-egoPartners', param: 'egoPartners', valId: 'val-egoPartners', suffix: '' },
      { id: 'input-monogamousPct', param: 'monogamousPct', valId: 'val-monogamousPct', suffix: '%' },
      { id: 'input-polyculePct', param: 'polyculePct', valId: 'val-polyculePct', suffix: '%' },
      { id: 'input-slutPct', param: 'slutPct', valId: 'val-slutPct', suffix: '%' },
      { id: 'input-polyculeSize', param: 'polyculeSize', valId: 'val-polyculeSize', suffix: '' },
      { id: 'input-slutAvgPartners', param: 'slutAvgPartners', valId: 'val-slutAvgPartners', suffix: '' },
      { id: 'input-sluttinessIndex', param: 'sluttinessIndex', valId: 'val-sluttinessIndex', suffix: '%', scale: 100 },
      { id: 'input-cheatingLikelihood', param: 'cheatingLikelihood', valId: 'val-cheatingLikelihood', suffix: '%' },
      { id: 'input-nDegrees', param: 'nDegrees', valId: 'val-nDegrees', suffix: ' Steps' },
      { id: 'input-condomInternal', param: 'condomUsageInternal', valId: 'val-condomInternal', suffix: '%', scale: 100 },
      { id: 'input-condomExternal', param: 'condomUsageExternal', valId: 'val-condomExternal', suffix: '%', scale: 100 },
      { id: 'input-newPartners', param: 'newPartnersPerMonth', valId: 'val-newPartners', suffix: '' }
    ];

    sliderIds.forEach(item => {
      const elem = document.getElementById(item.id);
      if (!elem) return;

      elem.addEventListener('input', (e) => {
        let val = parseFloat(e.target.value);
        if (item.scale) {
          this.params[item.param] = val / item.scale;
        } else {
          this.params[item.param] = val;
        }

        const displayVal = item.scale ? val : val;
        const valElem = document.getElementById(item.valId);
        if (valElem) valElem.textContent = `${displayVal}${item.suffix}`;

        this.saveToLocalStorage();
        this.updateAll();
      });
    });

    // Checkboxes
    const chkMap = [
      { id: 'chk-prep', key: 'prepActive' },
      { id: 'chk-doxypep', key: 'doxyPepActive' },
      { id: 'chk-hpv', key: 'hpvVaccinated' },
      { id: 'chk-hepb', key: 'hepBVaccinated' },
      { id: 'chk-mpox', key: 'mpoxVaccinated' }
    ];

    chkMap.forEach(item => {
      const elem = document.getElementById(item.id);
      if (elem) {
        elem.addEventListener('change', (e) => {
          this.prophylactics[item.key] = e.target.checked;
          this.saveToLocalStorage();
          this.updateAll();
        });
      }
    });

    // Toggle Preview extended network button
    const btnPreview = document.getElementById('btn-toggle-preview');
    if (btnPreview) {
      btnPreview.addEventListener('click', () => {
        this.params.previewExtended = !this.params.previewExtended;
        if (this.params.previewExtended) {
          btnPreview.classList.add('active');
          btnPreview.innerHTML = '<span>✨ Extended N-Degree Preview Active</span>';
        } else {
          btnPreview.classList.remove('active');
          btnPreview.innerHTML = '<span>👁️ Preview Extended Network (N Degrees)</span>';
        }
        this.saveToLocalStorage();
        this.updateAll();
      });
    }

    // Recenter graph button
    document.getElementById('btn-recenter')?.addEventListener('click', () => {
      this.visualizer?.recenter();
    });

    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(pane => {
          pane.style.display = pane.id === targetTab ? 'block' : 'none';
        });

        setTimeout(() => this.chartsManager.resizeAll(), 50);
      });
    });

    // Custom CSV file input
    document.getElementById('csv-file-input')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const customPathogens = this.dataLoader.parseCustomCSV(event.target.result);
          this.riskCalc.setPathogens(customPathogens);
          this.populateSTIRawTable(customPathogens);
          this.updateAll();
        };
        reader.readAsText(file);
      }
    });
  }

  syncUIWithParams() {
    const p = this.params;
    const pro = this.prophylactics;
    
    const setVal = (inputId, valId, val, suffix = '') => {
      const inp = document.getElementById(inputId);
      const txt = document.getElementById(valId);
      if (inp) inp.value = val;
      if (txt) txt.textContent = `${val}${suffix}`;
    };

    const setChk = (chkId, val) => {
      const chk = document.getElementById(chkId);
      if (chk) chk.checked = !!val;
    };

    const selDemo = document.getElementById('select-demographic');
    if (selDemo) selDemo.value = p.demographicProfile;

    const selCurve = document.getElementById('select-exposureCurve');
    if (selCurve) selCurve.value = p.exposureCurveModel;

    const presetSelect = document.getElementById('preset-select');
    if (presetSelect) presetSelect.value = 'me';

    setVal('input-sessionDuration', 'val-sessionDuration', p.sessionDurationMin, ' min');
    setVal('input-ejaculationPct', 'val-ejaculationPct', p.ejaculationPct, '%');

    setVal('input-fluidActsPerMonth', 'val-fluidActsPerMonth', p.fluidActsPerMonth, ' Acts');
    setVal('input-casualActsInitial', 'val-casualActsInitial', p.casualActsInitial, ' Acts');
    setVal('input-coolidgeDecayRate', 'val-coolidgeDecayRate', p.coolidgeDecayRate);
    setVal('input-casualActsFloor', 'val-casualActsFloor', p.casualActsFloor, ' Acts');

    setVal('input-pctAnalSex', 'val-pctAnalSex', p.pctAnalSex, '%');
    setVal('input-pctVaginalSex', 'val-pctVaginalSex', p.pctVaginalSex, '%');
    setVal('input-pctOralSex', 'val-pctOralSex', p.pctOralSex, '%');
    setVal('input-pctSkinContact', 'val-pctSkinContact', p.pctSkinContact, '%');
    setVal('input-egoPartners', 'val-egoPartners', p.egoPartners);
    setVal('input-monogamousPct', 'val-monogamousPct', p.monogamousPct, '%');
    setVal('input-polyculePct', 'val-polyculePct', p.polyculePct, '%');
    setVal('input-slutPct', 'val-slutPct', p.slutPct, '%');
    setVal('input-polyculeSize', 'val-polyculeSize', p.polyculeSize);
    setVal('input-slutAvgPartners', 'val-slutAvgPartners', p.slutAvgPartners);
    setVal('input-sluttinessIndex', 'val-sluttinessIndex', Math.round(p.sluttinessIndex * 100), '%');
    setVal('input-cheatingLikelihood', 'val-cheatingLikelihood', p.cheatingLikelihood, '%');
    setVal('input-nDegrees', 'val-nDegrees', p.nDegrees, ' Steps');
    setVal('input-condomInternal', 'val-condomInternal', Math.round(p.condomUsageInternal * 100), '%');
    setVal('input-condomExternal', 'val-condomExternal', Math.round(p.condomUsageExternal * 100), '%');
    setVal('input-newPartners', 'val-newPartners', p.newPartnersPerMonth);

    setChk('chk-prep', pro.prepActive);
    setChk('chk-doxypep', pro.doxyPepActive);
    setChk('chk-hpv', pro.hpvVaccinated);
    setChk('chk-hepb', pro.hepBVaccinated);
    setChk('chk-mpox', pro.mpoxVaccinated);
  }

  updateAll() {
    // 1. Generate network graph based on parameters
    this.networkGen.updateParams(this.params);
    const graph = this.networkGen.generateGraph();
    const metrics = this.networkGen.calculateNetworkMetrics(graph);

    // 2. Render graph with Sigma.js
    this.visualizer.render(graph);

    // 3. Calculate STI Transmission Risks & Longitudinal Curves
    const riskResults = this.riskCalc.calculateNetworkRisk(metrics, this.params, this.prophylactics);
    const longitudinalData = this.riskCalc.calculateLongitudinalRisk(riskResults, this.params, this.prophylactics);

    // 4. Update ECharts Dashboard
    this.chartsManager.updateNetworkGrowth(metrics);
    this.chartsManager.updateSTIRiskProfile(riskResults);
    this.chartsManager.updateLongitudinalRisk(longitudinalData);
    this.chartsManager.updateTopologyRadar(metrics, this.params);

    // 5. Update Stat Badges & Cards
    document.getElementById('stat-renderedNodes').textContent = metrics.renderedNodes;
    document.getElementById('stat-theoreticalTotal').textContent = metrics.theoreticalTotalNodes.toLocaleString();
    document.getElementById('stat-branching').textContent = metrics.avgBranchingFactor;

    document.getElementById('metric-exposure-count').textContent = `1 Ptr → ${metrics.theoreticalTotalNodes.toLocaleString()}`;
    document.getElementById('metric-sluttiness').textContent = `${metrics.outgroupRatio}% Outgroup`;

    if (riskResults.length > 0) {
      const topSTI = [...riskResults].sort((a, b) => b.monthlyRiskProtectedPct - a.monthlyRiskProtectedPct)[0];
      document.getElementById('metric-top-sti').textContent = `${topSTI.name}: ~${topSTI.monthlyRiskProtectedPct}% (1 Mo)`;
    }
  }

  populateSTIRawTable(pathogens) {
    const tbody = document.getElementById('sti-table-body');
    if (!tbody) return;

    tbody.innerHTML = pathogens.slice(0, 15).map(p => `
      <tr>
        <td><strong>${p.name}</strong></td>
        <td>${p.category}</td>
        <td>${p.curable}</td>
        <td>${p.sfHighRiskGroup || 'General'}</td>
        <td>${p.condomTypicalEfficacy}%</td>
      </tr>
    `).join('');
  }
}

// Bootstrap on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new AppController();
  app.init();
});
