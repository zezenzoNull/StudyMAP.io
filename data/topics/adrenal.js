/* Diseases of the Adrenal Gland. Primary source: PrepLadder notes PDF pp. 249–259.
   Mnemonics are memory aids written for this chart unless marked "(notes)". */
MF.addTopic({
  id: "adrenal",
  title: "Diseases of the Adrenal Gland",
  aka: ["hyperaldosteronism", "Conn syndrome", "Liddle", "Gordon", "Addison disease", "Sheehan", "adrenal crisis", "Waterhouse-Friderichsen", "phaeochromocytoma", "pheochromocytoma", "paraganglioma", "carcinoid", "adrenal incidentaloma"],
  oneLine: "Too much aldosterone (Conn · BAH · Liddle · Gordon), too little cortex (Addison 1° · 2° · 3° · crisis), and too much catecholamine (phaeochromocytoma, paraganglioma).",
  flow: ["HTN + low K⁺ → ARR → saline test → CT / AVS", "Hypotension + high K⁺ + pigment → cosyntropin test", "Paroxysmal HTN (PHD) → metanephrines → Ga-68 PET", "Treat: MRA / adrenalectomy · hydrocortisone · α then β → surgery", "Crisis → IV hydrocortisone"],
  related: ["cushing", "pnet", "ant-pituitary", "meningitis-1"],
  bubbles: [
    { type: "definition", title: "Adrenal physiology", src: "p.249", items: [
      "Right adrenal → **pyramidal** · left → **semilunar**",
      "Control → hypothalamic **CRH** → pituitary **ACTH** → cortex (1° action on zona fasciculata)",
      { table: { caption: "Cortex: outside → in", head: ["Layer", "Makes", "Job"], rows: [
        { c: ["Glomerulosa", "==Aldosterone==", "Salt + water retention via ENaC (collecting duct >> DCT) → loses K⁺ & H⁺ · main job: ==postural BP==; controlled by RAAS (JG cells)"], hl: true },
        ["Fasciculata", "==Cortisol==", "Stress hormone · blood sugar"],
        ["Reticularis", "==Sex steroids (DHEAS)==", "Secondary sexual characters"]
      ]}},
      { mnemonic: "G-F-R = Salt · Sugar · Sex", t: "the deeper you go, the sweeter it gets" },
      { h: "Medulla" },
      "Makes catecholamines → adrenaline, noradrenaline, dopamine (fight/flight)",
      { t: "Main circulating catecholamine: notes say ==adrenaline (60%)== on p.249 but NE 80% > E 20% on p.255", add: "Both figures fit different things: the adrenal MEDULLA secretes mostly adrenaline (≈80% adrenaline : 20% noradrenaline), whereas most noradrenaline in plasma spills over from sympathetic nerve endings — so circulating NE > adrenaline.", verify: "The notes contradict themselves on the dominant normal catecholamine (p.249 epinephrine 60% vs p.255 norepinephrine 80%). Check which figure your source uses." },
      "In ==phaeochromocytoma → noradrenaline== dominates",
      "Phaeo outside the medulla = ++paraganglioma++",
      "Catecholamines (and T3/T4) are built from ==tyrosine==",
      { t: "24-h urinary ++VMA++ (end-product) → best for **neuroblastoma** > phaeo", role: "hy" },
      { t: "For phaeo diagnosis → ++urinary metanephrines++", node: "lab-metanephrines", role: "dx", why: "Phaeochromocytoma diagnosis" }
    ]},
    { type: "etiology", title: "Hyperaldosteronism — causes", src: "p.250", items: [
      { table: { head: ["Primary (adrenal makes too much)", "Secondary (RAAS driven)"], rows: [
        ["==Bilateral adrenal hyperplasia== — m/c (90%)", "**Massive ascites** → fluid shifts to peritoneum"],
        ["==Conn syndrome== — autonomous tumour of glomerulosa", "→ ↓ circulating volume → ↓ GFR → RAAS → aldosterone ↑"],
        ["", "Others → pregnancy-induced HTN · Bartter · Gitelman"]
      ]}},
      "Causes of ascites → cirrhosis · CHF · pericarditis · nephrotic syndrome",
      { t: "Conn's written as 'HTN, hyperkalemic alkalosis' on p.250", verify: "Typo in the notes: aldosterone excess causes HYPOkalaemic alkalosis (as the notes state elsewhere on p.250–252)." }
    ]},
    { type: "clinical", title: "Primary hyperaldosteronism — features", src: "p.250", items: [
      { t: "==HTN + hypokalaemic alkalosis==", role: "hy" },
      "Resistant HTN → persists despite **≥3 antihypertensives** · headache",
      "Low K⁺ → muscle cramps · weakness · urinary K⁺ and H⁺ loss",
      "Polyuria · polydipsia",
      { h: "Why NO oedema? (aldosterone escape)" },
      { chain: ["Aldosterone ↑", "Salt + water ↑", "Plasma volume ↑", "Right atrium stretches", "ANP released", "Salt + water lost", "==No pedal oedema=="] }
    ]},
    { type: "investigation", title: "Hyperaldosteronism — work-up", src: "p.250–251", items: [
      { table: { head: ["Test", "Finding", "Normal", "Role"], rows: [
        { c: ["Serum Na⁺", "↑ / normal", "{N:lab-sodium}", "—"], node: "lab-sodium", role: "dx", why: "Normal or high Na⁺ in hyperaldosteronism" },
        { c: ["Serum K⁺", "↓", "{N:lab-potassium}", "Clue"], node: "lab-potassium", role: "dx", why: "Hypokalaemia of aldosterone excess" },
        { c: ["==Aldosterone : renin ratio==", "↑ (>750 pmol/L)", "Not elevated", "==Screening=="], node: "lab-arr", role: "screen", why: "Screens for primary hyperaldosteronism; false + with β-blockers", hl: true },
        { c: ["==Saline infusion / salt-loading test==", "Aldosterone **fails to suppress**", "Suppresses †", "==IOC / confirm=="], node: "bed-saline-infusion", role: ["ioc", "confirm"], why: "Confirms primary hyperaldosteronism" },
        { c: ["NCCT abdomen", "Bilateral hyperplasia / adenoma", "—", "Subtype"], node: "img-ct-abdomen", role: "dx", why: "Shows bilateral adrenal hyperplasia or adenoma" },
        { c: ["==Adrenal vein sampling==", "Lateralises", "—", "Pre-op localisation"], node: "proc-avs", role: "def", why: "Localises tumour before surgery" }
      ]}},
      { t: "ARR false positive → ==β-blockers==", node: "rx-beta-blocker", role: "hy", why: "β-blockers falsely raise ARR" },
      { h: "Inverse pairs (notes)" },
      "Aldosterone → Na⁺ ↔ K⁺",
      "PTH → Ca²⁺ ↔ PO₄",
      "ADH → plasma osm ↔ urine osm",
      { t: "==Low-renin HTN== → Conn syndrome, Liddle syndrome", role: "hy" }
    ]},
    { type: "treatment", title: "Hyperaldosteronism flowchart", src: "p.250–251", steps: [
      { t: "HTN (resistant) + hypokalaemic alkalosis, no oedema", type: "clinical" },
      { t: "Screen → **ARR ↑** (stop β-blockers — false +)", node: "lab-arr", role: "screen", type: "investigation", why: "Primary hyperaldosteronism screen" },
      { t: "Confirm → **saline infusion test**: aldosterone not suppressed", node: "bed-saline-infusion", role: "confirm", type: "investigation", why: "Confirmation" },
      { t: "NCCT abdomen ± adrenal vein sampling", node: ["img-ct-abdomen", "proc-avs"], role: "dx", type: "imaging", why: "Subtype + lateralisation" },
      { decision: "Which type?", branches: [
        { label: "Bilateral adrenal hyperplasia", steps: [
          { t: "**Eplerenone / spironolactone** (medical, lifelong)", node: "rx-spironolactone", role: "first", type: "treatment", why: "BAH: aldosterone antagonist" },
          { t: "Spironolactone → ==gynaecomastia== in men (more than eplerenone)", type: "complication" }
        ]},
        { label: "Conn adenoma (unilateral)", steps: [
          { t: "**Spironolactone for 6 weeks** (prepare)", node: "rx-spironolactone", role: "first", type: "treatment", why: "Conn: pre-operative MRA" },
          { t: "Fit after pre-anaesthetic check → ==unilateral adrenalectomy==", role: "def", type: "treatment" }
        ]}
      ]}
    ]},
    { type: "diagnosis", title: "HTN look-alikes: Liddle · Gordon · Connshing", src: "p.251–252", wide: true, items: [
      { table: { head: ["", "Liddle", "Gordon", "Connshing"], rows: [
        ["Defect", "==ENaC gain of function== (AD)", "==NCC (DCT) gain of function==", "Tumour in 1st + 2nd cortical layers"],
        ["Result", "Salt/water ↑ + K⁺/H⁺ loss", "Salt, Cl⁻, water retained → H⁺ kept", "Aldosterone ↑ + cortisol ↑"],
        ["Acid–base", "==Hypokalaemic alkalosis==", "==Hyperchloraemic acidosis==", "HTN + hyperglycaemia"],
        ["Renin / aldosterone", "Both ↓ (negative feedback)", "—", "Aldosterone ↑"],
        ["Tests", "ARR normal/↓ · NCCT adrenal normal", "—", "—"],
        { c: ["Treatment", "==Amiloride (DOC)==", "—", "—"], node: "rx-amiloride", role: "first", why: "Liddle syndrome: ENaC blocker is DOC", hl: true }
      ]}, add: "Gordon syndrome (pseudohypoaldosteronism type 2, WNK kinase mutations) = HTN + HYPERkalaemia + hyperchloraemic acidosis with low renin and normal or low aldosterone; DOC = thiazide diuretic (blocks the overactive NCC). Connshing (mixed cortisol + aldosterone adenoma) → adrenalectomy with steroid cover." },
      { t: "Connshing written as 'hypertension with hyperkalemia'", verify: "Aldosterone excess gives HYPOkalaemia; 'hyperkalemia' here looks like a typo. Verify." },
      { mnemonic: "C-L-C vs G", t: "HTN + hypokalaemic alkalosis = Conn · Liddle · Cushing; HTN + hyperchloraemic acidosis = Gordon ('Gordon Gives acid')" },
      { h: "Adrenal incidentaloma" },
      { t: "Found by chance on imaging → first rule out malignancy (PET / whole-body PET-CT) → check hormone excess → prove non-functioning", add: "Standard work-up of every incidentaloma: (1) hormones — 1 mg overnight DST, plasma metanephrines, aldosterone:renin ratio if hypertensive; (2) imaging phenotype — unenhanced CT <10 HU = benign lipid-rich adenoma, >4 cm or >10 HU → more imaging / adrenalectomy. Functioning or suspicious lesions → surgery.", node: "img-pet-ct", role: "init", why: "Incidentaloma: exclude malignancy first" }
    ]},
    { type: "etiology", title: "Addison disease — causes", src: "p.252, 254–255", items: [
      "Primary = **both adrenals** damaged → **all 3 layers** fail",
      { t: "M/c → ==isolated autoimmune adrenalitis==", role: "hy" },
      { t: "Autoimmune polyglandular syndrome type 1", node: "con-aps", why: "APS-1 includes Addison disease" },
      { mnemonic: "CHAI (notes)", t: "APS type 1", lines: [["C", "Mucocutaneous Candidiasis (thymus involved)"], ["H", "Hypoparathyroidism"], ["A", "Addison — ==AIRE gene, chromosome 21==, autosomal recessive"], ["I", "Infancy onset"]] },
      { mnemonic: "TSA + 2H", t: "infective / infiltrative causes", lines: [["T", "TB"], ["S", "Sarcoidosis (non-caseating granulomas)"], ["A", "Adrenoleukodystrophy"], ["H", "==HIV=="], ["H", "Histoplasmosis"]] },
      { table: { caption: "1° vs 2° vs 3° vs crisis", head: ["Type", "Cause", "ACTH", "Pigment", "DOC"], rows: [
        { c: ["1°", "Autoimmune", "↑", "==Yes== (palm creases)", "Hydrocortisone"], node: "rx-hydrocortisone", role: "first", why: "Primary Addison: DOC" },
        { c: ["2°", "==Sheehan== (post-partum) · non-obstetric pituitary damage = ==Simmond disease==", "↓", "No (pale)", "Dexamethasone"], node: "rx-dexamethasone", role: "first", why: "Secondary adrenal insufficiency: DOC (notes)", see: "ant-pituitary" },
        { c: ["3°", "Hypothalamus damage (AVM, HTN)", "↓", "No", "Dexamethasone"], node: "rx-dexamethasone", role: "first", why: "Tertiary adrenal insufficiency: DOC (notes)" },
        { c: ["Crisis", "==Waterhouse–Friderichsen== · sudden steroid stop", "Normal", "No", "==IV hydrocortisone=="], node: "em-adrenal-crisis", role: "emerg", why: "Adrenal crisis", hl: true }
      ]}}
    ]},
    { type: "clinical", title: "Addison — what each lost hormone does", src: "p.253", wide: true, items: [
      { table: { head: ["Lost hormone", "Features"], rows: [
        { c: ["↓ Aldosterone", "==Postural hypotension== (supine → stand: SBP ↓ ≥20 & DBP ↓ ≥10 in 3 min) · ==hyperkalaemia== → conduction block → arrest · salt craving · polyuria · H⁺ ↑"], role: "danger" },
        ["↓ Cortisol", "==Hypoglycaemic attacks== · emotional lability · dizziness on standing · salt craving · weight loss · ADH unopposed → ==hyponatraemia== · ==eosinophilia=="],
        ["↓ Sex steroids (DHEAS)", "Fatigue · ↓ libido · ED · loss of pubic/axillary hair in women"],
        { c: ["↑ ACTH (1° only)", "==Hyperpigmentation== (MSH-like): knuckles, IP joints, ==palm/sole creases==, axilla, groin, lips, oral mucosa"], hl: true }
      ]}},
      { mnemonic: "Low Salt, Low Sugar, Low Sex + Dark creases", t: "Addison = the G-F-R layers all fail; ACTH paints the creases" },
      "Sheehan (↓ ACTH) → ==ivory / alabaster pale skin=="
    ]},
    { type: "investigation", title: "Addison — work-up", src: "p.254", items: [
      { table: { head: ["Test", "Finding", "Normal", "Role"], rows: [
        { c: ["Serum Na⁺", "↓", "{N:lab-sodium}", "Clue"], node: "lab-sodium", role: "dx", why: "Hyponatraemia in Addison" },
        { c: ["Serum K⁺", "↑", "{N:lab-potassium}", "Clue"], node: "lab-potassium", role: "dx", why: "Hyperkalaemia in Addison" },
        { c: ["NCCT abdomen", "Both adrenals damaged", "—", "Cause"], node: "img-ct-abdomen", role: "dx", why: "Bilateral adrenal destruction" },
        { c: ["==ACTH stimulation (cosyntropin) test==", "==Adrenal fails to respond==", "{N:bed-acth-stim}", "==IOC=="], node: "bed-acth-stim", role: "ioc", why: "IOC for primary adrenal insufficiency", hl: true }
      ]}},
      { t: "==Pseudo-hyperkalaemia== → thin-bore needle bursts RBCs → falsely high K⁺", role: "hy" }
    ]},
    { type: "treatment", title: "Addison treatment flowchart", src: "p.252, 254–255", steps: [
      { decision: "Stable or crisis?", branches: [
        { label: "Crisis (Waterhouse–Friderichsen / steroid stopped)", steps: [
          { t: "==IV hydrocortisone==", add: "Adrenal crisis regimen: hydrocortisone 100 mg IV bolus, then 200 mg per 24 h (≈50 mg 6-hourly); 0.9% saline 1 L in the first hour, dextrose if hypoglycaemic, and treat the trigger. Take blood for cortisol / ACTH first, but never delay the steroid.", node: ["em-adrenal-crisis", "rx-hydrocortisone"], role: "emerg", type: "emergency", why: "Addisonian crisis main treatment" },
          { t: "W–F = fulminant ==N. meningitidis== sepsis + DIC → adrenal haemorrhage → ↓ aldosterone & BP", type: "clinical", see: "meningitis-1" }
        ]},
        { label: "Primary (stable)", steps: [
          { t: "==Oral hydrocortisone (DOC, lifelong)== — gluco + mineralo activity", node: "rx-hydrocortisone", role: "first", type: "treatment", why: "Primary Addison: DOC" },
          { t: "Low BP → add **fludrocortisone** (mineralocorticoid)", node: "rx-fludrocortisone", role: "adjunct", type: "treatment", why: "Primary Addison with hypotension" },
          { t: "Low sugar → add **dexamethasone** (glucocorticoid)", add: "Standard practice adjusts the hydrocortisone itself rather than adding dexamethasone. Sick-day rules: double the oral dose during fever or illness, and give IM / IV hydrocortisone if vomiting. Patients carry a steroid card / emergency kit.", node: "rx-dexamethasone", role: "adjunct", type: "treatment", why: "Primary Addison with hypoglycaemia" }
        ]},
        { label: "Secondary / tertiary", steps: [
          { t: "==Dexamethasone== (Sheehan: lifelong)", add: "Most texts use hydrocortisone (15–25 mg/day in 2–3 doses) for secondary and tertiary insufficiency too. Fludrocortisone is not needed because aldosterone is still controlled by renin–angiotensin. In Sheehan, also replace thyroid (start steroid first), sex hormones ± GH.", node: "rx-dexamethasone", role: "first", type: "treatment", why: "Secondary / tertiary insufficiency (aldosterone intact)" }
        ]}
      ]},
      { chain: ["Post-partum haemorrhage", "Pituitary infarction", "↓ ACTH", "↓ cortisol", "Hypoglycaemia + hyponatraemia"], type: "patho" }
    ]},
    { type: "diagnosis", title: "Conn vs Addison (notes table)", src: "p.255", items: [
      { table: { head: ["", "Conn (↑ aldo)", "Addison (↓ aldo)"], rows: [
        ["Cause", "Adrenal adenoma", "Autoimmune destruction"],
        ["BP", "HTN", "Postural hypotension"],
        ["K⁺", "↓", "↑"],
        { c: ["pH", "Alkalosis", "Normal"], verify: "Notes give Addison pH as 'normal'; many texts describe a mild hyperkalaemic metabolic acidosis. Verify." },
        ["Special sign", "==No pedal oedema==", "==Hyperpigmentation=="],
        { c: ["IOC", "Saline infusion test", "ACTH / cosyntropin test"], node: ["bed-saline-infusion", "bed-acth-stim"], role: "ioc", why: "IOC for each disorder", hl: true },
        { c: ["Treat", "Spironolactone", "Hydrocortisone"], node: ["rx-spironolactone", "rx-hydrocortisone"], role: "first", why: "First-line treatment for each" }
      ]}, add: "Standard teaching: losing aldosterone means the kidney keeps H⁺ and K⁺, giving a mild normal-anion-gap (hyperchloraemic) metabolic acidosis with hyperkalaemia — the type 4 RTA pattern." }
    ]},
    { type: "clinical", title: "Phaeochromocytoma — the great masquerader", src: "p.255–257", items: [
      "Aka ==chromaffinoma== · chromaffin cells → adrenal medulla + sympathetic ganglia",
      { mnemonic: "Pheo has a PhD", t: "the classic triad", lines: [["P", "Palpitations (β1)"], ["H", "Headache (α1 vasoconstriction) → ==paroxysmal / episodic HTN=="], ["D", "Diaphoresis — palms & soles (β2)"]] },
      "Triggers → change of posture · exercise · urination",
      "Tremors · weight loss · often misdiagnosed as anxiety",
      { t: "Sugar in prediabetic range → FBG 100–125 · 2-h PG 140–199", node: "lab-fpg", role: "dx", why: "Catecholamine-induced hyperglycaemia" },
      { chain: ["Long vasoconstriction", "Volume contracted", "Postural hypotension"] },
      { t: "Labs → ==relative polycythaemia · hypercalcaemia==", add: "Polycythaemia: plasma volume is contracted by chronic vasoconstriction (some tumours also make erythropoietin). Hypercalcaemia: PTHrP from the tumour, or coexisting primary hyperparathyroidism in MEN 2A." },
      { t: "NE has the shortest half-life", add: "Catecholamines are cleared within about 2 minutes (re-uptake + COMT/MAO), so a normal level between attacks means little. Metanephrines are made continuously inside the tumour by COMT, which is why they are the better test." },
      { mnemonic: "Rule of 10s", t: "from the notes' numbers", lines: [["10%", "==Malignant=="], ["10%", "==Familial== (MEN 2A / Sipple)"], ["10%", "==Bilateral=="], ["10–15%", "Outside medulla (organ of ==Zuckerkandl==)"]] },
      { t: "In MEN 2A → mainly **adrenaline** (sporadic → noradrenaline)" },
      { t: "==Biopsy / FNAC contraindicated== (damages gland)", role: "ci" }
    ]},
    { type: "imaging", title: "Paraganglioma", src: "p.256–257", items: [
      "Extra-adrenal catecholamine tumour · m/c site → ==skull base==",
      "Origin → ==carotid body== (vagal chemosensor of O₂/CO₂)",
      "Grows → splays ECA from ICA → ==Lyre sign==",
      "Histology → ==nests of Zellballen=="
    ]},
    { type: "treatment", title: "Phaeochromocytoma flowchart", src: "p.256–258", steps: [
      { t: "Paroxysmal HTN + PhD triad", type: "clinical" },
      { t: "**Screen** → 24-h urinary fractionated metanephrines (or 24-h urinary catecholamines)", node: "lab-metanephrines", role: "screen", type: "investigation", why: "Phaeo screening test" },
      { t: "**IOC** → ==plasma free metanephrines== (or 24-h plasma catecholamines)", node: "lab-metanephrines", role: "ioc", type: "investigation", why: "Phaeo IOC" },
      { t: "**Localise** → ==Ga-68 DOTATATE PET/CT== > MRI > MIBG", node: ["img-ga68-dotatate", "img-mibg"], role: "ioc", type: "imaging", why: "Phaeo imaging of choice; also separates benign vs malignant" },
      { decision: "Benign or malignant?", branches: [
        { label: "Benign", steps: [
          { t: "**Pre-op:** ==oral phenoxybenzamine== (6 am) for HTN", node: "rx-phenoxybenzamine", role: "first", type: "treatment", why: "Phaeo pre-op α-blockade" },
          { t: "Then **propranolol** (after breakfast) for tremor/palpitations", node: "rx-beta-blocker", role: "adjunct", type: "treatment", why: "Phaeo: β-blocker only after α-blockade" },
          { t: "==α → β recommended · β → α contraindicated== (unopposed α → HTN spike)", role: "ci", type: "emergency" },
          { t: "==TOC: surgery== — partial / total adrenalectomy", role: "def", type: "treatment" },
          { t: "**Intra-op HTN** → IV sodium nitroprusside · phentolamine", node: ["rx-nitroprusside", "rx-phentolamine"], role: "emerg", type: "emergency", why: "Intra-operative hypertensive surge" }
        ]},
        { label: "Malignant", steps: [
          { t: "==Surgery contraindicated== → radiation · chemotherapy", add: "Metastatic phaeo: debulking surgery is still done where possible to lower catecholamines (after α-blockade). Systemic options: I-131 MIBG therapy (MIBG-avid tumours), Lu-177 DOTATATE (PRRT), CVD chemotherapy (cyclophosphamide + vincristine + dacarbazine) and sunitinib.", role: "ci", type: "treatment", verify: "Notes write 'radiation (radioactive iodine)'. For phaeo the radiotherapy is usually I-131 MIBG, not plain radioiodine. Verify." }
        ]}
      ]},
      { mnemonic: "Alpha first, Always", t: "never β before α in phaeo" }
    ]},
    { type: "diagnosis", title: "Carcinoid vs phaeochromocytoma", src: "p.258", wide: true, items: [
      { table: { head: ["", "Carcinoid", "Phaeochromocytoma"], rows: [
        ["Site", "==Bronchus > ileum==, rectum, appendix", "Adrenal medulla · sympathetic chain · carotid body"],
        ["Excess", "5-HT (serotonin) + histamine", "Catecholamines"],
        ["Symptoms", "==Flushing== (face, neck, upper trunk) · secretory diarrhoea · asthma-like · pruritus · gastritis · ==pellagra== · TIPS (tricuspid insufficiency, pulmonary stenosis)", "Palpitation · headache · diaphoresis"],
        { c: ["Urine test", "24-h urinary ==5-HIAA==", "24-h urinary ==fractionated metanephrines=="], node: ["lab-5hiaa", "lab-metanephrines"], role: "dx", why: "Biochemical marker of each tumour", hl: true },
        { c: ["Imaging", "Ga-68 DOTATATE PET/CT · octreo scan", "Ga-68 DOTATATE PET/CT · MIBG"], node: "img-ga68-dotatate", role: "ioc", why: "Somatostatin-receptor imaging for both tumours" },
        { c: ["Treatment", "Octreotide · telotristat", "Phenoxybenzamine · nitroprusside"], node: ["rx-octreotide", "rx-phenoxybenzamine"], role: "first", why: "Disease-specific medical therapy" }
      ]}},
      "Pellagra → tryptophan diverted to make 5-HT → niacin deficiency"
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.259", items: [
      { t: "Woman, fatigue, weight loss, pigmented knuckles/creases, Na⁺ ↓ K⁺ ↑, CT bilateral destruction → confirm with ==cosyntropin test== (b)", node: "bed-acth-stim", role: "confirm", why: "MCQ: confirms Addison disease" },
      { t: "NOT a feature of Conn syndrome → ==metabolic acidosis== (b)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 249–259 (Diseases of the Adrenal Gland). CHAI mnemonic is from the notes; other mnemonics were written for this chart.",
    "† = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
