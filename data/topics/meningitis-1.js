/* Meningitis — Part 1. Primary source: PrepLadder notes PDF pp. 536–541.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "meningitis-1",
  title: "Meningitis — Part 1",
  aka: ["bacterial meningitis", "neonatal meningitis", "meningococcus", "Waterhouse-Friderichsen", "chemoprophylaxis", "viral meningitis", "HSV encephalitis", "Japanese encephalitis", "Nipah", "Naegleria", "cryptococcal meningitis", "Lyme", "empirical antibiotics"],
  oneLine: "Meningitis triad; bacterial causes by age with empirical antibiotics; meningococcal sepsis & prophylaxis; viral meningitis vs encephalitis (HSV-1); amoebic, fungal (cryptococcus) and other meningitis.",
  flow: ["Fever + headache + nuchal rigidity (80%)", "Age / host → likely organism", "Empirical antibiotics now (by age)", "CSF: PCR · antigen · culture", "Specific Rx · prophylaxis for contacts"],
  related: ["meningitis-2", "raised-icp", "adrenal", "epilepsy"],
  bubbles: [
    { type: "clinical", title: "Meningitis triad", src: "p.536", items: [
      { mnemonic: "Fever · Head · Neck", t: "triad seen in 80%", lines: [["F", "Fever"], ["H", "Headache (dura stretched)"], ["N", "Nuchal rigidity (pus irritates meninges)"]] },
      { t: "Late diagnosis → altered mentation · ==CN VI palsy (false localising sign)==", see: "raised-icp" },
      "Bacterial → ==turbid CSF with neutrophils=="
    ]},
    { type: "etiology", title: "Bacterial organisms by age", src: "p.536–537", items: [
      { table: { head: ["Group", "M/c organism", "Note"], rows: [
        ["Neonate (global)", "==Group B Streptococcus (S. agalactiae)==", "—"],
        ["Neonate (India)", "==E. coli / Klebsiella==", "Cefotaxime"],
        ["Neonate (rare)", "==Listeria monocytogenes==", "==Resistant to cefotaxime, sensitive to ampicillin== · culture on ==PALCAM== medium"],
        { c: ["Children", "==Pneumococcus== > H. influenzae", "Hib fell after pentavalent vaccine"], hl: true },
        ["Adults (sporadic)", "==Pneumococcus==", "M/c"],
        ["Adults (winter outbreaks)", "==N. meningitidis==", "Nasal droplets · prisons, hostels, slums"]
      ]}},
      { mnemonic: "Listeria Laughs at cephalosporins", t: "always add ampicillin when Listeria is possible (neonates, >55 y, alcoholics)" }
    ]},
    { type: "treatment", title: "Empirical antibiotics — flowchart", src: "p.537", steps: [
      { t: "Suspected bacterial meningitis → start empirical antibiotics", type: "emergency" },
      { decision: "Who is the patient?", branches: [
        { label: "Neonate ≤3 months", steps: [{ t: "==Ampicillin + cefotaxime==", node: ["rx-ampicillin", "rx-ceftriaxone"], role: "first", type: "treatment", why: "Neonatal meningitis (GBS, E. coli, Listeria)" }] },
        { label: ">3 months – <55 y", steps: [{ t: "==Ceftriaxone + vancomycin== (vanc for ceftriaxone-resistant pneumococcus)", node: ["rx-ceftriaxone", "rx-vancomycin"], role: "first", type: "treatment", why: "Community meningitis, infant to <55 y" }] },
        { label: ">55 y · alcoholic · debilitated", steps: [{ t: "==Ampicillin + cefotaxime==", node: ["rx-ampicillin", "rx-ceftriaxone"], role: "first", type: "treatment", why: "Adds Listeria cover" }] },
        { label: "Neutropenic · post-neurosurgery · trauma · hospital-acquired", steps: [{ t: "==Ampicillin + ceftazidime== (meropenem if ceftazidime-resistant)", node: "rx-ampicillin", role: "first", type: "treatment", why: "Nosocomial / immunocompromised meningitis" }] }
      ]},
      { mnemonic: "Ends get Ampicillin", t: "both age ends (neonate & >55) get ampicillin + cefotaxime; the middle gets ceftriaxone + vancomycin" }
    ]},
    { type: "emergency", title: "Meningococcal sepsis", src: "p.537", items: [
      { chain: ["N. meningitidis", "Sepsis", "DIC → platelets ↓ → petechial rash", "Bilateral adrenal haemorrhage", "↓ BP + ↓ sugar → Addisonian crisis"] },
      { t: "= ==Waterhouse–Friderichsen syndrome== → IV hydrocortisone", node: "em-adrenal-crisis", role: "emerg", why: "Adrenal crisis from meningococcal adrenal haemorrhage", see: "adrenal" },
      { t: "Don't confuse ==Wunderlich syndrome== → bleeding into kidney (angiomyolipoma, tuberous sclerosis)", role: "hy" }
    ]},
    { type: "treatment", title: "Meningococcal chemoprophylaxis", src: "p.537", items: [
      { table: { head: ["Contact", "Drug"], rows: [
        { c: ["Health-care worker", "==Ceftriaxone IM=="], node: "rx-ceftriaxone", role: "prevent", why: "Meningococcal prophylaxis (HCW, pregnancy)" },
        { c: ["Family contact", "==Ciprofloxacin oral=="], node: "rx-ciprofloxacin", role: "prevent", why: "Meningococcal prophylaxis (household)" },
        { c: ["Pregnancy", "==Ceftriaxone IM== (cipro teratogenic in 1st trimester)"], node: "rx-ceftriaxone", role: "prevent", why: "Pregnancy-safe prophylaxis", hl: true }
      ]}},
      { t: "Quinolones → impair cartilage growth in children", role: "ci" },
      { mnemonic: "Family = Cipro at home · Hospital & Pregnant = Ceftriaxone jab" }
    ]},
    { type: "diagnosis", title: "Viral meningitis vs encephalitis", src: "p.538", items: [
      { table: { head: ["", "Viral meningitis", "Viral encephalitis"], rows: [
        ["Nuchal rigidity", "==Present==", "==Absent=="],
        ["Cause", "==Enterovirus==", "Global: ==HSV-1== (temporal lobe) · India: ==Japanese B== (Culex mosquito, no cure, vaccine only) · ==Nipah== (Kerala, fruit bat Pteropus)"],
        { c: ["Treatment", "Supportive", "HSV-1 → ==empirical acyclovir=="], node: "rx-acyclovir", role: "first", why: "Empirical treatment of suspected HSV encephalitis", hl: true }
      ]}},
      { mnemonic: "Meningitis = Mind OK, Neck stiff · Encephalitis = Mind gone, Neck soft" }
    ]},
    { type: "investigation", title: "HSV-1 encephalitis", src: "p.538–539", items: [
      { table: { head: ["Test", "Finding"], rows: [
        { c: ["CSF", "==Bloody=="], node: "proc-lp", role: "dx", why: "HSV encephalitis: haemorrhagic CSF" },
        { c: ["EEG", "==PLEDs== (periodic lateralised epileptiform discharges)"], node: "bed-eeg", role: "dx", why: "HSV encephalitis EEG", see: "epilepsy" },
        { c: ["==CSF PCR for HSV-1==", "==IOC=="], node: "lab-csf-pcr", role: "ioc", why: "HSV encephalitis IOC", hl: true }
      ]}},
      { t: "Bloody CSF → ==SAH · traumatic tap · HSV-1 encephalitis==", role: "hy" },
      "Periodic sharp-wave complexes = vCJD (not HSV)",
      { h: "Case" },
      "Young man · 1 day fever · violent psychosis · mutism · doesn't know family · GCS 9 · bilateral Babinski → ==HSV-1 encephalitis==",
      { t: "Same picture + haemolysis (↑ LDH, ↑ unconjugated bilirubin) + ring forms → ==cerebral malaria==", node: "lab-malaria", role: "dx", why: "Cerebral malaria differential" },
      { table: { caption: "Other herpes pictures", head: ["Lesion", "Virus"], rows: [["Grouped vesicles on glans / vulva", "==HSV-2=="], ["Grouped vesicles in a dermatome", "==Herpes zoster=="]] } }
    ]},
    { type: "etiology", title: "Amoebic & fungal meningitis", src: "p.539–540", items: [
      { h: "Primary amoebic meningoencephalitis" },
      "18-y swims in a village pond → fever, frontal headache, projectile vomiting, nuchal rigidity · CSF 10,000 PMN with ==motile trophozoites==",
      "Organism → ==Naegleria fowleri== · entry via ==olfactory neuroepithelium==",
      { t: "Treat → ==amphotericin B + miltefosine==", node: "rx-amphotericin", role: "first", why: "Naegleria meningoencephalitis" },
      { h: "Cryptococcal meningitis" },
      "Leading fungal cause → ==Cryptococcus neoformans== (pigeon-dropping dust)",
      { t: "==IOC → CSF cryptococcal antigen ELISA==", node: "lab-crypto-ag", role: "ioc", why: "Cryptococcal meningitis IOC" },
      { t: "MRI → ==soap-bubble== lesions (basal ganglia)", node: "img-mri-brain", role: "dx", why: "Cryptococcal gelatinous pseudocysts" },
      { t: "Treat → ==liposomal amphotericin B + 5-flucytosine==", node: "rx-amphotericin", role: "first", why: "Cryptococcal meningitis induction" },
      { t: "Prophylaxis → ==fluconazole== until CD4 rises", node: "rx-fluconazole", role: "prevent", why: "Cryptococcal maintenance / prophylaxis" }
    ]},
    { type: "complication", title: "Other meningitis & complications", src: "p.540", items: [
      { table: { head: ["Type", "Key facts"], rows: [
        { c: ["==Lyme (Borrelia)==", "Lymphocytic meningitis · cranial neuritis (==CN VII==) · radiculoneuritis · Rx doxycycline / ceftriaxone"], node: ["rx-doxycycline", "rx-ceftriaxone"], role: "first", why: "Lyme neuroborreliosis" },
        ["CSF-shunt meningitis", "==CONS, S. aureus=="],
        ["Aseptic meningitis", "No organism found (may later prove viral)"]
      ]}},
      { h: "Complications" },
      "Abscess · cerebritis · venous thrombosis",
      "Hydrocephalus",
      { t: "==SIADH → hyponatraemia==", node: "lab-sodium", role: "monitor", why: "Meningitis-associated SIADH" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.541", items: [
      { t: "Village man · fever · altered mentation · GCS 9 · Babinski + · Hb 8, TLC 4000, ↑ LDH, ↑ creatinine & bilirubin → prioritise ==HRP-2 card test== (a) → cerebral malaria", node: "lab-malaria", role: "init", why: "MCQ: cerebral malaria" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 536–541 (Meningitis Part 1). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
