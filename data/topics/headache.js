/* Headache & Migraine. Primary source: PrepLadder notes PDF pp. 506–514.
   "SP's of cluster headache" and "SO FAST" are from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "headache",
  title: "Headache & Migraine",
  aka: ["migraine", "tension headache", "cluster headache", "SUNCT", "giant cell arteritis", "temporal arteritis", "IIH", "pseudotumor cerebri", "medication overuse headache", "low CSF volume headache", "MIDAS", "red flags", "glaucoma"],
  oneLine: "Buzzwords → diagnosis; migraine criteria, MIDAS and the treatment ladder; tension, cluster, SUNCT, GCA, IIH; red-flag headaches.",
  flow: ["Headache + buzzword", "Red flags? → SAH · ICSOL · GCA · low CSF · IIH", "Primary: migraine (IHS) · tension · cluster · SUNCT", "Abort: NSAID → triptan → SC sumatriptan / DHE", "Prevent: propranolol · amitriptyline · topiramate · CGRP · verapamil (cluster)"],
  related: ["sah", "raised-icp", "ncc-brain-tumor", "meningitis-1"],
  bubbles: [
    { type: "definition", title: "Primary vs secondary", src: "p.506", items: [
      { table: { head: ["", "Primary", "Secondary"], rows: [
        { c: ["M/c", "==Tension headache== (>15 days/month)", "==Infection== (meningitis, sinusitis)"], hl: true },
        ["Least common", "==Cluster headache== (deep retro-orbital, same time each day)", "==Brain tumour== (vomiting, then headache)"]
      ]}, add: "Episodic tension-type headache = <15 days/month; CHRONIC tension-type headache = ≥15 days/month for >3 months. It is bilateral, pressing, mild–moderate, not worsened by activity, and has no nausea." }
    ]},
    { type: "diagnosis", title: "Buzzword → diagnosis", src: "p.506", wide: true, items: [
      { table: { head: ["Buzzword", "Diagnosis", "Key extra"], rows: [
        { c: ["'Worst headache of my life' · thunderclap · peaks in 5 min · nuchal rigidity", "==Subarachnoid haemorrhage==", "See SAH"], role: "danger", see: "sah" },
        { c: ["70-y man · temporal headache · scalp tender (combing hair)", "==Giant cell arteritis==", "Extracranial, U/L · with PUO"], node: "lab-esr", role: "dx", why: "GCA: ESR ~100" },
        ["Vomiting precedes headache by weeks · holocephalic", "==↑ ICP / brain tumour==", "—"],
        ["Migraine on NSAID + caffeine + opioid, still daily", "==Medication-overuse headache==", "==No opioids / barbiturates in migraine== (habituation, withdrawal)"],
        ["Worse standing, better lying (positional)", "==Low CSF volume headache==", "After LP, epidural, weightlifting, straining, coughing · starts ≤48 h (up to 12 days)"],
        { c: ["Obese woman · worse on waking & lying · papilloedema", "==IIH (pseudotumour cerebri)==", "MRI + MR venogram (partial sinus obstruction) · guarded LP helps · ==acetazolamide=="], node: ["img-mrv", "rx-acetazolamide", "proc-lp"], role: "dx", why: "IIH work-up and treatment" }
      ]}, add: "Treatment: lie flat, fluids, caffeine and simple analgesics; if it persists beyond a few days → epidural blood patch. A small-gauge, atraumatic (pencil-point) LP needle prevents most post-dural-puncture headaches. · Diagnosis needs papilloedema + opening pressure >25 cmH₂O with NORMAL CSF and normal brain imaging (venous sinus thrombosis excluded). Main threat = permanent visual loss → weight loss + acetazolamide; failing vision → optic nerve sheath fenestration or CSF shunt." },
      { t: "Normal pressure hydrocephalus → CSF removal improves gait (==Fisher test==)", add: "NPH triad = wet (urinary incontinence), wobbly (magnetic gait apraxia) and wacky (dementia) with enlarged ventricles on imaging. Improvement after removing 30–50 mL of CSF predicts a good response to a ventriculoperitoneal shunt.", node: "proc-lp", role: "dx", why: "Tap test in NPH" }
    ]},
    { type: "clinical", title: "Migraine — features & criteria", src: "p.507", items: [
      { h: "Aura & triggers" },
      "Aura → visual blurring · zig-zag lines · scotoma",
      "Triggers → missed meal · sunlight · exertion",
      { mnemonic: "POUND", t: "4 of 5 + ≥5 attacks → migraine", lines: [["P", "Pulsatile, throbbing (often female)"], ["O", "One-day duration — 4–72 h (avg ~24 h)"], ["U", "Unilateral"], ["N", "Nausea, vomiting"], ["D", "Disabling — worse with neck movement"]] },
      "Also → photophobia, phonophobia",
      { h: "IHS criteria" },
      "Repeated attacks of **4–72 h** with ==normal examination== (no nuchal rigidity, no focal deficit, no CN palsy) and no other cause",
      { table: { head: ["Any 2 of", "Any 1 of"], rows: [
        ["Moderate–severe intensity", "Nausea / vomiting"],
        ["Aggravated by movement", "Photophobia"],
        ["Throbbing", "Phonophobia"],
        ["Unilateral", ""]
      ]}},
      { mnemonic: "MATU (notes' letters)", t: "Moderate-severe · Aggravated by movement · Throbbing · Unilateral" }
    ]},
    { type: "diagnosis", title: "MIDAS disability score", src: "p.507–508", items: [
      "5 questions → days lost to headache in **3 months** (work/school, reduced work, housework, reduced housework, leisure) → add them",
      "Questions A (headache days) and B (intensity 0–10) are **not** counted",
      { table: { head: ["Grade", "Disability", "Score"], rows: [
        ["I", "Minimal", "0–5"],
        ["II", "Mild", "6–10"],
        ["III", "Moderate", "11–20"],
        { c: ["IV", "==Severe → needs prophylaxis==", "**>21**"], hl: true }
      ]}},
      { mnemonic: "5 · 10 · 20", t: "MIDAS grade breaks" }
    ]},
    { type: "treatment", title: "Migraine — acute treatment flowchart", src: "p.508–509", steps: [
      { decision: "Attack severity", branches: [
        { label: "Mild–moderate", steps: [{ t: "==COX inhibitor — naproxen==", add: "Add an antiemetic / prokinetic (metoclopramide or domperidone): it treats nausea and speeds absorption of the analgesic. Limit acute drugs to <10 days a month (triptans) or <15 (simple analgesics) to avoid medication-overuse headache.", node: "rx-nsaid", role: "first", type: "treatment", why: "Mild-moderate migraine attack" }] },
        { label: "Severe", steps: [
          { t: "==Triptans== — sumatriptan nasal / SC; most effective → ==rizatriptan, eletriptan== (5-HT1B/1D)", node: "rx-triptan", role: "first", type: "treatment", why: "Severe migraine attack" },
          { t: "+ naproxen → ↓ recurrence", node: "rx-nsaid", role: "adjunct", type: "treatment", why: "Triptan + naproxen combination" }
        ]},
        { label: "Severe, can't take oral", steps: [
          { t: "==6 mg SC sumatriptan (needle-free)== · 1 mg dihydroergotamine SC/IM/IV", node: "rx-triptan", role: "rescue", type: "treatment", why: "Parenteral migraine rescue" },
          { t: "==C/I: pregnancy · Prinzmetal angina · PAD · basilar migraine==", add: "Also contraindicated: ischaemic heart disease, previous stroke / TIA, uncontrolled hypertension and hemiplegic migraine (all because triptans constrict 5-HT1B arteries); avoid within 24 h of an ergot.", role: "ci", type: "emergency" }
        ]}
      ]},
      { t: "Other options: ==gepants== (rimegepant, ubrogepant) · ==ditans== (lasmiditan — no vascular effect, OK in CVS/CNS disease; dizziness; no driving 8 h) · ergotamine · single-pulse TMS", node: "rx-cgrp", role: "second", type: "treatment", why: "Migraine acute alternatives" },
      { t: "==Never opioids / barbiturates==", role: "ci", type: "emergency" }
    ]},
    { type: "treatment", title: "Migraine — prevention", src: "p.509", items: [
      { mnemonic: "BAT-CO-BS", t: "migraine prophylaxis", lines: [["B", "==β-blocker — propranolol=="], ["A", "Antidepressants — amitriptyline, venlafaxine"], ["T", "Topiramate, valproate (anticonvulsants)"], ["C", "Candesartan, flunarizine"], ["O", "Onabotulinum toxin (procerus, corrugator)"], ["BS", "Biologics — CGRP mAbs: galcanezumab, erenumab (monthly SC), eptinezumab (3-monthly) · STMS"]] },
      { t: "Propranolol", node: "rx-beta-blocker", role: "prevent", why: "Migraine prophylaxis" },
      { t: "Amitriptyline / venlafaxine", node: "rx-tca", role: "prevent", why: "Migraine prophylaxis" },
      { t: "Topiramate / valproate", node: "rx-antiepileptic", role: "prevent", why: "Migraine prophylaxis" },
      { t: "Flunarizine", node: "rx-ccb", role: "prevent", why: "Migraine prophylaxis" },
      { t: "CGRP monoclonal antibodies", node: "rx-cgrp", role: "prevent", why: "Migraine prophylaxis" },
      { h: "Familial hemiplegic migraine" },
      { t: "Migraine + weakness that resolves slowly (stroke mimic) · ==calcium-channel defect==", add: "Autosomal dominant: FHM1 = CACNA1A (P/Q-type calcium channel), FHM2 = ATP1A2 (Na⁺/K⁺-ATPase), FHM3 = SCN1A (sodium channel). Triptans and ergots are avoided in hemiplegic migraine." },
      "Other Ca-channel diseases → Lambert–Eaton (oat-cell Ca lung) · hypokalaemic periodic paralysis type 1"
    ]},
    { type: "clinical", title: "Tension · cluster · SUNCT", src: "p.511–513", wide: true, items: [
      { t: "**Tension headache:** stressed patient · ==tight band around the head== · ~20 days/month · BP, refraction, fundus, sinus normal → ==paracetamol, amitriptyline==", node: ["rx-nsaid", "rx-tca"], role: "first", why: "Tension-type headache" },
      { table: { head: ["", "Cluster headache", "SUNCT"], rows: [
        ["Pain", "Deep, unilateral retro-orbital · ==same time daily, weeks each year== · alcohol trigger · pacing", "Burning / stabbing periorbital, neuralgiform"],
        ["Autonomic", "Epiphora, ptosis (partial Horner), nasal stuffiness", "Conjunctival injection + tearing"],
        { c: ["Attacks/day", "**1–8**", "**3–200**"], hl: true },
        { c: ["Duration", "**15–180 min**", "**5–240 s**"], hl: true },
        ["Abortive", "==SC sumatriptan (DOC)== + high-flow O₂", "==IV lidocaine=="],
        ["Preventive", "==Verapamil (best)== · nVNS · melatonin · lithium", "Lamotrigine · topiramate"]
      ]}},
      "Cluster = ==suicide headache== (psychiatric features)",
      { mnemonic: "SP's of cluster (notes)", lines: [["P", "Pain — severe, unilateral, orbital"], ["P", "Periodic — same time daily"], ["P", "Ptosis (partial Horner)"], ["P", "Pacing — restless"], ["P", "Parasympathetic — tearing, nasal congestion"]] }
    ]},
    { type: "treatment", title: "Cluster headache — SO FAST (notes)", src: "p.512", steps: [
      { t: "**1st step → high-flow O₂ 12–15 L/min** (100%, non-rebreather)", node: "rx-oxygen", role: "first", type: "emergency", why: "Cluster attack first step" },
      { t: "==Sumatriptan SC / intranasal== — abortive DOC", node: "rx-triptan", role: "first", type: "treatment", why: "Cluster abortive DOC" },
      { t: "Prophylaxis → ==verapamil (1st line)== · lithium · greater occipital nerve block · nVNS · TMS · melatonin", node: ["rx-ccb", "rx-lithium"], role: "prevent", type: "treatment", why: "Cluster prevention" },
      { t: "Avoid triggers (alcohol, stress) · steroids short course · transitional bridge (steroid / DHE)", node: "rx-steroids", role: "adjunct", type: "treatment", why: "Cluster bridging therapy" },
      { mnemonic: "SO FAST (notes)", lines: [["S", "Sumatriptan"], ["O", "Oxygen 100%"], ["F", "First-line prophylaxis — verapamil"], ["A", "Avoid triggers"], ["S", "Steroids"], ["T", "Transitional therapy"]] }
    ]},
    { type: "diagnosis", title: "Giant cell arteritis", src: "p.510–511", items: [
      "70-y man · feverish 4 weeks · scalp tender while combing · ==jaw claudication== · cord-like temporal artery · ESR 100",
      { chain: ["Auriculo-temporal artery narrows", "Scalp + TMJ ischaemia", "Tenderness / jaw claudication"], add: "The artery involved is the superficial temporal artery (a branch of the external carotid); 'auriculo-temporal' is the nerve that runs with it. Ischaemia of the ophthalmic / posterior ciliary arteries causes anterior ischaemic optic neuropathy → sudden painless blindness." },
      { t: "M/c presentation → ==fever of unknown origin==", add: "Standard: the commonest presentation is a NEW headache with scalp tenderness in someone >50 y; GCA is, though, an important cause of PUO in the elderly. About half have polymyalgia rheumatica (shoulder / hip girdle pain and stiffness).", role: "hy" },
      { t: "Ophthalmic artery → ==monocular blindness==", role: "danger" },
      { t: "Biopsy → ==giant cells, granulomatous vasculitis==", node: "proc-ta-biopsy", role: "confirm", why: "GCA confirmation" },
      { t: "ESR ↑ (~100)", node: "lab-esr", role: "dx", why: "GCA: very high ESR" },
      { t: "Treat → ==steroids== · no role for triptans", add: "Start prednisolone 40–60 mg/day at once on suspicion — do not wait for the biopsy (it stays positive for ~2 weeks on steroids). With visual symptoms: IV methylprednisolone 500–1000 mg daily × 3 days. Add low-dose aspirin; tocilizumab is the steroid-sparing drug. Taper over 1–2 years.", node: "rx-steroids", role: "first", why: "GCA (prevents blindness)" },
      { t: "ESR 100 mm/h → ==SBE · GCA · multiple myeloma==", role: "hy" }
    ]},
    { type: "diagnosis", title: "Case clues (notes)", src: "p.509–510", items: [
      { t: "Woman, 5 am explosive headache, vomiting, ==ptosis + nuchal rigidity== → ==SAH== (focal deficit + neck stiffness exclude migraine; short history excludes ICSOL; no fever excludes meningitis)", see: "sah" },
      { t: "SAH → NCCT: blood in Sylvian fissure, ==star of death== → then ==cerebral angiography== → TOC ==endovascular coiling== · DOC ==nimodipine==", node: ["img-ncct-head", "img-angio", "proc-coiling", "rx-ccb"], role: "dx", why: "SAH pathway" },
      { t: "Young woman in a ==dark cinema== → retro-orbital pain, vomiting, red eye, ==vertically oval dilated sluggish pupil== → ==angle-closure glaucoma== → ==mannitol==", add: "Emergency drops and drugs: IV acetazolamide 500 mg + topical timolol and a steroid, pilocarpine once the pressure starts to fall, and IV mannitol if IOP stays very high. Definitive: laser peripheral iridotomy — in both eyes.", node: "rx-mannitol", role: "emerg", why: "Acute angle-closure glaucoma" },
      "Glaucoma: dark → mydriasis → ciliary block → ↑ IOP"
    ]},
    { type: "emergency", title: "Red-flag headaches", src: "p.513", items: [
      { table: { head: ["Feature", "Think"], rows: [
        { c: ["Sudden · first · worst ever", "==SAH=="], role: "danger" },
        ["Vomiting before headache · subacute worsening over weeks", "==ICSOL (brain)=="],
        ["Worse bending, lifting, coughing", "Low CSF volume headache"],
        ["Wakes from sleep", "Cluster headache"],
        ["Present on waking", "HTN · OSA · IIH"],
        ["Onset after 55 y", "Stroke / tumour"],
        ["Fever / systemic, temporal tenderness", "==GCA=="],
        ["Known systemic illness · abnormal neuro exam", "Secondary cause"]
      ]}, add: "Standard red-flag reading: headache brought on by coughing, straining or bending suggests RAISED intracranial pressure — a posterior-fossa mass or Chiari malformation — and needs MRI. Low-CSF headache is the POSTURAL one: worse upright, relieved by lying flat." },
      { mnemonic: "SNOOP", t: "Systemic illness · Neuro signs · Onset sudden · Older >55 · Pattern change (positional, waking, vomiting)" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.514", items: [
      { t: "Needs further investigation → ==a, b, c== (50-y gradual headache + vomiting · 70-y scalp tenderness · weightlifter with cough/bend headache); not the stressed woman", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 506–514 (Headache & Migraine). SP's and SO FAST mnemonics from the notes; POUND, SNOOP, BAT-CO-BS written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
