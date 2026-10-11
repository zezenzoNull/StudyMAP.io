/* Diabetes Mellitus — Part 2 (management & complications). Primary source: PrepLadder notes PDF pp. 231–241.
   Mnemonics are memory aids written for this chart (not from the notes). */
MF.addTopic({
  id: "dm-2",
  title: "Diabetes Mellitus — Part 2",
  aka: ["insulin", "OHA", "metformin", "SGLT2", "GLP-1", "DPP-4", "TZD", "hypoglycaemia", "Somogyi", "dawn phenomenon", "retinopathy", "nephropathy", "neuropathy", "NAFLD", "statin", "PCSK9"],
  oneLine: "Insulin & oral agents, glycaemic targets, hypoglycaemia rescue, Somogyi vs dawn, lipids, and organ-wise complications (eye · kidney · nerve · liver · skin).",
  flow: ["Lifestyle: diet + exercise", "T1DM → basal-bolus insulin · T2DM → metformin ± add-ons", "Targets: FPG 80–130 · PPG <180 · A1c <7%", "Rescue hypoglycaemia · fix Somogyi / dawn", "Screen eye · kidney · nerve · liver · lipids"],
  related: ["dm-1", "dka-hhs"],
  bubbles: [
    { type: "emergency", title: "DKA case — quick table", src: "p.231", items: [
      "Child on IV antibiotics for pneumonia → vomiting, abdominal pain, drowsy",
      { table: { head: ["Finding", "Value", "Normal"], rows: [
        { c: ["ABG pH", "↓", "7.35–7.45"], node: "lab-abg", role: "dx", why: "DKA: metabolic acidosis with compensatory pCO₂ ↓" },
        ["pCO₂", "↓ (compensation)", "35–45 mmHg †"],
        ["HCO₃⁻", "↓", "22–26 mEq/L"],
        { c: ["RBS", "300 mg/dL", "{N:lab-rbs}"], node: "lab-rbs", role: "dx", why: "Hyperglycaemia in DKA" },
        ["Urine ketone", "4+", "Negative †"],
        { c: ["Plasma β-OH butyrate", "↑", "{N:lab-bohb}"], node: "lab-bohb", role: "ioc", why: "IOC for DKA", hl: true }
      ]}},
      "Hidden clues → ++Kussmaul breathing++, ++fruity breath++",
      { table: { caption: "DKA in one glance", key: true, rows: [
        { c: ["IOC", "==Plasma β-OH butyrate ↑=="], node: "lab-bohb", role: "ioc", why: "IOC for DKA" },
        { c: ["1st line", "**NS + KCl (40 mEq/L)**"], node: ["rx-normal-saline", "rx-potassium"], role: "first", why: "DKA initial fluid with potassium" },
        { c: ["TOC", "**Insulin drip**"], node: "rx-insulin", role: "def", why: "DKA: IV insulin infusion" },
        { c: ["Sugar <250", "**5% dextrose + 0.45% NS**"], node: "rx-dextrose", role: "adjunct", why: "DKA: switch fluid as glucose falls" },
        { c: ["Death", "==Cerebral oedema== > dehydration"], role: "danger" },
        ["Triggers", "Pneumonia · UTI · pump failure · missed insulin"]
      ]}},
      { t: "Full protocol", node: "em-dka", role: "emerg", why: "Child DKA: NS + KCl → insulin drip → dextrose fluid when <250", see: "dka-hhs" }
    ]},
    { type: "treatment", title: "T1DM long-term — insulin basics", src: "p.231–233", items: [
      { h: "3 pillars" },
      "1 → **Carbohydrate counting** (T2DM: calorie restriction)",
      "2 → Moderate–vigorous activity **60 min/day**",
      { t: "3 → **Insulin** (recombinant human), route ==subcutaneous==", node: "rx-insulin", role: "first", why: "T1DM long-term therapy" },
      { h: "Where to inject" },
      { mnemonic: "A-T-A-B", lines: [["A", "Abdomen — preferred, **2 cm from umbilicus**"], ["T", "Thigh (anterolateral)"], ["A", "Arm (anterolateral)"], ["B", "Buttocks"]] },
      { t: "**Rotate sites** → prevents lipodystrophy (which spoils absorption)", role: "hy" },
      { h: "Delivery devices" },
      { table: { head: ["Device", "Key facts"], rows: [
        { c: ["CSII (insulin pump)", "==Preferred method== · very expensive"], hl: true },
        ["Insulin pen", "32G needle · 90° · 4.5–12.7 mm · almost painless"],
        ["Inhaled insulin", "Rapid · onset **<30 min**"],
        ["Multi-dose vial", "Store **2–8 °C** · use within **4 weeks**"]
      ]}},
      { h: "Basal–bolus regimen" },
      "Basal = long-acting **glargine** → 50% of daily dose",
      "Bolus = ==lispro / aspart== **25 min before meals** → 50%",
      "==Glargine = peakless insulin=="
    ]},
    { type: "definition", title: "Insulin preparations", src: "p.234–235", items: [
      { table: { head: ["Insulin", "Onset (h)", "Peak (h)", "Lasts (h)"], rows: [
        { c: ["==Degludec== (longest)", "1–9", "Peakless", "**42**"], hl: true },
        ["Detemir", "1–4", "Peakless", "12–24"],
        ["Glargine", "2–4", "Peakless", "20–24"],
        ["NPH", "2–4", "4–10", "10–16"],
        ["Aspart · glulisine · lispro (rapid)", "<0.25", "0.5–1.5", "3–5"],
        { c: ["**Regular** (SC/IV)", "0.5–1.0", "2–3", "4–8"], node: "rx-insulin", role: "emerg", why: "Regular insulin IV is used in DKA and HHS", see: "dka-hhs" },
        ["Inhaled human", "<0.5", "1–2", "3"]
      ]}},
      { mnemonic: "42 → 24 → 24 → 16 → 8 → 5", t: "duration ladder: degludec, glargine, detemir, NPH, regular, rapid" },
      { h: "When to start insulin" },
      "T2DM with **HbA1c >10%** or **RPG >250**",
      "HbA1c **≥9% despite 3 OHAs**",
      { mnemonic: "K-COP-PL", t: "situations needing insulin", lines: [["K", "Ketosis"], ["C", "Catabolism"], ["O", "Organ damage (metformin barred if eGFR <30)"], ["P", "Pregnancy"], ["P", "Peri-operative"], ["L", "LADA / low C-peptide (<0.3)"]] },
      { t: "Insulin indications", node: "rx-insulin", role: "first", why: "Insulin indications in T2DM and special states" }
    ]},
    { type: "treatment", title: "T2DM drugs — compare at a glance", src: "p.236–238", wide: true, items: [
      { h: "Lifestyle first" },
      "Diet (MNT) → HbA1c ↓ **1–3%**: hypocaloric · low glycaemic index (oats) · **zero trans fat**",
      "Exercise → ==30 min × 5 days== (brisk walk / resistance) → ==↑ GLUT4== → sugar into muscle",
      { table: { head: ["Class (examples)", "How it works", "HbA1c ↓", "Must-know / side effects"], rows: [
        { c: ["**Metformin** (biguanide)", "↓ hepatic gluconeogenesis · ↑ peripheral uptake", "1–2%", "==Weight neutral== · max 2 g/day · C/I eGFR <30 (lactic acidosis)"], node: "rx-metformin", role: "first", why: "T2DM first-line oral agent", hl: true },
        { c: ["**GLP-1 RA** (dulaglutide, exenatide, liraglutide, lixisenatide, semaglutide)", "↑ insulin · ↓ glucagon · slow gastric emptying", "0.5–1.0", "==Weight loss== · ↓ CV mortality · black box: ==medullary thyroid Ca (rodents)== → C/I if family h/o ==MEN 2=="], node: "rx-glp1ra", role: "first", why: "T2DM add-on: weight loss, ↓ CV mortality" },
        { c: ["**DPP-4i** (linagliptin, saxagliptin, sitagliptin)", "Stop breakdown of native GLP-1", "0.5–0.8", "==Linagliptin → Liver== (like glipizide)"], node: "rx-dpp4i", role: "second", why: "T2DM oral add-on" },
        { c: ["**Sulfonylurea** (glipizide, glimepiride, glyburide)", "Close K-ATP channel → depolarise β-cell", "0.5–0.8", "==Hypoglycaemia + weight gain=="], node: "rx-sulfonylurea", role: "second", why: "T2DM secretagogue" },
        { c: ["**Meglitinides** (nateglinide, repaglinide)", "Secretagogue, not SU", "0.5–1.0", "Mild hypoglycaemia · diarrhoea · vomiting"], node: "rx-meglitinide", role: "second", why: "T2DM secretagogue" },
        { c: ["**TZD** (pioglitazone, rosiglitazone)", "PPAR-γ → ↓ insulin resistance", "0.5–1.4", "++↓ stroke recurrence++ · ==↑ bladder cancer=="], node: "rx-pioglitazone", role: "second", why: "T2DM insulin sensitiser" },
        { c: ["**SGLT2i** (empa-, cana-, dapa-, ertu-gliflozin)", "Sugar + salt loss at PCT (SBP ↓ 3–6)", "—", "==Cardioprotective== · ↓ CKD progression · avoid eGFR <30–45 · UTI / genital mycosis"], node: "rx-sglt2i", role: "first", why: "T2DM with CV / renal benefit" },
        { c: ["**α-glucosidase i** (acarbose, voglibose)", "Block gut sugar absorption", "0.5–0.8", "Osmotic diarrhoea"], node: "rx-agi", role: "second", why: "T2DM oral agent" },
        { c: ["**Amylin agonist** — ==pramlintide== (T1 & T2)", "Regulates GI motility", "0.25–0.5", "Parenteral"], node: "rx-amylin", role: "adjunct", why: "Usable in both T1DM and T2DM" }
      ]}, add: "Pramlintide slows gastric emptying, suppresses post-meal glucagon and increases satiety; given SC before meals with insulin. Main risk: severe hypoglycaemia → cut mealtime insulin by ~50% when starting. SGLT2i lower HbA1c by ≈0.5–0.7% and can cause euglycaemic DKA (stop 3 days before surgery)." },
      { h: "Metformin — when to stop & what it does" },
      { mnemonic: "CLAN-H", t: "stop metformin for the CLAN-H", lines: [["C", "Contrast (radiographic) study"], ["L", "Liver damage"], ["A", "Acidosis"], ["N", "NPO hospitalised patient"], ["H", "Heart failure (decompensated)"]] },
      { mnemonic: "Nasty Metal Diarrhoea Lacks B12", t: "metformin side effects", lines: [["N", "Nausea / vomiting"], ["M", "Metallic taste"], ["D", "Unexplained diarrhoea"], ["L", "Lactic acidosis"], ["B12", "==B12 deficiency=="]] },
      { h: "TZD — contraindications" },
      { mnemonic: "TZDs B-CHOMB", add: "The last B = Bone fractures (TZDs lower bone density, mainly in women). TZDs also cause fluid retention and weight gain — the reason they are avoided in heart failure.", lines: [["B", "↑ Bladder cancer (S/E)"], ["CH", "CHF — CV mortality ↑"], ["H", "Hepatic failure"], ["O", "Induces Ovulation"], ["M", "Macular oedema worsens"]] },
      { t: "'Type 2 DM: HbA1c is between 8–10%' (as written)", add: "Usual meaning: HbA1c ≥1.5–2% above target (≈8.5–10%) at diagnosis → start dual therapy straight away (metformin + a second agent) instead of metformin alone; HbA1c >10% or symptomatic hyperglycaemia → start insulin (as in the line 'when to start insulin').", verify: "Line under the agents table lacks context in the notes (likely the HbA1c range for combination therapy). Confirm meaning before learning it." }
    ]},
    { type: "treatment", title: "T2DM treatment flowchart", src: "p.235–238", steps: [
      { t: "Lifestyle: MNT + exercise 30 min × 5 days", type: "treatment" },
      { t: "**Metformin** (check CLAN-H and eGFR ≥30)", node: "rx-metformin", role: "first", type: "treatment", why: "T2DM first-line" },
      { decision: "Add a 2nd drug based on…", branches: [
        { label: "ASCVD / CKD", steps: [{ t: "**SGLT2i** or **GLP-1 RA** (proven benefit)", node: ["rx-sglt2i", "rx-glp1ra"], role: "first", type: "treatment", why: "T2DM with ASCVD / CKD" }] },
        { label: "Obesity", steps: [{ t: "**GLP-1 RA** (not if MEN 2 family h/o)", node: "rx-glp1ra", role: "first", type: "treatment", why: "T2DM with obesity" }] },
        { label: "Cost / others", steps: [{ t: "DPP-4i · SU · meglitinide · TZD · AGI", node: ["rx-dpp4i", "rx-sulfonylurea", "rx-pioglitazone"], role: "second", type: "treatment", why: "T2DM additional oral agents" }] }
      ]},
      { decision: "Still uncontrolled / insulin indication?", branches: [
        { label: "HbA1c >10% · RPG >250 · ≥9% on 3 OHA · K-COP-PL", steps: [{ t: "**Add insulin**", node: "rx-insulin", role: "def", type: "treatment", why: "T2DM escalation to insulin" }] },
        { label: "Controlled", steps: [{ t: "Targets met → monitor", type: "followup" }] }
      ]},
      { t: "Targets: FPG 80–130 · PPG <180 · HbA1c <7% · time-in-range >70%", node: "lab-hba1c", role: "monitor", type: "followup", why: "Target HbA1c <7% (<8% frail elderly)" }
    ], note: "Branch logic follows the drug properties stated in the notes (CV mortality, weight, contraindications); the notes do not print a numbered algorithm." },
    { type: "diagnosis", title: "Targets & time in range", src: "p.235", items: [
      { table: { head: ["Target", "Goal"], rows: [
        ["FPG", "**80–130 mg/dL**"],
        ["PPG", "**<180 mg/dL**"],
        { c: ["HbA1c", "==<7%== (<8% frail elderly)"], node: "lab-hba1c", role: "monitor", why: "Glycaemic target", hl: true }
      ]}},
      { table: { caption: "Time in range = 70–180 mg/dL", head: ["Group", "% of time in range"], rows: [
        ["T1DM / T2DM", "**>70%**"],
        ["Elderly / high-risk", ">50%"],
        ["GDM", ">90%"]
      ]}},
      { mnemonic: "80-130 · 180 · 7", t: "fasting · post-meal · HbA1c targets" },
      { mnemonic: "70-180 for 70%", t: "time-in-range rule (GDM 90 · elderly 50)" }
    ]},
    { type: "emergency", title: "Hypoglycaemia — rescue flowchart", src: "p.233–234", steps: [
      { t: "Symptoms: mood swings · ↓ attention · palpitations · tremor · ++sweating++ · altered mentation", type: "clinical" },
      { t: "Grade it → level 1: **55–70** · level 2: **<54** · level 3: incapacitated (any value)", node: "lab-rbs", role: "dx", type: "investigation", why: "Hypoglycaemia threshold <54 mg/dL" },
      { decision: "IV access?", branches: [
        { label: "Yes", steps: [{ t: "IV ==25–50% dextrose== (child **10%**) → prevents seizures", node: ["rx-dextrose", "em-hypoglycemia"], role: "emerg", type: "emergency", why: "First-line rescue of symptomatic hypoglycaemia" }] },
        { label: "No", steps: [{ t: "==Glucagon SC==", add: "Dose 1 mg IM / SC (0.5 mg if child <25 kg); works by releasing liver glycogen, so it fails when glycogen is depleted (alcohol, starvation, prolonged hypoglycaemia). Give oral carbohydrate once awake.", node: "rx-glucagon", role: "rescue", type: "emergency", why: "Hypoglycaemia when IV access fails" }] }
      ]},
      { t: "Find the cause → insulin / SU dose; 4 am low + 7 am high = Somogyi", type: "followup" },
      { t: "β-blockers ==mask hypoglycaemia — except sweating==; DM + ASCVD / stable angina → ==metoprolol==", node: "rx-beta-blocker", role: "hy", type: "pearl", why: "Mask hypoglycaemia (not sweating); metoprolol for DM with ASCVD/angina" }
    ]},
    { type: "patho", title: "Early-morning high sugar: Somogyi vs dawn", src: "p.234", items: [
      { table: { head: ["Time", "Somogyi", "Dawn"], rows: [
        ["10 pm", "Glargine 10 U · BS 150", "Glargine 10 U · BS 150"],
        { c: ["**4 am**", "==Hypoglycaemia (~45)== → glucagon, cortisol, catecholamines ↑", "==GLUT4 down-regulated== → BS stays ~150"], hl: true },
        ["7 am", "Rebound **~200**", "**~200**"],
        ["Problem", "Too much night insulin", "Natural early-morning resistance"]
      ]}},
      { mnemonic: "Somogyi Swings · Dawn Doesn't dip", add: "Dawn phenomenon cause: early-morning surge of growth hormone and cortisol → hepatic glucose output ↑ and insulin resistance. Fix — Somogyi: reduce the bedtime / night basal insulin (or give a bedtime snack); dawn: increase or move the night basal dose later (or use a pump).", t: "check the 4 am sugar: low = Somogyi, not low = dawn" }
    ]},
    { type: "treatment", title: "Lipids in DM", src: "p.238–239", items: [
      { table: { head: ["Situation", "Statin", "LDL target"], rows: [
        { c: ["40–70 y, no CV risk factor", "Moderate intensity", "**<100**"], node: "rx-statin", role: "prevent", why: "Primary prevention, low risk" },
        { c: ["40–70 y, ↑ CV risk", "High intensity", "**<70**"], node: "rx-statin", role: "prevent", why: "Primary prevention, high risk" },
        { c: ["Any age with ASCVD", "High intensity", "==<55=="], node: ["rx-statin", "con-ascvd"], role: "first", why: "Secondary prevention", hl: true }
      ]}},
      { mnemonic: "100 → 70 → 55", t: "the sicker the heart, the lower the LDL" },
      { table: { head: ["Lipid problem", "Drug"], rows: [
        { c: ["LDL normal, TG >500", "**Fenofibrate**"], node: "rx-fenofibrate", role: "first", why: "Isolated severe hypertriglyceridaemia" },
        { c: ["LDL + TG both high", "**Statin**"], node: "lab-lipid", role: "monitor", why: "Guides lipid drug choice" },
        { c: ["LDL high on high-intensity statin", "**Ezetimibe → then PCSK9 inhibitor**"], node: ["rx-ezetimibe", "rx-pcsk9i"], role: "second", why: "Statin-refractory LDL" }
      ]}},
      "PCSK9 → enzyme on **chromosome 1**; controls LDL-receptor turnover",
      "Block it → more hepatic LDL receptors → LDL ↓",
      "Drugs → alirocumab · evolocumab · inclisiran"
    ]},
    { type: "complication", title: "Eye — diabetic retinopathy", src: "p.239–240", items: [
      { t: "Earliest sign → ==microaneurysm (inner nuclear layer)==", role: "hy" },
      "Blindness risk **25×**",
      "Starts after → T1DM ~**5 y** · T2DM **15–20 y**",
      { chain: ["NPDR", "Macular oedema", "Visual loss"] },
      { chain: ["PDR", "Neovascularisation", "Vitreous haemorrhage / retinal detachment", "Blindness"] },
      { t: "Treat → **pan-retinal photocoagulation** + ==bevacizumab (anti-VEGF)==", node: ["proc-prp", "rx-anti-vegf"], role: "first", why: "Proliferative DR / macular oedema" },
      { t: "Work-up listed: homocysteine ↑ · creatinine / eGFR · follow progression", add: "Raised homocysteine is a risk marker for microvascular damage and atherosclerosis, not a test for retinopathy. Retinopathy is diagnosed by dilated fundoscopy / retinal photography: screen T1DM from 5 years after diagnosis, T2DM at diagnosis, then yearly.", node: "lab-renal", role: "monitor", why: "Retinopathy tracks nephropathy", verify: "The notes list 'serum homocysteine ↑' under retinopathy diagnosis without explanation. Confirm relevance before using." }
    ]},
    { type: "complication", title: "Kidney — diabetic nephropathy", src: "p.240", items: [
      { t: "Earliest → ==hyperfiltration==", role: "hy" },
      "M/c histology → ==diffuse glomerulosclerosis==",
      "Characteristic → ==Kimmelstiel–Wilson nodules== ('Kimmelstein' in notes)",
      { t: "Screen → ==UACR 30–300 mg/g== (creatinine still normal)", node: "lab-uacr", role: "screen", why: "Early diabetic nephropathy (normal <30 mg/g)" },
      { t: "Follow → eGFR + UACR (moves with retinopathy)", node: "lab-renal", role: "monitor", why: "Diabetic nephropathy progression" },
      { t: "Treat → ==ACEi + SGLT2i + finerenone==", node: ["rx-acei", "rx-sglt2i", "rx-finerenone"], role: "first", why: "Diabetic nephropathy: renoprotection" },
      { mnemonic: "A-S-F", t: "ACEi · SGLT2i · Finerenone — 'Always Save Filters'" },
      { t: "eGFR <30 → stop metformin, start insulin at **80%** of calculated dose", add: "Why lower: the kidney clears about a third of circulating insulin, so in CKD insulin acts longer → hypoglycaemia. Usual rule: eGFR 10–50 → give ~75% of the dose; eGFR <10 → ~50%.", node: ["rx-metformin", "rx-insulin"], role: "ci", why: "eGFR <30: metformin contraindicated", verify: "'80% calculated dose' is stated without explanation. Confirm." }
    ]},
    { type: "complication", title: "Nerve — diabetic neuropathy", src: "p.240", items: [
      { t: "==M/c long-term complication of DM==", role: "hy" },
      { mnemonic: "S > M > A", t: "Sensory > Motor > Autonomic (by frequency)" },
      { table: { head: ["Type", "Picture", "Treat"], rows: [
        { c: ["Sensory", "Distal loss · ==C fibres== · burning feet", "==Duloxetine / gabapentin=="], node: "rx-gabapentinoid", role: "first", why: "Painful diabetic neuropathy" },
        ["Motor", "==3rd nerve palsy, pupil spared==", "—"],
        { c: ["Autonomic", "==Postural hypotension==: stand after 3 min → SBP ↓ ≥20", "==Midodrine=="], node: "rx-midodrine", role: "first", why: "Diabetic autonomic neuropathy: orthostatic hypotension" }
      ]}, add: "Diabetic mononeuropathy: infarction of the nerve's core spares the pupillary fibres that run on its surface → ptosis + 'down and out' eye with a normal pupil; usually painful at onset and recovers in ~3 months. A dilated pupil means compression (e.g. PCOM aneurysm) until proved otherwise." }
    ]},
    { type: "complication", title: "Liver & skin", src: "p.239–241", items: [
      { h: "NAFLD" },
      { t: "Fat in ==>5% of hepatocytes==", node: "con-insulin-resistance", why: "NAFLD in insulin-resistant diabetes" },
      "Fat + inflammation / ballooning, no fibrosis → **NASH**",
      { t: "==FIB-4== uses 4 things", node: "lab-lft", role: "screen", why: "NAFLD fibrosis risk (FIB-4)" },
      { mnemonic: "FIB-4 = 'A-S-S-P'", lines: [["A", "Age"], ["S", "SGOT (AST)"], ["S", "SGPT (ALT)"], ["P", "Platelet count"]] },
      { t: "==Elastography / FibroScan → IOC==", node: "img-elastography", role: "ioc", why: "Liver fibrosis in NAFLD" },
      "Treat → diet + weight loss **7–10%**",
      { h: "Skin" },
      { table: { head: ["Lesion", "Clue"], rows: [
        ["Diabetic dermopathy", "Brown macules on **shin**"],
        { c: ["Acanthosis nigricans", "Insulin resistance / metabolic syndrome"], node: "con-acanthosis", why: "Skin marker of insulin resistance" },
        ["Necrobiosis lipoidica", "**Women, T1DM, 3rd decade** · atrophic centre + telangiectasia"]
      ]}}
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.241", items: [
      { t: "10-y T1DM in DKA, **K⁺ 3.1** → ==NS bolus, then NS drip with KCl== (a) — insulin waits", node: ["em-dka", "lab-potassium"], role: "emerg", why: "DKA with low K⁺: replace K⁺ before insulin" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 231–241 (Diabetes Mellitus Part 2).",
    "Mnemonics are memory aids written for this chart. † = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
