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
      { mnemonic: "SARCOID (notes)", add: "Standard teaching: isolated bilateral hilar lymphadenopathy (stage 1) is often asymptomatic and usually resolves on its own → observe, no steroids. Fibrotic (stage 4) sarcoid gives upper-lobe fibrosis with volume loss; 'shrinking lung syndrome' is an SLE term (diaphragm weakness).", lines: [["S", "Symmetrical ==bilateral hilar lymphadenopathy== (breathless) → steroids"], ["A", "==ACE ↑== (also silicosis)"], ["R", "Remission in 50%"], ["C", "Hypercalcaemia — granuloma 1α-hydroxylase → vit D ↑ → steroid-responsive"], ["O", "Ocular — ==uveitis== · neurosarcoid → ==optic nerve=="], ["I", "ILD — early obstructive, later restrictive (shrinking lungs)"], ["D", "Dermatology — ==erythema nodosum==, ==lupus pernio=="]] },
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
      ]}, add: "Standard epidemiology: peak onset 20–40 y, slightly more common in women · highest incidence in Scandinavians and African-Americans (more severe, chronic disease in African-Americans) · less common in smokers." },
      { chain: ["Antigen (P. acnes / M. tuberculosis KatG)", "APC → CD4 T cell", "Th1: IFN-γ → granuloma · IL-2 → CD4 proliferation", "Th2 → B cells → monoclonal gammopathy"], add: "Standard teaching: B-cell overactivity in sarcoidosis gives POLYCLONAL hypergammaglobulinaemia (a broad rise in γ-globulins on protein electrophoresis), not a monoclonal gammopathy." },
      "Granuloma inclusions → ==asteroid bodies== · ==Schaumann bodies=="
    ]},
    { type: "clinical", title: "Clinical spectrum", src: "p.665", items: [
      "1/3 asymptomatic → found on CXR",
      { t: "==Löfgren syndrome== → erythema nodosum (or periarticular arthritis) + hilar lymphadenopathy → 90% remit", role: "hy" },
      { h: "Symptomatic — 35-y woman" },
      "Cough, exertional dyspnoea (hilar nodes)",
      { t: "Fatigue, fever, night sweats, weight gain, myalgia, arthralgia", add: "Standard teaching: the constitutional symptoms of active sarcoidosis are fatigue, fever, night sweats and weight LOSS; weight gain is not a usual feature of the disease (it is a common steroid side-effect)." },
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
      ]}, add: "Standard teaching: lung function may be normal in stage 1; the usual abnormality is a restrictive defect (↓ FVC, ↓ TLC) with ↓ DLCO · airflow obstruction (FEV₁/FVC <0.7) occurs in some patients, from endobronchial granulomas or airway distortion by fibrosis. Serial FVC and DLCO are used to monitor disease and guide treatment. · Meaning: serum ACE is raised in about 60% of patients, so a normal level does not exclude sarcoid. It is made by granuloma epithelioid cells and reflects total granuloma load · a supporting and monitoring test only, not diagnostic · falsely low in patients taking ACE inhibitors." },
      { h: "Biopsy negative + no alternative →" },
      "ACE >2× ULN · BAL CD4/CD8 >3.5 · gallium-67 ==panda sign== (lacrimal + parotid) + ==lambda sign== (hilar + R paratracheal)"
    ]},
    { type: "treatment", title: "Treatment", src: "p.666", items: [
      { table: { head: ["Drug", "Use"], rows: [
        ["Topical steroids", "Anterior eye · localised skin · cough"],
        { c: ["==Oral prednisone==", "Symptomatic neuro / cardiac disease · hypercalcaemia · multiple organs"], node: "rx-steroids", role: "first", why: "Systemic sarcoidosis", hl: true },
        { c: ["Others", "Hydroxychloroquine · methotrexate · azathioprine · infliximab"], node: ["rx-hcq", "rx-methotrexate", "rx-biologic"], role: "second", why: "Steroid-sparing sarcoid therapy" }
      ]}, add: "Standard indications also include symptomatic or progressive lung disease (worsening CXR, falling FVC/DLCO), posterior uveitis not controlled topically, and renal disease. For lung disease the usual start is prednisolone 20–40 mg daily, then a slow taper to a low maintenance dose; total course usually 6–12 months or longer." }
    ]},
    { type: "diagnosis", title: "Inflammatory myopathies", src: "p.666–668", wide: true, items: [
      { table: { head: ["", "Inclusion body myositis", "Dermatomyositis", "Polymyositis", "Antisynthetase"], rows: [
        ["Who", "Men >50 y", "Autoimmune, ↑ IFN-β microvasculopathy", "Women", "Women"],
        ["Weakness", "Proximal + ==distal== (finger/wrist flexors, vastus medialis)", "Symmetric proximal (stairs, combing hair)", "Proximal > distal", "Proximal"],
        ["Skin", "—", "==Heliotrope rash · Gottron papules== · shawl / V sign", "—", "Mechanic's hands"],
        { c: ["Antibody", "Anti-cN1A (5'-nucleotidase)", "==Anti-Mi-2 (most specific)== · anti-TIF (cancer) · MDA5 · NXP-2", "—", "==Anti-Jo-1 (m/c)== · PL-7 · PL-12"], node: "lab-ena", role: "dx", why: "Myositis antibodies" },
        { c: ["Biopsy", "—", "==Perifascicular atrophy==", "==Endomysial inflammation==", "—"], node: "proc-muscle-biopsy", role: "ioc", why: "Myositis IOC: MRI-guided biopsy", hl: true },
        ["Associations", "LGL leukaemia, Sjögren", "ILD · myocarditis · ↑↑ malignancy", "↑ malignancy", "==ILD 70–90%== → early HRCT"]
      ]}, add: "Standard biopsy finding in inclusion body myositis: rimmed vacuoles with amyloid (congophilic) inclusions + endomysial CD8 T cells invading non-necrotic fibres. IBM is slowly progressive and often asymmetric, CK is normal or only mildly ↑, and it responds poorly to steroids and immunosuppressants." },
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
      ]}, add: "Standard teaching: Cogan syndrome is defined by non-syphilitic interstitial keratitis + Ménière-like vestibulo-auditory dysfunction (vertigo, tinnitus, rapidly progressive sensorineural hearing loss); aortitis with aortic regurgitation is a less frequent systemic vasculitic feature. Prompt high-dose steroids are needed to save hearing. · Standard (Alarcón-Segovia) criteria: high-titre anti-U1-RNP + ≥3 of 5 → hand oedema (puffy hands), synovitis, myositis, Raynaud's, acrosclerosis. Raynaud's is almost universal, pulmonary hypertension is the main cause of death, and severe renal or CNS disease is uncommon." }
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
