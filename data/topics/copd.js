/* COPD. Primary source: PrepLadder notes PDF pp. 779–786.
   BODE is from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "copd",
  title: "COPD",
  aka: ["chronic obstructive pulmonary disease", "emphysema", "chronic bronchitis", "GOLD", "GOLD ABE", "mMRC", "CAT", "alpha-1 antitrypsin", "SERPINA1", "pink puffer", "blue bloater", "LTOT", "NIV", "BiPAP", "E-COPD", "PRISm", "BODE", "roflumilast"],
  oneLine: "Symptoms + risk factor + post-BD FEV₁/FVC <0.7 → GOLD grade (FEV₁) and ABE group (exacerbations, mMRC/CAT) → LABA → LABA+LAMA → +ICS (eos >300); LTOT cuts mortality; E-COPD → NIV.",
  flow: ["Smoker / biomass cook: chronic cough, dyspnoea", "Post-BD FEV₁/FVC <0.7 (fixed) → GOLD 1–4", "ABE group: exacerbations + mMRC / CAT", "A: LABA · B: LABA+LAMA · E: + ICS (eos >300)", "Stop smoking · LTOT · vaccines · E-COPD → NIV"],
  related: ["asthma", "resp-failure", "abg-2", "pneumothorax", "pleural-effusion"],
  bubbles: [
    { type: "diagnosis", title: "Diagnostic criteria", src: "p.779", items: [
      { table: { head: ["Symptoms", "Risk factors", "Evidence"], rows: [
        { c: ["Chronic cough · progressive dyspnoea · sputum · LRTI history", "Smoking · indoor pollution · α1-antitrypsin deficiency", "==Post-BD FEV₁/FVC <0.7=="], node: "bed-pft", role: "dx", why: "COPD spirometric confirmation", hl: true }
      ]}},
      { mnemonic: "COPD = Cough + Cigarette + Cut-off 0.7", t: "all three needed" }
    ]},
    { type: "etiology", title: "Causes & α1-antitrypsin", src: "p.779", items: [
      { table: { caption: "Etiotypes", head: ["Type", "Cause"], rows: [["COPD-G", "Genetic"], ["COPD-C", "Cigarettes"], ["COPD-P", "Pollution"], ["COPD-I", "Childhood infection"], ["COPD-D", "Developmental lung defect"], ["COPD-A", "With asthma"]] } },
      { mnemonic: "G-C-P-I-D-A = 'Good Cigarettes Pollute Its Delicate Airways'" },
      { h: "α1-antitrypsin deficiency" },
      "==SERPINA1 gene, chromosome 14== · autosomal ==co-dominant==",
      "Z allele → marked ↓ · null allele → absent → ==panacinar emphysema==",
      "Treat → weekly α1-antitrypsin infusions"
    ]},
    { type: "diagnosis", title: "GOLD grade · mMRC · CAT · ABE", src: "p.779–781", wide: true, items: [
      { table: { caption: "GOLD (FEV₁/FVC <0.7 for all)", head: ["Grade", "Severity", "FEV₁ % predicted"], rows: [["1", "Mild", "**≥80**"], ["2", "Moderate", "**50–79**"], ["3", "Severe", "**30–49**"], { c: ["4", "Very severe", "**<30**"], role: "danger" }] } },
      { mnemonic: "80 · 50 · 30", t: "GOLD FEV₁ breaks" },
      { table: { caption: "mMRC breathlessness", head: ["Grade", "Breathless when…"], rows: [["0", "Strenuous exercise only"], ["1", "Walking fast / uphill"], ["2", "Walks slower than peers"], ["3", "Stops after ~100 yards / few minutes"], ["4", "Too breathless to leave house / dress (≈ NYHA 3)"]] } },
      "CAT → 8 questions × 0–5 → score **0–40**",
      { table: { caption: "GOLD ABE groups", head: ["Group", "Who", "Treat"], rows: [
        { c: ["**A**", "0–1 moderate exacerbation · mMRC 0–1 / CAT <10", "Single bronchodilator (LABA)"], node: "rx-ics-laba", role: "first", why: "GOLD A" },
        { c: ["**B**", "0–1 moderate exacerbation · mMRC ≥2 / CAT ≥10", "LABA + LAMA"], node: "rx-lama", role: "first", why: "GOLD B" },
        { c: ["**E**", "≥2 moderate exacerbations or ≥1 hospitalisation", "LABA + LAMA (+ ICS if eos >300)"], node: ["rx-lama", "rx-ics-laba"], role: "first", why: "GOLD E", hl: true }
      ]}},
      { t: "Severity biomarker → ==eosinophil count >300/µL → add ICS==", node: "lab-eosinophil", role: "monitor", why: "ICS decision in COPD" }
    ]},
    { type: "patho", title: "Emphysema vs chronic bronchitis", src: "p.781–782", wide: true, items: [
      { table: { head: ["", "Emphysema", "Chronic bronchitis"], rows: [
        ["Mechanism", "Tar → alveolar macrophage → ==elastase== → respiratory bronchioles → ==centriacinar== emphysema", "Tar → ciliary damage → stasis → infection → excess mucus → airway block"],
        ["Result", "Blebs → air trapping → ==RV ↑== · scarring → ==DLCO ↓== · fixed FEV₁", "Hypoventilation · hypoxia → EPO ↑ → ==secondary polycythaemia=="],
        ["Look", "==Pink puffer== (no central cyanosis)", "==Blue bloater== (central cyanosis)"],
        { c: ["CXR", "Flat diaphragm · ==tubular heart== · blebs/bullae", "↑ bronchovascular markings"], node: "img-cxr", role: "dx", why: "COPD CXR pattern" },
        { c: ["HRCT", "Bulla (merged blebs) → rupture → ==secondary pneumothorax==", "—"], node: "img-hrct", role: "dx", why: "Emphysema bullae", see: "pneumothorax" }
      ]}}
    ]},
    { type: "clinical", title: "Clinical features", src: "p.782–783", items: [
      "Smoker or rural Indian housewife (biomass) → chronic cough, dyspnoea, sputum",
      "Better when bracing arms (shopping cart, treadmill) · worse if not leaning forward",
      { t: "Weight loss, ==cachexia → bad prognosis==, temporal wasting", role: "danger" },
      { table: { head: ["Sign", "Meaning"], rows: [
        ["==Barrel chest==", "AP > transverse diameter"],
        ["==Tripod / orthopnoeic position==", "Accessory muscles"],
        ["==Hoover sign==", "Paradoxical inward rib movement on deep inspiration"],
        { c: ["Cor pulmonale", "==M/c complication overall== → RVF"], role: "danger" },
        { c: ["==Clubbing absent==", "If present → work up ==lung cancer=="], hl: true }
      ]}}
    ]},
    { type: "investigation", title: "Work-up", src: "p.783", items: [
      { table: { head: ["Test", "Finding", "Normal"], rows: [
        { c: ["Spirometry", "FEV₁/FVC <0.7 · RV ↑, TLC ↑, FRC ↑", "{N:bed-pft}"], node: "bed-pft", role: "dx", why: "COPD spirometry" },
        { c: ["ABG (exacerbation)", "pCO₂ ==>45 mmHg==", "{N:lab-abg}"], node: "lab-abg", role: "dx", why: "Hypercapnia in E-COPD", see: "abg-2" },
        { c: ["CBC", "Hb ↑, Hct ↑, RBC ↑", "{N:lab-cbc}"], node: "lab-cbc", role: "dx", why: "Secondary polycythaemia" },
        ["AAT level / genotype", "Young / panacinar disease", "—"]
      ]}}
    ]},
    { type: "treatment", title: "Stable COPD — flowchart", src: "p.783–784", steps: [
      { t: "==Stop smoking== → nicotine replacement (buccal spray) · varenicline (α4β2 partial agonist)", type: "treatment" },
      { t: "Vaccines → influenza · COVID-19 · pneumococcal · pertussis · shingles · RSV", role: "prevent", type: "followup" },
      { decision: "ABE group", branches: [
        { label: "A", steps: [{ t: "LABA (indacaterol, olodaterol)", node: "rx-ics-laba", role: "first", type: "treatment", why: "GOLD A" }] },
        { label: "B", steps: [{ t: "LABA + LAMA (tiotropium, umeclidinium, revefenacin)", node: "rx-lama", role: "first", type: "treatment", why: "GOLD B" }] },
        { label: "E", steps: [{ t: "LABA + LAMA + ICS (eos >300) — ==single inhaler==; rinse mouth", node: ["rx-lama", "rx-ics-laba"], role: "first", type: "treatment", why: "GOLD E triple therapy" }] }
      ]},
      { decision: "Still exacerbating on…", branches: [
        { label: "LABA/LAMA, eos >300", steps: [{ t: "Triple therapy → still >300 → add ==dupilumab==", node: "rx-asthma-biologic", role: "second", type: "treatment", why: "Eosinophilic COPD" }] },
        { label: "LABA+LAMA, eos <100", steps: [{ t: "==Roflumilast== (FEV₁ <50% + chronic bronchitis) · ==azithromycin== (former smokers)", node: ["rx-roflumilast", "rx-azithromycin"], role: "second", type: "treatment", why: "Non-eosinophilic exacerbator" }] },
        { label: "Persistent dyspnoea", steps: [{ t: "==Ensifentrine== (PDE3 + 4)", node: "rx-roflumilast", role: "second", type: "treatment", why: "Dyspnoea despite LABA+LAMA" }] }
      ]},
      { t: "==LTOT → greatest mortality reduction==: 1–2 L/min nasal ≥16 h/day, SpO₂ >90% · indication ==PaO₂ <55 / SaO₂ <88%==, or PaO₂ 55–60 with right heart failure", node: "proc-ltot", role: "def", type: "treatment", why: "LTOT reduces mortality" },
      { t: "Lung-volume reduction → VATS bullectomy", role: "def", type: "treatment" }
    ]},
    { type: "emergency", title: "Exacerbation (E-COPD) & NIV", src: "p.784–785", steps: [
      { t: "Moderate → any 3: RR >24 · HR >95 · SaO₂ <92% on air · CRP >10", node: "lab-crp", role: "dx", type: "diagnosis", why: "E-COPD severity" },
      { t: "Severe → ==pCO₂ >45 + pH <7.35== (respiratory acidosis)", node: "lab-abg", role: "danger", type: "emergency", why: "Severe exacerbation" },
      { t: "==Non-invasive ventilation (BiPAP)==", node: "proc-niv", role: "emerg", type: "emergency", why: "Hypercapnic E-COPD" },
      { t: "NIV also for → acute pulmonary oedema · weaning (SIMV) · myasthenic crisis · severe COVID-19", type: "pearl" },
      { t: "==NIV absolute C/I== → unresponsive · can't protect airway · facial trauma · apnoea · haemodynamic instability · severe GI bleed", node: "proc-niv", role: "ci", type: "emergency", why: "NIV contraindications" },
      { mnemonic: "45 & 7.35 → BiPAP alive" }
    ]},
    { type: "followup", title: "PRISm & BODE", src: "p.785", items: [
      { t: "==PRISm== → FEV₁/FVC >0.7 but FEV₁ <80% · former smokers, low BMI · ~30% → COPD in 5 years", role: "hy" },
      { mnemonic: "BODE (notes)", t: "predicts mortality", lines: [["B", "BMI"], ["O", "Obstruction"], ["D", "Dyspnoea (mMRC)"], ["E", "Exercise capacity"]] }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.786", items: [
      { t: "Biomarker for severity + start ICS → ==eosinophils >300== (b)", node: "lab-eosinophil", role: "monitor", why: "MCQ" },
      { t: "Start NIV in severe E-COPD → ==pCO₂ >45 with pH <7.35== (a)", node: "proc-niv", role: "emerg", why: "MCQ" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 779–786 (COPD). BODE from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
