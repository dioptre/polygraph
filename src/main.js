import { STIDataLoader } from './stiData.js';
import { NetworkGenerator } from './networkGenerator.js';
import { GraphVisualizer } from './graphVisualizer.js';
import { STIRiskCalculator } from './riskCalculator.js';
import { ChartsManager } from './chartsManager.js';
import { PartnerOptimizer } from './partnerOptimizer.js';

class AppController {
  constructor() {
    this.dataLoader = new STIDataLoader();
    this.networkGen = new NetworkGenerator();
    this.riskCalc = new STIRiskCalculator();
    this.chartsManager = new ChartsManager();
    this.optimizer = new PartnerOptimizer(this.riskCalc);
    this.visualizer = null;
    this.currentQStep = 1;
    this.lastOptimizationResults = null;

    // Default parameters matching user's baseline setup
    this.defaultParams = {
      demographicProfile: 'hetero_mixed',
      sessionDurationMin: 45,
      ejaculationPct: 47,
      exposureCurveModel: 'linear',

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
      nDegrees: 4,
      partyLoopbackPct: 40,
      condomUsageInternal: 0.0,
      condomUsageExternal: 0.90,
      condomUsageCheating: 0.1,
      newPartnersPerMonth: 0.5,
      previewExtended: true
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
    const baseUrl = (typeof import.meta !== 'undefined' && import.meta && import.meta.env && import.meta.env.BASE_URL)
      ? import.meta.env.BASE_URL
      : './';
    const csvPath = `${baseUrl}sexual_health_sti_model_data.csv`;
    const pathogens = await this.dataLoader.loadData(csvPath);
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
      radar: document.getElementById('chart-radar'),
      optimizer: document.getElementById('chart-optimizer')
    });

    // 4. Attach Event Listeners
    this.bindEvents();
    this.bindQuestionnaireEvents();
    this.bindOptimizerEvents();

    // 5. Check if user is visiting for the first time -> open questionnaire overlay
    if (!localStorage.getItem('polygraph_onboarded')) {
      this.openQuestionnaire();
    }

    // 6. Sync UI & Render
    this.syncUIWithParams();
    this.updateAll();

    requestAnimationFrame(() => {
      this.chartsManager.resizeAll();
    });
    setTimeout(() => this.chartsManager.resizeAll(), 100);
    setTimeout(() => this.chartsManager.resizeAll(), 400);
  }

  loadFromLocalStorage() {
    try {
      const savedState = localStorage.getItem('polygraph_user_profile');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        if (parsed.params) Object.assign(this.params, parsed.params);
        if (parsed.prophylactics) Object.assign(this.prophylactics, parsed.prophylactics);
        
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
      this.presetConfigs.me = {
        ...this.params,
        ...this.prophylactics
      };

      localStorage.setItem('polygraph_user_profile', JSON.stringify({
        params: this.params,
        prophylactics: this.prophylactics
      }));

      localStorage.setItem('polygraph_onboarded', 'true');

      const presetSelect = document.getElementById('preset-select');
      if (presetSelect && presetSelect.value !== 'me') {
        presetSelect.value = 'me';
      }
    } catch (err) {
      console.warn('Failed to save to localStorage:', err);
    }
  }

  openQuestionnaire() {
    const overlay = document.getElementById('questionnaire-overlay');
    if (!overlay) return;

    this.syncQuestionnaireWithParams();
    this.setQStep(1);
    overlay.classList.add('active');
  }

  closeQuestionnaire() {
    const overlay = document.getElementById('questionnaire-overlay');
    if (overlay) overlay.classList.remove('active');
    setTimeout(() => {
      this.chartsManager?.resizeAll();
      this.visualizer?.recenter();
    }, 100);
  }

  setQStep(step) {
    this.currentQStep = Math.max(1, Math.min(5, step));

    document.querySelectorAll('.q-step-pane').forEach(pane => {
      pane.style.display = parseInt(pane.getAttribute('data-step')) === this.currentQStep ? 'block' : 'none';
    });

    document.querySelectorAll('.q-step-dot').forEach(dot => {
      const dotStep = parseInt(dot.getAttribute('data-step'));
      dot.classList.remove('active', 'completed');
      if (dotStep === this.currentQStep) {
        dot.classList.add('active');
      } else if (dotStep < this.currentQStep) {
        dot.classList.add('completed');
      }
    });

    const btnBack = document.getElementById('btn-q-back');
    const btnNext = document.getElementById('btn-q-next');

    if (btnBack) btnBack.style.visibility = this.currentQStep > 1 ? 'visible' : 'hidden';
    if (btnNext) {
      btnNext.textContent = this.currentQStep === 5 ? '✨ Generate Your Sexual Network' : 'Next Chapter →';
    }
  }

  syncQuestionnaireWithParams() {
    const p = this.params;
    const pro = this.prophylactics;

    const setQ = (id, valId, val, suffix = '') => {
      const inp = document.getElementById(id);
      const txt = document.getElementById(valId);
      if (inp) inp.value = val;
      if (txt) txt.textContent = `${val}${suffix}`;
    };

    const selDemo = document.getElementById('q-select-demographic');
    if (selDemo) selDemo.value = p.demographicProfile;

    setQ('q-input-vaginal', 'q-val-vaginal', p.pctVaginalSex, '%');
    setQ('q-input-anal', 'q-val-anal', p.pctAnalSex, '%');
    setQ('q-input-oral', 'q-val-oral', p.pctOralSex, '%');
    setQ('q-input-skin', 'q-val-skin', p.pctSkinContact, '%');

    setQ('q-input-duration', 'q-val-duration', p.sessionDurationMin, ' min');
    setQ('q-input-ejaculation', 'q-val-ejaculation', p.ejaculationPct, '%');

    setQ('q-input-direct', 'q-val-direct', p.egoPartners);
    setQ('q-input-newPartners', 'q-val-newPartners', p.newPartnersPerMonth);
    setQ('q-input-fluidActs', 'q-val-fluidActs', p.fluidActsPerMonth, ' Acts');
    setQ('q-input-casualActs', 'q-val-casualActs', p.casualActsInitial, ' Acts');
    setQ('q-input-coolidgeDecayRate', 'q-val-coolidgeDecayRate', p.coolidgeDecayRate);
    setQ('q-input-casualActsFloor', 'q-val-casualActsFloor', p.casualActsFloor, ' Acts');

    setQ('q-input-mono', 'q-val-mono', p.monogamousPct, '%');
    setQ('q-input-poly', 'q-val-poly', p.polyculePct, '%');
    setQ('q-input-slut', 'q-val-slut', p.slutPct, '%');
    setQ('q-input-sluttiness', 'q-val-sluttiness', Math.round(p.sluttinessIndex * 100), '%');
    setQ('q-input-polyculeSize', 'q-val-polyculeSize', p.polyculeSize);
    setQ('q-input-slutAvgPartners', 'q-val-slutAvgPartners', p.slutAvgPartners);
    setQ('q-input-cheatingLikelihood', 'q-val-cheatingLikelihood', p.cheatingLikelihood, '%');
    setQ('q-input-nDegrees', 'q-val-nDegrees', p.nDegrees, ' Steps');
    setQ('q-input-partyLoopback', 'q-val-partyLoopback', p.partyLoopbackPct !== undefined ? p.partyLoopbackPct : 40, '%');

    setQ('q-input-condomInternal', 'q-val-condomInternal', Math.round(p.condomUsageInternal * 100), '%');
    setQ('q-input-condomExternal', 'q-val-condomExternal', Math.round(p.condomUsageExternal * 100), '%');

    const setChk = (id, val) => {
      const chk = document.getElementById(id);
      if (chk) chk.checked = !!val;
    };

    setChk('q-chk-prep', pro.prepActive);
    setChk('q-chk-doxypep', pro.doxyPepActive);
    setChk('q-chk-hpv', pro.hpvVaccinated);
    setChk('q-chk-hepb', pro.hepBVaccinated);
    setChk('q-chk-mpox', pro.mpoxVaccinated);
  }

  saveQuestionnaireToParams() {
    const p = this.params;
    const pro = this.prophylactics;

    const selDemo = document.getElementById('q-select-demographic');
    if (selDemo) p.demographicProfile = selDemo.value;

    const getVal = (id, scale = 1) => {
      const elem = document.getElementById(id);
      return elem ? parseFloat(elem.value) / scale : 0;
    };

    p.pctVaginalSex = getVal('q-input-vaginal');
    p.pctAnalSex = getVal('q-input-anal');
    p.pctOralSex = getVal('q-input-oral');
    p.pctSkinContact = getVal('q-input-skin');

    p.sessionDurationMin = getVal('q-input-duration');
    p.ejaculationPct = getVal('q-input-ejaculation');

    p.egoPartners = getVal('q-input-direct');
    p.newPartnersPerMonth = getVal('q-input-newPartners');
    p.fluidActsPerMonth = getVal('q-input-fluidActs');
    p.casualActsInitial = getVal('q-input-casualActs');
    p.coolidgeDecayRate = getVal('q-input-coolidgeDecayRate');
    p.casualActsFloor = getVal('q-input-casualActsFloor');

    p.monogamousPct = getVal('q-input-mono');
    p.polyculePct = getVal('q-input-poly');
    p.slutPct = getVal('q-input-slut');
    p.sluttinessIndex = getVal('q-input-sluttiness', 100);
    p.polyculeSize = getVal('q-input-polyculeSize');
    p.slutAvgPartners = getVal('q-input-slutAvgPartners');
    p.cheatingLikelihood = getVal('q-input-cheatingLikelihood');
    p.nDegrees = getVal('q-input-nDegrees');
    p.partyLoopbackPct = getVal('q-input-partyLoopback');

    p.condomUsageInternal = getVal('q-input-condomInternal', 100);
    p.condomUsageExternal = getVal('q-input-condomExternal', 100);

    const getChk = (id) => {
      const elem = document.getElementById(id);
      return elem ? elem.checked : false;
    };

    pro.prepActive = getChk('q-chk-prep');
    pro.doxyPepActive = getChk('q-chk-doxypep');
    pro.hpvVaccinated = getChk('q-chk-hpv');
    pro.hepBVaccinated = getChk('q-chk-hepb');
    pro.mpoxVaccinated = getChk('q-chk-mpox');

    this.saveToLocalStorage();
    this.syncUIWithParams();
    this.updateAll();
  }

  bindQuestionnaireEvents() {
    document.getElementById('btn-open-questionnaire')?.addEventListener('click', () => {
      this.openQuestionnaire();
    });

    document.getElementById('btn-q-skip')?.addEventListener('click', () => {
      this.closeQuestionnaire();
      localStorage.setItem('polygraph_onboarded', 'true');
    });

    document.getElementById('btn-q-back')?.addEventListener('click', () => {
      this.setQStep(this.currentQStep - 1);
    });

    document.getElementById('btn-q-next')?.addEventListener('click', () => {
      if (this.currentQStep < 5) {
        this.setQStep(this.currentQStep + 1);
      } else {
        this.saveQuestionnaireToParams();
        this.closeQuestionnaire();
      }
    });

    // Live update questionnaire badges
    const qSliders = [
      { id: 'q-input-vaginal', valId: 'q-val-vaginal', suffix: '%' },
      { id: 'q-input-anal', valId: 'q-val-anal', suffix: '%' },
      { id: 'q-input-oral', valId: 'q-val-oral', suffix: '%' },
      { id: 'q-input-skin', valId: 'q-val-skin', suffix: '%' },
      { id: 'q-input-duration', valId: 'q-val-duration', suffix: ' min' },
      { id: 'q-input-ejaculation', valId: 'q-val-ejaculation', suffix: '%' },
      { id: 'q-input-direct', valId: 'q-val-direct', suffix: '' },
      { id: 'q-input-newPartners', valId: 'q-val-newPartners', suffix: '' },
      { id: 'q-input-fluidActs', valId: 'q-val-fluidActs', suffix: ' Acts' },
      { id: 'q-input-casualActs', valId: 'q-val-casualActs', suffix: ' Acts' },
      { id: 'q-input-coolidgeDecayRate', valId: 'q-val-coolidgeDecayRate', suffix: '' },
      { id: 'q-input-casualActsFloor', valId: 'q-val-casualActsFloor', suffix: ' Acts' },
      { id: 'q-input-mono', valId: 'q-val-mono', suffix: '%' },
      { id: 'q-input-poly', valId: 'q-val-poly', suffix: '%' },
      { id: 'q-input-slut', valId: 'q-val-slut', suffix: '%' },
      { id: 'q-input-sluttiness', valId: 'q-val-sluttiness', suffix: '%' },
      { id: 'q-input-polyculeSize', valId: 'q-val-polyculeSize', suffix: '' },
      { id: 'q-input-slutAvgPartners', valId: 'q-val-slutAvgPartners', suffix: '' },
      { id: 'q-input-cheatingLikelihood', valId: 'q-val-cheatingLikelihood', suffix: '%' },
      { id: 'q-input-nDegrees', valId: 'q-val-nDegrees', suffix: ' Steps' },
      { id: 'q-input-partyLoopback', valId: 'q-val-partyLoopback', suffix: '%' },
      { id: 'q-input-condomInternal', valId: 'q-val-condomInternal', suffix: '%' },
      { id: 'q-input-condomExternal', valId: 'q-val-condomExternal', suffix: '%' }
    ];

    qSliders.forEach(item => {
      const elem = document.getElementById(item.id);
      if (elem) {
        elem.addEventListener('input', (e) => {
          const valElem = document.getElementById(item.valId);
          if (valElem) valElem.textContent = `${e.target.value}${item.suffix}`;
        });
      }
    });
  }

  applyPreset(presetKey) {
    const config = this.presetConfigs[presetKey];
    if (!config) return;

    const proKeys = ['prepActive', 'doxyPepActive', 'hpvVaccinated', 'hepBVaccinated', 'mpoxVaccinated'];
    proKeys.forEach(k => {
      if (config[k] !== undefined) {
        this.prophylactics[k] = config[k];
      }
    });

    Object.keys(config).forEach(k => {
      if (!proKeys.includes(k)) {
        this.params[k] = config[k];
      }
    });

    if (presetKey !== 'me') {
      this.saveToLocalStorage();
    }

    this.syncUIWithParams();
    this.updateAll();
  }

  bindEvents() {
    document.getElementById('preset-select')?.addEventListener('change', (e) => {
      this.applyPreset(e.target.value);
    });

    document.getElementById('select-demographic')?.addEventListener('change', (e) => {
      this.params.demographicProfile = e.target.value;
      this.saveToLocalStorage();
      this.updateAll();
    });

    document.getElementById('select-exposureCurve')?.addEventListener('change', (e) => {
      this.params.exposureCurveModel = e.target.value;
      this.saveToLocalStorage();
      this.updateAll();
    });

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
      { id: 'input-partyLoopbackPct', param: 'partyLoopbackPct', valId: 'val-partyLoopbackPct', suffix: '%' },
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

    const btnPreview = document.getElementById('btn-toggle-preview');
    if (btnPreview) {
      btnPreview.addEventListener('click', () => {
        this.params.previewExtended = !this.params.previewExtended;
        if (this.params.previewExtended) {
          btnPreview.classList.add('active');
          btnPreview.innerHTML = '<span>✨ Your Extended N-Degree Preview Active</span>';
        } else {
          btnPreview.classList.remove('active');
          btnPreview.innerHTML = '<span>👁️ Preview Your Extended Network (N Degrees)</span>';
        }
        this.saveToLocalStorage();
        this.updateAll();
      });
    }

    document.getElementById('btn-recenter')?.addEventListener('click', () => {
      this.visualizer?.recenter();
    });

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

    // Toggle help-icon popover on click
    document.querySelectorAll('.help-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = icon.classList.contains('active');
        document.querySelectorAll('.help-icon').forEach(i => i.classList.remove('active'));
        if (!isActive) icon.classList.add('active');
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.help-icon').forEach(i => i.classList.remove('active'));
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
    setVal('input-partyLoopbackPct', 'val-partyLoopbackPct', p.partyLoopbackPct !== undefined ? p.partyLoopbackPct : 40, '%');
    setVal('input-condomInternal', 'val-condomInternal', Math.round(p.condomUsageInternal * 100), '%');
    setVal('input-condomExternal', 'val-condomExternal', Math.round(p.condomUsageExternal * 100), '%');
    setVal('input-newPartners', 'val-newPartners', p.newPartnersPerMonth);

    setChk('chk-prep', pro.prepActive);
    setChk('chk-doxypep', pro.doxyPepActive);
    setChk('chk-hpv', pro.hpvVaccinated);
    setChk('chk-hepb', pro.hepBVaccinated);
    setChk('chk-mpox', pro.mpoxVaccinated);

    const btnPreview = document.getElementById('btn-toggle-preview');
    if (btnPreview) {
      if (p.previewExtended) {
        btnPreview.classList.add('active');
        btnPreview.innerHTML = '<span>✨ Extended N-Degree Preview Active</span>';
      } else {
        btnPreview.classList.remove('active');
        btnPreview.innerHTML = '<span>👁️ Preview Extended Network (N Degrees)</span>';
      }
    }
  }

  updateAll() {
    this.networkGen.updateParams(this.params);
    const graph = this.networkGen.generateGraph();
    const metrics = this.networkGen.calculateNetworkMetrics(graph);

    this.visualizer.render(graph);

    const riskResults = this.riskCalc.calculateNetworkRisk(metrics, this.params, this.prophylactics);
    const longitudinalData = this.riskCalc.calculateLongitudinalRisk(riskResults, this.params, this.prophylactics);

    this.chartsManager.updateNetworkGrowth(metrics);
    this.chartsManager.updateSTIRiskProfile(riskResults);
    this.chartsManager.updateLongitudinalProjection(longitudinalData);
    this.chartsManager.updateTopologyRadar(metrics, this.params);
    this.chartsManager.resizeAll();

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

  bindOptimizerEvents() {
    const btnOpenOpt = document.getElementById('btn-open-optimizer');
    const btnCloseOpt = document.getElementById('btn-opt-close');
    const overlay = document.getElementById('optimizer-overlay');
    const btnRunOpt = document.getElementById('btn-run-optimization');
    const btnApplyTop = document.getElementById('btn-opt-apply-top');

    if (btnOpenOpt) {
      btnOpenOpt.addEventListener('click', () => {
        if (overlay) overlay.classList.add('active');
      });
    }

    if (btnCloseOpt) {
      btnCloseOpt.addEventListener('click', () => {
        if (overlay) overlay.classList.remove('active');
        setTimeout(() => this.chartsManager.resizeAll(), 100);
      });
    }

    // Weight & constraint slider live display sync
    ['wPoly', 'wParty', 'wNew', 'wTotal', 'polySize', 'minPoly'].forEach(id => {
      const input = document.getElementById(`opt-input-${id}`);
      const val = document.getElementById(`opt-val-${id}`);
      if (input && val) {
        input.addEventListener('input', (e) => {
          val.textContent = id === 'minPoly' ? `${e.target.value}%` : e.target.value;
        });
      }
    });

    if (btnRunOpt) {
      btnRunOpt.addEventListener('click', () => {
        this.executeMonteCarloOptimization();
      });
    }

    if (btnApplyTop) {
      btnApplyTop.addEventListener('click', () => {
        if (this.lastOptimizationResults && this.lastOptimizationResults.topSolution) {
          this.applyOptimizationSolution(this.lastOptimizationResults.topSolution);
          if (overlay) overlay.classList.remove('active');
        }
      });
    }

    // Stage cards apply buttons
    document.querySelectorAll('.btn-apply-stage').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stageNum = e.target.getAttribute('data-stage');
        if (this.lastOptimizationResults && this.lastOptimizationResults.stages) {
          const stageKey = stageNum === '1' ? 'tier1Polycule' : stageNum === '2' ? 'tier2PartyScene' : 'tier3MaxOrbit';
          const solution = this.lastOptimizationResults.stages[stageKey];
          if (solution) {
            this.applyOptimizationSolution(solution);
            if (overlay) overlay.classList.remove('active');
          }
        }
      });
    });
  }

  executeMonteCarloOptimization() {
    const progressContainer = document.getElementById('opt-progress-container');
    const progressBar = document.getElementById('opt-progress-bar');
    const resultsSection = document.getElementById('opt-results-section');

    if (progressContainer) progressContainer.style.display = 'block';
    if (progressBar) progressBar.style.width = '0%';

    const constraints = {
      maxAntibioticFreqYears: parseFloat(document.getElementById('opt-select-antibioticFreq').value),
      strictZeroHIV: document.getElementById('opt-select-hivPolicy').value === 'strict_zero',
      allowBarebackPolycule: document.getElementById('opt-chk-barebackPoly').checked,
      targetPolyculeSize: parseInt(document.getElementById('opt-input-polySize').value),
      minPolyculePct: parseInt(document.getElementById('opt-input-minPoly').value)
    };

    const preferences = {
      weightPolyculeIntimacy: parseInt(document.getElementById('opt-input-wPoly').value),
      weightPartyScene: parseInt(document.getElementById('opt-input-wParty').value),
      weightNewFlames: parseInt(document.getElementById('opt-input-wNew').value),
      weightTotalActs: parseInt(document.getElementById('opt-input-wTotal').value)
    };

    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      if (progressBar) progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        
        // Run Optimizer Solver
        const results = this.optimizer.optimize(constraints, preferences, this.params, this.prophylactics);
        this.lastOptimizationResults = results;

        // Render Hedonic Risk Frontier Tab Chart
        this.chartsManager.updateHedonicFrontier(results);

        // Populate Stage Cards
        this.displayOptimizationResults(results);

        if (progressContainer) progressContainer.style.display = 'none';
        if (resultsSection) resultsSection.style.display = 'block';
      }
    }, 80);
  }

  displayOptimizationResults(results) {
    const { stages } = results;

    const renderStage = (solution, prefix) => {
      if (!solution) return;
      document.getElementById(`opt-${prefix}-score`).textContent = `Hedonic Score: ${solution.hedonicScore}`;
      document.getElementById(`opt-${prefix}-details`).innerHTML = 
        `• Direct Lovers: <strong>${solution.params.egoPartners}</strong><br/>` +
        `• Polycule Ingroup: <strong>${solution.params.polyculePct}%</strong> (Bareback: ${Math.round((1-solution.params.condomUsageInternal)*100)}%)<br/>` +
        `• Party Loopback: <strong>${solution.params.partyLoopbackPct}%</strong><br/>` +
        `• New Flames/Mo: <strong>${solution.params.newPartnersPerMonth}</strong><br/>` +
        `• Monthly Bacterial Risk: <strong style="color: #10b981;">${solution.maxBacterialRiskPct.toFixed(1)}%</strong>`;
    };

    renderStage(stages.tier1Polycule, 's1');
    renderStage(stages.tier2PartyScene, 's2');
    renderStage(stages.tier3MaxOrbit, 's3');
  }

  applyOptimizationSolution(solution) {
    Object.assign(this.params, solution.params);
    Object.assign(this.prophylactics, solution.prophylactics);
    this.syncUIWithParams();
    this.saveToLocalStorage();
    this.updateAll();
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

document.addEventListener('DOMContentLoaded', () => {
  const app = new AppController();
  app.init();
});
