/* Parkinsonism & Parkinson's Disease. Primary source: PrepLadder notes PDF pp. 549–556.
   TRAP, PCMF and DHL-VIT are from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "parkinson",
  title: "Parkinsonism & Parkinson's Disease",
  aka: ["Parkinson disease", "TRAP", "drug-induced parkinsonism", "MSA", "PSP", "corticobasal", "Wilson disease", "Huntington", "NBIA", "hot cross bun", "hummingbird", "eye of the tiger", "levodopa", "carbidopa", "DBS"],
  oneLine: "Cardinal TRAP features, Braak staging, diagnostic criteria, atypical vs secondary parkinsonism with their MRI signs, and the levodopa-centred treatment ladder up to DBS.",
  flow: ["Resting pill-rolling tremor + bradykinesia (must)", "Asymmetric + levodopa response = typical PD", "Red flags / early falls / no tremor → atypical (MRI sign)", "Rule out drugs, NPH, Wilson", "Levodopa-carbidopa → adjuncts → DBS"],
  related: ["alzheimer", "stroke", "meningitis-2"],
  bubbles: [
    { type: "definition", title: "Basics", src: "p.549–550", items: [
      { t: "M/c cause of parkinsonism → ==Parkinson disease== (sporadic 85%)", role: "hy" },
      "2nd m/c age-related neurodegeneration",
      { table: { head: ["", "Parkinson", "Alzheimer"], rows: [
        ["Neurotransmitter ↓", "==Dopamine==", "ACh · NE · serotonin"],
        ["Area", "==Substantia nigra==", "Basal nucleus of Meynert"],
        ["Bodies", "==Lewy (α-synuclein)==", "Hirano (tau)"],
        ["Dementia type", "==Subcortical== (leading cause)", "==Cortical== (leading cause)"]
      ]}},
      { table: { caption: "Genes", head: ["Setting", "Gene"], rows: [
        ["M/c overall", "==GBA== (lysosomal glucocerebrosidase)"],
        ["Juvenile (<20 y)", "==PARKIN=="],
        ["Sporadic", "==LRRK2=="]
      ]}},
      "Contact-sport athletes → ↑ neurological disorders",
      { t: "Dopamine excess disorder → ==Huntington chorea==", role: "hy" }
    ]},
    { type: "patho", title: "Basal ganglia & Braak staging", src: "p.549–550", items: [
      "Basal ganglia → start chosen movements, suppress unwanted ones",
      { chain: ["Dopamine ↓", "Globus pallidus interna + SN output ↑", "Thalamus over-inhibited", "==Bradykinesia=="] },
      { table: { caption: "Braak staging (Lewy body spread)", head: ["Site", "Feature"], rows: [
        ["Enteric nervous system", "==Constipation=="],
        ["Anterior olfactory nucleus", "==Anosmia=="],
        ["Dorsal motor nucleus of vagus", "Cardiac denervation → orthostatic hypotension"],
        { c: ["==Substantia nigra pars compacta==", "Hallmark motor PD"], hl: true },
        ["Cerebral hemispheres", "Cognition"]
      ]}},
      { mnemonic: "Gut → Nose → Heart → Nigra → Brain", t: "non-motor symptoms come first" }
    ]},
    { type: "clinical", title: "Clinical features", src: "p.549–550", wide: true, items: [
      { mnemonic: "TRAP (notes)", lines: [["T", "Tremor — ==resting, 4–6 Hz, asymmetric, pill-rolling== (earliest motor sign)"], ["R", "Rigidity — ==cogwheel== (arms) · ==lead-pipe== (legs)"], ["A", "Akinesia / ==bradykinesia== — ==must-have criterion==, akinetic mutism"], ["P", "Postural instability — falls · ==camptocormia== (45° stoop, straight in bed) · ==festinating gait=="]] },
      { table: { head: ["Non-motor (AABC)", "Other motor (DEFHM)"], rows: [
        ["==Anosmia==", "Drooling of saliva"],
        ["Autonomic — orthostatic hypotension (SBP ↓20, DBP ↓10), neurogenic bladder", "Eye blinking ↓"],
        ["REM ==behaviour disorder==", "Falls, ==freezing== (can't start moving)"],
        ["Cognitive impairment", "Hesitancy · ==hypomimia== (masked face) · hypophonia · ==micrographia=="]
      ]}},
      "↓ arm swing · short-stepped gait"
    ]},
    { type: "diagnosis", title: "Diagnostic criteria", src: "p.551–552", wide: true, items: [
      { t: "UK Brain Bank → ==response to levodopa + asymmetrical tremor==", node: "rx-levodopa", role: "dx", why: "Levodopa response supports PD" },
      "MDS → ≥2 supportive criteria · no red flags · no absolute exclusion",
      { table: { head: ["Supportive", "Red flags", "Absolute exclusion"], rows: [
        ["==Dramatic levodopa response==", "Rapid gait deterioration", "==Cerebellar signs=="],
        ["Levodopa-induced dyskinesia", "No progression over 5 y", "==Supranuclear gaze palsy=="],
        ["Asymmetric resting tremor", "Early bulbar dysfunction", "Established bvFTD"],
        ["Anosmia / cardiac denervation (FD-PET, scintigraphy)", "Respiratory dysfunction", "Lower-limb-only >3 y"],
        ["", "Early severe autonomic failure", "On antidopaminergic / depleting drugs"],
        ["", "Early recurrent falls", "==No levodopa response=="],
        ["", "Disproportionate anterocollis", "Cortical sensory loss"],
        ["", "Pyramidal signs · symmetric onset · no non-motor signs >5 y", "Normal dopaminergic imaging · other cause"]
      ]}}
    ]},
    { type: "etiology", title: "Atypical vs secondary parkinsonism", src: "p.552–553", wide: true, items: [
      { table: { head: ["Atypical — PCMF (notes)", "Secondary — DHL-VIT (notes)"], rows: [
        ["**P** — Progressive supranuclear palsy (superior colliculus → ==downward gaze lost==)", "**D** — Drugs (antipsychotics)"],
        ["**C** — Corticobasal syndrome (==alien limb==)", "**H** — Normal pressure Hydrocephalus (wet, wacky, wobbly)"],
        ["**M** — Multisystem atrophy", "**L** — Liver damage → manganese in basal ganglia"],
        ["**F** — Frontotemporal dementia (antisocial)", "**V** — Vascular"],
        ["", "**I** — Infection (encephalitis)"],
        ["", "**T** — Toxins: Mn, CS₂, CO, MPTP (crack cocaine), methanol"]
      ]}},
      { t: "NPH", see: "meningitis-2" },
      { h: "Spot atypical PD in an MCQ" },
      { mnemonic: "No tremor, No asymmetry, No L-dopa response, Early falls, Fast course", t: "all atypical PD (PSP, CBS, MSA, FTD) lack resting tremor" }
    ]},
    { type: "imaging", title: "Atypical & neurodegenerative — MRI signs", src: "p.552–554", wide: true, items: [
      { table: { head: ["Disease", "Key facts", "MRI sign"], rows: [
        { c: ["==MSA-c==", "Cerebellar signs + parkinsonism + autonomic failure", "==Hot cross bun== (+ cerebellar atrophy)"], node: "img-mri-brain", role: "dx", why: "MSA-c MRI sign", hl: true },
        { c: ["MSA-p", "Parkinson-predominant", "Iron in striatum"], node: "img-mri-brain", role: "dx", why: "MSA-p MRI" },
        { c: ["==PSP==", "Tau · ==downward gaze lost== · falls · retrocollis · eyelid apraxia · slow saccades · EOG square-wave jerks", "==Hummingbird== (midbrain atrophy)"], node: "img-mri-brain", role: "dx", why: "PSP MRI sign", hl: true },
        ["Corticobasal syndrome", "Tau · ==alien limb== · corpus callosum · dementia · agnosia", "—"],
        { c: ["==Wilson==", "AR · ==ATP7B== · copper not excreted in bile · lenticular nucleus", "==Face of the giant panda== (midbrain)"], node: "img-mri-brain", role: "dx", why: "Wilson MRI sign" },
        { c: ["==NBIA (Hallervorden–Spatz)==", "Iron in globus pallidus", "==Eye of the tiger=="], node: "img-mri-brain", role: "dx", why: "NBIA MRI sign" },
        { c: ["==Huntington==", "AD · ==chr 4, huntingtin== · ↑ dopamine / ↓ GABA · chorea + dementia · anticipation", "==Caudate atrophy== → big lateral ventricles · ↑ frontal horn : intercaudate ratio"], node: "img-mri-brain", role: "dx", why: "Huntington MRI sign" }
      ]}},
      { mnemonic: "Bun-Bird-Tiger-Panda", t: "MSA-c · PSP · NBIA · Wilson" },
      "Tauopathies → Alzheimer · corticobasal · PSP"
    ]},
    { type: "etiology", title: "Drug-induced parkinsonism", src: "p.550–551", items: [
      { t: "M/c cause of ==secondary== parkinsonism", role: "hy" },
      { mnemonic: "Help My Two Cats Find A Lion", lines: [["H", "Haloperidol / chlorpromazine"], ["M", "Metoclopramide"], ["T", "Tetrabenazine (dopamine depleter)"], ["C", "Cinnarizine (anti-vertigo)"], ["F", "Flunarizine"], ["A", "Amiodarone"], ["L", "Lithium"]] },
      { chain: ["Antipsychotic", "Dopamine ↓, ACh ↑", "Parkinsonism"] },
      { t: "Treat → ==benzhexol (trihexyphenidyl)==", node: "rx-anticholinergic", role: "first", why: "Drug-induced parkinsonism" }
    ]},
    { type: "treatment", title: "PD treatment flowchart", src: "p.554–555", steps: [
      { t: "==Levodopa + carbidopa (controlled release)== — carbidopa blocks peripheral decarboxylase", node: "rx-levodopa", role: "first", type: "treatment", why: "PD mainstay" },
      { t: "S/E → nausea, vomiting, orthostatic hypotension · ==punding== · hypersexuality · impulse control (shopping, gambling) · levodopa craving", type: "complication" },
      { decision: "Levodopa problem?", branches: [
        { label: "On–off", steps: [{ t: "SC ==apomorphine== · inhaled levodopa · jejunal gel", node: "rx-pd-adjunct", role: "rescue", type: "treatment", why: "On-demand 'off' time" }] },
        { label: "Wearing off", steps: [{ t: "↑ dose frequency · COMT / MAO-B inhibitor · istradefylline · amantadine", node: "rx-pd-adjunct", role: "adjunct", type: "treatment", why: "Wearing-off" }] },
        { label: "Peak-dose dyskinesia", steps: [{ t: "Amantadine · safinamide · ==DBS==", node: ["rx-pd-adjunct", "proc-dbs"], role: "second", type: "treatment", why: "Dyskinesia" }] }
      ]},
      { t: "Advanced PD → ==deep brain stimulation== (subthalamic nucleus / GPi) → tremor ↓", node: "proc-dbs", role: "def", type: "treatment", why: "Advanced PD / dyskinesia" }
    ]},
    { type: "treatment", title: "Adjunct drugs", src: "p.554–555", items: [
      { table: { head: ["Class", "Drugs", "Key point"], rows: [
        { c: ["Dopamine agonists (D2)", "Non-ergot ==preferred==: pramipexole, ropinirole, ==rotigotine patch== (surgery) · ergot: bromocriptine, cabergoline", "Nausea · hypersexuality · impulse control"], node: "rx-dopamine-agonist", role: "second", why: "PD dopamine agonists" },
        ["MAO-B inhibitors", "Rasagiline · selegiline · ==safinamide== (reversible, anti-dyskinetic)", "↓ central dopamine breakdown"],
        ["COMT inhibitors", "==Opicapone== (OD, longer action) · ==tolcapone (hepatotoxic)== · entacapone", "↓ dopamine degradation"],
        ["A2A antagonist", "==Istradefylline==", "↓ off time"],
        ["NMDA antagonist", "==Amantadine== (also influenza A H3N1)", "↓ off time"],
        ["Others", "Zonisamide", "—"]
      ]}, node: "rx-pd-adjunct", role: "adjunct", why: "PD adjunct classes" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.556", items: [
      { t: "60-y: rest tremor, bradykinesia, cogwheel rigidity, shuffling gait → ==Parkinson disease== (a)", role: "hy" },
      { t: "75-y banker: trouble buttoning, tremor at rest that stops on reaching → next step ==L-dopa== (c)", node: "rx-levodopa", role: "first", why: "MCQ: start levodopa" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 549–556 (Parkinsonism & PD). TRAP, PCMF, DHL-VIT from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
