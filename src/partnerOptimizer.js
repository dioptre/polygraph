/**
 * Primary Partner Risk Budget & Hedonic Intimacy Optimizer Engine
 * Combines Monte Carlo Risk Frontier Sampling, Constrained Grid Search, and Stage Tier Escalation.
 */
export class PartnerOptimizer {
  constructor(riskCalculator) {
    this.riskCalc = riskCalculator;
  }

  /**
   * Calculates Hedonic Utility Score for a candidate network parameter set.
   */
  calculateHedonicScore(params, weights) {
    const {
      weightPolyculeIntimacy = 10,
      weightPartyScene = 7,
      weightNewFlames = 5,
      weightTotalActs = 3,
      polyculeBarebackBonus = 15
    } = weights;

    const polyculeActs = params.fluidActsPerMonth * (params.polyculePct / 100);
    const casualActs = (params.casualActsInitial + params.casualActsFloor) / 2;
    const totalActs = polyculeActs + casualActs;

    // Bareback polycule intimacy bonus (if internal condom usage is low)
    const barebackMultiplier = (1 - params.condomUsageInternal);

    // Party scene loopback satisfaction
    const partyScore = (params.partyLoopbackPct / 100) * params.slutPct;

    const score = 
      (polyculeActs * weightPolyculeIntimacy * (1 + barebackMultiplier * (polyculeBarebackBonus / 10))) +
      (partyScore * weightPartyScene) +
      (params.newPartnersPerMonth * weightNewFlames * 10) +
      (totalActs * weightTotalActs);

    return Math.round(score);
  }

  /**
   * Runs Monte Carlo Optimization Sampling across 5,000 parameter combinations.
   */
  optimize(constraints, preferences, currentParams, prophylactics) {
    const {
      maxAntibioticFreqYears = 1.0, // Max 1 antibiotic course per N years
      strictZeroHIV = true,
      allowBarebackPolycule = true,
      targetPolyculeSize = 7,
      minPolyculePct = 40,
      maxMonthlyBacterialRiskPct = (1 / (maxAntibioticFreqYears * 12)) * 100 // e.g. 1/12 = 8.3%/mo
    } = constraints;

    const samples = [];
    const numSamples = 5000;

    for (let i = 0; i < numSamples; i++) {
      const sampledPolyPct = Math.max(minPolyculePct, Math.floor(minPolyculePct + Math.random() * (100 - minPolyculePct)));
      const sampledPolySize = Math.max(2, Math.min(30, targetPolyculeSize + Math.floor((Math.random() - 0.5) * 4)));

      // Sample candidate parameters
      const candidateParams = {
        ...currentParams,
        egoPartners: Math.floor(1 + Math.random() * 8), // 1-8 direct lovers
        polyculePct: sampledPolyPct,
        polyculeSize: sampledPolySize,
        slutPct: Math.floor(Math.random() * Math.max(10, 100 - sampledPolyPct)),
        monogamousPct: Math.floor(Math.random() * 20),
        slutAvgPartners: Math.floor(2 + Math.random() * 15),
        sluttinessIndex: Math.random(),
        partyLoopbackPct: Math.floor(Math.random() * 90),
        fluidActsPerMonth: Math.floor(10 + Math.random() * 80),
        casualActsInitial: Math.floor(1 + Math.random() * 30),
        casualActsFloor: Math.floor(1 + Math.random() * 20),
        condomUsageInternal: allowBarebackPolycule ? (Math.random() < 0.7 ? 0 : Math.random() * 0.5) : 0.9,
        condomUsageExternal: 0.5 + (Math.random() * 0.5), // 50%-100% external condom rate
        newPartnersPerMonth: parseFloat((Math.random() * 4).toFixed(1))
      };

      const candidateProphylactics = {
        ...prophylactics,
        prepActive: strictZeroHIV ? true : prophylactics.prepActive,
        doxyPepActive: prophylactics.doxyPepActive || (maxAntibioticFreqYears <= 1.0)
      };

      // Calculate STI Risk for candidate
      const dummyMetrics = {
        theoreticalCountByDegree: [
          1,
          candidateParams.egoPartners,
          candidateParams.egoPartners * 3,
          candidateParams.egoPartners * 9
        ]
      };

      const riskResults = this.riskCalc.calculateNetworkRisk(dummyMetrics, candidateParams, candidateProphylactics);

      // Filter by constraints
      let passesConstraints = true;

      // 1. Bacterial STI risk budget check (Syphilis, Chlamydia, Gonorrhea, Mgen)
      const bacterialRisks = riskResults.filter(r => 
        r.category.toLowerCase().includes('bacteria') || 
        r.name.toLowerCase().includes('syphilis') || 
        r.name.toLowerCase().includes('chlamydia') || 
        r.name.toLowerCase().includes('gonorrhoeae')
      );

      const maxBacterialRisk = Math.max(...bacterialRisks.map(r => r.monthlyRiskProtectedPct), 0);

      if (maxBacterialRisk > maxMonthlyBacterialRiskPct) {
        passesConstraints = false;
      }

      // 2. Strict HIV check
      const hivRisk = riskResults.find(r => r.name.toLowerCase().includes('hiv'));
      if (strictZeroHIV && hivRisk && hivRisk.monthlyRiskProtectedPct > 0.05) {
        passesConstraints = false;
      }

      if (passesConstraints) {
        const hedonicScore = this.calculateHedonicScore(candidateParams, preferences);
        samples.push({
          params: candidateParams,
          prophylactics: candidateProphylactics,
          hedonicScore,
          maxBacterialRiskPct: maxBacterialRisk,
          hivRiskPct: hivRisk ? hivRisk.monthlyRiskProtectedPct : 0,
          totalMonthlyActs: candidateParams.fluidActsPerMonth + candidateParams.casualActsInitial
        });
      }
    }

    // Sort valid samples by Hedonic Score
    samples.sort((a, b) => b.hedonicScore - a.hedonicScore);

    // Build 3 Stage Tier Solutions
    const tier1Polycule = samples.find(s => s.params.polyculePct >= 60 && s.params.condomUsageInternal <= 0.2) || samples[0];
    const tier2PartyScene = samples.find(s => s.params.partyLoopbackPct >= 40 && s.params.slutPct >= 30) || samples[Math.floor(samples.length * 0.2)] || samples[0];
    const tier3MaxOrbit = samples.find(s => s.params.newPartnersPerMonth >= 2.0) || samples[Math.floor(samples.length * 0.4)] || samples[0];

    return {
      totalCandidatesEvaluated: numSamples,
      validCandidatesFound: samples.length,
      topSolution: samples[0] || null,
      paretoFrontier: samples.slice(0, 50),
      stages: {
        tier1Polycule,
        tier2PartyScene,
        tier3MaxOrbit
      }
    };
  }
}
