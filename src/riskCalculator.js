/**
 * Enhanced Mathematical STI Risk & Demographics Epidemiology Engine
 * Features:
 * 1. Empirical Pathogen Population Prevalence (P_prev) across demographic groups.
 * 2. Dual-Engine Partner Activity Model (Fluid-bonded static vs Casual Rat Satiation decay).
 * 3. Session Duration & Exposure Curves (Logarithmic Saturation vs Linear Scaling).
 * 4. Ejaculation / Internal Fluid Release Probability Modifiers.
 * 5. Full Biomedical Prophylaxis Integration (PrEP/U=U, Doxy-PEP, Vaccines) across both 1-Mo and Longitudinal Timelines.
 */
export class STIRiskCalculator {
  constructor(pathogens = []) {
    this.pathogens = pathogens;
  }

  setPathogens(pathogens) {
    this.pathogens = pathogens;
  }

  /**
   * Returns empirical baseline pathogen prevalence in the population (P_prev)
   * based on demographic profile (MSM/TGNC, Hetero/Mixed, WSW, Kink, SF High-Risk).
   */
  getPrevalence(pathogen, demographicProfile) {
    const name = pathogen.name.toLowerCase();
    const isMSM = demographicProfile === 'msm_tgnc' || demographicProfile === 'sf_high_risk' || demographicProfile === 'kink_bdsm';

    if (name.includes('hiv')) {
      return isMSM ? 0.12 : 0.0025; // 12% in MSM vs 0.25% in general heterosexual pop
    }
    if (name.includes('hsv-1')) return 0.50; // 50% adult prevalence
    if (name.includes('hsv-2')) return isMSM ? 0.20 : 0.12; // 12-20% prevalence
    if (name.includes('hpv')) return 0.40; // ~40% sexually active pop
    if (name.includes('chlamydia')) return isMSM ? 0.08 : 0.035; // 3.5-8% prevalence
    if (name.includes('gonorrhoeae')) return isMSM ? 0.05 : 0.015; // 1.5-5% prevalence
    if (name.includes('syphilis')) return isMSM ? 0.03 : 0.003; // 0.3-3% prevalence
    if (name.includes('hepatitis b')) return 0.004; // 0.4%
    if (name.includes('hepatitis c')) return isMSM ? 0.02 : 0.008; // 0.8-2%
    if (name.includes('trichomonas')) return 0.03; // 3%
    if (name.includes('mpox')) return isMSM ? 0.005 : 0.0005; // 0.05-0.5%
    if (name.includes('mycoplasma') || name.includes('mgen')) return 0.025; // 2.5%
    if (name.includes('bacterial vaginosis') || name.includes('bv')) return 0.25; // 25%
    if (name.includes('candidiasis')) return 0.20; // 20%
    
    return 0.01; // 1% default baseline for rare pathogens
  }

  /**
   * Helper to get biomedical intervention risk multiplier
   */
  getBiomedicalMultiplier(pathogen, prophylactics = {}) {
    const {
      prepActive = false,
      doxyPepActive = false,
      hpvVaccinated = false,
      hepBVaccinated = false,
      mpoxVaccinated = false
    } = prophylactics;

    const name = pathogen.name.toLowerCase();
    const category = (pathogen.category || '').toLowerCase();

    if (name.includes('hiv') && prepActive) {
      return 0.001; // ~99.9% reduction with PrEP or U=U
    }
    if (category.includes('bacteria') && doxyPepActive) {
      if (name.includes('chlamydia') || name.includes('syphilis')) {
        return 0.13; // ~87% reduction
      } else if (name.includes('gonorrhoeae')) {
        return 0.45; // ~55% reduction
      }
      return 0.30;
    }
    if (name.includes('hpv') && hpvVaccinated) {
      return 0.05; // Gardasil-9 protection
    }
    if (name.includes('hepatitis b') && hepBVaccinated) {
      return 0.01;
    }
    if (name.includes('mpox') && mpoxVaccinated) {
      return 0.15;
    }

    return 1.0;
  }

  /**
   * Calculates network exposure risk per STI pathogen incorporating demographic profiles,
   * act modalities, session duration, ejaculation %, pathogen prevalence, and network depth.
   */
  calculateNetworkRisk(networkMetrics, params, prophylactics = {}) {
    if (!this.pathogens || this.pathogens.length === 0) return [];

    const {
      demographicProfile = 'hetero_mixed',
      pctAnalSex = 0,
      pctVaginalSex = 100,
      pctOralSex = 100,
      pctSkinContact = 100,

      sessionDurationMin = 45,
      ejaculationPct = 47,
      exposureCurveModel = 'linear',
      
      fluidActsPerMonth = 50,
      casualActsInitial = 1,
      condomUsageInternal = 0.0,
      condomUsageExternal = 0.90,
      nDegrees = 3,
      polyculePct = 100,
      slutPct = 50,
      monogamousPct = 32,
      testingCadenceMonths = 3,
      financialAccessIndex = 85
    } = params;

    // Testing Cadence Modifier:
    // Frequent screening interrupts transmission loops by diagnosing asymptomatic infections early
    let mTesting = 1.0;
    const cad = Number(testingCadenceMonths);
    if (cad === 1) mTesting = 0.30;       // Monthly testing = 70% risk reduction
    else if (cad === 3) mTesting = 0.55;  // Quarterly testing = 45% risk reduction
    else if (cad === 6) mTesting = 0.75;  // 6-month testing = 25% risk reduction
    else if (cad === 12) mTesting = 0.90; // Annual testing = 10% risk reduction
    else mTesting = 1.0;                  // Symptom-only / Never

    // Financial Access Modifier:
    // High financial security enables frictionless access to care, immediate treatment, Doxy-PEP, PrEP & STI panels
    const mFinancial = 1.0 - (0.25 * (financialAccessIndex / 100));

    const degreeCounts = networkMetrics.theoreticalCountByDegree || [1, 2, 6, 20];

    // Normalize sex act weights
    const weightSum = (pctAnalSex + pctVaginalSex + pctOralSex + pctSkinContact) || 100;
    const wAnal = pctAnalSex / weightSum;
    const wVag = pctVaginalSex / weightSum;
    const wOral = pctOralSex / weightSum;
    const wSkin = pctSkinContact / weightSum;

    // Relative weights of fluid-bonded vs casual partners
    const partnerSum = (polyculePct + monogamousPct + slutPct) || 100;
    const fluidRatio = (polyculePct + monogamousPct) / partnerSum;
    const casualRatio = slutPct / partnerSum;

    // Duration Multiplier (Baseline session = 20 min)
    let mDuration = 1.0;
    if (exposureCurveModel === 'logarithmic') {
      mDuration = 1.0 + (0.5 * Math.log(1 + (sessionDurationMin / 20)));
    } else {
      mDuration = 0.5 + (0.5 * (sessionDurationMin / 20));
    }

    return this.pathogens.map(pathogen => {
      const prevalence = this.getPrevalence(pathogen, demographicProfile);

      let pAnal = (pathogen.receptiveAnal + pathogen.insertiveAnal) / 2;
      let pVag = (pathogen.receptiveVaginal + pathogen.insertiveVaginal) / 2;
      let pOral = pathogen.oral || 0.5;
      let pSkin = pathogen.skinContact || 0.5;

      if (demographicProfile === 'wsw_female') {
        pAnal = 0;
        // WSW transmission incorporates mucosal fluid exchange, menstrual blood contact, and unbarriered sex toy sharing
        pVag = pathogen.receptiveVaginal * 0.50;
        pOral = (pathogen.oral || 0.005) * 1.5;
        pSkin = (pathogen.skinContact || 0.001) * 2.0;
      } else if (demographicProfile === 'msm_tgnc') {
        pAnal *= 1.35;
        pOral *= 1.2;
      } else if (demographicProfile === 'kink_bdsm') {
        if (pathogen.category.includes('Retrovirus') || pathogen.category.includes('Flavivirus') || pathogen.name.includes('Syphilis') || pathogen.name.includes('Mpox')) {
          pSkin *= 1.7;
          pAnal *= 1.4;
        }
      }

      const isFluidPathogen = pathogen.category.includes('Retrovirus') ||
                              pathogen.category.includes('Bacteria') ||
                              pathogen.category.includes('Diplococcus') ||
                              pathogen.category.includes('Hepadnavirus') ||
                              pathogen.category.includes('Protozoan');

      let mFluid = 1.0;
      if (isFluidPathogen) {
        mFluid = ((ejaculationPct / 100) * 1.0) + (((100 - ejaculationPct) / 100) * 0.30);
      }

      const baselineWeightedActRiskPct = ((wAnal * pAnal) + (wVag * pVag) + (wOral * pOral) + (wSkin * pSkin)) * mDuration * mFluid;

      let effectiveActRiskUnprotected = Math.max(0.000001, baselineWeightedActRiskPct) / 100;
      const condomEfficacy = (pathogen.condomTypicalEfficacy || 85) / 100;
      let effectiveActRiskProtected = effectiveActRiskUnprotected * (1 - condomEfficacy);

      // Apply Biomedical Multipliers (PrEP, Doxy-PEP, Vaccines)
      const biomedicalMultiplier = this.getBiomedicalMultiplier(pathogen, prophylactics);
      effectiveActRiskUnprotected *= (biomedicalMultiplier * mTesting * mFinancial);
      effectiveActRiskProtected *= (biomedicalMultiplier * mTesting * mFinancial);

      const pActFluid = (effectiveActRiskProtected * condomUsageInternal) + (effectiveActRiskUnprotected * (1 - condomUsageInternal));
      const pActCasual = (effectiveActRiskProtected * condomUsageExternal) + (effectiveActRiskUnprotected * (1 - condomUsageExternal));

      const rFluidPartnerIfInfected = 1 - Math.pow(1 - pActFluid, fluidActsPerMonth);
      const rCasualPartnerIfInfected = 1 - Math.pow(1 - pActCasual, casualActsInitial);

      const outgroupFactor = Math.min(1.0, Math.max(0.0, casualRatio + (fluidRatio * (params.sluttinessIndex !== undefined ? params.sluttinessIndex : 0.86)) + ((params.cheatingLikelihood || 0) / 100)));
      
      // Outgroup Network Prevalence Bridge:
      // Open multi-partner networks bridge into broader population subgroups (including bisexual/pansexual partners & MSM with 12% HIV prevalence)
      const msmBridgePrevalence = pathogen.name.toLowerCase().includes('hiv') ? 0.12 : prevalence;
      const effectiveCasualPrevalence = prevalence + ((msmBridgePrevalence - prevalence) * (outgroupFactor * 0.35));
      const effectiveFluidPrevalence = effectiveCasualPrevalence * Math.max(0.05, outgroupFactor);

      const directFluidTransmissionProb = rFluidPartnerIfInfected * effectiveFluidPrevalence;
      const directCasualTransmissionProb = rCasualPartnerIfInfected * effectiveCasualPrevalence;

      const compositeDirectRisk = (fluidRatio * directFluidTransmissionProb) + (casualRatio * directCasualTransmissionProb);
      const unprotectedDirectTransmissionProb = (1 - Math.pow(1 - effectiveActRiskUnprotected, (fluidRatio * fluidActsPerMonth) + (casualRatio * casualActsInitial))) * prevalence;

      let overallSafetyProduct = 1.0;
      let unprotectedSafetyProduct = 1.0;

      for (let d = 1; d <= Math.min(nDegrees, degreeCounts.length - 1); d++) {
        const countAtDegree = degreeCounts[d] || 0;
        const attenuation = Math.pow(0.5, d - 1);

        const protectedHopProb = compositeDirectRisk * attenuation;
        const unprotectedHopProb = unprotectedDirectTransmissionProb * attenuation;

        overallSafetyProduct *= Math.pow(1 - protectedHopProb, countAtDegree);
        unprotectedSafetyProduct *= Math.pow(1 - unprotectedHopProb, countAtDegree);
      }

      const totalProtectedRiskPct = Math.min(99.9, (1 - overallSafetyProduct) * 100);
      const totalUnprotectedRiskPct = Math.min(99.9, (1 - unprotectedSafetyProduct) * 100);

      const formatPrecision = (val) => {
        if (val <= 0) return 0;
        if (val < 0.01) return parseFloat(val.toFixed(3));
        return parseFloat(val.toFixed(2));
      };

      return {
        id: pathogen.id,
        name: pathogen.name,
        category: pathogen.category,
        curable: pathogen.curable,
        sfHighRiskGroup: pathogen.sfHighRiskGroup,
        prevalencePct: parseFloat((prevalence * 100).toFixed(2)),
        baselineActRiskPct: parseFloat(baselineWeightedActRiskPct.toFixed(5)),
        monthlyRiskProtectedPct: formatPrecision(totalProtectedRiskPct),
        monthlyRiskUnprotectedPct: formatPrecision(totalUnprotectedRiskPct),
        primaryTreatment: pathogen.primaryTreatment
      };
    });
  }

  /**
   * Calculates longitudinal risk projections over time (1 mo to 10 yrs)
   * incorporating biomedical prophylaxis (PrEP, Doxy-PEP, Vaccines)
   */
  calculateLongitudinalRisk(riskResults, params = {}, prophylactics = {}) {
    const {
      newPartnersPerMonth = 0.5,
      sluttinessIndex = 0.86,
      fluidActsPerMonth = 50,
      casualActsInitial = 1,
      casualActsFloor = 10,
      coolidgeDecayRate = 0.2,
      condomUsageInternal = 0.0,
      condomUsageExternal = 0.90,
      sessionDurationMin = 45,
      ejaculationPct = 47,
      exposureCurveModel = 'linear',
      demographicProfile = 'hetero_mixed'
    } = params;

    const timepoints = [
      { label: '1 Month', months: 1 },
      { label: '6 Months', months: 6 },
      { label: '1 Year', months: 12 },
      { label: '3 Years', months: 36 },
      { label: '5 Years', months: 60 },
      { label: '10 Years', months: 120 }
    ];

    const keyPathogens = riskResults.slice(0, 8);
    const lambda = Math.max(0.01, coolidgeDecayRate);

    let mDuration = 1.0;
    if (exposureCurveModel === 'logarithmic') {
      mDuration = 1.0 + (0.5 * Math.log(1 + (sessionDurationMin / 20)));
    } else {
      mDuration = 0.5 + (0.5 * (sessionDurationMin / 20));
    }

    const seriesData = keyPathogens.map(pathogen => {
      const pResult = riskResults.find(r => r.id === pathogen.id) || pathogen;
      const prevalence = (pResult.prevalencePct || 1.0) / 100;
      const biomedicalMultiplier = this.getBiomedicalMultiplier(pathogen, prophylactics);

      let mFluid = 1.0;
      const isFluidPathogen = pathogen.category.includes('Retrovirus') ||
                              pathogen.category.includes('Bacteria') ||
                              pathogen.category.includes('Diplococcus') ||
                              pathogen.category.includes('Hepadnavirus') ||
                              pathogen.category.includes('Protozoan');
      if (isFluidPathogen) {
        mFluid = ((ejaculationPct / 100) * 1.0) + (((100 - ejaculationPct) / 100) * 0.30);
      }

      const rawActRisk = ((pathogen.baselineActRiskPct || 0.05) / 100) * mDuration * mFluid * biomedicalMultiplier;
      const condomEfficacy = (pathogen.condomTypicalEfficacy || 85) / 100;
      
      const pActUnprotected = rawActRisk;
      const pActProtected = rawActRisk * (1 - condomEfficacy);

      const pActFluid = (pActProtected * condomUsageInternal) + (pActUnprotected * (1 - condomUsageInternal));
      const pActCasual = (pActProtected * condomUsageExternal) + (pActUnprotected * (1 - condomUsageExternal));

      const timelineValues = timepoints.map(tp => {
        const T = tp.months;

        // 1. Fluid-bonded cumulative acts over T months
        const totalFluidActs = fluidActsPerMonth * T;
        const pFluidInfected = (1 - Math.pow(1 - pActFluid, totalFluidActs)) * prevalence;
        const safetyFluid = 1 - pFluidInfected;

        // 2. Casual cumulative acts over T months with Coolidge Satiation Decay
        const X = newPartnersPerMonth * (1 + sluttinessIndex);
        const totalCasualActs = (X * casualActsFloor * T) + 
                                ((X * (casualActsInitial - casualActsFloor) / lambda) * (1 - Math.exp(-lambda * T)));
        const pCasualInfected = (1 - Math.pow(1 - pActCasual, totalCasualActs)) * prevalence;
        const safetyCasual = 1 - pCasualInfected;

        const combinedSafety = safetyFluid * safetyCasual;
        const cumulativeProb = 1 - combinedSafety;

        return parseFloat((Math.min(0.999, cumulativeProb) * 100).toFixed(2));
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
