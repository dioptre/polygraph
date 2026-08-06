# PolyGraph: Sexual Network Topology & STI Transmission Engine

**PolyGraph** is an interactive, browser-based mathematical visualization and epidemiological modeling platform. It simulates complex sexual networks—ranging from closed monogamous pairs to open polyamorous polycules and high-degree party networks—and computes longitudinal transmission risks across 32 sexually transmitted infections (STIs) under varying prophylactic scenarios (Condoms, PrEP/U=U, Doxy-PEP, and Vaccines).

---

## 🚀 Live Demo & GitHub Pages Deployment

### Publishing to GitHub Pages

This repository is pre-configured for automated deployment to **GitHub Pages** via **GitHub Actions** and Vite.

#### Option 1: Automatic Deployment via GitHub Actions (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: PolyGraph app & documentation"
   git remote add origin https://github.com/YOUR_USERNAME/polygraph.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository on GitHub: **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site whenever you push to `main` or `master`. Your live site will be accessible at:
   `https://YOUR_USERNAME.github.io/polygraph/`

#### Option 2: Manual Deployment via `gh-pages`
If you prefer deploying directly from your command line:
```bash
npm install -D gh-pages
npm run deploy
```
*Make sure to set **Settings** -> **Pages** -> **Source** to `Deploy from a branch` and select `gh-pages` / `/ (root)`.*

---

## 🔬 Research & Literature References

The JavaScript simulation models, baseline transmission probabilities, and prophylactic efficacy parameters in PolyGraph are derived directly from the empirical research report included in this repository:
📄 [**STI Epidemiology, Prophylactics, and Demographics Report**](STI_Epidemiology_Prophylactics_and_Demographics_Report.md)

### Key Academic & Clinical Citations:
1. **Doxy-PEP (Post-Exposure Prophylaxis)**:
   * *Luetkemeyer AF, et al.* (2023). **Postexposure Doxycycline to Prevent Bacterial Sexually Transmitted Infections**. *N Engl J Med*, 388(14):1296-1306.
   * *San Francisco Department of Public Health (SFDPH)* (2022). **Citywide Doxy-PEP Implementation Guidance**.
   * *CDC Guidelines* (2024). **Clinical Guidelines for Doxycycline Post-Exposure Prophylaxis for STI Prevention**.
2. **HIV Pre-Exposure Prophylaxis (PrEP) & U=U**:
   * *PURPOSE 1 & 2 Trials* (2024). **Twice-Yearly Injectable Lenacapavir for PrEP**. *N Engl J Med*.
   * *Rodger AJ, et al. (PARTNER2 Study Group)* (2019). **Risk of HIV transmission through condomless sex in MSM couples on suppressive ART**. *Lancet*, 393(10189):2428-2438.
3. **Condom Failure & Mechanical Efficacy**:
   * *CDC & WHO Technical Reports* (2021). **Condom Efficacy, Breakage (1.5-4.0%), and Slippage Rates (1.0-3.5%) in Typical vs. Perfect Use**.
4. **Cross-Protective Meningococcal B Vaccines for Gonorrhea**:
   * *Abara WE, et al.* (2022). **Effectiveness of a outer membrane vesicle meningococcal B vaccine (4CMenB) against gonorrhea**. *Lancet Infect Dis*, 22(7):1021-1029.

---

## 📊 Dataset Structure (`sexual_health_sti_model_data.csv`)

The underlying data model parses [`public/sexual_health_sti_model_data.csv`](public/sexual_health_sti_model_data.csv), which contains quantitative profiles for 32 STI pathogens across retroviruses, bacteria, herpesviruses, poxviruses, protozoa, fungi, parasites, and enteric pathogens.

### Data Fields Schema:

| Field Name | Description | Example Value |
|---|---|---|
| `Pathogen_ID` | Unique pathogen index (1–32) | `1` |
| `Pathogen_Name` | Full medical name | `HIV-1 & HIV-2` |
| `Pathogen_Category` | Pathogen classification family | `Retrovirus` |
| `Baseline_Receptive_Anal_Pct` | Per-act unprotected transmission rate (%) | `1.38` |
| `Baseline_Insertive_Anal_Pct` | Per-act unprotected transmission rate (%) | `0.11` |
| `Baseline_Receptive_Vaginal_Pct` | Per-act unprotected transmission rate (%) | `0.08` |
| `Baseline_Insertive_Vaginal_Pct` | Per-act unprotected transmission rate (%) | `0.04` |
| `Baseline_Oral_Pct` | Per-act oral exposure transmission rate (%) | `0.005` |
| `Baseline_Skin_Contact_Pct` | Per-act non-fluid skin-to-skin rate (%) | `0` |
| `Condom_Perfect_Use_Efficacy_Pct` | Barrier risk reduction under perfect use (%) | `98` |
| `Condom_Typical_Use_Efficacy_Pct` | Barrier risk reduction under typical use (%) | `85` |
| `Risk_With_Condoms_Typical_Use_Pct` | Residual per-act risk with typical condom use (%) | `0.207` |
| `Risk_With_PrEP_or_UU_Pct` | Residual per-act risk with PrEP or U=U active (%) | `0` |
| `Risk_With_Doxy_PEP_Pct` | Residual per-act risk with Doxy-PEP active (%) | `1.38` |
| `Risk_With_Vaccine_Pct` | Residual per-act risk with targeted vaccination (%) | `1.38` |

---

## 🧮 Mathematical Engine & Methodology

PolyGraph's engine (`src/riskCalculator.js` and `src/networkGenerator.js`) translates relational graph topology into probabilistic transmission metrics using a multi-layer stochastic model:

### 1. Network Topology Generation
* **Ingroup Polycules**: Modeled as densely connected clusters with high internal edge density and high internal condom compliance ($\mu_{\text{internal}}$).
* **Bridge Nodes ("Outgrouping" / "Sluttiness Index")**: Nodes configured with high degree centrality that connect distinct polycule clusters or external partners.
* **Monogamous Cheating Hops**: Secret edges added probabilistically ($\text{CheatingLikelihood}$) with reduced condom adherence ($\mu_{\text{cheating}}$).

### 2. Weighted Per-Act Transmission Rate ($p_{\text{act}}$)
The effective transmission probability per sexual exposure combines mechanical barrier use with biomedical intervention multipliers:

$$p_{\text{act, unprotected}} = \max(p_{\text{rec\_anal}}, p_{\text{ins\_anal}}, p_{\text{rec\_vag}}, p_{\text{ins\_vag}}, p_{\text{skin}}) \times M_{\text{biomedical}}$$

$$p_{\text{act, protected}} = p_{\text{act, unprotected}} \times (1 - \text{Efficacy}_{\text{condom\_typical}}) \times M_{\text{biomedical}}$$

$$p_{\text{act, weighted}} = (p_{\text{act, protected}} \cdot \mu_{\text{condom}}) + (p_{\text{act, unprotected}} \cdot (1 - \mu_{\text{condom}}))$$

Where $M_{\text{biomedical}}$ represents the risk multiplier:
* **HIV PrEP / U=U**: $M_{\text{biomedical}} = 0.001$ (~99.9% reduction)
* **Doxy-PEP**: $M_{\text{biomedical}} = 0.13$ for Chlamydia/Syphilis (~87% reduction), $0.45$ for Gonorrhea (~55% reduction)
* **Gardasil-9 (HPV)**: $M_{\text{biomedical}} = 0.05$ (~95% reduction)
* **4CMenB / Hep B / JYNNEOS**: Multipliers corresponding to trial efficacy data.

### 3. Multi-Act Monthly & Network Hop Cumulative Exposure
For a direct partner over $n$ sex acts per month, the cumulative non-transmission probability is $(1 - p_{\text{act, weighted}})^n$.

Across $N$ degrees of network distance $d$, network attenuation and degree expansion yield cumulative safety product $S$:

$$S = \prod_{d=1}^{N} \Big(1 - \text{Risk}_{\text{direct}} \cdot 0.5^{d-1}\Big)^{C_d \cdot 0.4}$$

$$\text{Cumulative Exposure Risk (\%)} = \Big(1 - S\Big) \times 100$$

Where $C_d$ is the node degree count at distance $d$, and $0.5^{d-1}$ represents epidemiological distance decay.

---

## 🛠️ Local Development & Setup

### Prerequisites
* **Node.js** >= 18.x
* **npm** >= 9.x

### Getting Started
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/polygraph.git
cd polygraph

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build production bundle (dist/)
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 📁 Repository Structure

```
polygraph/
├── .github/
│   └── workflows/
│       └── deploy.yml                                # GitHub Actions deployment script
├── public/
│   └── sexual_health_sti_model_data.csv             # 32 Pathogen STI dataset
├── src/
│   ├── chartsManager.js                             # ECharts STI probability rendering
│   ├── graphVisualizer.js                           # Sigma.js / Graphology network canvas
│   ├── main.js                                      # Application controller & event handling
│   ├── networkGenerator.js                          # Graph generator (Ingroups, Sluts, Cheaters)
│   ├── riskCalculator.js                            # Probabilistic epidemiological engine
│   ├── stiData.js                                   # PapaParse CSV loader & parser
│   └── style.css                                    # Dark mode CSS theme & styles
├── index.html                                       # Main application layout & UI controls
├── package.json                                     # Project metadata & NPM dependencies
├── STI_Epidemiology_Prophylactics_and_Demographics_Report.md  # Primary research document
├── vite.config.js                                   # Vite configuration (base: './')
└── README.md                                        # Project documentation
```

---

## 📜 License

This project is licensed under the **ISC License**. Epidemiological models and research references are provided for educational and decision-support modeling purposes.
