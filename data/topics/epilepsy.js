/* Epilepsy & EEG. Primary source: PrepLadder notes PDF pp. 515–526.
   L2 COP and STURGE are from the notes; other mnemonics written for this chart. */
MF.addTopic({
  id: "epilepsy",
  title: "Epilepsy & EEG",
  aka: ["seizure", "GTCS", "status epilepticus", "absence seizure", "focal seizure", "Lennox-Gastaut", "JME", "MTLE", "infantile spasm", "West syndrome", "febrile seizure", "EEG patterns", "SSPE", "tuberous sclerosis", "Sturge-Weber", "syncope"],
  oneLine: "EEG basics & signature patterns, seizure types, status epilepticus ladder, drug-of-choice table by seizure type, epilepsy syndromes, SSPE and neurocutaneous disorders.",
  flow: ["Event: seizure vs syncope (prolactin ↑ after GTCS)", "Type it: focal (aware / impaired) · generalised (absence, atonic, myoclonic, GTCS)", "EEG pattern → syndrome", "DOC by type (valproate · L2 COP · ethosuximide · ACTH)", ">5 min → status ladder"],
  related: ["ncc-brain-tumor", "stroke", "meningitis-2", "raised-icp"],
  bubbles: [
    { type: "investigation", title: "EEG basics", src: "p.515–516", items: [
      "Recording = ==montage== · invented by ==Hans Berger==",
      "Midline electrodes → 'z' · left → ==odd== numbers · right → ==even== numbers",
      "Upper leads = left brain · lower leads = right brain",
      { table: { caption: "Normal waves", head: ["State", "Wave", "Frequency"], rows: [
        ["Eyes closed, relaxed", "α", "**8–12 Hz**"],
        ["Awake", "β", "**13–30 Hz**"],
        ["NREM 1", "θ", "**4–7 Hz**"],
        { c: ["NREM 2", "==Sleep spindles, K-complexes==", "—"], hl: true },
        ["NREM 3", "δ (slowest, highest amplitude)", "**0.5–4 Hz**"],
        ["REM (tone ↓)", "Sawtooth waves", "—"]
      ]}},
      { mnemonic: "BAT-D (fast → slow)", t: "Beta 13–30 · Alpha 8–12 · Theta 4–7 · Delta 0.5–4" },
      "REM → EOG spikes · EMG flat (tone ↓) · small pointed EEG waves",
      { t: "Don't confuse ECG: delta wave = ==WPW== · sawtooth = ==atrial flutter==", role: "hy" },
      { t: "EEG ==can be normal== in epilepsy (deep focus) · ==not mandatory== for diagnosis", node: "bed-eeg", role: "dx", why: "Limits of EEG in epilepsy" }
    ]},
    { type: "definition", title: "Seizure · convulsion · epilepsy", src: "p.516–517", items: [
      "Seizure → abnormal electrical discharge from an epileptogenic focus",
      "Convulsion → the violent jerking (motor part) → controlled by ==diazepam==",
      "Epilepsy → ==≥2 unprovoked seizures== (tendency to recur) → controlled by anti-epileptic drug",
      "5–10% have ≥1 seizure in life · highest in childhood",
      "Non-motor seizure → complex hallucinations (rotten fish smell, micropsia / macropsia)"
    ]},
    { type: "clinical", title: "GTCS", src: "p.517", items: [
      { chain: ["Prodrome (irritable, tired, headache)", "Tonic 10–20 s (ictal cry, eyes up, froth, cyanosis, ± tongue bite)", "Clonic jerks", "Post-ictal (noisy breathing, incontinence, slow re-orientation)"] },
      "Tonic-clonic phase = **30–60 s** → aspiration · temperature ↑ · metabolic acidosis",
      { t: "In hospital → IV/IM ==lorazepam== or rectal diazepam", node: "rx-benzodiazepine", role: "emerg", why: "Abort an active GTCS" },
      { t: "==DOC GTCS → sodium valproate==", node: "rx-valproate", role: "first", why: "GTCS drug of choice" },
      { t: "==Serum prolactin always ↑ after GTCS==", add: "Prolactin rises within 10–20 min and returns to normal within about an hour, so take the sample 10–20 min after the event. A raised level supports a generalised or focal-impaired-awareness seizure over a psychogenic attack, but a NORMAL level does not exclude a seizure.", role: "hy" }
    ]},
    { type: "diagnosis", title: "Syncope vs GTCS", src: "p.520", items: [
      { table: { head: ["", "Vasovagal syncope", "GTCS"], rows: [
        ["Trigger", "==Yes== (sunlight, blood, hospital, pain, emotion)", "None"],
        { c: ["Tonic-clonic", "**<15 s**", "**30–60 s**"], hl: true },
        ["Tongue bite", "Rare", "±"],
        ["Headache", "Rare", "Yes"],
        ["Urinary incontinence", "Yes", "Yes"],
        ["LOC", "Gradual", "==Sudden=="],
        ["Recovery", "Seconds–minutes (leg raise)", "Minutes–hours"]
      ]}},
      { t: "Incontinence does NOT separate them — both can wet", role: "hy" }
    ]},
    { type: "emergency", title: "Status epilepticus — flowchart", src: "p.517", steps: [
      { t: "Known GTCS, non-compliant → seizure ==>5 min==", node: "em-status-epilepticus", role: "emerg", type: "emergency", why: "Entry to status epilepticus protocol" },
      { t: "**Impending / early SE (5–30 min)** → IV ==lorazepam / midazolam / clonazepam==", add: "Doses: IV lorazepam 0.1 mg/kg (max 4 mg, may repeat once) — or midazolam 10 mg IM / buccal if there is no IV line. Check glucose first; give IV thiamine before dextrose if alcohol misuse or malnutrition is possible.", node: "rx-benzodiazepine", role: "first", type: "emergency", why: "First-line in status epilepticus" },
      { t: "→ IV infusion ==phenytoin / valproate / levetiracetam==", add: "Second-line loading doses (all about equally effective in ESETT): levetiracetam 60 mg/kg (max 4.5 g) · fosphenytoin 20 mg PE/kg (phenytoin needs ECG + BP monitoring; avoid in poisoning-related seizures) · valproate 40 mg/kg (avoid in liver disease and women of child-bearing age).", node: ["rx-antiepileptic", "rx-valproate"], role: "second", type: "treatment", why: "Second-line in status epilepticus" },
      { t: "**Established / early refractory (30 min – 48 h)** → IV ==midazolam (high dose)== · propofol", node: "rx-benzodiazepine", role: "rescue", type: "emergency", why: "Refractory status epilepticus" },
      { t: "**Late refractory (>48 h)** → medically induced coma · ==pentobarbital coma== · general anaesthesia", role: "rescue", type: "emergency" },
      { mnemonic: "5 · 30 · 48", t: "minutes → minutes → hours: BZD → AED infusion → midazolam/propofol → pentobarbital" }
    ]},
    { type: "clinical", title: "Focal seizures", src: "p.518–519", items: [
      "Twitching of mouth / one limb · aura (visual)",
      "Causes → ==neurocysticercosis== · ==mesial temporal sclerosis (hippocampal)==",
      { table: { head: ["Type", "Who tells the history", "Clues"], rows: [
        ["Intact awareness", "==The patient==", "==Jacksonian march== (distal → proximal) · ==Todd palsy== (weakness after, hours–days) · epilepsia partialis continua · vertigo · burning rubber smell · micro/macropsia"],
        { c: ["Impaired awareness", "==Others==", "Motionless stare · ==automatisms== (lip-smacking, swallowing, picking, chewing, laughing/crying) · post-ictal confusion · anterograde amnesia · aphasia · temporal EEG"], hl: true },
        ["Secondary generalisation", "—", "Ends as GTCS"]
      ]}},
      { t: "Neurocysticercosis", see: "ncc-brain-tumor" }
    ]},
    { type: "clinical", title: "Generalised seizures", src: "p.519–520", wide: true, items: [
      { table: { head: ["Type", "Who / picture", "EEG", "Treatment"], rows: [
        { c: ["==Typical absence==", "4–10 y · LOC 1–2 s · ==posture kept== · day-dreamer · blinking · triggered by photic / hyperventilation · ==no post-ictal deficit==", "==3 Hz spike-and-slow-wave==", "==Ethosuximide== (young) / valproate (older)"], node: ["bed-eeg", "rx-ethosuximide"], role: "dx", why: "Absence seizure", hl: true },
        ["Atypical absence", "Longer lapse · mental retardation / LGS", "**<2.5 Hz** spike-and-slow", "Valproate"],
        ["Atonic (drop attack)", "Sudden loss of tone · head nods · no post-ictal deficit · transient Babinski", "—", "Valproate"],
        ["Myoclonic", "Sudden jerks — CJD, metabolic, anoxic, HACE", "Periodic sharp-wave complexes (CJD)", "Valproate"],
        ["Epileptic spasms", "Infant ==salaam== jerks of trunk", "==Hypsarrhythmia== (chaotic)", "ACTH"]
      ]}},
      { t: "==No post-ictal deficit== → absence · atonic · febrile seizures", role: "hy" },
      { mnemonic: "AAF = 'Awake After Fit'", t: "Absence · Atonic · Febrile" },
      "Myasthenia → repetitive nerve test → decremental response (don't confuse with EEG)"
    ]},
    { type: "treatment", title: "Drug of choice by seizure type", src: "p.521", wide: true, items: [
      { table: { head: ["Seizure", "DOC", "Woman of reproductive age / pregnancy"], rows: [
        { c: ["GTCS", "==Valproate==", "Levetiracetam · lamotrigine (start before conception)"], node: "rx-valproate", role: "first", why: "GTCS DOC", hl: true },
        { c: ["Focal", "==L2 COP==: carbamazepine · levetiracetam · lamotrigine · oxcarbazepine · phenytoin", "—"], node: "rx-antiepileptic", role: "first", why: "Focal seizure drugs" },
        ["Typical absence", "Valproate (ethosuximide in young children)", "Lamotrigine before conception"],
        ["Atypical absence / atonic / myoclonic", "Valproate", "Lamotrigine before conception"]
      ]}, add: "Valproate is avoided in any woman who could become pregnant (≈10% major malformations — neural tube defects — plus autism and lower IQ in the child). Give folic acid 5 mg/day from before conception; lamotrigine levels fall in pregnancy (needs dose checks)." },
      { mnemonic: "L2 COP (notes)", t: "focal seizure drugs and their catch", lines: [["C", "Carbamazepine — anaemia, leucopenia, hepatotoxic"], ["L", "Levetiracetam — elderly (few drug interactions)"], ["L", "Lamotrigine — ==SJS risk=="], ["O", "Oxcarbazepine — safe in liver disease"], ["P", "Phenytoin"]] }
    ]},
    { type: "diagnosis", title: "Epilepsy syndromes", src: "p.520–522", wide: true, items: [
      { table: { head: ["Syndrome", "Picture", "EEG", "Treatment"], rows: [
        ["==Lennox–Gastaut==", "GTCS + ==atypical== absence + atonic · multifactorial", "**<3 Hz** spike-and-wave", "==Valproate (DOC)== · S/E hyperammonaemia"],
        ["==JME (Janz)==", "10–19 y · myoclonic jerks · genetic · later GTCS (poor prognosis)", "==4–6 Hz polyspike==", "Valproate"],
        { c: ["==MTLE==", "Febrile convulsions in childhood · automatisms · focal impaired awareness · MRI hippocampal sclerosis", "U/L or B/L temporal spikes", "DOC valproate · ==TOC neurosurgery=="], node: "img-mri-brain", role: "dx", why: "Hippocampal sclerosis in MTLE" },
        { c: ["==Infantile spasm (West)==", "Salaam spasms", "Hypsarrhythmia", "==ACTH== · with tuberous sclerosis → ==vigabatrin=="], node: ["rx-acth", "rx-vigabatrin"], role: "first", why: "Infantile spasm DOC", hl: true },
        { c: ["Febrile seizure", "M/c seizure in children", "—", "Episode → ==intranasal midazolam== > rectal diazepam · prevention → oral clobazam > diazepam"], node: "rx-benzodiazepine", role: "first", why: "Febrile seizure abortive / prophylaxis" }
      ]}, add: "Standard: MTLE is a FOCAL epilepsy, so the usual drugs are carbamazepine, lamotrigine or levetiracetam. It is often drug-resistant; anterior temporal lobectomy / selective amygdalo-hippocampectomy makes ~60–70% seizure-free. · Febrile seizure = age 6 months–5 years, temperature >38 °C, no CNS infection. Simple: generalised, <15 min, once in 24 h → no EEG or imaging needed. Complex: focal, >15 min or repeated within 24 h. LP if meningitis is possible (especially <12 months or after antibiotics). Paracetamol does not prevent recurrence. · Hallmark = TONIC seizures (especially in sleep) with intellectual disability. EEG: slow spike-and-wave 1.5–2.5 Hz + bursts of fast activity in sleep. Drugs: valproate, lamotrigine, rufinamide, clobazam, cannabidiol; drop attacks may need corpus callosotomy. · Jerks are worst in the first hour after waking and with sleep deprivation or alcohol. It responds well to valproate (levetiracetam or lamotrigine in women) but rarely remits, so treatment is usually lifelong; carbamazepine and phenytoin can make it worse." },
      { table: { caption: "Myoclonus by age", head: ["Age", "Cause"], rows: [["<1 y", "Infantile spasm"], ["8 y", "==SSPE=="], ["10–19 y", "JME"], ["30 y + tainted beef", "==vCJD== (startle myoclonus + dementia)"]] } },
      { h: "Pointers" },
      { t: "M/c epilepsy in children → ==benign Rolandic epilepsy== (one-sided face twitch, hand movements)", add: "Benign epilepsy with centrotemporal spikes: seizures mainly in sleep, drooling and speech arrest, EEG centrotemporal spikes, normal child; it remits by mid-adolescence and often needs no drug." },
      "M/c seizure in newborns → ==subtle seizure== (HIE / birth asphyxia)"
    ]},
    { type: "investigation", title: "Signature EEG patterns", src: "p.522–524", items: [
      { table: { head: ["Pattern", "Condition"], rows: [
        { c: ["3 Hz spike & slow wave", "==Absence=="], hl: true },
        ["2.5 Hz spike & slow wave", "Atypical absence"],
        ["4–6 Hz polyspike", "JME"],
        ["Periodic sharp-wave complexes", "==vCJD=="],
        ["PLEDs", "==HSV-1 encephalitis=="],
        ["Burst suppression", "Cortical anoxia"],
        ["Triphasic waves", "==Hepatic encephalopathy · vCJD=="],
        ["Hypsarrhythmia (chaotic, high-amplitude)", "Infantile spasm"],
        ["Periodic stereotyped high-voltage", "SSPE"]
      ]}, node: "bed-eeg", role: "dx", why: "Pattern recognition", add: "Correction to learn: ~1 Hz periodic sharp-wave complexes are typical of SPORADIC CJD; variant CJD usually has a non-specific EEG and is diagnosed by the MRI 'pulvinar sign' and tonsil biopsy. Triphasic waves = metabolic (hepatic / uraemic) encephalopathy." },
      { mnemonic: "3 Absent · 4-6 Jerky · PLEDs Herpes · Triphasic Liver", t: "the four you must know" },
      "Focal seizure EEG → discharge only in F8–T4, T4–T6 (rest normal) · diffuse GTCS → all leads"
    ]},
    { type: "clinical", title: "SSPE", src: "p.524", items: [
      "Late complication of ==measles== (altered virus) · low vaccine coverage",
      "Infected at 2 y → symptoms at 8 y → ==slow virus disease==",
      { table: { head: ["Criterion", "Finding"], rows: [
        ["Clinical", "Progressive subacute mental decline + myoclonus"],
        { c: ["EEG", "Periodic, stereotyped, high-voltage discharges"], node: "bed-eeg", role: "dx", why: "SSPE EEG" },
        { c: ["CSF", "↑ γ-globulin / oligoclonal bands"], node: "proc-lp", role: "dx", why: "SSPE CSF" },
        ["Measles antibody", "Serum ≥1:256 and/or CSF ≥1:4"],
        ["Brain biopsy", "Panencephalitis"]
      ]}},
      { t: "Definitive → criterion 5 + three more (3 of 5)", add: "Dyk's criteria: (1) clinical picture, (2) EEG, (3) raised CSF globulin, (4) raised measles antibody, (5) typical brain histology. Definite SSPE = criterion 5 plus 3 others; probable = 3 of the first 4. Treatment is supportive (isoprinosine / intraventricular interferon slow it); measles vaccination prevents it." }
    ]},
    { type: "clinical", title: "Neurocutaneous disorders", src: "p.524–525", items: [
      { h: "Tuberous sclerosis" },
      "AD · ==TSC1 (chr 9)== or ==TSC2 (chr 16)==",
      { mnemonic: "ASH-LEAF (skin + organs)", lines: [["A", "Ash-leaf macule (hypopigmented)"], ["S", "Shagreen patch (orange peel)"], ["H", "Hamartomas — cortical tubers (potato-like) → subependymal astrocytoma"], ["L", "Lesions acne-like at puberty → adenoma sebaceum"], ["E", "Epilepsy (infantile spasm → vigabatrin)"], ["A", "Angiomyolipoma of kidney (+ bleeding → Wunderlich syndrome)"], ["F", "Fibroma subungual (Koenen tumour)"]] },
      { h: "Sturge–Weber" },
      { mnemonic: "STURGE (notes)", lines: [["S", "Seizures (cavernous angioma)"], ["T", "Trigeminal-area port-wine stain"], ["U", "Unilateral weakness"], ["R", "Retardation (mental)"], ["G", "Glaucoma"], ["E", "Eye — buphthalmos"]] },
      { t: "CT head → ==tram-track calcification==", node: "img-ncct-head", role: "dx", why: "Sturge-Weber calcification" },
      { t: "Other 'tram-track' → HRCT bronchiectasis · kidney biopsy MPGN", role: "hy" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.526", items: [
      { t: "Delta 0.5–4 Hz stage 3 · Mu 12–14 Hz stage 2 · Theta 4–7 Hz stage 1 → ==1-c-iii, 2-b-ii, 3-a-i== (c, as keyed)", verify: "The keyed answer pairs delta with stage 2 and mu with stage 3, which contradicts the notes' own table (delta = NREM 3). Check the source key." },
      { t: "Myoclonus: physiological sleep jerks · startle + dementia = vCJD · DOC valproate · JME → GTCS later → ==all true== (d)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 515–526 (Epilepsy & EEG). L2 COP and STURGE from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
