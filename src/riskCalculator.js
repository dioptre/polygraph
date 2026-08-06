/**
 * Mathematical STI Risk & Epidemiology Engine
 * Calculates transmission probabilities across network depth and longitudinal timelines
 */
export class STIRiskCalculator {
  constructor(pathogens = []) {
    this.pathogens = pathogens;
  }

  setPathogens(pathogens) {
    this.pathogens = pathogens;
  }

  /**
   * Calculates network exposure risk per STI pathogen
   */
  calculateNetworkRisk(networkMetrics, params, prophylactics = {}) {
    if (!this.pathogens || this.pathogens.length === 0) return [];

    const {
      condomUsageInternal = 0.8,
      condomUsageExternal = 0.3,
      condomUsageCheating = 0.1,
      actsPerPartnerMonth = 8,
      nDegrees = 3,
      sluttinessIndex = 0.6
    } = params;

    const {
      prepActive = false,
      doxyPepActive = false,
      hpvVaccinated = false,
      hepBVaccinated = false,
      mpoxVaccinated = false
    } = prophylactics;

    // Weighted average condom protection across internal & external connections
    const avgCondomUsage = (condomUsageInternal * (1 - sluttinessIndex)) + (condomUsageExternal * sluttinessIndex);

    const degreeCounts = networkMetrics.theoreticalCountByDegree || [1, 3, 9, 27];

    return this.pathogens.map(pathogen => {
      // 1. Determine baseline per-act transmission rate (%)
      let baselineActRiskPct = Math.max(
        pathogen.receptiveVaginal || 0,
        pathogen.insertiveVaginal || 0,
        pathogen.receptiveAnal || 0,
        pathogen.insertiveAnal || 0,
        pathogen.skinContact || 0
      );

      if (baselineActRiskPct <= 0) baselineActRiskPct = 2.0;

      // 2. Apply Prophylactic Efficacies
      let effectiveActRiskUnprotected = baselineActRiskPct / 100;
      let effectiveActRiskProtected = (pathogen.riskCondomTypical || (baselineActRiskPct * 0.2)) / 100;

      // Check Biomedical Interventions
      let biomedicalMultiplier = 1.0;

      if (pathogen.name.includes('HIV') && prepActive) {
        biomedicalMultiplier = 0.001; // ~99.9% reduction
      } else if (pathogen.category.includes('Bacteria') && doxyPepActive) {
        if (pathogen.name.includes('Chlamydia') || pathogen.name.includes('Syphilis')) {
          biomedicalMultiplier = 0.13; // ~87% reduction
        } else if (pathogen.name.includes('gonorrhoeae')) {
          biomedicalMultiplier = 0.45; // ~55% reduction
        } else {
          biomedicalMultiplier = 0.30;
        }
      } else if (pathogen.name.includes('HPV') && hpvVaccinated) {
        biomedicalMultiplier = 0.05; // vaccine protected
      } else if (pathogen.name.includes('Hepatitis B') && hepBVaccinated) {
        biomedicalMultiplier = 0.01;
      } else if (pathogen.name.includes('Mpox') && mpoxVaccinated) {
        biomedicalMultiplier = 0.15;
      }

      effectiveActRiskUnprotected *= biomedicalMultiplier;
      effectiveActRiskProtected *= biomedicalMultiplier;

      // 3. Weighted per-act risk given condom usage
      const weightedActRisk = (effectiveActRiskProtected * avgCondomUsage) + 
                             (effectiveActRiskUnprotected * (1 - avgCondomUsage));

      // 4. Calculate Risk Hops across N degrees
      // Transmission probability for a direct partner over 1 month of sexual activity
      const directPartner1MoRisk = 1 - Math.pow(1 - weightedActRisk, actsPerPartnerMonth);

      // Total non-transmission across network degrees
      let overallSafetyProduct = 1.0;

      for (let d = 1; d <= Math.min(nDegrees, degreeCounts.length - 1); d++) {
        const countAtDegree = degreeCounts[d] || 0;
        // Network attenuation per hop (distance decay)
        const attenuation = Math.pow(0.5, d - 1);
        const hopInfectionProb = directPartner1MoRisk * attenuation;

        // Safety product for degree d nodes
        const degreeSafety = Math.pow(1 - hopInfectionProb, countAtDegree * 0.4);
        overallSafetyProduct *= degreeSafety;
      }

      const total1MonthRiskPct = Math.min(99.9, (1 - overallSafetyProduct) * 100);

      // Unprotected baseline (without condoms or biomedical prep) for comparison
      const unprotectedDirect1MoRisk = 1 - Math.pow(1 - (baselineActRiskPct / 100), actsPerPartnerMonth);
      let unprotectedSafetyProduct = 1.0;
      for (let d = 1; d <= Math.min(nDegrees, degreeCounts.length - 1); d++) {
        const countAtDegree = degreeCounts[d] || 0;
        const hopProb = unprotectedDirect1MoRisk * Math.pow(0.5, d - 1);
        unprotectedSafetyProduct *= Math.pow(1 - hopProb, countAtDegree * 0.4);
      }
      const totalUnprotectedRiskPct = Math.min(99.9, (1 - unprotectedSafetyProduct) * 100);

      return {
        id: pathogen.id,
        name: pathogen.name,
        category: pathogen.category,
        curable: pathogen.curable,
        baselineActRiskPct,
        monthlyRiskProtectedPct: parseFloat(total1MonthRiskPct.toFixed(2)),
        monthlyRiskUnprotectedPct: parseFloat(totalUnprotectedRiskPct.toFixed(2)),
        primaryTreatment: pathogen.primaryTreatment
      };
    });
  }

  /**
   * Calculates longitudinal risk projections over time (1 mo, 1 yr, 5 yr, 10 yr)
   * incorporating new partner acquisition rates and compounding network exposure
   */
  calculateLongitudinalRisk(riskResults, newPartnersPerMonth = 0.5, sluttinessIndex = 0.6) {
    const timepoints = [
      { label: '1 Month', months: 1 },
      { label: '6 Months', months: 6 },
      { label: '1 Year', months: 12 },
      { label: '3 Years', months: 36 },
      { label: '5 Years', months: 60 },
      { label: '10 Years', months: 120 }
    ];

    // Select key benchmark STIs for visual timeline comparison
    const keyPathogens = riskResults.slice(0, 8);

    const seriesData = keyPathogens.map(pathogen => {
      const p1Mo = pathogen.monthlyRiskProtectedPct / 100;

      const timelineValues = timepoints.map(tp => {
        // Growth factor: compounding partner turnover
        const partnerGrowth = 1 + (newPartnersPerMonth * tp.months * (1 + sluttinessIndex));
        const cumulativeProb = 1 - Math.pow(1 - p1Mo, partnerGrowth);
        return parseFloat((cumulativeProb * 100).toFixed(1));
      });

      return {
        name: pathogen.name,
        data: timelineValues
      };
    });

    return {
      labels: timepoints.map(t => t.label),
      series: seriesData
    };
  }
}
