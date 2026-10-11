/* Diseases of Thyroid. Primary source: PrepLadder notes PDF pp. 264–273.
   NO SPECS is from the notes; other mnemonics were written for this chart. */
MF.addTopic({
  id: "thyroid",
  title: "Diseases of Thyroid",
  aka: ["thyroid storm", "Graves disease", "thyrotoxicosis", "hyperthyroidism", "hypothyroidism", "Hashimoto", "myxoedema coma", "sick euthyroid", "Jod-Basedow", "Wolff-Chaikoff", "NO SPECS", "Burch-Wartofsky"],
  oneLine: "Thyroid storm (Burch–Wartofsky >45 → PTU, iodine, β-block, steroid, bind), Graves & other thyrotoxicosis, hypothyroidism, myxoedema coma, sick euthyroid.",
  flow: ["Symptoms (hot & fast vs cold & slow)", "Free T4 + TSH first", "TSH ↓ → Graves (TRAb, diffuse uptake) · TSH ↑ → Hashimoto (anti-TPO)", "Carbimazole / RAI / TSS · Levothyroxine", "Emergencies: storm → PTU · myxoedema coma → T3/T4 + rewarm"],
  related: ["ant-pituitary", "adrenal", "dm-1"],
  bubbles: [
    { type: "definition", title: "Key definitions", src: "p.266, 269", items: [
      "**Hyperthyroidism** → the gland itself works more",
      "**Thyrotoxicosis** → too much T4 in blood from any source (gland, pills, iodised salt)",
      { t: "**Subclinical hyperthyroidism** → free T4 & T3 **normal**, TSH **↓**", node: "lab-tft", role: "dx", why: "Subclinical hyperthyroidism pattern" },
      { table: { caption: "Iodine paradoxes", head: ["", "Jod–Basedow", "Wolff–Chaikoff"], rows: [
        ["Iodine", "==Small dose, long time== (iodised salt, I₂-replete)", "==Mega dose, 6-hourly== (SSKI)"],
        ["Trapping", "↑", "↓"],
        { c: ["Result", "↑ T4 → **thyrotoxicosis**", "↓ T4 & T3 (used in storm)"], hl: true }
      ]}},
      { mnemonic: "Jod Jolts · Wolff Walls off", t: "little iodine → hyper; flood of iodine → shuts the gland" }
    ]},
    { type: "etiology", title: "Causes of thyrotoxicosis", src: "p.266–267", wide: true, items: [
      { table: { head: ["Primary hyperthyroidism (TSH ↓)", "Secondary hyperthyroidism (TSH ↑)"], rows: [
        ["M/c → ==Graves disease== — young female; ==TRAb / LATS== stimulates TSH receptor → T4, T3 ↑ → TSH ↓ (may be undetectable)", "==TSH-secreting pituitary adenoma== → TSH ↑ → T4, T3 ↑ · next best test → **MRI**"],
        ["Toxic multinodular goitre / toxic adenoma / activating TSH-receptor mutation", "Gestational trophoblastic neoplasia → β-hCG (looks like TSH) → T4, T3 ↑"],
        ["Struma ovarii (ovarian tumour making thyroid hormone)", ""],
        ["Drug-induced (Jod–Basedow)", ""]
      ]}},
      { h: "Thyrotoxicosis WITHOUT hyperthyroidism" },
      "Subacute thyroiditis (inflammatory follicle destruction)",
      "Silent thyroiditis",
      "Radiation · infarction of an adenoma",
      "**Amiodarone**",
      { t: "**Thyrotoxicosis factitia** → eating beef/cattle thyroid, internet weight-loss pills (levothyroxine) → full thyrotoxic picture", role: "hy" }
    ]},
    { type: "clinical", title: "Hyperthyroid — features", src: "p.267–269", items: [
      { t: "Earliest → ==hyperactivity, irritability, dysphoria==", role: "hy" },
      { table: { head: ["Receptor / cause", "Feature"], rows: [
        ["β1", "Palpitations · ==resting tachycardia (sleeping pulse ↑)== · AF"],
        ["β2", "==Fine tremor== (characteristic) · sweaty palms"],
        ["α1", "Vasoconstriction → HTN, headache, tiredness"],
        ["↑ BMR / calorigenesis", "==Weight loss · heat intolerance=="],
        ["Gut", "Diarrhoea (↑ appetite → osmotic load; ↓ motility → bacterial overgrowth; bile acids)"],
        ["Hormonal", "Oligomenorrhoea · infertility"]
      ]}},
      "Sleeping pulse rate separates thyrotoxicosis from anxiety neurosis",
      { t: "Hyperdynamic heart → loud S1, ejection systolic murmur, ==Means–Lerman scratch==", node: "bed-ecg", role: "dx", why: "AF (irregularly irregular) in thyrotoxicosis" },
      { h: "Graves-specific" },
      { t: "==Pretibial myxoedema== (orange shin) → specific for Graves", role: "hy" },
      "Acropachy · ophthalmopathy (proptosis)",
      "Other shin lesions → pyoderma gangrenosum · necrobiosis lipoidica (T1DM)",
      { t: "==Pemberton sign== → arms up → retrosternal goitre presses SVC → facial plethora", role: "hy" }
    ]},
    { type: "clinical", title: "Graves ophthalmopathy", src: "p.267–268", items: [
      { chain: ["TSH-receptor Ab", "Eye-muscle swelling + retrobulbar fat", "Eyeball pushed forward", "Proptosis"] },
      { t: "Earliest → ==stare sign== = upper-lid retraction (Müller muscle via ciliary ganglion)", role: "hy" },
      "Lid lag · periorbital oedema",
      { t: "M/c muscle → ==inferior rectus== → diplopia", role: "hy" },
      "Exposure keratitis → sight loss · retrobulbar neuritis",
      { mnemonic: "NO SPECS (notes)", t: "grades 0 → 6", lines: [["N", "0 — No signs or symptoms"], ["O", "1 — Only signs (lid retraction / lag)"], ["S", "2 — Soft tissue (periorbital oedema)"], ["P", "3 — Proptosis (>22 mm)"], ["E", "4 — Extra-ocular muscles (diplopia)"], ["C", "5 — Corneal involvement"], ["S", "6 — Sight loss"]] },
      { t: "Treat → antithyroid drugs; inflammation / threat to vision → ==methylprednisolone==", node: "rx-methylpred", role: "first", why: "Sight-threatening Graves ophthalmopathy" }
    ]},
    { type: "investigation", title: "Thyroid tests", src: "p.268–269, 271–272", wide: true, items: [
      { table: { head: ["Test", "Hyper (Graves)", "Hypo (Hashimoto)", "Normal"], rows: [
        { c: ["==Free T4 + TSH== (preferred)", "FT4 ↑ · TSH ↓ / undetectable", "FT4 ↓ · TSH ↑", "{N:lab-tft}"], node: "lab-tft", role: ["init", "dx"], why: "Preferred thyroid tests", hl: true },
        { c: ["TRAb", "**+**", "−", "{N:lab-trab}"], node: "lab-trab", role: "confirm", why: "Graves disease" },
        { c: ["Anti-TPO / thyroglobulin / microsomal", "−", "**+**", "{N:lab-thyroid-ab}"], node: "lab-thyroid-ab", role: "confirm", why: "Hashimoto thyroiditis" },
        { c: ["USG / MRI neck", "Diffuse enlargement", "Goitre (may be retrosternal)", "—"], node: "img-usg-neck", role: "dx", why: "Thyroid size / goitre" },
        { c: ["Thyroid scan (I-123 / I-132)", "==Diffuse ↑ uptake==", "—", "—"], node: "img-thyroid-scan", role: "dx", why: "Diffuse uptake = Graves" },
        { c: ["MRI head", "If TSH normal/↑ with ↑ T4", "If TSH ↓ with ↓ T4", "—"], node: "img-mri-brain", role: "dx", why: "Pituitary cause of thyroid dysfunction" }
      ]}},
      { h: "Thyroid scan" },
      "Hot / cold nodules · pyramidal lobe (Graves) · patchy (toxic MNG) · low diffuse (thyroiditis)",
      "Toxic multinodular goitre → needs ==surgery==",
      { t: "Half-lives as printed: I-132 = 13.2 h · I-123 = 2.3 h · I-131 = 8 days", verify: "The notes appear to swap these: I-123 has t½ ≈ 13.2 h and I-132 ≈ 2.3 h. I-131 = 8 days is correct. Verify." }
    ]},
    { type: "diagnosis", title: "Hyperthyroid → which cause? (flowchart)", src: "p.268–269", steps: [
      { t: "Thyrotoxic features → **free T4 + TSH**", node: "lab-tft", role: "init", type: "investigation", why: "First thyroid tests" },
      { decision: "TSH?", branches: [
        { label: "Undetectable → Graves", steps: [
          { t: "USG / MRI neck → diffuse enlargement", node: "img-usg-neck", role: "dx", type: "imaging", why: "Graves goitre" },
          { t: "TRAb assay", node: "lab-trab", role: "confirm", type: "investigation", why: "Graves confirmation" },
          { t: "Thyroid scan → diffuse ↑ uptake", node: "img-thyroid-scan", role: "dx", type: "imaging", why: "Graves pattern" }
        ]},
        { label: "Normal / ↑ with ↑ T3, T4 → secondary", steps: [
          { t: "Pituitary adenoma (m/c) → ==MRI head==", node: "img-mri-brain", role: "dx", type: "imaging", why: "TSH-secreting pituitary adenoma" }
        ]}
      ]}
    ]},
    { type: "treatment", title: "Hyperthyroid treatment flowchart", src: "p.269", steps: [
      { t: "Lab: TSH ↓, T4 & T3 ↑ · Graves = thyrotoxicosis + diffuse goitre + eye signs (else USG, TRAb, scan)", type: "diagnosis" },
      { decision: "Cause?", branches: [
        { label: "Graves / primary", steps: [
          { t: "==1st line: antithyroid drugs== → reach euthyroid · ==DOC carbimazole==", node: "rx-carbimazole", role: "first", type: "treatment", why: "Graves first-line (DOC)" },
          { t: "Planning pregnancy / 1st trimester → **PTU** (high protein binding)", node: "rx-ptu", role: "first", type: "treatment", why: "Hyperthyroid in first trimester" },
          { t: "==TOC (ATA): radioactive iodine I-131 ablation== (t½ 8 d, β-rays)", node: "rx-rai", role: "def", type: "treatment", why: "Graves definitive therapy" }
        ]},
        { label: "Secondary (TSH-oma: TSH ↑, T4 ↑)", steps: [
          { t: "Antithyroid drugs first", node: "rx-carbimazole", role: "first", type: "treatment", why: "Bridge in TSH-secreting adenoma" },
          { t: "==TOC: trans-sphenoidal surgery==", node: "proc-tss", role: "def", type: "treatment", why: "TSH-secreting pituitary adenoma" }
        ]}
      ]},
      { t: "Dose-limiting S/E of all antithyroid drugs → ==agranulocytosis==", node: "lab-cbc", role: "danger", type: "complication", why: "Monitor counts on antithyroid drugs" }
    ]},
    { type: "treatment", title: "Antithyroid drugs in pregnancy", src: "p.269", items: [
      { table: { head: ["", "PTU", "Carbimazole"], rows: [
        { c: ["Trimester", "==1st trimester==", "==2nd trimester=="], hl: true },
        ["Watch for", "==Black box: hepatotoxic== (prolonged use)", "==Teratogenic: aplasia cutis, choanal atresia=="]
      ], key: false }},
      { mnemonic: "PTU = Pregnancy's First · Carbimazole = Continue (2nd)", t: "switch drugs by trimester" },
      { t: "Antithyroid drugs", node: ["rx-ptu", "rx-carbimazole"], role: "first", why: "Pregnancy-specific choice" }
    ]},
    { type: "emergency", title: "Thyroid storm — recognise", src: "p.264–265", items: [
      "Medical emergency · high mortality",
      { mnemonic: "S-I-R", t: "storm triggers", lines: [["S", "==Surgery== on a hyperthyroid patient"], ["I", "Acute ==illness== — stroke, infection (COVID-19), DKA, trauma"], ["R", "==Radioiodine== to a partly treated patient → gland bursts → hormone flood"]] },
      { h: "Features: fever + 4 systems" },
      "Fever in known thyrotoxicosis",
      "Brain → delirium, coma, seizures",
      "Heart → tachycardia, ==AF (m/c arrhythmia)==, ± CHF & pulmonary oedema",
      "Gut → nausea, vomiting, diarrhoea",
      "Liver → icterus / jaundice",
      { h: "Burch–Wartofsky score" },
      { table: { head: ["Total", "Meaning"], rows: [
        { c: ["**>45**", "==Thyroid storm=="], hl: true },
        ["25–44", "Impending storm"],
        ["<25", "Unlikely"]
      ]}},
      { table: { caption: "Scoring components (notes)", head: ["Domain", "Points"], rows: [
        ["Temperature °F", "99–99.9: 0 · 100–100.9: 10 · 101–101.9: 15 · 102–102.9: 20 · 103–103.9: 25 · ≥104: 30"],
        { c: ["Heart rate", "100–109: 5 · 110–119: 10 · 120–129: 15 · 130–139: 20 · ≥140: 30"], verify: "Notes print the last row as '>104.0 → 30' (copied from the temperature scale); it should be HR ≥140. Verify." },
        ["CNS", "Absent 0 · mild agitation 10 · delirium/psychosis/lethargy 20 · seizure/coma 30"],
        ["GI–hepatic", "Absent 0 · diarrhoea/pain/vomiting 10 · jaundice 20"],
        ["AF", "Absent 0 · present 10"],
        ["CHF", "Absent 0 · mild 5 · moderate 10 · severe 20"],
        { c: ["Precipitant history", "As printed: positive 0 · negative 10"], verify: "This looks reversed — a positive precipitant history should score 10. Verify." }
      ]}}
    ]},
    { type: "emergency", title: "Thyroid storm — treatment flowchart", src: "p.265", steps: [
      { t: "Goal → ↓ total biologically active T4", type: "shared" },
      { t: "**Support:** cooling (ice packs) · oxygen · IV fluids (stop if CHF)", type: "emergency" },
      { t: "==DOC: PTU== (NG tube / rectal) → ↓ T4 production + ==blocks peripheral T4 → T3== · alternative: methimazole", node: "rx-ptu", role: ["emerg", "first"], type: "emergency", why: "Thyroid storm DOC" },
      { t: "**SSKI 6-hourly** → mega iodine → ==Wolff–Chaikoff== → ↓ trapping → ↓ T4/T3", node: "rx-iodide", role: "adjunct", type: "treatment", why: "Thyroid storm: block hormone release" },
      { t: "==Propranolol== (β1 + β2) → counters tachycardia & muscle effects · tachycardia + hypotension → ==esmolol==", node: "rx-beta-blocker", role: "adjunct", type: "treatment", why: "Thyroid storm: β-blockade" },
      { t: "**Hydrocortisone**", node: "rx-hydrocortisone", role: "adjunct", type: "treatment", why: "Thyroid storm adjunct" },
      { t: "**Cholestyramine** → sequesters thyroid hormone", node: "rx-cholestyramine", role: "adjunct", type: "treatment", why: "Thyroid storm: bind hormone" },
      { mnemonic: "Cool + 5 B's", t: "Block synthesis (PTU) · Block release (iodine) · Block conversion (PTU, steroid) · Beta-block · Bind (cholestyramine)" }
    ]},
    { type: "etiology", title: "Hypothyroidism — causes", src: "p.269–270", items: [
      { table: { head: ["", "Primary (gland)", "Secondary (pituitary)"], rows: [
        { c: ["Labs", "T4 ↓, T3 ↓, ==TSH ↑==", "T4 ↓, T3 ↓, TSH ↓"], node: "lab-tft", role: "dx", why: "Primary vs secondary hypothyroidism", hl: true },
        ["Causes", "Iodine deficiency / ==endemic cretinism== · ==Hashimoto== (anti-TPO) · goitrogens (cabbage, turnip → ↓ T3) · ==amiodarone==", "Sheehan · ==Simmond disease== (non-obstetric pituitary damage: AVM, tumour, HTN) · CNS irradiation · sarcoidosis · haemochromatosis"]
      ]}},
      { t: "Congenital hypothyroidism → leading cause ==thyroid dysgenesis==", role: "hy" },
      "Baby of iodine-deficient mother → ==endemic cretinism=="
    ]},
    { type: "clinical", title: "Hypothyroid — features", src: "p.270–271", items: [
      { mnemonic: "C-HAMPS", t: "champs move slowly", lines: [["C", "==Cold intolerance== (↓ calorigenesis)"], ["H", "Hoarse voice · hair thinning, ==Queen Anne sign=="], ["A", "==Ankle jerk hung-up (Woltman)== — most reliable sign"], ["M", "Menorrhagia · infertility · myxoedema (puffy face, dry coarse skin)"], ["P", "Pulse <60 · isolated diastolic HTN (e.g. 120/100)"], ["S", "Slow gut → ==constipation== (poor laxative response)"]] },
      "Weight gain (modest, less than Cushing)",
      "Queen Anne sign → early but **not specific**",
      "β-carotenaemia → lemon-yellow skin (T4 needed to make vitamin A)",
      { t: "==Hashimoto encephalopathy== → myoclonus, slow-wave EEG, ==steroid-responsive==", role: "hy" },
      { chain: ["Iodine deficiency", "T4/T3 ↓", "TSH + TRH ↑", "Prolactin ↑", "==Galactorrhoea=="] },
      "Galactorrhoea also in → prolactinoma, chronic renal failure",
      "Hung-up reflexes also seen in → chorea"
    ]},
    { type: "investigation", title: "Hypothyroid — extra tests", src: "p.271", items: [
      { table: { head: ["Test", "Finding"], rows: [
        { c: ["ECG", "==Low voltage== (massive pericardial effusion) — ==pulsus paradoxus absent== (slow accumulation)"], node: "bed-ecg", role: "dx", why: "Myxoedema heart: low-voltage ECG" },
        { c: ["Chest X-ray", "↑ cardiothoracic ratio · ==water-bottle heart=="], node: "img-cxr", role: "dx", why: "Myxoedema pericardial effusion" },
        { c: ["CBC", "==Macrocytic anaemia=="], node: "lab-cbc", role: "dx", why: "Hypothyroidism causes macrocytosis" },
        { c: ["Lipid profile", "↑ cholesterol → accelerated atherosclerosis"], node: "lab-lipid", role: "dx", why: "Hypothyroid hypercholesterolaemia" }
      ]}},
      "Macrocytosis causes → B12 · folate · aplastic anaemia · chronic liver disease · hypothyroidism",
      "Serous effusions everywhere → 'myxoedema heart'"
    ]},
    { type: "diagnosis", title: "Hypothyroid → which cause? (flowchart)", src: "p.271", steps: [
      { t: "Free T4 + TSH (preferred) · total & free T4, T3 ↓", node: "lab-tft", role: "init", type: "investigation", why: "Hypothyroid work-up" },
      { decision: "TSH?", branches: [
        { label: "Elevated → primary / Hashimoto", steps: [
          { t: "Antibodies: anti-TPO · anti-thyroglobulin · anti-microsomal", node: "lab-thyroid-ab", role: "confirm", type: "investigation", why: "Hashimoto" },
          { t: "USG / MRI neck → goitre (may be retrosternal)", node: "img-usg-neck", role: "dx", type: "imaging", why: "Goitre assessment" }
        ]},
        { label: "Decreased → secondary (pituitary)", steps: [
          { t: "==MRI head== (next best)", node: "img-mri-brain", role: "dx", type: "imaging", why: "Pituitary cause of hypothyroidism", verify: "Notes' flowchart labels this branch 'Also ↑ T3 & T4'; in secondary hypothyroidism T3/T4 are LOW. Treat as a typo." }
        ]}
      ]}
    ]},
    { type: "treatment", title: "Hypothyroid treatment & myxoedema coma", src: "p.271–272", steps: [
      { decision: "Situation", branches: [
        { label: "Routine", steps: [
          { t: "==Levothyroxine 1.6 µg/kg/day, lifelong==", node: "rx-levothyroxine", role: "first", type: "treatment", why: "Hypothyroidism replacement" },
          { t: "**>65 y with CAD** → start ==25 µg OD==, increase slowly (avoid ischaemia)", node: "rx-levothyroxine", role: "first", type: "treatment", why: "Elderly / CAD: low start dose" }
        ]},
        { label: "Myxoedema coma", steps: [
          { t: "Non-compliant hypothyroid + trigger (UTI, sleeping pills) → hormone crash → temp **<35 °C**, bradycardia, hypotension, prolonged PR, unconscious", type: "clinical" },
          { t: "**Rewarm** + ==liothyronine (T3)== + levothyroxine", node: ["rx-liothyronine", "rx-levothyroxine"], role: "emerg", type: "emergency", why: "Myxoedema coma" }
        ]}
      ]},
      { mnemonic: "1.6 for the young · 25 for the old heart", t: "levothyroxine start dose" }
    ]},
    { type: "diagnosis", title: "Sick euthyroid syndrome", src: "p.272", items: [
      "Trigger → **sepsis**",
      "Problem → ==impaired T4 → T3 conversion==",
      { table: { head: ["T4", "T3", "TSH"], rows: [
        { c: ["Normal", "==↓==", "↓ at first → normal/↑ in recovery"], node: "lab-tft", role: "dx", why: "Sick euthyroid pattern" }
      ]}},
      "Treat the cause"
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.273", items: [
      { t: "Anxious woman, weight loss, tremor, diffuse goitre, loud S1 → ==autoimmune activation of TSH receptors== (a)", node: "lab-trab", role: "dx", why: "MCQ: Graves mechanism" },
      { t: "65-y woman, hypothyroid, on aspirin + statin → ==levothyroxine 25 µg, titrate by TSH== (a)", node: "rx-levothyroxine", role: "first", why: "MCQ: elderly with CAD risk" },
      { t: "DOC for thyroid storm → ==propylthiouracil== (c)", node: "rx-ptu", role: "emerg", why: "MCQ: thyroid storm DOC" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 264–273 (Diseases of Thyroid). NO SPECS from the notes; other mnemonics written for this chart.",
    "† = standard reference range not printed in the notes. Davidson's / Boloor's not available — not used."
  ]
});
