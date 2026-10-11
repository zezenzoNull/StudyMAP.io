/* Myasthenia Gravis (+ Lambert-Eaton, botulism). Primary source: PrepLadder notes PDF pp. 557–562.
   SLUDGE is from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "myasthenia",
  title: "Myasthenia Gravis",
  aka: ["MG", "anti-AChR", "MuSK", "LRP4", "ice pack test", "edrophonium", "Tensilon", "Simpson test", "myasthenic crisis", "thymectomy", "Lambert-Eaton", "LEMS", "botulism", "decremental response"],
  oneLine: "Post-junctional autoimmune NMJ disease: fatigable asymmetric ptosis & diplopia → antibodies, decremental RNS → pyridostigmine + steroids → thymectomy; crisis → IVIG; LEMS & botulism contrasts.",
  flow: ["Evening asymmetric ptosis + diplopia, normal reflexes", "Ice pack · anti-AChR (RIA) · RNS decrement · SFEMG jitter", "CT chest (thymus) · autoimmune + steroid work-up", "Pyridostigmine + steroids → thymectomy (TOC)", "Crisis (type 2 RF) → IVIG / plasmapheresis"],
  related: ["gbs", "headache", "thyroid", "resp-failure"],
  bubbles: [
    { type: "definition", title: "What it is", src: "p.557", items: [
      "Autoimmune · ==type II hypersensitivity==",
      { t: "==Post-junctional== NMJ defect", role: "hy" },
      { table: { head: ["Fact", "Value"], rows: [
        ["F : M", "**3 : 2**"],
        ["Peak age", "Women **20–30 y** · men **50–60 y**"],
        { c: ["Antibody source", "==Thymic hyperplasia (65%)== · thymoma (10%)"], hl: true }
      ]}}
    ]},
    { type: "patho", title: "Pathophysiology & antibodies", src: "p.557–558", items: [
      { chain: ["Anti-AChR antibodies", "Fewer α subunits on AChR (5 subunits)", "Flattened post-synaptic folds", "Presynaptic run-down", "↓ NMJ efficiency → fatigable weakness"] },
      { t: "RNS → ==decremental response==", node: "bed-rns", role: "dx", why: "MG electrodiagnosis" },
      { table: { caption: "Villain antibodies", head: ["Antibody", "Target / note"], rows: [
        { c: ["==Anti-AChR==", "α subunit · ==specific, not sensitive== · can be negative"], node: "lab-achr-ab", role: "confirm", why: "Most specific MG test", hl: true },
        ["==Anti-MuSK==", "Stops AChR clustering · ==poor response to pyridostigmine=="],
        ["Anti-LRP4", "Low-density lipoprotein receptor-related protein 4"],
        ["Anti-agrin / anti-ryanodine-1 / anti-cortactin-2", "Clustering of AChR"],
        ["Anti-striated muscle", "Against ==titin== (muscle spring)"]
      ]}}
    ]},
    { type: "clinical", title: "Clinical features", src: "p.558", items: [
      { t: "Cardinal → ==easy fatigability + weakness==", role: "hy" },
      { t: "Earliest → ==diplopia== (asymmetric ptosis)", role: "hy" },
      "Ptosis → ==asymmetric== · worse in the ==evening==, normal in the morning",
      "Triggered by → sustained up-gaze >30 s (==Simpson test==) · TV / mobile games",
      { mnemonic: "MG = Mostly Gaze-and-Gulp", t: "eyes first, then bulbar, then limbs, then breathing", lines: [["Eyes", "Diplopia, asymmetric ptosis"], ["Face", "==Snarling facies== (artificial smile)"], ["Bulbar", "Chewing trouble · dysphagia · dysarthria (mushy voice) · nasal regurgitation"], ["Limbs", "Proximal asymmetric (shoulder girdle)"], ["Breath", "==Dyspnoea== — diaphragm"]] },
      { t: "==DTRs normal== despite weakness", role: "hy" },
      { h: "Neonatal transient MG" },
      "Maternal IgG anti-AChR → poor breathing, poor feeding",
      { t: "Treat → ==neostigmine== · good prognosis", node: "rx-pyridostigmine", role: "first", why: "Neonatal transient MG" }
    ]},
    { type: "investigation", title: "Work-up", src: "p.558–559", wide: true, items: [
      { table: { head: ["Test", "Principle / finding", "Role"], rows: [
        ["==Ice pack test==", "Cold ↓ AChE activity → more ACh → ptosis improves", "Bedside"],
        { c: ["==Anti-AChR antibody (RIA)==", "+ in ==85% generalised, 50% ocular==", "==Most specific=="], node: "lab-achr-ab", role: "confirm", why: "MG confirmation", hl: true },
        { c: ["Anti-LRP4 · anti-MuSK", "Seronegative AChR cases", "Diagnostic"], node: "lab-achr-ab", role: "dx", why: "Seronegative MG" },
        { c: ["==Repetitive nerve stimulation==", "==>10% decrement at 3 Hz==", "Electrodiagnosis"], node: "bed-rns", role: "dx", why: "MG decremental response" },
        ["Single-fibre EMG", "==Blocking and jitter==", "Most sensitive"],
        ["Edrophonium (Tensilon)", "2 mg → ptosis resolves (onset >30 s) · false + in ALS · only when electrodiagnosis is negative", "Rarely"],
        { c: ["CT chest", "Thymus pathology", "Thymoma / hyperplasia"], node: "img-ct-chest", role: "dx", why: "Look for thymoma" },
        { c: ["MRI brain", "Ocular MG — exclude other causes", "Exclusion"], node: "img-mri-brain", role: "dx", why: "Ocular MG mimics" }
      ]}, add: "Edrophonium acts within about 30 seconds and lasts ~5 minutes (test dose 2 mg, then up to 8 mg); keep IV atropine ready because it can cause bradycardia. It is now rarely used — ice-pack test, antibodies and electrodiagnosis have replaced it." },
      { h: "Autoimmune & pre-treatment panel" },
      { t: "Thyroid → anti-TPO (Hashimoto), TRAb (Graves) + TFT", node: ["lab-thyroid-ab", "lab-trab", "lab-tft"], role: "dx", why: "Associated autoimmune thyroid disease", see: "thyroid" },
      "RA → anti-CCP · SLE → ANA",
      { t: "Before long-term steroids → TB work-up · ==HbA1c== · bone densitometry", node: ["lab-hba1c", "img-dexa"], role: "monitor", why: "Steroid safety screen" },
      "PFT → before thymectomy"
    ]},
    { type: "emergency", title: "Edrophonium → cholinergic crisis", src: "p.559", items: [
      { mnemonic: "SLUDGE (notes)", lines: [["S", "Salivation"], ["L", "Lacrimation"], ["U", "Urination"], ["D", "Diaphoresis"], ["G", "GI motility ↑ — diarrhoea"], ["E", "Eyes — miosis, emesis"]] },
      { t: "Heart → ==bradycardia (most reliable)==, BP ↓", role: "danger" },
      { t: "Antidote → ==IV atropine==", node: "rx-atropine", role: "emerg", why: "Cholinergic crisis antidote" }
    ]},
    { type: "treatment", title: "MG treatment flowchart", src: "p.559–560", steps: [
      { decision: "Type?", branches: [
        { label: "Generalised MG", steps: [
          { t: "==DOC: pyridostigmine + steroids==", add: "Start prednisolone low and increase slowly: high doses can transiently WORSEN MG in the first 1–2 weeks. Azathioprine or mycophenolate are the usual long-term steroid-sparing drugs; rituximab works best in anti-MuSK MG.", node: ["rx-pyridostigmine", "rx-steroids"], role: "first", type: "treatment", why: "Generalised MG DOC" },
          { t: "Cushingoid on steroids → switch to ==mycophenolate==", node: "rx-immunosuppressant", role: "second", type: "treatment", why: "Steroid-sparing" },
          { t: "Fit (FVC >15 mL/kg) → ==thymectomy = TOC== → remission, steroid dose ↓", add: "Thymectomy is indicated for every thymoma and for generalised AChR-antibody-positive MG in roughly 18–65-year-olds (MGTX trial); benefit appears gradually over months to years. Do it when stable, not during a crisis.", role: "def", type: "treatment" },
          { t: "Persisting → long-term steroids / mycophenolate", node: "rx-immunosuppressant", role: "second", type: "treatment", why: "Refractory MG" }
        ]},
        { label: "Ocular MG (symptoms 3 y, clinical)", steps: [
          { t: "MRI brain to exclude secondary causes · ==no thymectomy==", add: "The branch label '3 y' means: if weakness stays purely ocular for 2–3 years, it is unlikely to become generalised (most generalisation happens within the first 2 years).", node: "img-mri-brain", role: "dx", type: "imaging", why: "Ocular MG" },
          { t: "DOC ==pyridostigmine== (may worsen)", add: "Pyridostigmine 30–60 mg 4–6-hourly. Too much causes cholinergic weakness (excess ACh desensitises the receptors), which is why the dose must not be pushed; anti-MuSK patients often respond poorly or get worse.", node: "rx-pyridostigmine", role: "first", type: "treatment", why: "Ocular MG DOC" },
          { t: "Persisting → glucocorticoids · mycophenolate · rituximab · eculizumab", node: ["rx-steroids", "rx-immunosuppressant"], role: "second", type: "treatment", why: "Ocular MG immunotherapy" }
        ]}
      ]},
      { t: "FVC printed as '>15 mm/kg'", verify: "Unit typo in the notes — FVC is in mL/kg." }
    ]},
    { type: "emergency", title: "Myasthenic crisis", src: "p.560", steps: [
      { t: "Trigger → intercurrent infection (COVID-19, UTI, sepsis)", add: "Drug triggers to avoid or stop: aminoglycosides, fluoroquinolones, macrolides, IV magnesium, β-blockers, neuromuscular blockers, chloroquine / hydroxychloroquine, penicillamine and immune-checkpoint inhibitors; also surgery and pregnancy.", type: "clinical" },
      { t: "==Diaphragm paralysis== → ventilatory support · ==type 2 respiratory failure==", node: "con-type2-resp-failure", role: "danger", type: "emergency", why: "Myasthenic crisis = hypercapnic failure", see: "resp-failure" },
      { t: "==DOC: IVIG==", add: "IVIG 2 g/kg over 2–5 days (or 5 plasma exchanges — faster onset). Monitor FVC: intubate if FVC <15–20 mL/kg or negative inspiratory force weaker than −20 cmH₂O. Pyridostigmine is usually paused while ventilated (it increases secretions).", node: "rx-ivig", role: "emerg", type: "emergency", why: "Myasthenic crisis DOC" },
      { t: "Or ==plasmapheresis==", node: "proc-plasmapheresis", role: "emerg", type: "emergency", why: "Myasthenic crisis alternative" },
      { mnemonic: "IVIG for G-K-M", t: "GBS · Kawasaki · Myasthenic crisis (notes)" }
    ]},
    { type: "diagnosis", title: "Lambert–Eaton vs MG vs botulism", src: "p.560–561", wide: true, items: [
      { table: { head: ["", "Myasthenia gravis", "Lambert–Eaton", "Botulism"], rows: [
        ["Site", "==Post-synaptic==", "==Pre-synaptic==", "Pre-synaptic"],
        ["Cause", "Anti-AChR", "==Oat-cell lung Ca== → anti-P/Q VGCC → ↓ ACh release", "Toxin blocks ACh release · ==honey to a neonate== → floppy baby"],
        ["Patient", "Young woman", "50–60-y male smoker", "Infant"],
        ["Features", "Fatigable ptosis, diplopia, normal DTR", "Proximal weakness · ptosis · diplopia · ==↓ DTR · dry mouth · impotence==", "Floppy"],
        { c: ["RNS", "==Decremental==", "==Incremental== (high frequency)", "Incremental (high frequency)"], node: "bed-rns", role: "dx", why: "Electrodiagnostic separation", hl: true },
        { c: ["DOC", "Pyridostigmine + steroids", "==3,4-diaminopyridine== (blocks K⁺ channels → ↑ ACh) · plasmapheresis · pyridostigmine", "—"], node: ["rx-pyridostigmine", "proc-plasmapheresis"], role: "first", why: "Disease-specific DOC" }
      ]}, add: "Only about half of LEMS is paraneoplastic (small-cell lung cancer) → screen with CT / PET for 2 years. Bedside hallmark: post-exercise facilitation — strength and reflexes briefly improve after 10 s of maximal effort. Botulism: DESCENDING symmetric paralysis starting in the cranial nerves, with fixed dilated pupils; treat with antitoxin (adults) or human botulism immune globulin (infants) and support breathing." },
      { mnemonic: "MG Melts with use (decrement) · LEMS Livens with use (increment)" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.562", items: [
      { t: "Evening ptosis, weak, normal DTR, anti-AChR + → cause ==thymic hyperplasia== (b)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 557–562 (Myasthenia Gravis). SLUDGE from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
