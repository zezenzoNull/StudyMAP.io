/* Alzheimer's Disease. Primary source: PrepLadder notes PDF pp. 567–573.
   4 A's and ACD-P4 are from the notes; others written for this chart. */
MF.addTopic({
  id: "alzheimer",
  title: "Alzheimer's Disease",
  aka: ["AD", "dementia", "cortical dementia", "subcortical dementia", "clock face test", "MMSE", "amyloid", "tau", "tauopathy", "APOE4", "presenilin", "donepezil", "NPH", "Hakim triad", "reversible dementia", "Lewy body dementia"],
  oneLine: "Leading cortical dementia: ACh ↓ (nucleus of Meynert), plaques + tangles, genes on chr 1/14/19/21, 4 A's, MMSE & amyloid/FDG PET, donepezil; dementia one-liners & NPH.",
  flow: ["Memory loss + clock-face test abnormal", "MMSE <24 (exclude pseudodementia)", "FDG / amyloid PET (IOC) · CSF Aβ42 ↓", "Rule out reversible: NPH · hypothyroid · B12", "Donepezil (DOC)"],
  related: ["parkinson", "stroke", "meningitis-2", "thyroid"],
  bubbles: [
    { type: "definition", title: "AD vs PD at a glance", src: "p.567, 569", items: [
      { table: { head: ["", "Alzheimer", "Parkinson"], rows: [
        { c: ["Area", "==Basal nucleus of Meynert== (basal forebrain)", "Substantia nigra"], hl: true },
        ["Deficit", "==Acetylcholine ↓== (also NE — locus coeruleus, 5-HT — dorsal raphe)", "Dopamine ↓"],
        ["Bodies", "Hirano", "Lewy"],
        ["Dementia", "==Cortical== (recognition of family lost, no basal ganglia)", "==Subcortical== (family recognised, basal ganglia)"]
      ]}},
      { t: "Parkinson", see: "parkinson" },
      "Gross → cortical atrophy · wide sulci · big ventricles · ==hippocampus shrinks==",
      { t: "Earliest area → ==medial temporal lobe (entorhinal cortex)== → inferior → lateral temporal", role: "hy" }
    ]},
    { type: "etiology", title: "Genes & histology", src: "p.569", items: [
      { table: { head: ["Chromosome", "Gene"], rows: [
        ["1", "Presenilin 2"],
        ["14", "Presenilin 1"],
        { c: ["19", "==APOE== — ε4 ↑ risk · ε2 ↓ risk"], hl: true },
        ["21", "==APP== extra copy → Aβ build-up · trisomy 21 → presenile dementia"]
      ]}},
      { mnemonic: "1-14-19-21 → 'One, Fourteen, Nineteen, Twenty-one = Pres, Pres, APOE, APP'" },
      "Risk ↓ → NSAIDs · APOE ε2",
      { table: { caption: "Histology", head: ["Lesion", "Where", "Made of"], rows: [
        ["Neuritic (amyloid) plaques", "==Extra-neuronal==", "Aβ amyloid (also in dialysis dementia)"],
        ["Neurofibrillary tangles", "==Intracytoplasmic==", "Hyper-phosphorylated ==tau=="]
      ]}},
      { mnemonic: "ACD-P4 (notes)", t: "tauopathies", lines: [["A", "Alzheimer"], ["C", "Corticobasal (alien hand)"], ["D", "Down syndrome"], ["P", "Pantothenate kinase NBIA (eye of the tiger)"], ["P", "PSP (retrocollis)"], ["P", "Punch-drunk (dementia pugilistica)"], ["P", "Post-encephalitic parkinsonism"]] }
    ]},
    { type: "clinical", title: "Clinical features", src: "p.570", items: [
      { h: "Early" },
      "± seizures (GTCS / focal)",
      "Mild cognitive impairment → patient notices memory loss · can't track finances, follow instructions, drive, shop",
      { mnemonic: "4 A's (notes)", lines: [["A", "Amnesia — temporal lobe"], ["A", "Apraxia — non-dominant parietal"], ["A", "Aphasia — dominant parietal (naming first → comprehension → fluency)"], ["A", "Anosognosia — unaware of deficit"]] },
      { t: "Leading cause of death (AD & PD) → ==pneumonia== · then malnutrition, PE, heart disease, infection", role: "danger" }
    ]},
    { type: "investigation", title: "Work-up", src: "p.567–568, 570–571", wide: true, items: [
      { t: "==Clock-face test== → mark 11:10 → dementia screen", role: "hy", see: "stroke" },
      { table: { head: ["Test", "Finding", "Role"], rows: [
        { c: ["MMSE (30 items)", "<24 dementia · 21–24 mild · 10–20 moderate · <10 severe", "Severity"], node: "bed-mmse", role: "screen", why: "Dementia severity" },
        { c: ["==FDG-PET==", "↓ metabolism posterior parietal + temporal", "==IOC=="], node: "img-pet-ct", role: "ioc", why: "AD IOC", hl: true },
        { c: ["==Amyloid PET==", "Aβ neuritic plaques", "==IOC=="], node: "img-pet-ct", role: "ioc", why: "AD IOC" },
        ["Tau PET", "Neurofibrillary tangles", "—"],
        { c: ["CSF", "==Aβ42 ↓== · Aβ42/40 ↓", "Pre-clinical biomarker (up to 2 decades early)"], node: "lab-csf", role: "dx", why: "Preclinical AD" },
        { c: ["MRI", "Hippocampal volume loss, ventricles ↑", "Supportive"], node: "img-mri-brain", role: "dx", why: "AD atrophy pattern" }
      ]}},
      { mnemonic: "MMSE 24 · 20 · 10", t: "dementia · moderate · severe cut-offs" },
      "Depression → pseudodementia (rule out)",
      { table: { caption: "MMSE components", head: ["Domain", "Points"], rows: [["Orientation time / place", "5 + 5"], ["Registration (3 objects)", "3"], ["Attention — serial 7s / WORLD backwards", "5"], ["Recall 3 objects", "3"], ["Naming 2 objects", "2"], ["Repeat 'No ifs, ands or buts'", "1"], ["3-stage command", "3"], ["Read 'Close your eyes'", "1"], ["Write a sentence", "1"], ["Copy intersecting pentagons", "1"]] } },
      "Working memory → spell backwards · episodic → 3-word recall · attention → serial 7s"
    ]},
    { type: "treatment", title: "Treatment", src: "p.571", items: [
      { table: { head: ["Drug", "Note"], rows: [
        { c: ["==Donepezil==", "==DOC=="], node: "rx-cholinesterase-i", role: "first", why: "AD DOC", hl: true },
        { c: ["Rivastigmine · galantamine", "Cholinesterase inhibitors ('anticholinergic' in notes)"], node: "rx-cholinesterase-i", role: "second", why: "AD alternatives", verify: "Notes call rivastigmine + galantamine 'anticholinergic'; they are cholinesterase inhibitors (pro-cholinergic). Verify wording." },
        ["Aducanumab", "Targets aggregated Aβ amyloid"],
        ["Tacrine", "Hepatotoxic — withdrawn"]
      ]}, add: "Aducanumab was withdrawn in 2024; the newer anti-amyloid antibodies lecanemab and donanemab modestly slow decline in early AD (MCI / mild dementia with proven amyloid), with a risk of ARIA (brain oedema, microbleeds) — highest in APOE ε4 homozygotes. Memantine (NMDA antagonist) is used for moderate–severe AD, alone or with donepezil." }
    ]},
    { type: "pearl", title: "Dementia one-liners", src: "p.568, 572", items: [
      { table: { head: ["Clue", "Answer"], rows: [
        ["Leading cortical dementia", "==Alzheimer=="],
        ["Leading subcortical dementia", "==Parkinson=="],
        ["Dementia + myoclonus", "==vCJD== (startle myoclonus)"],
        ["Dementia + chorea", "==Huntington=="],
        ["Presenile dementia", "==Down syndrome=="],
        ["Visual hallucinations + PD features + REM behaviour disorder", "==Lewy body dementia=="],
        ["Frontotemporal dementia", "==Pick disease=="],
        ["Other cortical", "Vascular dementia"]
      ]}, add: "Classic 'rapidly progressive dementia + startle myoclonus over months' = SPORADIC CJD (age ~60, periodic sharp-wave EEG, CSF 14-3-3 / RT-QuIC). Variant CJD affects younger people, starts with psychiatric and sensory symptoms and runs a slower course." },
      { t: "==Reversible dementia== → NPH · hypothyroidism · vitamin B12 deficiency", role: "hy", see: "thyroid" },
      { mnemonic: "Reversible = 'Water, Thyroid, B12'" }
    ]},
    { type: "clinical", title: "Normal pressure hydrocephalus", src: "p.572", items: [
      { mnemonic: "Hakim triad = Wet, Wobbly, Wacky", lines: [["Wet", "Incontinence"], ["Wobbly", "Ataxia — magnetic gait"], ["Wacky", "Dementia (reversible)"]] },
      { t: "==Fisher test== → remove 20–30 mL CSF → gait improves", node: "proc-lp", role: "first", why: "NPH tap test", see: "meningitis-2" }
    ]},
    { type: "mcq", title: "MCQs in the notes", src: "p.573", items: [
      { t: "Clock-face test assesses → ==dementia== (a)", role: "hy" },
      { t: "Hakim triad → ==ataxia, urinary incontinence, dementia== (c)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 567–573 (Alzheimer's Disease). 4 A's and ACD-P4 from the notes; others written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
