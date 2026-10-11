/* TIA & Stroke Interventions. Primary source: PrepLadder notes PDF pp. 604–613.
   BE FAST, ABCD², ABCDX and STORM are from the notes; others written for this chart. */
MF.addTopic({
  id: "tia-stroke-int",
  title: "TIA & Stroke Interventions",
  aka: ["TIA", "acute ischaemic stroke", "AIS", "BE FAST", "ABCD2", "NIHSS", "alteplase", "tenecteplase", "thrombolysis", "thrombectomy", "LVO", "STORM", "CVST", "empty delta sign", "moyamoya", "CADASIL", "PRES", "lacunar syndromes", "aortic dissection", "dense MCA sign"],
  oneLine: "Recognise (BE FAST), score TIA risk (ABCD²), run the acute stroke protocol (BP → NIHSS → NCCT <25 min → alteplase <4.5 h / thrombectomy ≤24 h), secondary prevention (ABCDX) and special strokes.",
  flow: ["BE FAST + last-seen-normal time", "BP ≤185/110 · NIHSS >5 · NCCT (door-to-image <25 min)", "No bleed: <4.5 h alteplase · LVO → thrombectomy (≤24 h)", "48 h: no antithrombotics after tPA · aspirin at 24–48 h", "Prevent: ABCDX (antiplatelet, BP, cholesterol, carotid, DM, DOAC)"],
  related: ["stroke", "sah", "ich", "dm-2", "raised-icp"],
  bubbles: [
    { type: "definition", title: "Stroke numbers", src: "p.604", items: [
      "Every minute → 4 million neurons, 12 million brain cells, 15 million synapses die",
      { t: "Every 1-h delay → brain ages ==3.6 years==", role: "danger" },
      { table: { head: ["Type", "Share", "M/c cause"], rows: [
        { c: ["Acute ischaemic", "~85%", "==Non-valvular AF=="], node: "con-af", role: "hy", why: "M/c cause of ischaemic stroke" },
        ["Haemorrhagic", "~15%", "==Hypertensive crisis=="],
        ["Venous", "<1%", "—"]
      ]}},
      { t: "Door-to-imaging ==<25 min==", role: "hy" },
      "Highest relative risk → ischaemic: ==DM== · haemorrhagic: ==HTN==",
      { table: { caption: "Hypertensive crisis drugs", head: ["Emergency", "Preferred"], rows: [["Cardiac (LVF)", "==Nitroglycerin=="], { c: ["Neurological (haemorrhagic stroke)", "==Nicardipine=="], node: "rx-antihypertensive-iv", role: "first", why: "Neuro hypertensive emergency" }] } }
    ]},
    { type: "clinical", title: "Recognise stroke — BE FAST", src: "p.604–605", items: [
      { mnemonic: "BE FAST (notes)", lines: [["B", "Balance"], ["E", "Eyes — deviate towards the lesion (cortical)"], ["F", "Face droop"], ["A", "Arm weakness"], ["S", "Speech — global aphasia (left MCA)"], ["T", "Time to call 102 / 108"]] },
      "Also → ↓ consciousness (↑ ICP → reticular activating system) · hemiparesis · hemisensory loss · mono/binocular visual loss (ophthalmic artery) · diplopia, dysarthria, ataxia, vertigo"
    ]},
    { type: "clinical", title: "TIA", src: "p.605–606", items: [
      { chain: ["Small clot blocks a vessel", "Natural anticoagulants (protein C, S, antithrombin III)", "Clot lysed", "Symptoms resolve"] },
      "Usually better within ==1 h== · definition cut-off ==24 h==",
      { table: { caption: "Symptom → artery", head: ["Symptom", "Artery"], rows: [
        ["Amaurosis fugax", "==Ophthalmic=="],
        ["R arm weakness, aphasia, face droop", "==MCA=="],
        ["Paraparesis / monoparesis", "==ACA=="],
        ["Nasal twang / regurgitation (IX, X)", "==Vertebral=="]
      ]}},
      { t: "Highest stroke risk → ==next 48 h==", add: "Treatment of high-risk TIA / minor stroke: start dual antiplatelets at once — aspirin + clopidogrel for 21 days (CHANCE, POINT) or aspirin + ticagrelor for 30 days (THALES) — then a single antiplatelet, plus a statin and BP control; image the carotids and do an ECG / Holter for AF.", role: "danger" }
    ]},
    { type: "diagnosis", title: "ABCD² score", src: "p.605–606", items: [
      "Predicts stroke in ==next 3 months== after TIA → ==not diagnostic== (diagnose with ==NIHSS==)",
      { table: { head: ["Item", "Points"], rows: [
        ["**A**ge >60", "1"],
        ["**B**P >140/90", "1"],
        ["**C**linical — arm weakness", "2"],
        ["**C**linical — speech only", "1"],
        ["**D**uration 10–59 min", "1"],
        ["**D**uration >60 min", "2"],
        ["**D**iabetes", "1"],
        { c: ["**Total 7** → 6–7 ≈ ==22% stroke risk==", ""], hl: true }
      ]}, add: "Original ABCD² data (Johnston 2007): score 6–7 ≈ 8% stroke risk at 2 days (~18% at 90 days); 4–5 ≈ 4%; 0–3 ≈ 1% at 2 days. Current guidelines no longer triage by the score alone — every suspected TIA should see a specialist within 24 h." },
      { t: "Past history of stroke is ==not== in ABCD² (MCQ)", role: "hy" },
      { t: "NIHSS", node: "bed-nihss", role: "dx", why: "Confirms stroke" }
    ]},
    { type: "investigation", title: "Stroke work-up", src: "p.606", items: [
      { table: { head: ["Test", "Looks for"], rows: [
        { c: ["ECG", "==Atrial fibrillation=="], node: ["bed-ecg", "con-af"], role: "init", why: "Cardio-embolic source" },
        { c: ["Echo (TTE / TEE)", "Left atrial appendage clot"], node: "img-echo", role: "dx", why: "Cardiac thrombus" },
        { c: ["Carotid Doppler / duplex", "ICA atherosclerotic narrowing"], node: "img-carotid-doppler", role: "dx", why: "Carotid stenosis" },
        { c: ["Lipid profile", "↑ LDL, ↓ HDL"], node: "lab-lipid", role: "dx", why: "Vascular risk" },
        { c: ["Metabolic profile", "Random blood sugar"], node: "lab-rbs", role: "init", why: "Hypoglycaemia mimic / DM" }
      ]}}
    ]},
    { type: "emergency", title: "Acute ischaemic stroke protocol", src: "p.607–609", steps: [
      { t: "**Step 1** → airway · BP · time last seen normal · ==thrombolysis C/I if BP >185/110== → lower with CCB", node: "rx-antihypertensive-iv", role: "emerg", type: "emergency", why: "AIS BP threshold before lysis" },
      { t: "**Step 2** → NIHSS **>5** = stroke", add: "NIHSS (0–42) grades the severity of a deficit rather than proving a stroke. Lysis is offered for a DISABLING deficit (traditionally NIHSS ≥5 or any disabling sign such as aphasia); mild non-disabling strokes get dual antiplatelets instead.", node: "bed-nihss", role: "dx", type: "investigation", why: "Confirms stroke" },
      { t: "**Step 3** → ==NCCT head== + RBS (door-to-imaging <25 min) → rules out bleed (ischaemia may be invisible for 6 h)", node: ["img-ncct-head", "lab-rbs"], role: "init", type: "imaging", why: "Exclude haemorrhage" },
      { decision: "Time since onset?", branches: [
        { label: "<4.5 h (upper limit <6 h)", steps: [
          { t: "CTA for large-vessel occlusion (M1, M2, ICA, BA)", node: "img-angio", role: "dx", type: "imaging", why: "Find LVO" },
          { t: "==IV alteplase 0.9 mg/kg== (10% bolus, rest over 1 h) or ==tenecteplase bolus==", add: "Alteplase maximum 90 mg. Tenecteplase 0.25 mg/kg single IV bolus (max 25 mg) is now an accepted alternative. Approved window is 4.5 h; beyond that (up to ~9 h, or wake-up stroke) only with imaging selection — CT perfusion mismatch or DWI–FLAIR mismatch on MRI.", node: "rx-thrombolysis", role: "first", type: "emergency", why: "AIS reperfusion" },
          { t: "Success ≈30% → cath lab for angiography + thrombectomy if feasible", node: "proc-thrombectomy", role: "def", type: "treatment", why: "Post-lysis LVO" }
        ]},
        { label: "6–24 h", steps: [
          { t: "NCCT no bleed + CTA/CTP favourable perfusion → ==thrombectomy==", node: "proc-thrombectomy", role: "first", type: "treatment", why: "Late-window AIS" }
        ]},
        { label: "Lysis contraindicated", steps: [{ t: "==Thrombectomy directly==", node: "proc-thrombectomy", role: "first", type: "treatment", why: "AIS with lysis C/I" }] }
      ]},
      { t: "Window: AIS alteplase ideal <4.5 h, upper <6 h · STEMI 12 h", role: "hy", type: "pearl" }
    ]},
    { type: "treatment", title: "Large-vessel occlusion — routing", src: "p.608", steps: [
      { decision: "LVO scenario", branches: [
        { label: "Eligible + at MT centre", steps: [{ t: "IVT → mechanical thrombectomy", node: ["rx-thrombolysis", "proc-thrombectomy"], role: "first", type: "treatment", why: "LVO standard" }] },
        { label: "Not near MT centre", steps: [{ t: "IVT (bridge) → transfer for MT", node: "rx-thrombolysis", role: "first", type: "treatment", why: "Drip-and-ship" }] },
        { label: "MT unavailable", steps: [{ t: "IVT alone still helps", node: "rx-thrombolysis", role: "first", type: "treatment", why: "LVO without MT" }] },
        { label: "IVT contraindicated", steps: [{ t: "MT directly", node: "proc-thrombectomy", role: "first", type: "treatment", why: "LVO with lysis C/I" }] }
      ]},
      { t: "Thrombectomy indications → AIS 6–24 h · <6 h with lysis C/I · <6 h after IV alteplase", type: "pearl" }
    ]},
    { type: "diagnosis", title: "Thrombolysis — who can & can't", src: "p.608–609", items: [
      { table: { head: ["Indications", "Contraindications — STORM (notes)"], rows: [
        ["NIHSS ≥5", "**S**ustained BP >185/110 despite treatment"],
        ["Age >18", "Bleeding diathesis — ==INR >1.7=="],
        ["Window <4.5 h", "Gastr**o**intestinal bleed <21 days"],
        ["CT: no oedema / bleed >1/3 MCA territory", "**R**ecent head injury / ICH"],
        ["", "Recent **M**I / **M**ajor surgery <14 days"]
      ]}, node: "rx-thrombolysis", role: "ci", why: "Thrombolysis eligibility" },
      { h: "Giving IV tPA" },
      "2 IV lines · monitor BP continuously · ==no antithrombotics for 48 h== · no urinary catheter for 2 h",
      { t: "Neuro decline / bleed after tPA → ==cryoprecipitate== + repeat imaging", add: "Stop the infusion immediately, urgent CT head, send fibrinogen and clotting; give cryoprecipitate (≈10 units, aim fibrinogen >150 mg/dL) or tranexamic acid, and involve neurosurgery. Angio-oedema after alteplase (especially with ACE inhibitors) → antihistamine, steroid, adrenaline if airway threatened.", role: "emerg" },
      { t: "Aspirin in AIS → start ==after 24–48 h==", node: "rx-antiplatelet", role: "first", why: "Delayed aspirin after AIS" }
    ]},
    { type: "treatment", title: "Supportive care", src: "p.609", items: [
      { t: "DVT → pneumatic stockings · UFH/LMWH after 24–48 h", node: ["proc-pneumatic-compression", "rx-anticoag"], role: "prevent", why: "Stroke DVT prophylaxis" },
      { table: { caption: "BP intervention threshold", head: ["Patient", "Treat if"], rows: [["Thrombolysis candidate", "==>185/110=="], ["Not for lysis", "==>220/130=="]] } },
      { mnemonic: "185 to Lyse · 220 to Leave alone", t: "BP thresholds" },
      "Control fever · glucose 60–180 mg/dL",
      { t: "Malignant cerebral oedema (peaks 2–3 days) → water restriction · ==mannitol== (cytotoxic) · craniotomy", add: "Decompressive hemicraniectomy within 48 h in patients ≤60 y (selected older patients too) roughly halves mortality in malignant MCA infarction (DECIMAL, DESTINY, HAMLET). Also: swallow screen before any oral intake, early mobilisation and stroke-unit care.", node: "rx-mannitol", role: "first", why: "Malignant MCA oedema" },
      "Cerebellar infarct → ==suboccipital decompression=="
    ]},
    { type: "treatment", title: "Secondary prevention — ABCDX (notes)", src: "p.606–607", wide: true, items: [
      { table: { head: ["Letter", "Action"], rows: [
        { c: ["**A**ntiplatelet", "==Dual (aspirin + ticagrelor)== — loading day 0, low dose 21–30 days, stop (GI bleed) → ==aspirin 75 mg== alone after 30 days"], node: "rx-antiplatelet", role: "first", why: "Secondary stroke prevention" },
        { c: ["**B**P", "ACE inhibitors + thiazides"], node: "rx-acei", role: "first", why: "Post-stroke BP" },
        { c: ["**C**holesterol", "LDL ==<70== · atorvastatin 40–80 mg"], node: "rx-statin", role: "first", why: "Post-stroke LDL target" },
        ["**C**arotid endarterectomy", "High-grade ICA stenosis + recent hemispheric symptoms + low centre morbidity"],
        { c: ["**D**M", "Insulin if HbA1c >10%"], node: "rx-insulin", role: "first", why: "Glycaemic control after stroke" },
        { c: ["**D**OAC (apixaban, rivaroxaban, dabigatran)", "==Non-valvular AF + CHA₂DS₂-VASc >2=="], node: ["rx-anticoag", "con-af"], role: "first", why: "AF anticoagulation", hl: true },
        { c: ["Warfarin", "==Valvular AF== (RHD with MS, LAA clot) · mechanical valves → ==INR 2.5–3.5=="], node: "rx-anticoag", role: "first", why: "Valvular AF / mechanical valve" }
      ]}, add: "Dual antiplatelet therapy is only for minor stroke (NIHSS ≤3–5) or high-risk TIA: aspirin + clopidogrel × 21 days or aspirin + ticagrelor × 30 days, then one antiplatelet long-term. Carotid endarterectomy: symptomatic stenosis 70–99% (consider 50–69%), ideally within 2 weeks of the event. DOAC for AF: men CHA₂DS₂-VASc ≥2, women ≥3 (any stroke patient qualifies); usually start ~1–3 days after TIA / small stroke, later for large infarcts." }
    ]},
    { type: "etiology", title: "Causes of ischaemic stroke", src: "p.609–610", items: [
      { table: { head: ["Cause", "Detail"], rows: [
        ["Cardio-embolism (20%)", "Non-valvular AF (cardiomyopathy) · valvular AF (RHD-MS, SBE, Libman–Sacks, prosthetic valves)"],
        ["Paradoxical embolism", "DVT clot → ==patent foramen ovale== → brain"],
        ["Atherosclerosis", "Distal ICA, proximal MCA"],
        ["Dissection", "ICA (aortic) / vertebral artery"]
      ]}},
      { t: "Chest pain at rest + stroke signs → ==aortic dissection into ICA== → ==esmolol IV first (DOC)== then nitroprusside (nitroprusside first → reflex tachycardia → tear spreads)", node: ["rx-beta-blocker", "rx-nitroprusside"], role: "emerg", why: "Aortic dissection: β-blocker before vasodilator" },
      { t: "Hypercoagulable → APS · COVID-19 · homocysteinaemia · Libman–Sacks · protein C/S/AT3 deficiency · factor V Leiden", node: "con-hypercoag", why: "Thrombophilic stroke causes" }
    ]},
    { type: "diagnosis", title: "Localisation table", src: "p.610", wide: true, items: [
      { table: { head: ["Feature", "Cortical (MCA/ACA)", "Subcortical (capsule/thalamus)", "Brainstem"], rows: [
        ["Cause", "Large-artery embolism", "Small vessel (lacunar)", "Vertebrobasilar occlusion"],
        ["Consciousness", "Preserved", "Preserved", "May be impaired"],
        { c: ["Cognitive", "==Aphasia, neglect==", "Rare", "Rare"], hl: true },
        ["Motor", "C/L weakness", "==Pure motor==", "Quadriparesis / ==crossed signs=="],
        ["Sensory", "Cortical sensory loss", "Pure sensory", "Variable"],
        ["Cranial nerves", "Absent", "Absent", "==Present== (dysphagia, diplopia)"],
        ["Speech", "Aphasia (dominant)", "Rare", "Dysarthria, hoarseness"]
      ]}},
      { t: "Full lobe & brainstem syndromes", see: "stroke" }
    ]},
    { type: "imaging", title: "Image-based questions", src: "p.610–611", items: [
      { t: "==Dense MCA sign== on CT → AIS · hypodensity takes 6–12 h · ==DWI-MRI preferred for early AIS==", node: ["img-ncct-head", "img-mri-brain"], role: "dx", why: "Early AIS imaging" },
      { t: "Right intracerebral bleed → m/c site ==putamen== · cause hypertensive crisis · target BP ==<140/90== · lenticulostriate branches", see: "ich" }
    ]},
    { type: "diagnosis", title: "Special strokes", src: "p.611–612", wide: true, items: [
      { table: { head: ["Condition", "Key facts", "Sign / Rx"], rows: [
        { c: ["==Cerebral venous sinus thrombosis==", "Prothrombin G20210A · factor V Leiden · APS · sickle cell · polycythaemia · protein C/S/AT3 · post-meningitis · dehydration · ==woman on OCP== → headache, seizures, focal signs, papilloedema", "CTV/MRV ==empty delta sign== · ==IV heparin → warfarin 3–6 months=="], node: ["img-ctv", "rx-anticoag"], role: "dx", why: "CVST diagnosis and treatment", hl: true },
        { c: ["==Moyamoya==", "Non-inflammatory distal ICA/MCA occlusion + fragile collaterals → child ischaemic, adult haemorrhagic", "Angiography ==puff of smoke=="], node: "img-angio", role: "dx", why: "Moyamoya" },
        ["==CADASIL==", "AD arteriopathy · ==NOTCH3== · migraine with aura + young recurrent strokes + family history", "—"],
        { c: ["==PRES==", "Severe BP → BBB leak → vasogenic oedema (occipital, parietal) · eclampsia, AKI, amphetamine, SLE, APS · post-partum headache, blindness, seizures", "FLAIR white-matter hyperintensity · ==MAP ~130 + anticonvulsants=="], node: ["img-mri-brain", "rx-antiepileptic"], role: "dx", why: "PRES" }
      ]}, add: "LMWH is preferred over unfractionated heparin, and anticoagulation is given EVEN if there is a haemorrhagic venous infarct. Dabigatran is an accepted alternative to warfarin; duration 3–12 months depending on the cause (lifelong for severe thrombophilia). Stop the OCP." }
    ]},
    { type: "clinical", title: "Lacunar syndromes", src: "p.612–613", items: [
      "Cause → atherothrombosis / ==lipohyalinosis of penetrating branches==",
      { table: { head: ["Syndrome", "Site"], rows: [
        ["Pure motor hemiparesis", "==Posterior limb internal capsule=="],
        ["Pure sensory (→ Dejerine–Roussy burning pain, NSAID-resistant)", "==Ventral thalamus=="],
        ["Ataxic hemiparesis (I/L ataxia + C/L weakness)", "Corticopontocerebellar tract"],
        ["Dysarthria–clumsy hand", "==Genu of internal capsule=="]
      ]}}
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.613", items: [
      { t: "ABCD² — all true EXCEPT → ==past history of stroke== (a)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 604–613 (TIA & Stroke Interventions). BE FAST, ABCD², ABCDX, STORM from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
