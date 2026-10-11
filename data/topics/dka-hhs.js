/* Diabetic Ketoacidosis & Hyperglycaemic Hyperosmolar Coma. Primary source: PrepLadder notes PDF pp. 242–248.
   Mnemonics are memory aids written for this chart (not from the notes). */
MF.addTopic({
  id: "dka-hhs",
  title: "Diabetic Ketoacidosis & Hyperosmolar Coma",
  aka: ["DKA", "HHS", "HONK", "hyperglycaemic hyperosmolar state", "euglycaemic DKA", "lactic acidosis", "ISPAD", "cerebral oedema"],
  oneLine: "DKA triad → ISPAD fluids → K⁺ → insulin; separate DKA, HHS, lactic acidosis and euglycaemic DKA in an unconscious diabetic.",
  flow: ["Unconscious / vomiting diabetic", "Triad: sugar >250 · ketones · acidosis (ABG)", "Grade + differentiate (HHS · lactic · euglycaemic)", "Fluids → K⁺ → insulin infusion (no bicarbonate)", "Hourly sugar · fluids · neuro → SC insulin"],
  related: ["dm-1", "dm-2", "abg-2"],
  bubbles: [
    { type: "definition", title: "DKA = triad", src: "p.242, 245", items: [
      { mnemonic: "S-K-A", t: "Sugar · Ketones · Acid", lines: [["S", "RBS **>250 mg/dL**"], ["K", "Ketones: Ketostix / ==plasma β-OH butyrate ↑=="], ["A", "ABG: ==pH <7.25–7.3 · HCO₃⁻ <15–18 mEq/L=="]] },
      { table: { head: ["Triad part", "Test", "Normal"], rows: [
        { c: ["Sugar >250", "RBS", "{N:lab-rbs}"], node: "lab-rbs", role: "dx", why: "DKA triad: glucose >250 mg/dL" },
        { c: ["Ketones", "β-OH butyrate · urine Ketostix", "{N:lab-bohb}"], node: ["lab-bohb", "lab-urine-ketones"], role: "dx", why: "DKA triad: ketonaemia / ketonuria" },
        { c: ["Acid", "ABG pH · HCO₃⁻", "pH 7.35–7.45 · HCO₃⁻ 22–26"], node: "lab-abg", role: "dx", why: "DKA triad: metabolic acidosis" }
      ]}}
    ]},
    { type: "etiology", title: "Triggers & mortality", src: "p.244, 231", items: [
      { mnemonic: "5 I's", t: "what tips a diabetic into DKA", lines: [["I", "==Infection== (pneumonia, UTI)"], ["I", "Myocardial ==Infarction== (T2DM)"], ["I", "==Insulin== missed / pump failure"], ["I", "Intoxication — cocaine"], ["I", "Incision — surgery"]] },
      "Classic patient → T1DM child who stopped insulin, or undiagnosed child with pneumonia",
      { table: { head: ["Age", "Mortality"], rows: [[">40 y", "**>20%**"], ["<40 y", "~5%"]] } }
    ]},
    { type: "patho", title: "Pathophysiology", src: "p.244, 242", items: [
      { chain: ["Insulin deficiency", "Fat burnt (weight loss)", "Free fatty acids", "Ketones", "pH ↓"] },
      { chain: ["pH ↓", "Respiratory centre", "==Kussmaul breathing=="] },
      { chain: ["Acidic blood", "BBB damage", "==Cerebral oedema==", "↓ consciousness"] },
      "Fruity breath → ketone ==acetone==",
      { t: "Ketostix reads **acetoacetate** → can be **falsely normal** (acetoacetate → acetone)", node: "lab-urine-ketones", role: "hy", why: "Ketostix misses β-OHB" }
    ]},
    { type: "clinical", title: "Clinical features", src: "p.244", items: [
      { h: "Symptoms" },
      "Nausea, vomiting → ketones hit the CTZ",
      { t: "Epigastric pain / acute abdomen → ==mimics acute pancreatitis==", role: "hy" },
      "Polyuria (osmotic diuresis) → dehydration",
      "Stupor → coma · encephalopathy",
      { h: "Signs" },
      "Fruity breath",
      "==Thready, fast pulse==",
      "↓ BP",
      "==Kussmaul breathing=="
    ]},
    { type: "investigation", title: "Work-up table", src: "p.245", wide: true, items: [
      { table: { head: ["Test", "In DKA", "Normal", "Why it matters"], rows: [
        { c: ["Plasma β-OH butyrate", "↑", "{N:lab-bohb}", "==IOC for DKA=="], node: "lab-bohb", role: "ioc", why: "IOC for DKA", hl: true },
        { c: ["Urine Ketostix", "4+", "{N:lab-urine-ketones}", "Quick screen (misses β-OHB)"], node: "lab-urine-ketones", role: "init", why: "Bedside ketone screen" },
        { c: ["RBS", "~300 mg/dL", "{N:lab-rbs}", "Hyperglycaemia"], node: "lab-rbs", role: "dx", why: "Hyperglycaemia" },
        { c: ["ABG", "pH ↓ · pCO₂ ↓ · HCO₃⁻ ↓", "{N:lab-abg}", "==Partially compensated metabolic acidosis=="], node: "lab-abg", role: "dx", why: "DKA: partially compensated metabolic acidosis", see: "abg-2" },
        { c: ["Anion gap", "↑", "{N:lab-anion-gap}", "==HAGMA=="], node: "lab-anion-gap", role: "dx", why: "DKA = high anion gap metabolic acidosis" },
        { c: ["Serum K⁺", "↓ (body deficit)", "{N:lab-potassium}", "Decides when insulin can start"], node: "lab-potassium", role: "monitor", why: "DKA: K⁺ depletion" },
        { c: ["Serum Na⁺", "↓ (solvent drag)", "{N:lab-sodium}", "==Hypertonic hyponatraemia=="], node: "lab-sodium", role: "monitor", why: "Dilutional hyponatraemia of hyperglycaemia" },
        { c: ["Kidney function", "↑", "{N:lab-renal}", "Pre-renal (dehydration)"], node: "lab-renal", role: "monitor", why: "Dehydration → pre-renal azotaemia" },
        { c: ["Amylase / lipase", "Normal or ↑", "{N:lab-amylase-lipase}", "Don't over-call pancreatitis"], node: "lab-amylase-lipase", role: "hy", why: "May be raised in DKA" },
        { c: ["TLC", "↑", "{N:lab-cbc}", "Infection trigger?"], node: "lab-cbc", role: "init", why: "Look for infective trigger" },
        { c: ["Blood culture", "—", "{N:lab-blood-culture}", "Diagnose sepsis"], node: "lab-blood-culture", role: "init", why: "Infective trigger" },
        { c: ["Mg · PO₄ · Cl⁻", "Track", "{N:lab-electrolytes}", "Shift during treatment"], node: "lab-electrolytes", role: "monitor", why: "Electrolyte shifts during DKA treatment" }
      ]}},
      "† = standard reference range, not printed in the notes",
      { t: "Sodium correction → every **100 mg/dL** sugar ↑ = Na⁺ ↓ **1.6 mEq/L**", role: "hy" }
    ]},
    { type: "diagnosis", title: "Grading & ICU", src: "p.245–246", items: [
      { table: { head: ["Grade", "pH", "β-OH butyrate"], rows: [
        ["Mild", "7.25–7.30", "3–4 mmol/L"],
        ["Moderate", "7.24–7.00", "4–8 mmol/L"],
        { c: ["Severe", "**<7.0**", "**>8 mmol/L**"], hl: true }
      ]}},
      { mnemonic: "3 · 4 · 8", t: "β-OHB cut-offs: mild 3–4 · moderate 4–8 · severe >8" },
      "Lower HCO₃⁻ → worse DKA",
      { h: "Admit to ICU if" },
      { t: "pH **<7.0**", role: "danger" },
      { t: "Extensive laboured breathing", role: "danger" },
      { t: "Impaired arousal", role: "danger" }
    ]},
    { type: "diagnosis", title: "Unconscious diabetic in ER — which one?", src: "p.243", wide: true, items: [
      { table: { head: ["Parameter (normal)", "DKA", "Lactic acidosis", "HHS", "Euglycaemic DKA"], rows: [
        ["pH (7.35–7.45)", "7.2", "7.2", "==7.38==", "7.2"],
        ["HCO₃⁻ (22–26)", "15", "15", "==24==", "15"],
        ["Ketostix", "4+", "−", "−", "4+"],
        ["β-OH butyrate", "↑", "Normal", "Normal / ↑", "↑"],
        ["RBS (mg/dL)", "250–600", "250", "==600–1200==", "==~200=="],
        { c: ["Osmolality (275–295)", "310", "300", "==330–380==", "295"], node: "lab-osmolality", role: "dx", why: "HHS osmolality 330–380; DKA mildly raised" },
        { c: ["Clue", "Classic", "==Lactate ↑==", "Very high sugar, no acid", "On ==SGLT2i=="], hl: true }
      ]}},
      { h: "Lactic acidosis" },
      { t: "Ketones normal · lactate ↑", node: "lab-lactate", role: "dx", why: "Lactic acidosis (ketones normal)" },
      "Confirm → blood culture · metagenomic sequencing · septic-shock check · KFT · lactate",
      { t: "Causes → ==metformin given despite low eGFR== · septic shock", node: "rx-metformin", role: "ci", why: "Metformin with low eGFR → lactic acidosis" },
      { h: "Euglycaemic DKA" },
      { t: "On SGLT2i (canagliflozin, empagliflozin) → glucosuria → sugar stays low", node: "rx-sglt2i", role: "hy", why: "SGLT2i glucosuria keeps glucose low despite DKA" }
    ]},
    { type: "emergency", title: "DKA management flowchart (ISPAD)", src: "p.242–246", steps: [
      { t: "DKA confirmed (sugar ↑ + ketones + HCO₃⁻ <15–18)", node: "em-dka", role: "emerg", type: "emergency", why: "Entry to DKA protocol" },
      { decision: "How sick?", branches: [
        { label: "Shock / coma", steps: [
          { t: "**Resuscitate:** airway + NG tube · 100% O₂ · ==0.9% saline 20 mL/kg bolus== — repeat until circulation restored", node: "rx-normal-saline", role: "emerg", type: "emergency", why: "DKA with shock: saline bolus" },
          { t: "Watch for cerebral injury", type: "emergency" }
        ]},
        { label: "Moderate dehydration · vomiting · not in shock", steps: [
          { t: "**IV saline 0.9%** 10–20 mL/kg over 20–30 min (repeat if needed)", node: "rx-normal-saline", role: "first", type: "treatment", why: "DKA rehydration" },
          { t: "Correct deficit over **24–48 h** · ==add K⁺ 40 mmol/L==", node: "rx-potassium", role: "first", type: "treatment", why: "DKA potassium replacement" }
        ]},
        { label: "Minimal dehydration · drinking", steps: [
          { t: "**SC insulin** + oral fluids", node: "rx-insulin", role: "first", type: "treatment", why: "Mild DKA: SC insulin" },
          { t: "No improvement → go to IV therapy", type: "shared" }
        ]}
      ]},
      { t: "==Insulin infusion 0.05–0.1 U/kg/h, start 1 h after fluids== (regular insulin IV)", node: "rx-insulin", role: "def", type: "treatment", why: "DKA insulin infusion (ISPAD)" },
      { t: "K⁺ low → **hold insulin** (notes print '<33 meq/L')", node: "lab-potassium", role: "ci", type: "emergency", why: "Low K⁺: replace before insulin", verify: "'<33 meq/L' is a typo in the notes; the intended cut-off is almost certainly 3.3 mEq/L. Confirm." },
      { t: "Sugar falls **50–100 mg/dL/h** → at **200–250** switch to ==5% dextrose + 0.45% saline==", node: "rx-dextrose", role: "adjunct", type: "treatment", why: "DKA: prevent hypoglycaemia once glucose 200–250" },
      { t: "**Hourly:** blood sugar · fluid in/out · neuro status", node: "lab-potassium", role: "monitor", type: "followup", why: "Hourly monitoring during DKA treatment" },
      { decision: "Neuro deterioration? (HI-BID)", branches: [
        { label: "Yes", steps: [{ t: "==Cerebral oedema== → urgent cerebral-injury management", type: "emergency" }] },
        { label: "No · patient eating", steps: [{ t: "Switch to **SC insulin**", node: "rx-insulin", role: "def", type: "treatment", why: "DKA resolution: SC insulin when eating" }] }
      ]}
    ]},
    { type: "emergency", title: "DKA rules to remember", src: "p.244–246", items: [
      { table: { key: true, rows: [
        { c: ["1st line", "==0.9% NS + KCl 40 mEq/L== (or RL)"], node: ["rx-normal-saline", "rx-potassium"], role: "first", why: "DKA initial fluid with potassium" },
        { c: ["TOC", "==Regular insulin infusion== (also pushes K⁺ into cells)"], node: "rx-insulin", role: "def", why: "DKA: regular insulin IV" },
        { c: ["Bicarbonate", "==No role=="], node: "rx-bicarbonate", role: "ci", why: "DKA: bicarbonate not recommended" },
        { c: ["Bolus insulin", "Not recommended"], role: "ci" },
        ["SC insulin", "OK in **mild** DKA · start once eating"],
        ["Low K⁺ causes", "Arrhythmia · cramps · respiratory muscle weakness · diaphragm paralysis"]
      ]}},
      { mnemonic: "Fluids → K → Insulin → Dextrose", t: "the order never changes; bicarbonate never joins" }
    ]},
    { type: "complication", title: "Complications & treatment traps", src: "p.242–246", items: [
      { t: "Child's #1 killer → ==cerebral oedema== (> dehydration)", role: "danger" },
      { mnemonic: "HI-BID", t: "warning signs of cerebral oedema", lines: [["H", "Headache — severe / progressive"], ["I", "Irritability"], ["B", "Bradycardia — inappropriate HR slowing"], ["I", "Incontinence — age-inappropriate"], ["D", "Decreased consciousness"]] },
      { mnemonic: "ARB", t: "adult deaths in DKA", lines: [["A", "==ARDS=="], ["R", "==Renal failure=="], ["B", "==Bowel infarction=="]] },
      { table: { caption: "Electrolytes during treatment", head: ["Ion", "Change", "Why"], rows: [
        ["Na⁺", "↓", "Solvent drag"],
        { c: ["K⁺", "↓", "Vomiting + insulin drip"], node: "lab-potassium", role: "monitor", why: "Insulin drives K⁺ into cells" },
        ["Mg²⁺ · PO₄", "↓", "On treatment"],
        { c: ["Cl⁻", "==↑==", "Excess NS → switch 0.9% → 0.45%"], hl: true },
        ["HCO₃⁻", "↓", "Hyperchloraemia"]
      ]}},
      { mnemonic: "All fall, chloride climbs", t: "electrolytes on DKA treatment" },
      { chain: ["Too much NS", "Cl⁻ excess", "Kidney pushes HCO₃⁻ into cells", "==Hyperchloraemic acidosis=="] }
    ]},
    { type: "diagnosis", title: "HHS — hyperglycaemic hyperosmolar coma", src: "p.243, 246–247", items: [
      { mnemonic: "HHS = 6 · 3 · 7", t: "sugar >600 · osmolality >330 · pH >7.3 (no acidosis)" },
      "Who → middle-aged, occult T2DM",
      { chain: ["Relative insulin lack", "Hyperglycaemia", "Osmotic diuresis", "Dehydration", "==Pre-renal AKI=="] },
      "↓ consciousness → ↓ cerebral blood flow + uraemia",
      { t: "Notes' mechanism: sugar crosses BBB → water into brain → cerebral oedema → coma", verify: "Notes attribute HHS coma to water entering the brain. Standard teaching links coma mainly to hyperosmolar brain dehydration (oedema being a risk of over-rapid correction). Verify." },
      "Triggers → MI · stroke · pneumonia (COVID-19) · surgery",
      { table: { head: ["Test", "HHS finding", "Normal"], rows: [
        { c: ["RBS", "==600–1200 mg/dL==", "{N:lab-rbs}"], node: "lab-rbs", role: "dx", why: "HHS: very high glucose" },
        { c: ["Osmolality", "==330–380==", "{N:lab-osmolality}"], node: "lab-osmolality", role: "dx", why: "HHS: osmolality 330–380", hl: true },
        { c: ["ABG", "==Normal pH, pCO₂, HCO₃⁻==", "{N:lab-abg}"], node: "lab-abg", role: "dx", why: "HHS: no acidosis" },
        { c: ["β-OH butyrate", "Normal / ↑", "{N:lab-bohb}"], node: "lab-bohb", role: "dx", why: "HHS: ketones absent or mild" },
        { c: ["NCCT head", "Normal", "—"], node: "img-ncct-head", role: "init", why: "HHS: exclude stroke as cause of coma" }
      ]}}
    ]},
    { type: "treatment", title: "HHS treatment flowchart", src: "p.247", steps: [
      { t: "==0.9% normal saline== — about **10 L over 48 h**", node: "rx-normal-saline", role: "first", type: "treatment", why: "HHS: large-volume fluid replacement" },
      { decision: "Serum Na⁺?", branches: [
        { label: ">150 mEq/L", steps: [{ t: "Switch to **0.45% saline**", node: "lab-sodium", role: "monitor", type: "treatment", why: "HHS: hypernatraemia → hypotonic saline" }] },
        { label: "≤150", steps: [{ t: "Continue 0.9% NS", type: "treatment" }] }
      ]},
      { t: "**Insulin drip** until the patient starts eating", node: "rx-insulin", role: "def", type: "treatment", why: "HHS: IV insulin until eating" }
    ]},
    { type: "pearl", title: "Exam pearls", src: "p.243–246", items: [
      { t: "IOC = **β-OH butyrate**, not Ketostix", role: "hy" },
      { t: "Euglycaemic DKA → think **SGLT2 inhibitor**", role: "hy" },
      { t: "HHS → no acidosis, osm 330–380, sugar 600–1200", role: "hy" },
      { t: "Hypervolaemic hyponatraemia → TBW ↑ + total body Na ↑; ↑ aldosterone in CHF, AKI, CKD, cirrhosis", role: "hy" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.248", items: [
      { t: "Unconscious child, pH 7.2, sugar 300, ketone 3+ → ==insulin infusion 0.05–0.1 U/kg/h after 1 h of IV fluids== (a)", node: "em-dka", role: "emerg", why: "MCQ: ISPAD sequence" },
      { t: "NOT a DKA criterion → **serum K⁺ <3.5** (b) [INICET]", node: "lab-potassium", role: "hy", why: "K⁺ is not part of the DKA triad", verify: "Option d in the notes reads 'glucose >250 mg/L' — a typo for mg/dL." }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 242–248 (DKA & HHS). ISPAD flowchart summarised from p.242.",
    "Mnemonics are memory aids written for this chart. † = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
