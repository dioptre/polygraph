import Papa from 'papaparse';

// Fallback hardcoded data in case CSV fetch fails in offline environment
export const FALLBACK_STI_DATA = [
  { Pathogen_ID: "1", Pathogen_Name: "HIV-1 & HIV-2", Pathogen_Category: "Retrovirus", Baseline_Receptive_Anal_Pct: 1.38, Baseline_Insertive_Anal_Pct: 0.11, Baseline_Receptive_Vaginal_Pct: 0.08, Baseline_Insertive_Vaginal_Pct: 0.04, Baseline_Oral_Pct: 0.005, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 98, Condom_Typical_Use_Efficacy_Pct: 85, Risk_With_Condoms_Typical_Use_Pct: 0.207, Risk_With_PrEP_or_UU_Pct: 0, Risk_With_Doxy_PEP_Pct: 1.38, Risk_With_Vaccine_Pct: 1.38, SF_High_Risk_Group: "MSM / TGNC", Extragenital_Predominance_Pct: 0 },
  { Pathogen_ID: "2", Pathogen_Name: "HSV-1", Pathogen_Category: "Alphaherpesvirus", Baseline_Receptive_Anal_Pct: 5, Baseline_Insertive_Anal_Pct: 5, Baseline_Receptive_Vaginal_Pct: 5, Baseline_Insertive_Vaginal_Pct: 5, Baseline_Oral_Pct: 10, Baseline_Skin_Contact_Pct: 15, Condom_Perfect_Use_Efficacy_Pct: 65, Condom_Typical_Use_Efficacy_Pct: 40, Risk_With_Condoms_Typical_Use_Pct: 3, Risk_With_PrEP_or_UU_Pct: 5, Risk_With_Doxy_PEP_Pct: 5, Risk_With_Vaccine_Pct: 5, SF_High_Risk_Group: "General / All", Extragenital_Predominance_Pct: 20 },
  { Pathogen_ID: "3", Pathogen_Name: "HSV-2", Pathogen_Category: "Alphaherpesvirus", Baseline_Receptive_Anal_Pct: 5, Baseline_Insertive_Anal_Pct: 5, Baseline_Receptive_Vaginal_Pct: 0.3, Baseline_Insertive_Vaginal_Pct: 0.1, Baseline_Oral_Pct: 1, Baseline_Skin_Contact_Pct: 10, Condom_Perfect_Use_Efficacy_Pct: 70, Condom_Typical_Use_Efficacy_Pct: 50, Risk_With_Condoms_Typical_Use_Pct: 0.15, Risk_With_PrEP_or_UU_Pct: 0.3, Risk_With_Doxy_PEP_Pct: 0.3, Risk_With_Vaccine_Pct: 0.3, SF_High_Risk_Group: "MSM / Multi-Partner", Extragenital_Predominance_Pct: 10 },
  { Pathogen_ID: "4", Pathogen_Name: "HPV High-Risk (16/18/31+)", Pathogen_Category: "Papillomavirus", Baseline_Receptive_Anal_Pct: 10, Baseline_Insertive_Anal_Pct: 10, Baseline_Receptive_Vaginal_Pct: 10, Baseline_Insertive_Vaginal_Pct: 10, Baseline_Oral_Pct: 5, Baseline_Skin_Contact_Pct: 20, Condom_Perfect_Use_Efficacy_Pct: 70, Condom_Typical_Use_Efficacy_Pct: 50, Risk_With_Condoms_Typical_Use_Pct: 5, Risk_With_PrEP_or_UU_Pct: 10, Risk_With_Doxy_PEP_Pct: 10, Risk_With_Vaccine_Pct: 0, SF_High_Risk_Group: "MSM / Cervix-bearing", Extragenital_Predominance_Pct: 40 },
  { Pathogen_ID: "6", Pathogen_Name: "Chlamydia trachomatis", Pathogen_Category: "Gram-negative Bacteria", Baseline_Receptive_Anal_Pct: 35, Baseline_Insertive_Anal_Pct: 25, Baseline_Receptive_Vaginal_Pct: 30, Baseline_Insertive_Vaginal_Pct: 20, Baseline_Oral_Pct: 12, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 95, Condom_Typical_Use_Efficacy_Pct: 85, Risk_With_Condoms_Typical_Use_Pct: 5.25, Risk_With_PrEP_or_UU_Pct: 35, Risk_With_Doxy_PEP_Pct: 3.5, Risk_With_Vaccine_Pct: 35, SF_High_Risk_Group: "MSM / ENM / Youth", Extragenital_Predominance_Pct: 75 },
  { Pathogen_ID: "7", Pathogen_Name: "Neisseria gonorrhoeae", Pathogen_Category: "Gram-negative Diplococcus", Baseline_Receptive_Anal_Pct: 72, Baseline_Insertive_Anal_Pct: 25, Baseline_Receptive_Vaginal_Pct: 50, Baseline_Insertive_Vaginal_Pct: 20, Baseline_Oral_Pct: 25, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 95, Condom_Typical_Use_Efficacy_Pct: 85, Risk_With_Condoms_Typical_Use_Pct: 10.8, Risk_With_PrEP_or_UU_Pct: 72, Risk_With_Doxy_PEP_Pct: 35, Risk_With_Vaccine_Pct: 40, SF_High_Risk_Group: "MSM / ENM", Extragenital_Predominance_Pct: 70 },
  { Pathogen_ID: "8", Pathogen_Name: "Treponema pallidum (Syphilis)", Pathogen_Category: "Spirochete Bacteria", Baseline_Receptive_Anal_Pct: 40, Baseline_Insertive_Anal_Pct: 40, Baseline_Receptive_Vaginal_Pct: 40, Baseline_Insertive_Vaginal_Pct: 40, Baseline_Oral_Pct: 20, Baseline_Skin_Contact_Pct: 40, Condom_Perfect_Use_Efficacy_Pct: 75, Condom_Typical_Use_Efficacy_Pct: 55, Risk_With_Condoms_Typical_Use_Pct: 18, Risk_With_PrEP_or_UU_Pct: 40, Risk_With_Doxy_PEP_Pct: 5, Risk_With_Vaccine_Pct: 40, SF_High_Risk_Group: "MSM / TGNC", Extragenital_Predominance_Pct: 25 },
  { Pathogen_ID: "9", Pathogen_Name: "Hepatitis B Virus (HBV)", Pathogen_Category: "Hepadnavirus", Baseline_Receptive_Anal_Pct: 25, Baseline_Insertive_Anal_Pct: 25, Baseline_Receptive_Vaginal_Pct: 20, Baseline_Insertive_Vaginal_Pct: 15, Baseline_Oral_Pct: 5, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 95, Condom_Typical_Use_Efficacy_Pct: 85, Risk_With_Condoms_Typical_Use_Pct: 3.75, Risk_With_PrEP_or_UU_Pct: 25, Risk_With_Doxy_PEP_Pct: 25, Risk_With_Vaccine_Pct: 0, SF_High_Risk_Group: "Unvaccinated MSM", Extragenital_Predominance_Pct: 0 },
  { Pathogen_ID: "12", Pathogen_Name: "Trichomonas vaginalis", Pathogen_Category: "Flagellated Protozoan", Baseline_Receptive_Anal_Pct: 10, Baseline_Insertive_Anal_Pct: 5, Baseline_Receptive_Vaginal_Pct: 65, Baseline_Insertive_Vaginal_Pct: 20, Baseline_Oral_Pct: 1, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 95, Condom_Typical_Use_Efficacy_Pct: 85, Risk_With_Condoms_Typical_Use_Pct: 9.75, Risk_With_PrEP_or_UU_Pct: 65, Risk_With_Doxy_PEP_Pct: 65, Risk_With_Vaccine_Pct: 65, SF_High_Risk_Group: "Cisgender Women / MSM", Extragenital_Predominance_Pct: 0 },
  { Pathogen_ID: "13", Pathogen_Name: "Mpox Virus", Pathogen_Category: "Poxvirus", Baseline_Receptive_Anal_Pct: 80, Baseline_Insertive_Anal_Pct: 80, Baseline_Receptive_Vaginal_Pct: 80, Baseline_Insertive_Vaginal_Pct: 80, Baseline_Oral_Pct: 60, Baseline_Skin_Contact_Pct: 80, Condom_Perfect_Use_Efficacy_Pct: 60, Condom_Typical_Use_Efficacy_Pct: 40, Risk_With_Condoms_Typical_Use_Pct: 48, Risk_With_PrEP_or_UU_Pct: 80, Risk_With_Doxy_PEP_Pct: 80, Risk_With_Vaccine_Pct: 12, SF_High_Risk_Group: "MSM / Kink / Party-Play", Extragenital_Predominance_Pct: 40 },
  { Pathogen_ID: "16", Pathogen_Name: "Mycoplasma genitalium", Pathogen_Category: "Wall-less Bacteria", Baseline_Receptive_Anal_Pct: 25, Baseline_Insertive_Anal_Pct: 15, Baseline_Receptive_Vaginal_Pct: 25, Baseline_Insertive_Vaginal_Pct: 15, Baseline_Oral_Pct: 5, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 95, Condom_Typical_Use_Efficacy_Pct: 85, Risk_With_Condoms_Typical_Use_Pct: 3.75, Risk_With_PrEP_or_UU_Pct: 25, Risk_With_Doxy_PEP_Pct: 15, Risk_With_Vaccine_Pct: 25, SF_High_Risk_Group: "MSM / Recurrent NGU", Extragenital_Predominance_Pct: 50 },
  { Pathogen_ID: "18", Pathogen_Name: "Bacterial Vaginosis (BV)", Pathogen_Category: "Polymicrobial Dysbiosis", Baseline_Receptive_Anal_Pct: 0, Baseline_Insertive_Anal_Pct: 0, Baseline_Receptive_Vaginal_Pct: 40, Baseline_Insertive_Vaginal_Pct: 0, Baseline_Oral_Pct: 5, Baseline_Skin_Contact_Pct: 0, Condom_Perfect_Use_Efficacy_Pct: 75, Condom_Typical_Use_Efficacy_Pct: 60, Risk_With_Condoms_Typical_Use_Pct: 16, Risk_With_PrEP_or_UU_Pct: 40, Risk_With_Doxy_PEP_Pct: 40, Risk_With_Vaccine_Pct: 40, SF_High_Risk_Group: "WSW / Cis Women", Extragenital_Predominance_Pct: 0 }
];

export class STIDataLoader {
  constructor() {
    this.pathogens = [];
    this.isLoaded = false;
  }

  async loadData(csvUrl = './sexual_health_sti_model_data.csv') {
    try {
      const response = await fetch(csvUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const csvText = await response.text();
      
      const parsed = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
      });

      if (parsed.data && parsed.data.length > 0) {
        this.pathogens = parsed.data.map(item => this.normalizePathogen(item));
        this.isLoaded = true;
        console.log(`Loaded ${this.pathogens.length} STI pathogens from CSV.`);
        return this.pathogens;
      }
    } catch (err) {
      console.warn('Failed to fetch or parse CSV, falling back to embedded dataset:', err);
    }

    this.pathogens = FALLBACK_STI_DATA.map(item => this.normalizePathogen(item));
    this.isLoaded = true;
    return this.pathogens;
  }

  parseCustomCSV(csvString) {
    const parsed = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true
    });

    if (parsed.data && parsed.data.length > 0) {
      this.pathogens = parsed.data.map(item => this.normalizePathogen(item));
      this.isLoaded = true;
      return this.pathogens;
    }
    return this.pathogens;
  }

  normalizePathogen(item) {
    // Ensure all quantitative fields are numbers
    const num = (val, fallback = 0) => {
      const parsed = parseFloat(val);
      return isNaN(parsed) ? fallback : parsed;
    };

    return {
      id: String(item.Pathogen_ID || Math.random().toString(36).substring(7)),
      name: item.Pathogen_Name || 'Unknown Pathogen',
      category: item.Pathogen_Category || 'General',
      curable: item.Curable_Status || 'Treatable',
      
      // Transmission per act mode (%)
      receptiveAnal: num(item.Baseline_Receptive_Anal_Pct, 5.0),
      insertiveAnal: num(item.Baseline_Insertive_Anal_Pct, 2.0),
      receptiveVaginal: num(item.Baseline_Receptive_Vaginal_Pct, 5.0),
      insertiveVaginal: num(item.Baseline_Insertive_Vaginal_Pct, 2.0),
      oral: num(item.Baseline_Oral_Pct, 1.0),
      skinContact: num(item.Baseline_Skin_Contact_Pct, 2.0),
      
      // Condom & biomedical efficacy (%)
      condomPerfectEfficacy: num(item.Condom_Perfect_Use_Efficacy_Pct, 95.0),
      condomTypicalEfficacy: num(item.Condom_Typical_Use_Efficacy_Pct, 80.0),
      
      // Reduced risk with specific interventions (%)
      riskCondomTypical: num(item.Risk_With_Condoms_Typical_Use_Pct, 1.0),
      riskPrEP: num(item.Risk_With_PrEP_or_UU_Pct, num(item.Baseline_Receptive_Vaginal_Pct)),
      riskDoxyPEP: num(item.Risk_With_Doxy_PEP_Pct, num(item.Baseline_Receptive_Vaginal_Pct)),
      riskVaccine: num(item.Risk_With_Vaccine_Pct, num(item.Baseline_Receptive_Vaginal_Pct)),
      
      // Demographic & epidemiology specific tags
      sfHighRiskGroup: item.SF_High_Risk_Group || 'General',
      extragenitalPredominance: num(item.Extragenital_Predominance_Pct, 0),

      // Extra details
      vaccineAvailable: item.Vaccine_Available || 'None',
      doxyPepEfficacy: item.Doxy_PEP_Efficacy || 'None',
      primaryTreatment: item.Primary_Treatment || 'Standard Care'
    };
  }

  getPathogens() {
    return this.pathogens;
  }
}
