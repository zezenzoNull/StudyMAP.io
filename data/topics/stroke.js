/* Stroke — localisation. Primary source: PrepLadder notes PDF pp. 497–505.
   AFRAID, APRODJ and FRNTAL mnemonics are from the notes; others written for this chart. Management → TIA & Stroke Interventions. */
MF.addTopic({
  id: "stroke",
  title: "Stroke",
  aka: ["localisation", "MCA", "ACA", "PCA", "Gerstmann", "aphasia", "Broca", "Wernicke", "Weber", "Benedikt", "Nothnagel", "Claude", "Parinaud", "Foville", "Millard-Gubler", "locked-in", "lateral medullary", "Wallenberg", "medial medullary", "lacunar"],
  oneLine: "Where is the lesion? Lobe syndromes (parietal · temporal · frontal · occipital), aphasias, artery map, and brainstem syndromes (midbrain · pons · medulla) + lacunar stroke.",
  flow: ["Deficit pattern", "Cortex (lobe signs, aphasia) or brainstem (crossed signs)?", "Name the artery: ACA · MCA · PCA · basilar · vertebral · ASA", "Name the syndrome", "→ Imaging & treatment: TIA & Stroke Interventions"],
  related: ["tia-stroke-int", "sah", "ich", "alzheimer", "epilepsy"],
  bubbles: [
    { type: "definition", title: "Rules of localisation", src: "p.497, 502", items: [
      { t: "Handedness is opposite to the dominant hemisphere → right-hander = ==left (dominant) hemisphere==", role: "hy" },
      { t: "==Brainstem stroke → crossed features== (ipsilateral cranial nerve + contralateral body)", role: "hy" },
      { t: "M/c cause of acute ischaemic stroke → ==non-valvular atrial fibrillation==", node: "con-af", role: "hy", why: "Cardio-embolic stroke source" },
      { table: { caption: "Artery → territory", head: ["Artery", "Territory / lesion"], rows: [
        ["ACA", "==Frontal lobe== (paracentral lobule → leg, bladder)"],
        { c: ["MCA", "Parietal + temporal (left = dominant, right = non-dominant)"], hl: true },
        ["P1 PCA", "==Midbrain stroke=="],
        ["P2 PCA", "==Occipital lobe== → homonymous hemianopia with macular sparing"],
        ["Basilar", "==Pontine stroke== / locked-in"],
        ["Vertebral (> PICA)", "==Lateral medullary syndrome=="],
        ["Anterior spinal", "==Medial medullary syndrome=="],
        ["Lenticulostriate branches", "Lacunar (internal capsule)"]
      ]}, add: "What each stroke looks like — ACA: contralateral LEG > arm weakness and sensory loss, urinary incontinence, abulia. MCA: contralateral face + ARM > leg weakness and sensory loss, homonymous hemianopia, eyes deviate TOWARDS the lesion, aphasia (dominant) or neglect (non-dominant). PCA: contralateral homonymous hemianopia with macular sparing ± memory loss." },
      { t: "MCA is ==not part of the circle of Willis==", role: "hy" },
      { t: "M/c berry aneurysm site → ==anterior communicating artery==; m/c nerve hit → ==oculomotor== (next to PCom)", node: "con-cn3-palsy", role: "hy", why: "PCom aneurysm compresses CN III", see: "sah" }
    ]},
    { type: "clinical", title: "Parietal lobe", src: "p.497–498", items: [
      { h: "Dominant (left MCA) — AFRAID (notes)" },
      { mnemonic: "AFRAID (notes)", lines: [["A", "Acalculia — can't calculate"], ["F", "Finger agnosia — thumb vs index"], ["R", "R–L disorientation"], ["A", "Alexia — can't read"], ["I", "Inability to recognise by touch — astereognosis"], ["D", "Dysphasia / global aphasia + ideomotor apraxia (fails on command, fine with real objects)"]] },
      { t: "==Gerstmann syndrome== = the first 4 → acalculia · finger agnosia · R–L disorientation · alexia", role: "hy" },
      { mnemonic: "Gerstmann = 'A FRA' (first four of AFRAID)" },
      { h: "Non-dominant (right MCA)" },
      { table: { head: ["Deficit", "Picture"], rows: [
        ["Constructional apraxia", "Can't draw shapes · abnormal ==clock-face test=="],
        { c: ["==Hemineglect==", "Eats / shaves / applies make-up on one side · bumps into the neglected side · no treatment"], hl: true },
        ["==Anosognosia==", "Denies the paralysed limb exists"]
      ]}},
      "Bilateral parietal damage → ==dressing apraxia==",
      { t: "Clock-face test without an image → answer ==dementia== (Alzheimer screen)", role: "hy", see: "alzheimer" }
    ]},
    { type: "clinical", title: "Temporal lobe", src: "p.498–499", items: [
      "Hippocampus → memory retention",
      { mnemonic: "APRODJ (notes)", lines: [["A", "==Anterograde amnesia== — can't keep new memories (forgets breakfast)"], ["P", "==Prosopagnosia== — can't recognise faces (occipito-temporal)"], ["R", "Recurrent complex hallucinations — sees people, hears voices"], ["O", "Olfactory hallucinations — burning rubber, rotten fish"], ["D", "==Déjà vu== — 'been here before' (often precedes a seizure)"], ["J", "Jamais vu — familiar place feels unfamiliar"]] },
      { t: "Olfactory hallucinations + déjà vu → think temporal lobe seizure", see: "epilepsy" }
    ]},
    { type: "diagnosis", title: "Aphasias", src: "p.499", wide: true, items: [
      "Wernicke → comprehension · arcuate fasciculus → repetition · Broca → expression, syntax, fluency",
      { table: { head: ["Aphasia", "Comprehension", "Fluency", "Repetition", "Lesion"], rows: [
        { c: ["**Broca** (motor, non-fluent)", "✔", "✘", "✘", "Inferior frontal gyrus (dominant)"], hl: true },
        ["**Wernicke** (fluent, 'word salad')", "✘", "✔", "✘", "Superior temporal gyrus (dominant)"],
        ["**Conduction**", "✔", "✔", "✘", "==Arcuate fasciculus=="]
      ]}},
      { mnemonic: "Broca = Broken speech · Wernicke = Wordy nonsense · Conduction = Can't copy", t: "the 3 aphasias" },
      { table: { caption: "Problem → lesion", head: ["Problem", "Site"], rows: [
        ["Understands but can't repeat", "Arcuate fasciculus"],
        ["'Want coffee… no spoon… hot' (telegraphic, understands)", "Broca area"],
        ["==Pure word deafness== — can't understand speech", "Superior temporal gyrus"],
        ["==Pure word blindness== — can't read but CAN write", "Left occipital lobe"]
      ]}, add: "Two more to know: GLOBAL aphasia (whole left MCA territory) → comprehension, fluency and repetition all lost. TRANSCORTICAL motor / sensory aphasia (watershed infarcts) → like Broca / Wernicke respectively, but REPETITION IS PRESERVED." }
    ]},
    { type: "clinical", title: "Frontal & occipital lobes", src: "p.499–500", items: [
      { h: "Frontal (ACA) — FRNTAL (notes)" },
      { mnemonic: "FRNTAL (notes)", lines: [["F", "Frontal release signs — ==rooting, grasping== reappear"], ["R", "Reduced motivation → ==abulia=="], ["N", "No bladder control → ==urge incontinence== (paracentral lobule)"], ["T", "Trouble walking → ==magnetic gait== (gait apraxia)"], ["A", "Apathy"], ["L", "Loss of inhibition, antisocial behaviour"]] },
      { h: "Occipital (P2 PCA)" },
      "Visual hallucinations",
      "==Palinopsia== → image persists after it's gone",
      "==Simultagnosia== → can't process several things at once",
      { t: "Homonymous hemianopia ==with macular sparing== (macula has dual MCA + PCA supply)", role: "hy" },
      "==Cortical blindness== → blind with normal pupils, retina, optic nerve",
      { t: "Bilateral distal PCA → gun-barrel vision → ==Anton syndrome== (blind but denies it)", role: "hy" }
    ]},
    { type: "clinical", title: "Midbrain stroke (P1 PCA)", src: "p.502–503", wide: true, items: [
      { h: "Midbrain anatomy" },
      "Superior colliculus → vertical gaze",
      "Trochlear → only CN with ==dorsal exit== and decussation",
      "Edinger–Westphal → parasympathetic part of CN III",
      { t: "Red nucleus → links to basal ganglia · substantia nigra → vascular parkinsonism", add: "Clearer version: the red nucleus relays cerebellar output (via the superior cerebellar peduncle) to the thalamus and spinal cord → a lesion gives contralateral tremor and ataxia (Holmes / rubral tremor). The substantia nigra sends dopamine to the striatum → a lesion gives contralateral parkinsonism." },
      "Crus cerebri → corticospinal + corticobulbar fibres",
      { table: { head: ["Syndrome", "Hit", "Ipsilateral", "Contralateral"], rows: [
        { c: ["==Weber==", "CN III + crus (corticospinal + corticobulbar)", "Ptosis · mydriasis · eye down & out", "==Face + arm + leg weakness=="], node: "con-cn3-palsy", role: "dx", why: "Weber: CN III palsy + contralateral hemiplegia", hl: true },
        { c: ["==Nothnagel==", "CN III + superior cerebellar peduncle", "CN III palsy", "==Gait ataxia=="], node: "con-cn3-palsy", role: "dx", why: "Nothnagel: CN III + ataxia" },
        { c: ["==Benedikt==", "CN III + red nucleus (rubrothalamic) + medial lemniscus", "CN III palsy", "==Chorea · resting tremor · proprioception loss=="], node: "con-cn3-palsy", role: "dx", why: "Benedikt: CN III + movement disorder" },
        ["==Claude==", "Red nucleus + superior cerebellar peduncle", "CN III palsy", "Nothnagel + Benedikt features"]
      ]}},
      { mnemonic: "Weber = Weak · Nothnagel = No balance · Benedikt = Bobbing (tremor/chorea)", t: "all three start with an ipsilateral CN III palsy" },
      { h: "Extra mile (notes)" },
      { t: "==Parinaud== → pinealoma → can't look up + ==sun-setting sign==", role: "hy" },
      "==Dejerine–Roussy (thalamic)== → thalamo-geniculate branches → hemisensory loss → then agonising burning pain"
    ]},
    { type: "clinical", title: "Pontine stroke (basilar)", src: "p.503", items: [
      { table: { head: ["", "Foville (dorsal pons)", "Millard–Gubler (ventral pons)"], rows: [
        ["Hit", "==CN VI nucleus== (+ CN VII, corticospinal)", "CN VI fascicle + CN VII + corticospinal"],
        { c: ["Ipsilateral", "==Lateral gaze palsy== + facial palsy", "==Lateral rectus weakness== + facial palsy"], hl: true },
        ["Contralateral", "Hemiparesis", "Hemiparesis"]
      ]}},
      "Why gaze palsy in Foville → CN VI nucleus also talks to the opposite CN III (MLF) → both eyes fail to look that way",
      { mnemonic: "Foville = Full gaze lost · Millard = Muscle (LR) only" },
      { h: "Locked-in syndrome (basilar artery)" },
      { t: "Bilateral corticospinal → ==quadriplegia + bilateral Babinski==", role: "danger" },
      "CN IX, X, XII → can't speak, eat or drink",
      "==Cognition preserved== (reticular activating system + cortex intact)",
      { t: "==Only vertical eye movements== survive (PPRF in pons gone; riMLF in midbrain = vertical gaze centre)", role: "hy" }
    ]},
    { type: "clinical", title: "Medullary stroke", src: "p.504", items: [
      { table: { head: ["", "Medial medullary", "Lateral medullary (Wallenberg)"], rows: [
        ["Artery", "==Anterior spinal artery==", "==Vertebral > PICA=="],
        { c: ["Ipsilateral", "==CN XII palsy== — tongue deviates to the lesion ('tongue licks the lesion')", "==Horner== · face numb (V) · arm hypotonia + limb ataxia · dysphagia (nucleus ambiguus IX, X)"], node: "con-horner", role: "dx", why: "Lateral medullary: descending sympathetic tract", hl: true },
        ["Contralateral", "==Hemiplegia==", "==Pain & temperature loss of body== (spinothalamic) → crossed hemianaesthesia"],
        ["Cranial nerves", "XII", "V, VII, VIII, IX, X, XI"]
      ]}},
      { mnemonic: "Medial = Motor (XII + hemiplegia) · Lateral = sensory + Horner + hoarse", t: "medulla rule" },
      "Inferior olivary nucleus → relays spinal info to cerebellum (motor learning)"
    ]},
    { type: "clinical", title: "Lacunar stroke", src: "p.504", items: [
      { t: "Small-vessel stroke → penetrating ==lenticulostriate== branches", add: "The 5 classic lacunar syndromes: pure motor (posterior limb of internal capsule / pons), pure sensory (thalamus — VPL nucleus), sensorimotor (thalamus + capsule), ataxic hemiparesis (pons / internal capsule) and dysarthria–clumsy hand (basis pontis). Risk factors: hypertension and diabetes." },
      { chain: ["Lipohyalinosis", "Posterior limb of internal capsule", "C/L face + arm + leg weakness", "==Pure motor stroke=="] },
      { t: "No cortical signs (no aphasia, no neglect, no field cut)", role: "hy" }
    ]},
    { type: "treatment", title: "Next step", src: "p.604–613", items: [
      { t: "Imaging, thrombolysis, thrombectomy, secondary prevention", see: "tia-stroke-int" },
      { t: "Bleeds", see: "ich" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.505", items: [
      { t: "65-y T2DM, right hemiparesis + **left lateral gaze palsy + left facial weakness** → ==Foville syndrome== (a)", role: "hy" },
      { t: "Vertigo, dysphagia, slurred speech, left face numb, left ptosis + miosis, right body pain/temp loss → ==vertebral artery== (a)", node: "con-horner", role: "dx", why: "MCQ: lateral medullary syndrome" },
      { t: "Lacunar stroke → ==contralateral face, arm and leg weakness== (a)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 497–505 (Stroke). AFRAID, APRODJ, FRNTAL mnemonics from the notes; others written for this chart.",
    "Stroke treatment is covered in the TIA & Stroke Interventions chapter (pp. 604–613). Davidson's / Boloor's not available — not used."
  ]
});
