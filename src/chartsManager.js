import * as echarts from 'echarts';

export class ChartsManager {
  constructor() {
    this.networkGrowthChart = null;
    this.stiRiskChart = null;
    this.longitudinalChart = null;
    this.topologyRadarChart = null;
  }

  init(containers) {
    if (containers.growth) {
      this.networkGrowthChart = echarts.init(containers.growth, 'dark');
    }
    if (containers.risk) {
      this.stiRiskChart = echarts.init(containers.risk, 'dark');
    }
    if (containers.longitudinal) {
      this.longitudinalChart = echarts.init(containers.longitudinal, 'dark');
    }
    if (containers.radar) {
      this.topologyRadarChart = echarts.init(containers.radar, 'dark');
    }

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
        formatter: '{b}: <strong>{c} Theoretical Partners</strong>'
      },
      grid: { left: '12%', right: '8%', bottom: '15%', top: '15%' },
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

    this.networkGrowthChart.setOption(option);
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
        formatter: (params) => {
          const name = params[0].name;
          const prot = params.find(p => p.seriesName === 'With Condoms / Protection')?.value || 0;
          const unprot = params.find(p => p.seriesName === 'Unprotected Baseline')?.value || 0;
          return `<strong>${name}</strong><br/>
                  <span style="color:#00f0ff">Protected 1-Mo Exposure:</span> <strong>${prot}%</strong><br/>
                  <span style="color:#ff4757">Unprotected Baseline:</span> <strong>${unprot}%</strong>`;
        }
      },
      legend: {
        data: ['With Condoms / Protection', 'Unprotected Baseline'],
        textStyle: { color: '#cbd5e1' },
        top: 0
      },
      grid: { left: '28%', right: '10%', bottom: '10%', top: '15%' },
      xAxis: {
        type: 'value',
        name: 'Exposure Risk %',
        max: 100,
        axisLine: { lineStyle: { color: '#64748b' } },
        splitLine: { lineStyle: { color: '#33415544' } }
      },
      yAxis: {
        type: 'category',
        data: names,
        axisLabel: { color: '#e2e8f0', fontSize: 11 }
      },
      series: [
        {
          name: 'With Condoms / Protection',
          type: 'bar',
          data: protectedRisk,
          itemStyle: { color: '#00f0ff', borderRadius: [0, 4, 4, 0] }
        },
        {
          name: 'Unprotected Baseline',
          type: 'bar',
          data: unprotectedRisk,
          itemStyle: { color: '#ff475755', borderRadius: [0, 4, 4, 0] }
        }
      ]
    };

    this.stiRiskChart.setOption(option);
  }

  updateLongitudinalRisk(longitudinalData) {
    if (!this.longitudinalChart) return;

    const colors = ['#ff2a85', '#00f0ff', '#00ff87', '#ffa500', '#9d4edd', '#eccc68', '#70a1ff', '#ff6b81'];

    const series = longitudinalData.series.map((item, idx) => ({
      name: item.name,
      type: 'line',
      smooth: true,
      data: item.data,
      lineStyle: { width: 3, color: colors[idx % colors.length] },
      symbolSize: 6
    }));

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          let html = `<strong>Longitudinal Exposure Risk (${params[0].name})</strong><br/>`;
          params.forEach(p => {
            html += `<span style="color:${p.color}">● ${p.seriesName}:</span> <strong>${p.value}%</strong><br/>`;
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
      grid: { left: '10%', right: '8%', bottom: '15%', top: '22%' },
      xAxis: {
        type: 'category',
        data: longitudinalData.labels,
        axisLine: { lineStyle: { color: '#64748b' } }
      },
      yAxis: {
        type: 'value',
        name: 'Cumulative Transmission Risk %',
        max: 100,
        splitLine: { lineStyle: { color: '#33415544' } }
      },
      series: series
    };

    this.longitudinalChart.setOption(option);
  }

  updateTopologyRadar(metrics, params) {
    if (!this.topologyRadarChart) return;

    const option = {
      backgroundColor: 'transparent',
      tooltip: {},
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

    this.topologyRadarChart.setOption(option);
  }
}
