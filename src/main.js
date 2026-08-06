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

    this.params = {
      egoPartners: 3,
      monogamousPct: 25,
      polyculePct: 50,
      slutPct: 25,
      polyculeSize: 4,
      slutAvgPartners: 17,
      sluttinessIndex: 0.6,
      cheatingLikelihood: 20,
      nDegrees: 3,
      condomUsageInternal: 0.8,
      condomUsageExternal: 0.3,
      condomUsageCheating: 0.1,
      newPartnersPerMonth: 0.5,
      previewExtended: false
    };

    this.prophylactics = {
      prepActive: false,
      doxyPepActive: false,
      hpvVaccinated: false,
      hepBVaccinated: false,
      mpoxVaccinated: false
    };

    this.presetConfigs = {
      poly_slut_17: {
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
        previewExtended: true
      },
      closed_polycule: {
        egoPartners: 3,
        monogamousPct: 0,
        polyculePct: 100,
        slutPct: 0,
        polyculeSize: 5,
        slutAvgPartners: 5,
        sluttinessIndex: 0.05, // 95% ingrouping
        cheatingLikelihood: 5,
        condomUsageInternal: 0.9,
        condomUsageExternal: 0.5,
        previewExtended: false
      },
      monogamous_cheat: {
        egoPartners: 1,
        monogamousPct: 100,
        polyculePct: 0,
        slutPct: 0,
        polyculeSize: 2,
        slutAvgPartners: 10,
        sluttinessIndex: 0.1,
        cheatingLikelihood: 35, // 35% cheating risk
        condomUsageInternal: 0.1,
        condomUsageExternal: 0.2,
        previewExtended: false
      },
      high_sluttiness: {
        egoPartners: 6,
        monogamousPct: 10,
        polyculePct: 20,
        slutPct: 70,
        polyculeSize: 4,
        slutAvgPartners: 22,
        sluttinessIndex: 0.9, // 90% outgroup
        cheatingLikelihood: 25,
        condomUsageInternal: 0.4,
        condomUsageExternal: 0.2,
        previewExtended: true
      },
      party_scene: {
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
        previewExtended: true
      }
    };
  }

  async init() {
    console.log('Initializing PolyGraph Application...');
    
    // 1. Load STI dataset
    const pathogens = await this.dataLoader.loadData('./sexual_health_sti_model_data.csv');
    this.riskCalc.setPathogens(pathogens);
    this.populateSTIRawTable(pathogens);

    // 2. Initialize Visualizer & Charts
    const sigmaContainer = document.getElementById('sigma-container');
    const tooltip = document.getElementById('graph-tooltip');
    this.visualizer = new GraphVisualizer(sigmaContainer, tooltip);

    this.chartsManager.init({
      growth: document.getElementById('chart-growth'),
      risk: document.getElementById('chart-sti'),
      longitudinal: document.getElementById('chart-timeline'),
      radar: document.getElementById('chart-radar')
    });

    // 3. Attach Event Listeners
    this.bindEvents();

    // 4. Initial Render
    this.updateAll();
  }

  bindEvents() {
    // Preset dropdown selector
    document.getElementById('preset-select')?.addEventListener('change', (e) => {
      const presetKey = e.target.value;
      if (this.presetConfigs[presetKey]) {
        Object.assign(this.params, this.presetConfigs[presetKey]);
        this.syncUIWithParams();
        this.updateAll();
      }
    });

    // Sliders input events
    const sliderIds = [
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

        // Trigger chart resize on tab reveal
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
    
    const setVal = (inputId, valId, val, suffix = '') => {
      const inp = document.getElementById(inputId);
      const txt = document.getElementById(valId);
      if (inp) inp.value = val;
      if (txt) txt.textContent = `${val}${suffix}`;
    };

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
    const longitudinalData = this.riskCalc.calculateLongitudinalRisk(riskResults, this.params.newPartnersPerMonth, this.params.sluttinessIndex);

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
        <td>${p.receptiveVaginal || p.receptiveAnal || 5}%</td>
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
