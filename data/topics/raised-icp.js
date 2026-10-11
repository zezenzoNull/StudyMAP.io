/* Raised ICP & Brain Death. Primary source: PrepLadder notes PDF pp. 527–535.
   The management letters (H-O-D-S-H-P) are highlighted in the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "raised-icp",
  title: "Raised ICP & Brain Death",
  aka: ["intracranial pressure", "CPP", "herniation", "uncal", "Hutchinson pupil", "Cushing reflex", "Cushing triad", "cerebral oedema", "vasogenic", "cytotoxic", "ventriculostomy", "brain death", "apnoea test", "caloric test", "doll's eye", "ocular bobbing", "CSF"],
  oneLine: "ICP & CPP numbers, herniation types, the stepwise raised-ICP protocol, vasogenic vs cytotoxic oedema, bedside signs (Cushing triad, posturing, pupils, eyes) and brain-death certification.",
  flow: ["Headache · projectile vomiting · CN VI palsy · ↓ GCS", "Cushing triad · papilloedema · posturing · pupils", "ICP >20–25 for >5 min → protocol", "Head up · osmotherapy · drain · sedate · hyperventilate · pressors", "Refractory → hemicraniectomy · pentobarbital coma · hypothermia"],
  related: ["stroke", "ncc-brain-tumor", "meningitis-1", "ich", "headache"],
  bubbles: [
    { type: "definition", title: "Numbers to know", src: "p.527, 529", items: [
      { table: { head: ["Parameter", "Value"], rows: [
        { c: ["Normal ICP", "**10–20 mmHg** (50–180 mm H₂O)"], hl: true },
        ["Raised ICP", "**>25 mmHg**"],
        ["CPP", "= **MAP − ICP** (e.g. 95 − 20 = 75)"],
        ["MAP", "= (SBP + 2 × DBP) ÷ 3"],
        ["Normal CPP", "**60–80 mmHg**"],
        { c: ["CPP <60", "==Brain infarction=="], role: "danger" }
      ]}},
      { mnemonic: "Keep ICP under 20, CPP over 60", t: "management goals · act when ICP >20–25 for >5 min" },
      { h: "CSF physiology" },
      { table: { head: ["CSF fact", "Value"], rows: [
        ["Made by", "==Choroid plexus=="],
        ["Absorbed by", "==Arachnoid granulations== (superior sagittal sinus) — damage → ↓ absorption"],
        ["Volume", "**150 mL**"],
        ["Production = absorption", "**20 mL/h**"],
        ["vs plasma", "↑ Na⁺, Cl⁻, Mg²⁺ · ↓ Ca²⁺, K⁺"]
      ]}}
    ]},
    { type: "patho", title: "Brain herniation", src: "p.527", items: [
      { table: { head: ["Type", "Movement", "Key sign"], rows: [
        ["==Transtentorial== (m/c)", "Downward", "—"],
        ["Subfalcine", "==Horizontal== under the falx", "Midline shift"],
        { c: ["==Uncal==", "Uncus over tentorium", "==CN III compression → I/L mid-dilated sluggish pupil (Hutchinson)=="], node: "con-cn3-palsy", role: "danger", why: "Uncal herniation compresses CN III", hl: true },
        { c: ["==Foraminal (tonsillar)==", "Cerebellar tonsils down", "Medulla compressed → ==apnoea== · caused by ==LP with raised ICP=="], node: "proc-lp", role: "ci", why: "LP in raised ICP can cause tonsillar herniation" },
        ["Transcalvarial", "Out through skull defect after trauma", "Bad prognosis"]
      ]}}
    ]},
    { type: "clinical", title: "Symptoms", src: "p.529", items: [
      "Headache → ==frontal first== (dura stretch, CN V), later holocephalic",
      "==Projectile vomiting without nausea==",
      { t: "Diplopia on lateral gaze → ==CN VI palsy = false localising sign==", role: "hy" },
      { t: "==Altered mental status = most reliable symptom== (reticular activating system)", role: "hy" },
      { table: { caption: "Cranial-nerve records", head: ["Record", "Nerve"], rows: [
        { c: ["Longest subarachnoid course · m/c in raised ICP · false localising", "==CN VI=="], hl: true },
        ["Longest intracranial course", "==CN IV=="],
        ["Longest overall", "CN X (vagabond)"],
        ["Longest intra-osseous course", "==CN VII=="]
      ]}},
      { mnemonic: "6 Sub · 4 Cranial · 7 Bone · 10 Overall", t: "longest-course CN records" }
    ]},
    { type: "clinical", title: "Signs", src: "p.530–531", wide: true, items: [
      { mnemonic: "Cushing triad = HTN · Bradycardia · Irregular breathing", t: "first two = Cushing reflex" },
      { table: { caption: "Breathing patterns", head: ["Pattern", "Looks like", "Seen in"], rows: [
        ["==Cheyne–Stokes== (periodic)", "Crescendo–decrescendo then apnoea", "↑ ICP · CHF · HAPE"],
        { c: ["==Biot==", "==Irregularly irregular==", "↑ ICP"], hl: true },
        ["Agonal", "Occasional gasps", "Terminal"]
      ]}},
      { t: "Irregularly irregular breathing = Biot · irregularly irregular pulse = AF", node: "con-af", role: "hy", why: "Don't mix the two 'irregularly irregulars'" },
      { table: { caption: "Posturing", head: ["Posture", "Upper limbs", "Lesion"], rows: [
        ["==Decorticate==", "==Flexed== + adducted (legs extended)", "==Above the red nucleus== (upper midbrain) → rubrospinal flexor drive unopposed"],
        ["==Decerebrate==", "==Extended==, pronated, adducted", "==Rubrospinal tract damaged== → flexor tone lost"]
      ]}},
      { mnemonic: "deCORticate = hands to the CORe (heart)", t: "flexed = above red nucleus; decerebrate = extended = worse" },
      "Leg extension → vestibulospinal + reticulospinal tracts",
      "Hutchinson pupil stages → I/L constricted → I/L dilated → both dilated & fixed",
      { h: "Upper-motor-neuron signs" },
      "Brisk DTRs (lost corticospinal inhibition)",
      { table: { head: ["Sign", "Stimulus"], rows: [
        ["==Babinski==", "Sole of foot → great toe dorsiflexes, toes fan"],
        ["==Chaddock==", "Lateral foot towards little toe"],
        ["==Gordon==", "Squeeze the calf"]
      ]}},
      { t: "Fundus → ==papilloedema==", role: "dx" }
    ]},
    { type: "diagnosis", title: "Vasogenic vs cytotoxic oedema", src: "p.528–529", items: [
      { table: { head: ["", "Vasogenic", "Cytotoxic"], rows: [
        ["Cause", "↑ BBB permeability → ==interstitial== water", "Cell injury (stroke) → ==intracellular== water"],
        ["Matter", "White matter · ==grey spared==", "==Both== grey & white"],
        ["Imaging", "Finger-like white-matter oedema", "==Loss of grey–white differentiation=="],
        ["Examples", "TB meningitis · NCC · tumour · HACE", "Stroke · traumatic brain injury"],
        { c: ["Steroids", "==Work==", "==Don't work=="], node: "rx-steroids", role: "first", why: "Glucocorticoids help vasogenic, not cytotoxic oedema", hl: true }
      ]}},
      { mnemonic: "Vasogenic = Vessels leak (steroids help) · Cytotoxic = Cells die (steroids don't)" }
    ]},
    { type: "emergency", title: "Raised ICP management — flowchart", src: "p.527–528", steps: [
      { t: "ICP >20–25 mmHg for >5 min · insert ICP monitor (==ventriculostomy== — most effective)", node: ["em-raised-icp", "proc-evd"], role: "emerg", type: "emergency", why: "Entry to raised-ICP protocol" },
      { t: "**H** — Head end elevation, midline head position", type: "treatment" },
      { t: "**O** — Osmotherapy: ==mannitol== (C/I active CNS bleed, e.g. warfarin toxicity) · ==23.4% hypertonic saline== · ==5% dextrose absolutely C/I== (hypotonic)", node: ["rx-mannitol", "rx-hypertonic-saline"], role: "first", type: "treatment", why: "Osmotherapy for raised ICP" },
      { t: "**D** — Drain CSF via ventriculostomy", node: "proc-evd", role: "first", type: "treatment", why: "CSF drainage lowers ICP" },
      { t: "Glucocorticoids → only for ==vasogenic== oedema (TB meningitis, NCC, tumour, HACE); not stroke / TBI", node: "rx-steroids", role: "adjunct", type: "treatment", why: "Vasogenic oedema only" },
      { t: "**S** — Sedation: midazolam, propofol, morphine · paralyse + intubate (PPV) → less barotrauma", node: "rx-sedation", role: "adjunct", type: "treatment", why: "Lower metabolic demand and ICP" },
      { t: "**H** — Hyperventilation (short-term): CO₂ washout → cerebral vasoconstriction → ICP ↓", type: "treatment" },
      { t: "**P** — Pressors (dopamine, norepinephrine, phenylephrine) → ↑ MAP → keeps CPP >60", node: "rx-vasopressor", role: "adjunct", type: "treatment", why: "Maintain CPP" },
      { decision: "Still refractory?", branches: [
        { label: "Yes → Tier II", steps: [
          { t: "==Decompressive hemicraniectomy== (bone flap off, dura opened)", role: "def", type: "treatment" },
          { t: "==Pentobarbital coma== (↓ metabolism) · therapeutic hypothermia **33 °C**", node: "rx-pentobarbital", role: "rescue", type: "treatment", why: "Refractory raised ICP" }
        ]},
        { label: "No", steps: [{ t: "Keep ICP <20, CPP >60 · treat the cause", type: "followup" }] }
      ]},
      { mnemonic: "HODS-HiP (notes' highlighted letters)", lines: [["H", "Head up"], ["O", "Osmotherapy"], ["D", "Drain CSF"], ["S", "Sedation"], ["Hi", "Hyperventilation"], ["P", "Pressors"]] }
    ]},
    { type: "investigation", title: "Eyes & bedside clues in neuro-ICU", src: "p.532", items: [
      { t: "Small reactive pupils → ==metabolic encephalopathy== (ammonia in fulminant hepatic failure · urea in AKI)", role: "hy" },
      { table: { caption: "Pinpoint pupils", head: ["Cause", "Temp", "Resp rate"], rows: [
        ["==Pontine stroke==", "↑", "↑ (irregular)"],
        ["==Heroin overdose==", "↓", "↓↓"]
      ]}},
      { table: { head: ["Finding", "Meaning"], rows: [
        ["Eyes look ==towards the lesion== (away from weak side)", "Cortical stroke"],
        ["Eyes towards lesion + crossed signs", "Brainstem stroke", ],
        { c: ["==Ocular dipping== — slow down, fast up", "Diffuse cortical anoxia (cardiac arrest)"] },
        { c: ["==Ocular bobbing== — fast down, slow up", "==Pontine stroke (basilar)=="], hl: true }
      ]}},
      { mnemonic: "Bobbing = Basilar (Fast down) · Dipping = Diffuse anoxia (slow down)" }
    ]},
    { type: "diagnosis", title: "Brain death", src: "p.532–534", items: [
      "Brainstem dead, heart still beating · toe/finger twitches and DTRs can persist",
      { h: "Certify (India)" },
      { mnemonic: "C-A-T-2", lines: [["C", "Coma — irreversible, GCS <8"], ["A", "Absent brainstem reflexes + positive apnoea test"], ["T", "Tests — EEG flat isoelectric, MRA/scintigraphy no brainstem flow"], ["2", "Two separate doctors certify"]] },
      { table: { caption: "Brainstem reflexes (all absent)", head: ["Reflex", "Test", "CN"], rows: [
        ["Light", "Pupils fixed", "II, III (midbrain)"],
        ["Corneal", "No blink both sides", "V, VII (pons)"],
        ["Cough", "Suction catheter", "IX, X (medulla)"],
        { c: ["==Caloric==", "==COWS== negative: Cold → Opposite, Warm → Same-side nystagmus", "VIII, III, VI"], hl: true },
        ["Oculocephalic", "Doll's eye negative", "VIII, III, VI"],
        ["Gag", "Gag + cough", "IX, X"]
      ]}},
      { h: "Apnoea test" },
      { chain: ["100% O₂ for 10 min (pO₂ ~200)", "Disconnect ventilator", "pCO₂ >60 mmHg", "No breathing effort = positive"] },
      "Respiratory pacemaker = ==pre-Bötzinger complex== → destroyed",
      { t: "EEG → ==flat isoelectric >30 min== (sensitivity 2 µV); burst suppression earlier (cortical anoxia)", node: "bed-eeg", role: "confirm", why: "Brain death EEG" },
      { t: "MRA / brain scintigraphy → ==no flow to brainstem==", node: "img-angio", role: "confirm", why: "Brain death: absent flow" }
    ]},
    { type: "diagnosis", title: "Reversible coma — rule out first", src: "p.532", items: [
      { t: "DKA · hyperosmolar coma · uraemic encephalopathy (haemodialysis) · fulminant hepatic failure · hepatic encephalopathy · electrolytes · drug overdose", see: "dka-hhs" },
      { table: { head: ["Test", "Normal"], rows: [
        { c: ["Random blood sugar + urine ketones + drug screen", "{N:lab-rbs}"], node: ["lab-rbs", "lab-urine-ketones"], role: "init", why: "Reversible metabolic coma screen" },
        { c: ["Kidney function", "{N:lab-renal}"], node: "lab-renal", role: "init", why: "Uraemic encephalopathy" },
        { c: ["Liver function", "{N:lab-lft}"], node: "lab-lft", role: "init", why: "Hepatic encephalopathy" },
        { c: ["Electrolytes", "{N:lab-sodium} (Na⁺)"], node: "lab-sodium", role: "init", why: "Electrolyte coma" }
      ]}}
    ]},
    { type: "followup", title: "Organ donation", src: "p.534", items: [
      "One brain-dead donor can save ==8 lives==",
      { table: { head: ["Organ", "M/c indication"], rows: [
        ["Heart", "Cardiomyopathy"],
        ["Lungs", "Interstitial lung disease"],
        ["Liver", "NAFLD"],
        ["Kidney", "Diabetic nephropathy"],
        ["Pancreas", "Type 1 DM"],
        ["Small intestine", "Short gut syndrome"]
      ]}}
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.535", items: [
      { t: "NOT used in traumatic brain injury → ==dexamethasone== (a) — TBI is cytotoxic oedema", node: "rx-dexamethasone", role: "ci", why: "Steroids don't help cytotoxic oedema" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 527–535 (Raised ICP & Brain Death).",
    "Mnemonics other than the notes' highlighted letters were written for this chart. Davidson's / Boloor's not available — not used."
  ]
});
