/* Bronchial Asthma. Primary source: PrepLadder notes PDF pp. 770–778.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "asthma",
  title: "Bronchial Asthma",
  aka: ["asthma", "GINA", "AIR", "MART", "ICS-formoterol", "spirometry", "reversibility", "FeNO", "methacholine", "status asthmaticus", "silent chest", "inhaler devices", "pMDI", "DPI", "omalizumab", "dupilumab", "hypersensitivity pneumonitis", "Curschmann spirals", "Charcot-Leyden"],
  oneLine: "Reversible airflow obstruction: inhaler devices & technique, PEFR / spirometry (FEV₁ ↑ >12%), type 2 phenotype markers, severity tables, GINA steps (AIR → MART), acute severe asthma protocol and biologics.",
  flow: ["Recurrent wheeze, night/early cough, triggers", "Spirometry (IOC): FEV₁/FVC <0.7 · post-BD ↑ >12% / 200 mL", "Type 2? FeNO · eosinophils · IgE", "GINA: AIR (1–2) → MART (3–5) ± biologic", "Acute severe: O₂ nebulised salbutamol + ipratropium + IV steroid + IV MgSO₄"],
  related: ["copd", "abg-1", "resp-failure", "ild"],
  bubbles: [
    { type: "treatment", title: "Inhaler devices", src: "p.770–771", wide: true, items: [
      { table: { head: ["Device", "Key point", "Lung delivery"], rows: [
        { c: ["==Soft mist inhaler==", "Battery · formoterol + steroid · ==easiest (elderly, children)==", "**40–50%**"], hl: true },
        ["pMDI", "Needs hand–breath coordination · deposits in mouth/upper airway · 1st reflex = exhale", "**10–20%**"],
        ["DPI", "==Breath-actuated== (advantage over pMDI)", "**20–40%**"],
        ["Valved holding chamber (spacer)", "Breathe at own pace · better compliance + delivery", "↑"]
      ]}},
      { t: "Ideal particle size to reach terminal bronchiole → ==1–3 µm==", role: "hy" },
      { mnemonic: "Mist Most · DPI Decent · MDI Minimal", t: "delivery ranking" },
      { h: "pMDI technique" },
      { chain: ["Shake 5–10 s", "Exhale fully", "Seal lips (± spacer)", "Press + slow breath 3–5 s", "Hold 10 s", "Exhale slowly", "Wait 30–60 s", "Rinse mouth (ICS → thrush)"] }
    ]},
    { type: "investigation", title: "PEFR, spirometry & phenotype", src: "p.771, 773", wide: true, items: [
      { table: { head: ["Test", "Asthma finding", "Normal"], rows: [
        { c: ["==Spirometry (IOC)==", "FEV₁/FVC ==<0.7== · post-BD FEV₁ ↑ ==>12% or 200 mL== (COPD <12%)", "FEV₁ >80% · FEV₂ >95%"], node: "bed-pft", role: "ioc", why: "Asthma: reversible obstruction", hl: true },
        { c: ["PEFR", "Diurnal variation ==>20%==", "—"], node: "bed-pefr", role: "dx", why: "Asthma variability" },
        ["Methacholine challenge", "FEV₁ ↓ >20% (mannitol / 3% saline neb)", "—"],
        { c: ["FeNO", "==>50 ppb adults · >20 children== (type 2 >25–50)", "{N:lab-feno}"], node: "lab-feno", role: "dx", why: "Type 2 airway inflammation" },
        { c: ["Blood eosinophils", ">150 type 2 · ==>300 → anti-IL-5 response==", "{N:lab-eosinophil}"], node: "lab-eosinophil", role: "dx", why: "Eosinophilic phenotype" },
        { c: ["IgE", "==>1000 IU/mL + brown plugs → ABPA==", "{N:lab-ige}"], node: "lab-ige", role: "dx", why: "Allergic bronchopulmonary aspergillosis" },
        { c: ["Chest X-ray", "Normal between attacks · ==hyperinflation, flat diaphragm== in attack", "—"], node: "img-cxr", role: "dx", why: "Acute asthma CXR" }
      ]}},
      "Flow–volume loop → ==scooped / scalloped== expiratory limb · post-BD area ↑",
      "Air trapping → RV ↑, TLC ↑",
      { t: "FEV₁/FVC ==>0.8 → restrictive== disease", role: "hy", see: "ild" },
      { table: { caption: "Phenotypes", head: ["Type 2", "Non-type 2"], rows: [["Eosinophilic · IL-4, 5, 13 · Th2, mast cells", "IL-6, TGF-β · Th1, Th17, neutrophils"]] } },
      "Inhaled NO vasoreactivity test → for pulmonary arterial HTN (not asthma)"
    ]},
    { type: "patho", title: "Pathology & triggers", src: "p.772–773", items: [
      { table: { head: ["Finding", "What it is"], rows: [
        ["==Curschmann spirals==", "Mucus plugs"],
        ["==Charcot–Leyden crystals==", "Eosinophil proteins (bipyramidal)"],
        ["Creola bodies", "Sloughed epithelium"],
        ["Basement membrane", "==Thickened=="],
        ["Hypervascular airway", "==DLCO elevated=="]
      ]}},
      { mnemonic: "Curschmann = Curly mucus · Charcot = Crystals (eosinophil) · Creola = Cells shed" },
      "Exam → expiratory rhonchi early → inspiratory + expiratory later → ==silent chest== (status asthmaticus)",
      { mnemonic: "PAVE-DO", t: "triggers", lines: [["P", "Pollen, dust, mites, cat fur"], ["A", "Air pollution — CO, NO, SO₂"], ["V", "Viruses — RSV, COVID-19, H3N1"], ["E", "Exercise, cold air"], ["D", "Drugs — ==aspirin (COX-1 → ↑ leukotrienes)==, timolol drops, propranolol"], ["O", "Occupation — cleaners, nurses"]] },
      "Uncontrolled on moderate ICS + LABA → check ==GERD, OSA==, drugs (ACEi, β-blockers, COX-1), nasal polyps"
    ]},
    { type: "diagnosis", title: "Severity", src: "p.771, 774", wide: true, items: [
      { table: { caption: "Chronic grading", head: ["Severity", "FEV₁"], rows: [["Mild", "70–80%"], ["Moderate", "40–69%"], ["Severe", "<40%"], { c: ["Imminent arrest", "<25%"], role: "danger" }] } },
      { table: { caption: "Acute exacerbation", head: ["", "Mild", "Severe", "Imminent arrest"], rows: [
        ["Talks in", "Sentences", "Words", "==Can't talk=="],
        ["Alertness", "± agitated", "Agitated", "==Drowsy=="],
        ["Wheeze", "Loud, expiratory", "Loud, both phases", "==Silent chest=="],
        ["PEF / FEV₁", "≥70%", "<40%", "<25%"],
        ["PaO₂", ">60", "<60, SpO₂ <90%", "<60"],
        { c: ["PaCO₂", "<42", "==≥42==", "≥42"], node: "lab-abg", role: "danger", why: "Normal/high CO₂ in acute asthma = tiring", hl: true },
        ["Pulse", "<100", ">120", "==Bradycardia=="],
        ["Pulsus paradoxus", "Absent", "May be present", "Absent (muscle fatigue)"]
      ]}},
      { t: "Mild–severe: PO₂ ↓ and PCO₂ ↓ (hyperventilation) → ==rising / normal CO₂ = danger==", role: "danger", see: "abg-1" }
    ]},
    { type: "emergency", title: "Acute asthma — flowchart", src: "p.774", steps: [
      { decision: "Severity?", branches: [
        { label: "Mild–moderate", steps: [
          { t: "==Formoterol (rapid LABA) + ICS==", node: "rx-ics-laba", role: "first", type: "treatment", why: "Mild-moderate attack" },
          { t: "==SABA alone not recommended==", node: "rx-saba", role: "ci", type: "emergency", why: "SABA monotherapy discouraged" }
        ]},
        { label: "Severe → urgent care", steps: [
          { t: "==Salbutamol nebulisation, oxygen-driven== (air-driven → V/Q mismatch)", node: ["rx-saba", "em-acute-asthma"], role: "emerg", type: "emergency", why: "Severe acute asthma" },
          { t: "==IV hydrocortisone== (blocks phospholipase A2 → ↓ leukotrienes)", node: "rx-hydrocortisone", role: "emerg", type: "emergency", why: "Acute asthma steroid" },
          { t: "==Ipratropium nebulisation==", node: "rx-lama", role: "adjunct", type: "treatment", why: "Add-on bronchodilator" },
          { t: "==IV MgSO₄== (blocks intracellular Ca²⁺ → smooth-muscle relaxation)", node: "rx-mgso4", role: "adjunct", type: "treatment", why: "Severe asthma add-on" }
        ]}
      ]},
      { t: "Aminophylline IV → ==not useful== (MCQ)", role: "ci", type: "pearl" },
      { mnemonic: "O-SHIM", t: "Oxygen-driven Salbutamol · Hydrocortisone · Ipratropium · Magnesium" }
    ]},
    { type: "treatment", title: "Long-term drugs", src: "p.775", wide: true, items: [
      { h: "Goals" },
      "Reliever <2×/week · night waking <2×/month · ≤1 exacerbation/year · normal activity",
      "Strategy → avoid allergens · immunotherapy · vaccines (pneumococcal, COVID-19, influenza) · drugs",
      { table: { head: ["Class", "Drugs / notes"], rows: [
        { c: ["β₂ agonists", "SABA salbutamol 4–6 h · LABA formoterol 12 h · ultra-LABA indacaterol 24 h (COPD) · S/E palpitation, tremor, ==hypokalaemia==, type B lactic acidosis"], node: "rx-saba", role: "first", why: "Bronchodilators" },
        { c: ["Anticholinergic", "Ipratropium"], node: "rx-lama", role: "adjunct", why: "Bronchodilator" },
        ["Theophylline", "Not used — toxic (==multifocal atrial tachycardia==)"],
        { c: ["==ICS / LABA==", "==1st line for persistent asthma== · ↓ mortality · rinse mouth · PJP prophylaxis if oral steroid >20 mg/day"], node: "rx-ics-laba", role: "first", why: "Controller first line", hl: true },
        { c: ["Leukotriene modifiers", "Montelukast (==suicidal ideation==) · zafirlukast · cromolyn"], node: "rx-ltra", role: "second", why: "Controller add-on" },
        { c: ["Biologics", "See table below"], node: "rx-asthma-biologic", role: "second", why: "Severe type 2 asthma" }
      ]}}
    ]},
    { type: "treatment", title: "GINA steps", src: "p.775–776", wide: true, steps: [
      { decision: "How uncontrolled?", branches: [
        { label: "Step 1 — symptoms <2×/month", steps: [{ t: "==AIR==: as-needed low-dose ICS-formoterol (budesonide-formoterol 160/4.5 µg)", node: "rx-ics-laba", role: "first", type: "treatment", why: "GINA step 1" }] },
        { label: "Step 2 — >2×/month or ≥1 exacerbation", steps: [{ t: "==AIR== (used more often)", node: "rx-ics-laba", role: "first", type: "treatment", why: "GINA step 2" }] },
        { label: "Step 3 — most days, night ≥1×/week", steps: [{ t: "==MART==: daily low-dose ICS-formoterol + same inhaler as needed", node: "rx-ics-laba", role: "first", type: "treatment", why: "GINA step 3" }] },
        { label: "Step 4 — poor control on step 3", steps: [{ t: "MART with ==medium-dose== ICS-formoterol", node: "rx-ics-laba", role: "second", type: "treatment", why: "GINA step 4" }] },
        { label: "Step 5 — severe despite step 4", steps: [{ t: "High-dose ICS-formoterol ± ==biologic add-on==", node: "rx-asthma-biologic", role: "second", type: "treatment", why: "GINA step 5" }] }
      ]},
      { mnemonic: "AIR for 1-2 · MART for 3-4-5", t: "Anti-Inflammatory Reliever vs Maintenance And Reliever Therapy" }
    ]},
    { type: "treatment", title: "Biologics compared", src: "p.775–776", items: [
      { table: { head: ["Drug", "Target", "Best for", "Route · frequency"], rows: [
        ["==Omalizumab==", "IgE", "Allergic (IgE >30 IU/mL)", "SC · 2–4 wk"],
        ["Mepolizumab", "IL-5", "Eosinophilic", "SC · 4 wk"],
        ["Reslizumab", "IL-5", "Eosinophilic", "==IV== · 4 wk"],
        ["Benralizumab", "IL-5 receptor", "Eosinophilic (fast depletion)", "SC · 4–8 wk"],
        { c: ["==Dupilumab==", "IL-4Rα (IL-4 & IL-13)", "Allergic + eosinophilic (eos >300, >2 steroid courses)", "SC · 2 wk"], verify: "Notes' biologics table prints 'IL-4 & IL-3' for dupilumab; the text above says IL-4/IL-13 via IL-4Rα. IL-3 is a typo." },
        ["Tezepelumab", "TSLP (upstream)", "==Type 2 and non-type 2==", "SC · 4 wk"]
      ]}, node: "rx-asthma-biologic", role: "second", why: "Severe asthma biologics" },
      { mnemonic: "Oma = IgE · Mepo/Res/Benra = IL-5 · Dupi = Double (4 & 13) · Teze = Top (TSLP)" }
    ]},
    { type: "followup", title: "Special asthma & hypersensitivity pneumonitis", src: "p.776–777", items: [
      { t: "Exercise-induced → occasional exercise: ICS/LABA · regular exercise: ==LTRA==", node: "rx-ltra", role: "first", why: "Exercise-induced asthma" },
      "Aspirin-induced → avoid drug · desensitisation",
      { h: "Hypersensitivity pneumonitis" },
      "Non-asthmatic extrinsic allergic alveolitis · IgG antibodies",
      "Farmer's lung (thermophilic actinomycetes) · bird fancier · hot tub · woodworker",
      { t: "Diagnosis → clinical prediction rule (SOB, bilateral crepts) · treat with ==steroids==", node: "rx-steroids", role: "first", why: "Hypersensitivity pneumonitis", see: "ild" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.778", items: [
      { t: "14-y, monosyllables, RR 40, SaO₂ 85% → NOT useful: ==IV aminophylline== (c)", role: "hy" },
      { t: "Spirometry FEV₁/FVC 57% → 60.5%, FEV₁ 2.0 → 2.3 L (+300 mL, 15%) → ==asthma== (a)", node: "bed-pft", role: "dx", why: "MCQ: reversible obstruction" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 770–778 (Bronchial Asthma). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
