import * as echarts from 'echarts';

export class ChartsManager {
  constructor() {
    this.networkGrowthChart = null;
    this.stiRiskChart = null;
    this.longitudinalChart = null;
    this.topologyRadarChart = null;
    this.resizeObservers = [];
  }

  init(containers) {
    const initChartWithObserver = (container) => {
      if (!container) return null;
      const chart = echarts.init(container, 'dark');

      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(() => {
          if (container.clientWidth > 0 && container.clientHeight > 0) {
            chart.resize();
          }
        });
        ro.observe(container);
        this.resizeObservers.push(ro);
      }
      return chart;
    };

    if (containers.growth) this.networkGrowthChart = initChartWithObserver(containers.growth);
    if (containers.risk) this.stiRiskChart = initChartWithObserver(containers.risk);
    if (containers.longitudinal) this.longitudinalChart = initChartWithObserver(containers.longitudinal);
    if (containers.radar) this.topologyRadarChart = initChartWithObserver(containers.radar);

    window.addEventListener('resize', () => {
      this.resizeAll();
    });
  }

  resizeAll() {
    this.networkGrowthChart?.resize();
    this.stiRiskChart?.resize();
    this.longitudinalChart?.resize();
    this.topologyRadarChart?.resize();
  }

  updateNetworkGrowth(metrics) {
    if (!this.networkGrowthChart) return;

    const degrees = metrics.theoreticalCountByDegree.map((_, i) => `Degree ${i}`);
    const counts = metrics.theoreticalCountByDegree;

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        confine: true,
        extraCssText: 'z-index: 99999 !important; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.8);',
        formatter: '{b}: <strong>{c} Theoretical Partners</strong>'
      },
      grid: { left: '8%', right: '8%', bottom: '15%', top: '20%', containLabel: true },
      xAxis: {
        type: 'category',
        data: degrees,
        axisLine: { lineStyle: { color: '#64748b' } },
        axisLabel: { color: '#cbd5e1' }
      },
      yAxis: {
        type: 'log',
        logBase: 10,
        name: 'Nodes (Log Scale)',
        axisLine: { lineStyle: { color: '#64748b' } },
        splitLine: { lineStyle: { color: '#33415544' } },
        axisLabel: { color: '#cbd5e1' }
      },
      series: [
        {
          data: counts,
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#ff2a85' },
              { offset: 1, color: '#8a2be2' }
            ]),
            borderRadius: [6, 6, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
            color: '#00f0ff',
            formatter: '{c}'
          }
        }
      ]
    };

    this.networkGrowthChart.setOption(option, true);
    this.networkGrowthChart.resize();
  }

  updateSTIRiskProfile(riskResults) {
    if (!this.stiRiskChart) return;

    // Show top 10 STIs sorted by protected risk
    const sorted = [...riskResults].sort((a, b) => b.monthlyRiskProtectedPct - a.monthlyRiskProtectedPct).slice(0, 10);

    const names = sorted.map(s => s.name).reverse();
    const protectedRisk = sorted.map(s => s.monthlyRiskProtectedPct).reverse();
    const unprotectedRisk = sorted.map(s => s.monthlyRiskUnprotectedPct).reverse();

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        confine: true,
        extraCssText: 'z-index: 99999 !important; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 8px;',
        formatter: (params) => {
          let html = `<strong>${params[0].name}</strong><br/>`;
          params.forEach(p => {
            html += `${p.marker} ${p.seriesName}: <strong>${p.value.toFixed(2)}%</strong><br/>`;
          });
          return html;
        }
      },
      legend: {
        data: ['Protected Risk (With Condoms)', 'Unprotected Baseline Risk'],
        textStyle: { color: '#cbd5e1' },
        top: 0
      },
      grid: { left: '3%', right: '8%', bottom: '5%', top: '15%', containLabel: true },
      xAxis: {
        type: 'value',
        name: '1-Mo Exposure Risk (%)',
        max: 100,
        axisLine: { lineStyle: { color: '#64748b' } },
        splitLine: { lineStyle: { color: '#33415544' } },
        axisLabel: { color: '#cbd5e1' }
      },
      yAxis: {
        type: 'category',
        data: names,
        axisLine: { lineStyle: { color: '#64748b' } },
        axisLabel: { color: '#cbd5e1', fontSize: 11 }
      },
      series: [
        {
          name: 'Protected Risk (With Condoms)',
          type: 'bar',
          data: protectedRisk,
          itemStyle: { color: '#00f0ff', borderRadius: [0, 4, 4, 0] },
          label: {
            show: true,
            position: 'right',
            color: '#00f0ff',
            formatter: '{c}%'
          }
        },
        {
          name: 'Unprotected Baseline Risk',
          type: 'bar',
          data: unprotectedRisk,
          itemStyle: { color: '#ff2a8566', borderRadius: [0, 4, 4, 0] }
        }
      ]
    };

    this.stiRiskChart.setOption(option, true);
    this.stiRiskChart.resize();
  }

  updateLongitudinalProjection(longitudinalData) {
    if (!this.longitudinalChart) return;

    const series = longitudinalData.series.map(s => ({
      name: s.name,
      type: 'line',
      smooth: true,
      data: s.data,
      lineStyle: { width: s.name.includes('HIV') ? 3 : 2 }
    }));

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        confine: true,
        extraCssText: 'z-index: 99999 !important; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 8px;',
        formatter: (params) => {
          let html = `<strong>${params[0].name}</strong><br/>`;
          params.forEach(p => {
            html += `${p.marker} ${p.seriesName}: <strong>${p.value.toFixed(2)}%</strong><br/>`;
          });
          return html;
        }
      },
      legend: {
        data: longitudinalData.series.map(s => s.name),
        textStyle: { color: '#cbd5e1', fontSize: 10 },
        type: 'scroll',
        top: 0
      },
      grid: { left: '5%', right: '8%', bottom: '15%', top: '28%', containLabel: true },
      xAxis: {
        type: 'category',
        data: longitudinalData.labels,
        axisLine: { lineStyle: { color: '#64748b' } }
      },
      yAxis: {
        type: 'value',
        name: 'Cumulative Risk %',
        max: 100,
        splitLine: { lineStyle: { color: '#33415544' } }
      },
      series: series
    };

    this.longitudinalChart.setOption(option, true);
    this.longitudinalChart.resize();
  }

  updateTopologyRadar(metrics, params) {
    if (!this.topologyRadarChart) return;

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        confine: true,
        extraCssText: 'z-index: 99999 !important; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(255, 42, 133, 0.3); border-radius: 8px;'
      },
      radar: {
        indicator: [
          { name: 'Sluttiness Index', max: 100 },
          { name: 'Ingroup Density', max: 100 },
          { name: 'External Condom Barrier %', max: 100 },
          { name: 'Cheating Risk Vulnerability', max: 100 },
          { name: 'Network Reach Depth', max: 100 }
        ],
        splitArea: {
          areaStyle: {
            color: ['#1e293b55', '#0f172a88']
          }
        },
        axisLine: { lineStyle: { color: '#475569' } },
        splitLine: { lineStyle: { color: '#334155' } }
      },
      series: [
        {
          name: 'Network Topology Profile',
          type: 'radar',
          data: [
            {
              value: [
                Math.round(params.sluttinessIndex * 100),
                Math.round((1 - params.sluttinessIndex) * 100),
                Math.round(params.condomUsageExternal * 100),
                Math.round(params.cheatingLikelihood),
                Math.min(100, params.nDegrees * 20)
              ],
              name: 'Current Network State',
              itemStyle: { color: '#ff2a85' },
              areaStyle: { color: '#ff2a8533' }
            }
          ]
        }
      ]
    };

    this.topologyRadarChart.setOption(option, true);
    this.topologyRadarChart.resize();
  }
}
