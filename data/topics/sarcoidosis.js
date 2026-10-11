/* Sarcoidosis (+ inflammatory myopathies, Cogan, Behçet, MCTD). Primary source: PrepLadder notes PDF pp. 663–669.
   SARCOID is from the notes; others written for this chart. */
MF.addTopic({
  id: "sarcoidosis",
  title: "Sarcoidosis",
  aka: ["sarcoid", "non-caseating granuloma", "bilateral hilar lymphadenopathy", "Löfgren syndrome", "lupus pernio", "serum ACE", "BAL CD4/CD8", "panda sign", "lambda sign", "dermatomyositis", "polymyositis", "inclusion body myositis", "antisynthetase", "anti-Jo-1", "Behçet", "Cogan", "MCTD"],
  oneLine: "Multisystem non-caseating granulomas (lung > liver/skin): SARCOID features, CXR stages, ACE, BAL CD4:CD8 >3.5, biopsy IOC, steroids; plus inflammatory myopathies, Behçet, Cogan, MCTD.",
  flow: ["Young woman: BHL ± erythema nodosum / uveitis / hypercalcaemia", "CXR stage · CT galaxy sign · PFT", "Bronchoscopic biopsy (IOC) · ACE >2× · BAL CD4:CD8 >3.5", "Cardiac → FDG-PET > MRI", "Topical / oral prednisone · HCQ, MTX, infliximab"],
  related: ["ild", "parathyroid", "scleroderma-sjogren", "tb"],
  bubbles: [
    { type: "clinical", title: "SARCOID (notes)", src: "p.663", items: [
      { mnemonic: "SARCOID (notes)", lines: [["S", "Symmetrical ==bilateral hilar lymphadenopathy== (breathless) → steroids"], ["A", "==ACE ↑== (also silicosis)"], ["R", "Remission in 50%"], ["C", "Hypercalcaemia — granuloma 1α-hydroxylase → vit D ↑ → steroid-responsive"], ["O", "Ocular — ==uveitis== · neurosarcoid → ==optic nerve=="], ["I", "ILD — early obstructive, later restrictive (shrinking lungs)"], ["D", "Dermatology — ==erythema nodosum==, ==lupus pernio=="]] },
      { t: "Hypercalcaemia (HAS MILK)", see: "parathyroid" },
      { t: "Sarcoid vs multiple sclerosis → both optic neuritis; ==uveitis in sarcoid==, ==Uhthoff (heat) in MS==", role: "hy" }
    ]},
    { type: "definition", title: "Key facts", src: "p.663–664", items: [
      { table: { head: ["Fact", "Answer"], rows: [
        ["Definition", "Multisystem inflammation (≥2 organs) · ==non-caseating granulomas=="],
        ["Other non-caseating granulomas", "Berylliosis · hypersensitivity pneumonitis · IBD"],
        { c: ["M/c organ", "==Lung== > liver / skin"], hl: true },
        ["Least common", "Heart · rarely breast, testis, ovary, stomach"],
        ["Death", "Pulmonary fibrosis → respiratory failure · sudden → ==arrhythmia=="],
        ["IOC", "==Lung biopsy=="],
        ["Risk", "Higher in health-care workers"]
      ]}},
      { chain: ["Antigen (P. acnes / M. tuberculosis KatG)", "APC → CD4 T cell", "Th1: IFN-γ → granuloma · IL-2 → CD4 proliferation", "Th2 → B cells → monoclonal gammopathy"] },
      "Granuloma inclusions → ==asteroid bodies== · ==Schaumann bodies=="
    ]},
    { type: "clinical", title: "Clinical spectrum", src: "p.665", items: [
      "1/3 asymptomatic → found on CXR",
      { t: "==Löfgren syndrome== → erythema nodosum (or periarticular arthritis) + hilar lymphadenopathy → 90% remit", role: "hy" },
      { h: "Symptomatic — 35-y woman" },
      "Cough, exertional dyspnoea (hilar nodes)",
      "Fatigue, fever, night sweats, weight gain, myalgia, arthralgia",
      "Skin → lupus pernio · eye → uveitis",
      { t: "Liver → SAP ↑ (granulomas in 50% of biopsies)", node: "lab-alp", role: "dx", why: "Hepatic sarcoid" },
      "Blood → lymphopenia, leucopenia, anaemia (BAL lymphocytosis)",
      { t: "Hypercalcaemia + hypercalciuria", node: "lab-calcium", role: "dx", why: "Sarcoid hypercalcaemia" },
      "Neuro → lymphocytic meningitis · optic neuritis · ==bilateral CN VII palsy==",
      "Heart → CHF, arrhythmia, heart block → cardiac MRI / PET"
    ]},
    { type: "investigation", title: "Work-up", src: "p.665–666", wide: true, items: [
      { table: { head: ["Test", "Finding", "Role"], rows: [
        { c: ["Chest X-ray", "Stage 1 hilar + R paratracheal nodes · 2 nodes + infiltrates · 3 infiltrates · 4 fibrosis", "Staging"], node: "img-cxr", role: "init", why: "Sarcoid staging" },
        { c: ["CT chest", "==Galaxy sign==", "Extent"], node: "img-hrct", role: "dx", why: "Sarcoid CT sign" },
        { c: ["Spirometry / DLCO", "FEV₁/FVC <0.7 early · DLCO ↓ (fibrosis)", "Function"], node: "bed-pft", role: "dx", why: "Sarcoid lung function" },
        { c: ["Cardiac FDG-PET > MRI", "Cardiomyopathy", "Cardiac sarcoid"], node: "img-pet-ct", role: "ioc", why: "Cardiac sarcoidosis" },
        { c: ["Serum ACE", "↑ >50% (also Gaucher, leprosy, TB)", "Support"], node: "lab-ace", role: "dx", why: "Sarcoid ACE" },
        { c: ["==Bronchoscopy + biopsy==", "EBUS biopsy (stage 1–2) · transbronchial (stage 3) → non-caseating granulomas", "==IOC=="], node: "proc-bronchoscopy", role: "ioc", why: "Sarcoid tissue diagnosis", hl: true },
        { c: ["BAL", "==CD4 : CD8 >3.5== · lymphocytosis", "Support"], node: "proc-bronchoscopy", role: "dx", why: "BAL in sarcoid" }
      ]}},
      { h: "Biopsy negative + no alternative →" },
      "ACE >2× ULN · BAL CD4/CD8 >3.5 · gallium-67 ==panda sign== (lacrimal + parotid) + ==lambda sign== (hilar + R paratracheal)"
    ]},
    { type: "treatment", title: "Treatment", src: "p.666", items: [
      { table: { head: ["Drug", "Use"], rows: [
        ["Topical steroids", "Anterior eye · localised skin · cough"],
        { c: ["==Oral prednisone==", "Symptomatic neuro / cardiac disease · hypercalcaemia · multiple organs"], node: "rx-steroids", role: "first", why: "Systemic sarcoidosis", hl: true },
        { c: ["Others", "Hydroxychloroquine · methotrexate · azathioprine · infliximab"], node: ["rx-hcq", "rx-methotrexate", "rx-biologic"], role: "second", why: "Steroid-sparing sarcoid therapy" }
      ]}}
    ]},
    { type: "diagnosis", title: "Inflammatory myopathies", src: "p.666–668", wide: true, items: [
      { table: { head: ["", "Inclusion body myositis", "Dermatomyositis", "Polymyositis", "Antisynthetase"], rows: [
        ["Who", "Men >50 y", "Autoimmune, ↑ IFN-β microvasculopathy", "Women", "Women"],
        ["Weakness", "Proximal + ==distal== (finger/wrist flexors, vastus medialis)", "Symmetric proximal (stairs, combing hair)", "Proximal > distal", "Proximal"],
        ["Skin", "—", "==Heliotrope rash · Gottron papules== · shawl / V sign", "—", "Mechanic's hands"],
        { c: ["Antibody", "Anti-cN1A (5'-nucleotidase)", "==Anti-Mi-2 (most specific)== · anti-TIF (cancer) · MDA5 · NXP-2", "—", "==Anti-Jo-1 (m/c)== · PL-7 · PL-12"], node: "lab-ena", role: "dx", why: "Myositis antibodies" },
        { c: ["Biopsy", "—", "==Perifascicular atrophy==", "==Endomysial inflammation==", "—"], node: "proc-muscle-biopsy", role: "ioc", why: "Myositis IOC: MRI-guided biopsy", hl: true },
        ["Associations", "LGL leukaemia, Sjögren", "ILD · myocarditis · ↑↑ malignancy", "↑ malignancy", "==ILD 70–90%== → early HRCT"]
      ]}},
      { t: "CK-MM ↑ in DM and PM", node: "lab-ck", role: "dx", why: "Muscle enzyme" },
      { mnemonic: "Antisynthetase = 3M: Mechanic's hands · Mechanical lung disease (TLC ↓, RV ↓) · Myositis", t: "+ Raynaud, fever, seronegative arthritis" },
      { t: "Antisynthetase Rx → ==high-dose steroids + mycophenolate== (aggressive if ILD)", node: ["rx-steroids", "rx-mycophenolate"], role: "first", why: "Antisynthetase syndrome" },
      "Dermatomyositis → steroid-responsive, often needs steroid-sparing · better prognosis without ILD"
    ]},
    { type: "diagnosis", title: "Cogan · Behçet · MCTD · overlap", src: "p.668", items: [
      { table: { head: ["Condition", "Criteria / triad"], rows: [
        ["Cogan syndrome", "Interstitial keratitis + vestibulo-auditory symptoms + aortitis"],
        { c: ["==Behçet== (silk-route, oro-oculo-genital)", "==Oral ulcers + 2 of 4==: genital ulcers · eye (hypopyon uveitis, retinitis) · ==pathergy== (sterile pustule 48–72 h after needle prick) · erythema nodosum"], hl: true },
        { c: ["MCTD", "==U1-RNP + 2 of 4==: SLE · SSc · polymyositis · RA"], node: "lab-ena", role: "dx", why: "MCTD antibody", see: "scleroderma-sjogren" },
        ["Overlap (≥2)", "PM/DM + any CTD"]
      ]}}
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.669", items: [
      { t: "Heliotrope rash, can't climb stairs, CK-MM ↑, anti-Mi-2 → correct: ==IOC is MRI-guided muscle biopsy== (d)", node: "proc-muscle-biopsy", role: "ioc", why: "MCQ: dermatomyositis IOC" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 663–669 (Sarcoidosis + inflammatory myopathies, Cogan, Behçet, MCTD). SARCOID from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
