/* Diabetes Mellitus — Part 1. Primary source: PrepLadder notes PDF pp. 223–230.
   Mnemonics are memory aids written for this chart (not from the notes). */
MF.addTopic({
  id: "dm-1",
  title: "Diabetes Mellitus — Part 1",
  aka: ["DM", "T1DM", "T2DM", "LADA", "MODY", "prediabetes", "HbA1c", "ADA criteria", "HOMA-IR", "acanthosis nigricans"],
  oneLine: "Diagnose (ADA cut-offs) → type it (T1 · LADA · T2 · MODY · secondary) → type-specific 1st-line drug → screen, remission, complications.",
  flow: ["Symptoms or high-risk screen", "ADA cut-offs: FPG · OGTT · HbA1c · RBS", "Type it: antibodies · C-peptide · genes", "Type-specific 1st-line Rx", "Prevent micro (A1c) & macro (BP)"],
  related: ["dm-2", "dka-hhs", "cushing", "adrenal", "pnet", "ant-pituitary"],
  bubbles: [
    { type: "definition", title: "Big picture", src: "p.223–224", items: [
      "DM = blood glucose **above ADA cut-offs** (see Diagnosis)",
      "Prediabetes = the grey zone between normal and DM",
      { t: "M/c type → ==Type 2 DM== (insulin resistance)", role: "hy" },
      "#1 killer in DM → ++cardiovascular death++ (DM speeds atherosclerosis)",
      { t: "Sudden death in DM → ==silent MI==", role: "danger" },
      { h: "4 families of diabetes" },
      "T1DM — autoimmune, child",
      "T1.5 = ++LADA++ — autoimmune, adult",
      "T2DM — insulin resistance, adult",
      "Specific types — MODY · pancreas damage · hormones · drugs"
    ]},
    { type: "etiology", title: "Etiology — who gets which type", src: "p.224–228", items: [
      { h: "T1DM — autoimmune β-cell kill" },
      { t: "Anti-islet antibodies destroy β-cells", node: "lab-islet-ab", why: "Positive in T1DM" },
      "~**80% destroyed** → insulinopenia (↓ insulin on RIA)",
      { t: "HLA link: ==HLA-DQ1 0301 & 0302== (m/c, as in notes)", verify: "Notes write 'HLADQ1 0301 and 0302'. Standard texts describe HLA-DR3/DR4 with DQ2/DQ8 (DQB1*0302). Confirm the allele naming in Davidson before quoting it." },
      "++Defective CTLA-4 gene++",
      "Fulminant DM → virus hits pancreas (++mumps, rubella++)",
      { t: "Part of autoimmune polyendocrine syndrome (type 1 & 2)", node: "con-aps", why: "T1DM is a component" },
      { t: "++Bronze diabetes++ → thalassaemic child on PRBC without chelation", node: "con-iron-overload", why: "Transfusional iron destroys β-cells", sub: ["Skin → bronzing", "Pancreas → β-cell loss (DM1)", "Liver → cirrhosis"] },
      { h: "LADA (T1.5) — slow autoimmune, adult" },
      { t: "Anti-islet / ==anti-GAD== positive", node: "lab-islet-ab", why: "Positive in LADA" },
      { h: "T2DM — resistance, not destruction" },
      "Polygenic + multifactorial",
      { t: "Insulin levels are ==HIGH== (resistant tissues)", node: "con-insulin-resistance", why: "Core defect of T2DM" },
      "Centripetal obesity",
      { h: "Specific (secondary) types" },
      "Monogenic → ++MODY++ (autosomal dominant)",
      "Exocrine pancreas loss → cystic fibrosis · chronic pancreatitis (+ malabsorption)",
      { t: "Endocrinopathies → excess of an anti-insulin hormone", see: "cushing" },
      { mnemonic: "4 ANTI-INSULIN HORMONES", t: "too much of any → diabetes", lines: [["GH", "Acromegaly"], ["Cortisol", "Cushing syndrome"], ["Catechol", "Phaeochromocytoma"], ["Glucagon", "Glucagonoma"]] },
      { t: "Drugs that cause DM", node: "rx-steroids", why: "Drug-induced (secondary) diabetes" },
      { mnemonic: "CAMPS + TS", t: "drugs that raise sugar", lines: [["C", "Calcineurin inhibitors"], ["A", "Antipsychotics"], ["M", "mTOR inhibitors"], ["P", "Propranolol"], ["S", "Steroids"], ["T", "Thiazides"], ["S", "Statins"]] }
    ]},
    { type: "patho", title: "Pathophysiology", src: "p.223, 227–228", items: [
      { h: "T1DM — 3 stages (autoimmunity + β-cell loss in all)" },
      { table: { head: ["Stage", "Sugar", "Symptoms"], rows: [
        ["1", "Normal", "None"],
        ["2", "==Dysglycaemia==", "None"],
        { c: ["3", "Hyperglycaemia", "==Present=="], hl: true }
      ]}},
      { mnemonic: "N → D → S", t: "Normal sugar → Dysglycaemia → Symptoms" },
      { h: "T2DM — fat signals" },
      { chain: ["Centripetal obesity", "↑ adipokines", "↓ adiponectin", "Insulin resistance"], node: "con-insulin-resistance", why: "Adipokine excess, adiponectin deficiency" },
      "==Adiponectin = 'guardian angel against obesity'== (↓ in T2DM)",
      { h: "Measuring insulin resistance" },
      { t: "==HOMA-IR== = fasting glucose (mmol/L) × fasting insulin (mIU/L) ÷ **22.5**", node: "lab-insulin", role: "dx", why: "HOMA-IR >2 = insulin resistance" },
      "HOMA-IR **>2** → insulin resistance",
      "Fasting insulin is measured by ++RIA++",
      "Other indices: QUICKI · Matsuda ('Mitsuda' in notes)"
    ]},
    { type: "clinical", title: "Clinical features", src: "p.223–224, 228", items: [
      { h: "Classic (measurable) triad" },
      "Polyuria → urine **>3 L/day**",
      "Polydipsia → water **>6 L/day**",
      "Weight loss",
      { mnemonic: "3 OUT · 6 IN", t: "pee >3 L, drink >6 L" },
      { t: "==Polyphagia is NOT classic== (can't be measured)", role: "hy" },
      { h: "Other presentations" },
      "Recurrent UTI / vulvovaginitis",
      "Many are **asymptomatic**",
      { h: "Acanthosis nigricans" },
      { t: "Dark velvety skin → back of neck, axilla", node: "con-acanthosis", why: "Skin marker of insulin resistance" },
      "Insulin resistance → T2DM · PCOD · metabolic syndrome",
      "Internal malignancy sign → Ca pancreas · Ca colon · stomach",
      { h: "Think MODY when…" },
      "DM at **≤30 y**",
      "DM at ≤45 y **without** obesity / insulin resistance",
      "DM at ≤45 y + family history in **≥2 generations** (AD)",
      "…and **no** DKA, **no** islet antibodies, C-peptide still present after the ~3-y honeymoon"
    ]},
    { type: "investigation", title: "Investigations — one table", src: "p.224–226, 228–229", wide: true, items: [
      { table: { head: ["Test", "Normal", "Diabetes / finding", "Use"], rows: [
        { c: ["Fasting plasma glucose", "{N:lab-fpg}", "**≥126 mg/dL** · IFG 100–125", "Diagnose + screen"], node: "lab-fpg", role: ["dx", "screen"], why: "DM ≥126 mg/dL; IFG 100–125" },
        { c: ["2-h PG after 75 g OGTT", "{N:lab-ogtt}", "**>200** · IGT 140–199", "Diagnose"], node: "lab-ogtt", role: "dx", why: "DM >200 mg/dL; IGT 140–199" },
        { c: ["Random blood sugar", "{N:lab-rbs}", "**>200 + symptoms**", "Diagnose only if symptomatic"], node: "lab-rbs", role: "dx", why: ">200 mg/dL with symptoms / crisis" },
        { c: ["==HbA1c== (lavender top)", "{N:lab-hba1c}", "**≥6.5%** · prediabetes 5.7–6.4%", "==IOC / best test== · long-term control (8–12 wk)"], node: "lab-hba1c", role: ["ioc", "monitor"], why: "IOC: ≥6.5% diagnostic; reflects 8–12 weeks", hl: true },
        { c: ["Fructosamine / glycated albumin", "{N:lab-fructosamine}", "Raised", "==Short-term== control (2–3 wk)"], node: "lab-fructosamine", role: "monitor", why: "Short-term (2–3 wk) glycaemic control" },
        { c: ["Post-prandial glucose", "{N:lab-ppbs}", "—", "==Monitoring only, never diagnosis=="], node: "lab-ppbs", role: "monitor", why: "Follow-up of known DM" },
        { c: ["C-peptide", "{N:lab-cpeptide}", "LADA: <0.3 vs >0.7 mmol/L", "Picks LADA therapy"], node: "lab-cpeptide", role: "dx", why: "LADA: <0.3 → insulin; >0.7 → metformin" },
        { c: ["Islet Ab (ICA, anti-GAD)", "{N:lab-islet-ab}", "+ in T1DM & LADA", "Autoimmune vs not"], node: "lab-islet-ab", role: "dx", why: "Separates T1DM/LADA from T2DM/MODY" },
        { c: ["Fasting insulin (RIA)", "{N:lab-insulin}", "↑ T2DM · ↓ T1DM/LADA", "Insulin resistance (HOMA-IR)"], node: "lab-insulin", role: "dx", why: "High in T2DM, low in T1DM" },
        { c: ["Genetic testing", "—", "MODY gene", "Confirms MODY"], node: "lab-genetic", role: "confirm", why: "Confirms MODY (m/c MODY 3, HNF-1α, chr 12)" }
      ]}},
      "† = standard reference range, not printed in the notes",
      { h: "HbA1c — must-know" },
      "eAG = **28.7 × HbA1c − 46.7** (or HbA1c × 21 — not routine)",
      "Retrospective → **not affected by the last meal**",
      { t: "==Useless in bronze diabetes== (transfused RBCs → ↓ HbA)", node: "lab-hba1c", role: "ci", why: "Transfused RBCs make HbA1c unreliable" },
      { mnemonic: "A1c = Ages · F = Fortnights", t: "HbA1c → 8–12 weeks; Fructosamine → 2–3 weeks" }
    ]},
    { type: "diagnosis", title: "Diagnosis (ADA 2023) & typing", src: "p.224–225, 229", wide: true, items: [
      { table: { caption: "ADA cut-offs (mg/dL)", head: ["Test", "Normal", "Prediabetes", "Diabetes"], rows: [
        ["Fasting PG", "<100", "100–125 (IFG)", "**≥126** (>7 mmol/L)"],
        { c: ["2-h PG (75 g)", "<140", "140–199 (IGT)", "**>200** (>11.1 mmol/L)"], verify: "Notes print '>200'; ADA states ≥200 mg/dL. Check which your exam expects." },
        ["HbA1c", "≤5.6%", "5.7–6.4%", "**≥6.5%**"]
      ]}},
      { mnemonic: "100 · 126 · 140 · 200 · 6.5", t: "the five numbers of DM diagnosis" },
      { h: "Who is diagnosed how" },
      "Symptoms / crisis → **RBS >200** = DM",
      "No symptoms → FPG >126 + 2-h >200, **or** HbA1c ≥6.5%",
      { table: { caption: "Type comparison (summary table)", head: ["", "T1DM", "T2DM", "LADA", "MODY"], rows: [
        ["Onset", "Child", "Adult", "Adult", "Adult (peak 25 y)"],
        ["Cause", "Autoimmune", "Polygenic", "Autoimmune", "AD gene"],
        ["Family h/o", "<15%", ">50%", "Rare", "==>90%=="],
        ["Islet Ab", "**+**", "−", "**+**", "−"],
        ["β-cell mass", "↓↓", "OK", "↓", "Normal"],
        { c: ["1st-line Rx", "Insulin", "Metformin + GLP-1 RA", "By C-peptide", "==Glipizide (SU)=="], hl: true }
      ]}},
      { h: "MODY facts" },
      "Inheritance → **autosomal dominant**",
      "**14 types**",
      { t: "M/c (India/USA) → ==MODY 3 = HNF-1α gene on chromosome 12==", node: "lab-genetic", role: "confirm", why: "MODY confirmation by genetic testing" },
      { mnemonic: "MODY 3 → 1 → 12", t: "MODY 3 · HNF-1α · chromosome 12" }
    ]},
    { type: "treatment", title: "Management flowchart — type → 1st-line drug", src: "p.223, 228–229", steps: [
      { t: "Diabetes confirmed → check islet antibodies (ICA / anti-GAD)", node: "lab-islet-ab", role: "dx", type: "investigation", why: "Autoimmune vs non-autoimmune" },
      { decision: "Antibody + age / phenotype", branches: [
        { label: "Ab + · child → T1DM", steps: [
          { t: "**Insulin**", node: "rx-insulin", role: "first", type: "treatment", why: "T1DM: insulinopenia" }
        ]},
        { label: "Ab + · adult → LADA", steps: [
          { t: "Measure C-peptide", node: "lab-cpeptide", role: "dx", type: "investigation", why: "Selects LADA therapy" },
          { decision: "C-peptide", branches: [
            { label: "<0.3 mmol/L", steps: [{ t: "**Insulin**", node: "rx-insulin", role: "first", type: "treatment", why: "LADA with low C-peptide" }] },
            { label: ">0.7 mmol/L", steps: [{ t: "**Metformin**", node: "rx-metformin", role: "first", type: "treatment", why: "LADA with preserved C-peptide" }] }
          ]},
          { t: "==No sulfonylureas== (β-cells failing)", node: "rx-sulfonylurea", role: "ci", type: "emergency", why: "LADA: β-cell mass ↓" }
        ]},
        { label: "Ab − · obese adult → T2DM", steps: [
          { t: "**Metformin + GLP-1 RA**", node: ["rx-metformin", "rx-glp1ra"], role: "first", type: "treatment", why: "T2DM first-line (summary table)" },
          { t: "Has ASCVD? → GLP-1 RA (==semaglutide==) **or** SGLT2i (==empagliflozin / canagliflozin==) with proven CV benefit", node: ["rx-glp1ra", "rx-sglt2i", "con-ascvd"], role: "first", type: "treatment", why: "DM + ASCVD: agents that lower CV mortality" }
        ]},
        { label: "Ab − · young · ≥2 generations → MODY", steps: [
          { t: "Genetic testing", node: "lab-genetic", role: "confirm", type: "investigation", why: "Confirms MODY" },
          { t: "**Sulfonylurea (glipizide)** — β-cell mass normal", node: "rx-sulfonylurea", role: "first", type: "treatment", why: "MODY: β-cell mass preserved" }
        ]}
      ]},
      { t: "ASCVD = MI, stroke, revascularisation (± TIA, unstable angina, amputation, CAD)", type: "shared" },
      { t: "SGLT2i also cause **salt loss**", node: "rx-sglt2i", role: "hy", type: "pearl", why: "Mechanism behind BP/CV benefit" }
    ]},
    { type: "complication", title: "Complications — micro vs macro", src: "p.226–227", wide: true, items: [
      { table: { head: ["", "Microvascular (small vessels)", "Macrovascular (big vessels)"], rows: [
        ["Organs", "Nerve · retina · kidney", "Heart · limbs"],
        ["M/c", "==Diabetic neuropathy== (unmyelinated C fibres)", "Coronary artery disease"],
        ["Key fact", "Blindness risk **25×**", "PAD **100×** → digital gangrene"],
        ["End-stage", "Nephropathy → ESRD → kidney transplant", "Accelerated atherosclerosis"],
        ["Onset", "T1DM ~**5 y** · T2DM **15–20 y**", "—"],
        { c: ["**Best prevention**", "==Strict HbA1c control==", "==Strict BP control=="], hl: true }
      ]}},
      { mnemonic: "Small vessels → Sugar · Big vessels → BP", t: "how to prevent each" },
      { t: "Strict glycaemic control prevents microvascular disease", node: "lab-hba1c", role: "monitor", why: "Microvascular prevention" },
      { t: "Macrovascular disease = ASCVD", node: "con-ascvd", why: "Macrovascular complication of DM" },
      "CGM devices → hoped to cut long-term complications"
    ]},
    { type: "followup", title: "Screening & remission", src: "p.226", items: [
      { h: "Screen these high-risk people" },
      { mnemonic: "CHOP-FAT", lines: [["C", "CVD history"], ["H", "HTN >130/80 or on drugs"], ["O", "Obesity BMI >30 (overweight >25)"], ["P", "PCOS / acanthosis nigricans"], ["F", "Family history of DM"], ["A", "Activity low (inactive)"], ["T", "TG >250 or HDL <35"]] },
      { t: "Acanthosis = a screening trigger", node: "con-acanthosis", why: "Marks a high-risk group for screening" },
      { h: "How often" },
      { table: { head: ["Group", "Screen"], rows: [
        ["Prediabetes (IFG/IGT, A1c 5.7–6.4%)", "**Every year**"],
        ["Past gestational DM", "**Every 3 years**"],
        { c: ["General population", "From **35 y** (ADA) · 45 y (Harrison 21e)"], verify: "Notes give both ages (ADA 35 vs Harrison 45). Know which source your exam follows." }
      ]}},
      { mnemonic: "1 · 3 · 35", t: "prediabetes yearly · GDM 3-yearly · everyone from 35" },
      { h: "Remission" },
      { t: "HbA1c **<6.5% for 3 months** with **no** drugs", node: "lab-hba1c", role: "monitor", why: "Defines remission (<6.5% × 3 months off drugs)" },
      { t: "Achieved with: metformin · hypocaloric diet with weight loss >7% · pioglitazone", node: ["rx-metformin", "rx-pioglitazone"], role: "prevent", why: "Listed for remission / prevention",
        verify: "Notes list 'patient characteristics' (25–59 y with BMI ≥25, FPG >110, HbA1c >6%, prior GDM → ↑ chance of DM) beside these measures — this reads like diabetes-prevention criteria rather than remission. Verify the framing." }
    ]},
    { type: "pearl", title: "Exam pearls", src: "p.223–229", items: [
      { t: "Long-term control → **HbA1c** · short-term → **fructosamine** · PPBS → monitoring only", role: "hy" },
      { t: "Polyphagia is **not** a classic symptom", role: "hy" },
      { t: "Insulin level: **T2DM high** · T1DM & LADA low", role: "hy" },
      { t: "Sulfonylurea: **yes in MODY** (β-cells fine) · **no in LADA** (β-cells dying)", role: "hy" },
      { t: "Sudden death in DM = silent MI", role: "hy" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.230", items: [
      { t: "Best test for long-term control → **HbA1c** (glycosylated Hb)", node: "lab-hba1c", role: "ioc", why: "MCQ: best long-term control test" },
      { t: "T1DM stage 3 → **autoimmune + / dysglycaemia** (answer c)", verify: "The stage table calls stage 3 'symptomatic hyperglycaemia'; the keyed option says 'dysglycaemia'. Learn the option wording." }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes ('Medicine Prep X'), PDF pp. 223–230 (Diabetes Mellitus Part 1).",
    "Mnemonics are memory aids written for this chart, not from the notes.",
    "† normal values are standard reference ranges not printed in the notes. Davidson's / Boloor's were not available and were not used; ⚠ VERIFY items are in REVIEW-FLAGS.md."
  ]
});
