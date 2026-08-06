# PolyGraph: Sexual Network Topology & STI Transmission Engine

**PolyGraph** is an interactive, browser-based mathematical visualization and epidemiological modeling platform. It simulates complex sexual networks—ranging from closed monogamous pairs to open polyamorous polycules and high-degree party networks—and computes longitudinal transmission risks across 32 sexually transmitted infections (STIs) under varying prophylactic scenarios (Condoms, PrEP/U=U, Doxy-PEP, and Vaccines).

---

## 📚 Key Concepts, Demographics & Glossary Definitions

### 👥 Demographic Profiles

* **MSM / Gay & Bisexual Men / TGNC (San Francisco Baseline)**: Models network dynamics among men who have sex with men and trans/gender-non-conforming individuals. Features elevated mucosal anal and pharyngeal transmission weighting, high extragenital STI rates (rectal/pharyngeal chlamydia & gonorrhea), and citywide biomedical prophylaxis baselines (PrEP and Doxy-PEP).
* **WSW / Cisgender Women (Female-to-Female)**: Adjusts transmission modes for women who have sex with women. Zeroes out penile-vaginal and penile-anal exposure modes, scales HIV transmission risk down by $0.001\times$ (near-zero for non-IDU WSW), and accurately models fluid and skin contact pathogens (Bacterial Vaginosis, HSV-1, HSV-2, HPV, Trichomoniasis, Candidiasis).
* **Heterosexual / Mixed Poly Network**: Standard mixed-gender network incorporating penile-vaginal, anal, oral, and skin contact sex act distributions.
* **Kink / BDSM / Play Party**: Incorporates a **1.7× Mucosal Trauma Multiplier** for high-intensity play, manual play/fisting, or heavy friction acts.
* **San Francisco High-Risk / ENM**: Reflects SFDPH public health department epidemic data, emphasizing 3-site NAAT testing, extragenital site infection dynamics, high PrEP/Doxy-PEP awareness, and macrolide-resistant *Mycoplasma genitalium*.

---

### 🩸 What is the Trauma Multiplier?

In epidemiological research, **mucosal micro-trauma** refers to microscopic friction tears or abrasions in mucosal tissue (rectal, vaginal, or oral) and skin that occur during high-intensity or rough sexual play.

#### Biological Mechanism:
1. **Barrier Disruption**: Intact mucosal membranes act as natural physical defenses. Friction or tension creates micro-abrasions in the fragile epithelial lining.
2. **Direct Bloodstream Access**: Micro-tears expose sub-mucosal capillaries and target immune cells (CD4+ T-cells, Langerhans cells, and dendritic cells), allowing pathogens to bypass primary mechanical barriers.
3. **Model Calculation**: When the **Kink / BDSM / Play Party** profile is selected, PolyGraph applies a **1.4× to 1.7× risk multiplier** to specific blood-borne, fluid-borne, and ulcerative pathogens:
   * **HIV-1 & HIV-2** ($1.4\times - 1.7\times$): Micro-tears provide direct viral entry to CD4+ T-cells in sub-mucosal tissue.
   * **Hepatitis C Virus (HCV)** (Primary driver): Sexual HCV transmission occurs almost exclusively through traumatic manual play/fisting.
   * **Syphilis (*T. pallidum*)** ($1.5\times$): Spirochetes rapidly inoculate through micro-abrasions.
   * **Mpox Virus & HSV-1/HSV-2** ($1.4\times - 1.6\times$): Skin friction accelerates epidermal cell inoculation.

---

### 🌉 What is the San Francisco High-Risk Profile?

The **San Francisco High-Risk** profile is grounded in **San Francisco Department of Public Health (SFDPH)** epidemiological data and subcultural demographics:

1. **Extragenital STI Predominance (70%–75%)**: In SF's MSM and polyamorous communities, 70%–75% of Chlamydia and Gonorrhea infections are pharyngeal (throat) or rectal. Standard urine-only testing misses up to 70% of infections.
2. **Citywide Doxy-PEP Guidelines**: SFDPH was the first jurisdiction to roll out citywide Doxy-PEP (200 mg doxycycline within 72 hours of condomless sex), yielding an ~87% drop in Chlamydia/Syphilis and a ~45–55% drop in Gonorrhea.
3. **High PrEP Uptake ("Getting to Zero")**: PrEP usage exceeds 75–80% among high-risk groups, causing annual HIV incidence to drop while bacterial STIs (unaffected by PrEP) dominate transmission concerns.
4. **Macrolide Resistance (*M. genitalium*)**: >70–80% of *Mycoplasma genitalium* cases in SF exhibit Azithromycin resistance, requiring two-step resistance-guided therapy.

---

### 🐀 Dual-Engine Partner Activity Model (Coolidge Effect & Rat Satiation Dynamics)

PolyGraph separates partner sexual encounter frequency into two distinct biological engines:

1. **Fluid-Bonded / Primary Ingroup Partners (Static Activity)**:
   * Sexual encounter frequency remains **static over time** ($A_{\text{fluid}}$, configurable from **0 to 200 acts/month**, default 50 acts/month), representing long-term established intimacy and stable commitment without novel sensory decay.
2. **Casual / Slutty / New Partners (Rat Copulatory Satiation / Coolidge Effect Decay)**:
   * Sexual activity begins with a **novelty peak** ($A_{\text{casual, initial}}$, configurable from **0 to 50 acts/month**, default 1 act/month) and **degrades exponentially** over time due to sensory-specific satiety and habituation:
     $$A_{\text{casual}}(m) = A_{\text{floor}} + (A_{\text{initial}} - A_{\text{floor}}) \cdot e^{-\lambda \cdot m}$$
   * **Satiation Decay Rate ($\lambda$)**: Configurable habituation rate parameter (default $\lambda = 0.35$, half-life of novel sexual activity ~2 months).
   * **Habituation Floor ($A_{\text{floor}}$)**: Asymptotic baseline encounter frequency after habituation (default 2 acts/month).

#### Analytical Longitudinal Integration:
For casual partners acquired at rate $X$ new partners/month over timeline $T$ months, cumulative casual acts are computed via exact definite integration:

$$\text{Acts}_{\text{casual}}(T) = \int_0^T X \cdot \left[ A_{\text{floor}} + (A_{\text{initial}} - A_{\text{floor}}) e^{-\lambda (T - \tau)} \right] d\tau = X \cdot A_{\text{floor}} \cdot T + \frac{X \cdot (A_{\text{initial}} - A_{\text{floor}})}{\lambda} \left(1 - e^{-\lambda T}\right)$$

---

### ⏱️ Session Duration, Ejaculation Exposure & Mathematical Curves

PolyGraph models how the physical characteristics of a sexual encounter impact transmission risk:

1. **Session Duration (Minutes)**:
   * Longer encounters increase cumulative fluid exposure time and mechanical micro-friction.
   * **Logarithmic Saturation Model (Default)**: Incorporates diminishing returns on fluid exchange and mucosal lubrication equilibrium:
     $$M_{\text{duration}} = 1.0 + 0.5 \cdot \ln\left(1 + \frac{\text{Duration}_{\text{min}}}{20}\right)$$
   * **Linear Scaling Model**: Direct proportional multiplier on session length:
     $$M_{\text{duration}} = 0.5 + 0.5 \cdot \left(\frac{\text{Duration}_{\text{min}}}{20}\right)$$
2. **Ejaculation / Internal Fluid Release Probability (%)**:
   * Ejaculation transfers high-viral/bacterial-load seminal fluid into mucosal spaces. Non-ejaculatory sex (withdrawal or pre-cum only) carries a reduced fluid transfer factor ($F_{\text{fluid}} \approx 0.30\times$).
   * Weighted Fluid Exposure Multiplier:
     $$M_{\text{fluid}} = \left(\frac{\text{ejaculationPct}}{100} \cdot 1.0\right) + \left(\left(1 - \frac{\text{ejaculationPct}}{100}\right) \cdot 0.30\right)$$
   * Applied to fluid-borne pathogens (HIV, Hepatitis B, Chlamydia, Gonorrhea, Trichomoniasis, Mgen), while skin-to-skin pathogens (HSV, HPV, Mpox) scale primarily via duration and skin contact.

---

### 🍆 Sex Act Modalities & Encounter Frequency

* **Sex Act Modality Composition**:
  * **Anal Sex %**: Receptive and insertive anal sex acts (highest mucosal transmission per act).
  * **Vaginal Sex %**: Receptive and insertive vaginal sex acts.
  * **Oral Sex %**: Cunnilingus, fellatio, and rimming (high pharyngeal & enteric transmission).
  * **Skin Contact / Manual Play %**: Non-fluid body contact, outercourse, and manual play.
* **New Partners per Month (Acquisition Rate)**: Slider configuring partner turnover ($0 \to 50$ new partners per month). PolyGraph models compounding longitudinal STI exposure across 1 month to 10 years.
* **Sex Acts per Partner (Encounter Count)**: Slider setting the number of sex acts per partner per month ($1 \to 50$). PolyGraph computes cumulative binomial exposure per partner:
  $$P_{\text{partner}} = 1 - (1 - P_{\text{weighted-act}})^{\text{actsPerPartner}}$$

---

### 🕸️ Network Topology & Relational Terminology

* **Sluttiness / Outgrouping Index ($S \in [0, 1]$)**: The ratio of external sex acts (casual hookups, open connectors) to total sex acts.
* **Ingrouping Density ($1 - S$)**: The degree to which polycule members restrict sexual activity to within their closed social circle/friends.
* **High-Degree Slut Connector**: A highly active network node with a high partner count (e.g. 17 partners) who connects distinct polycules or monogamous partners.
* **Monogamous Cheating Likelihood ($P_{\text{cheat}}$)**: The probability that a partner intending/claiming monogamy maintains a hidden external connection.
* **$N$-Degree Extended Preview**: Visual and mathematical expansion of indirect exposure hops ($1 \text{ direct partner} \to 10,000+$ theoretical extended partners across $N$ degrees).

---

## 🚀 Live Demo & Deployment

This repository is pre-configured for automated deployment to **GitHub Pages** via **GitHub Actions** and Vite.

```bash
# Deploy to GitHub Pages manually
npm run deploy
```

---

## 🔬 Research & Literature References

Derived directly from the empirical research report included in this repository:
📄 [**STI Epidemiology, Prophylactics, and Demographics Report**](STI_Epidemiology_Prophylactics_and_Demographics_Report.md)

### Key Academic & Clinical Citations:
1. **Doxy-PEP (Post-Exposure Prophylaxis)**:
   * *Luetkemeyer AF, et al.* (2023). **Postexposure Doxycycline to Prevent Bacterial Sexually Transmitted Infections**. *N Engl J Med*, 388(14):1296-1306.
   * *San Francisco Department of Public Health (SFDPH)* (2022). **Citywide Doxy-PEP Implementation Guidance**.
2. **HIV Pre-Exposure Prophylaxis (PrEP) & U=U**:
   * *PURPOSE 1 & 2 Trials* (2024). **Twice-Yearly Injectable Lenacapavir for PrEP**. *N Engl J Med*.
   * *Rodger AJ, et al. (PARTNER2 Study Group)* (2019). **Risk of HIV transmission through condomless sex in MSM couples on suppressive ART**. *Lancet*, 393(10189):2428-2438.
3. **Condom Failure & Mechanical Efficacy**:
   * *CDC & WHO Technical Reports* (2021). **Condom Efficacy, Breakage (1.5-4.0%), and Slippage Rates (1.0-3.5%) in Typical vs. Perfect Use**.

---

## 🧮 Mathematical Engine & Methodology

PolyGraph's engine (`src/riskCalculator.js` and `src/networkGenerator.js`) translates relational graph topology into probabilistic transmission metrics using a multi-layer stochastic model:

### 1. Network Topology Generation
* **Ingroup Polycules**: Modeled as densely connected clusters with high internal edge density.
* **Bridge Nodes ("Outgrouping" / "Sluttiness Index")**: Nodes configured with high degree centrality that connect distinct polycule clusters or external partners.
* **Monogamous Cheating Hops**: Secret edges added probabilistically ($\text{CheatingLikelihood}$).

### 2. Weighted Per-Act Transmission Rate ($p_{\text{act}}$)
$$\text{Weighted Risk} = (w_{\text{anal}} \cdot p_{\text{anal}}) + (w_{\text{vag}} \cdot p_{\text{vag}}) + (w_{\text{oral}} \cdot p_{\text{oral}}) + (w_{\text{skin}} \cdot p_{\text{skin}})$$

Where $p_{\text{mode}}$ is adjusted by the demographic profile (e.g. $0.001\times$ HIV for WSW, $1.7\times$ trauma multiplier for kink play).

---

## 🛠️ Local Development & Setup

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle (dist/)
npm run build
```

---

## 📁 Repository Structure

```
polygraph/
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
├── README.md                                        # Project documentation & definitions
└── vite.config.js                                   # Vite configuration
```

---

## 📜 License

This project is licensed under the **ISC License**.
