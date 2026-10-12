/* Interstitial Lung Disease. Primary source: PrepLadder notes PDF pp. 797–800.
   Mnemonics are memory aids written for this chart. */
MF.addTopic({
  id: "ild",
  title: "Interstitial Lung Disease",
  aka: ["ILD", "IPF", "idiopathic pulmonary fibrosis", "UIP", "NSIP", "DIP", "COP", "LIP", "LAM", "Langerhans cell histiocytosis", "silicosis", "asbestosis", "hypersensitivity pneumonitis", "honeycomb", "crazy paving", "pirfenidone", "nintedanib", "GPA", "EGPA"],
  oneLine: "Restrictive lung disease (FEV₁/FVC >0.8): known causes (dust, drugs, CTD, vasculitis, granulomas) vs idiopathic types; HRCT is the imaging of choice, cryobiopsy the IOC; IPF → pirfenidone / nintedanib.",
  flow: ["Dry cough, dyspnoea, bibasal end-inspiratory crackles, clubbing", "Exposure / drug / CTD / smoking history", "PFT restrictive (FEV₁/FVC >0.8) · autoimmune panel", "HRCT: reticular, honeycomb, traction bronchiectasis", "Cryobiopsy (IOC) → antifibrotic / steroids → transplant"],
  related: ["scleroderma-sjogren", "ra", "sarcoidosis", "asthma", "tb"],
  bubbles: [
    { type: "definition", title: "Big picture", src: "p.797", items: [
      { t: "Commonest idiopathic ILD → ==idiopathic pulmonary fibrosis== · also ==m/c reason for lung transplant==", role: "hy" },
      { t: "M/c cause of death → ==respiratory failure==", role: "danger", see: "resp-failure" }
    ]},
    { type: "etiology", title: "Known causes", src: "p.797–798", wide: true, items: [
      { table: { head: ["Group", "Examples"], rows: [
        ["Dust", "Sand-blasting, glass → ==silicosis== · cement, mica, shipyard → ==asbestosis=="],
        { c: ["Therapy", "Chest radiation (Hodgkin) → fibrosis · ==amiodarone, methotrexate, nitrofurantoin== (fleeting opacities)"], node: "rx-methotrexate", role: "danger", why: "Drug-induced ILD" },
        { c: ["CTD", "RA → ==UIP== · scleroderma, polymyositis, dermatomyositis → ==NSIP=="], see: "scleroderma-sjogren" },
        ["Vasculitis", "GPA · EGPA"],
        { c: ["Granulomatous", "Sarcoidosis · hypersensitivity pneumonitis (farmer's lung — mouldy hay, type IV; bagassosis — sugarcane; byssinosis — cotton)"], see: "sarcoidosis" }
      ]}, add: "Standard teaching: silicosis follows silica exposure → sandblasting, quarrying, mining, stone-cutting, foundry, pottery and glass work. Asbestosis follows asbestos exposure → shipbuilding, insulation/lagging, pipe-fitting, brake linings, asbestos-cement sheeting; mica gives its own silicate pneumoconiosis, not asbestosis." },
      { mnemonic: "Fleeting opacities = 'LTN': Loeffler · Tropical eosinophilia · Nitrofurantoin" },
      { h: "Hypersensitivity pneumonitis — clinical prediction rule" },
      "Antigen exposure + antibodies · recurrent symptoms · inspiratory crackles · onset 4–8 h after exposure · weight loss · late restrictive spirometry",
      { t: "Hypersensitivity pneumonitis treatment", add: "Standard treatment: strict antigen avoidance is the key step (remove the birds or mouldy hay, change job or use respiratory protection). Oral prednisolone for severe or persistent disease, with mycophenolate or azathioprine as steroid-sparing agents; progressive fibrotic HP may need nintedanib or a lung transplant.", see: "asthma" }
    ]},
    { type: "imaging", title: "Dust diseases — image clues", src: "p.798", items: [
      { table: { head: ["Finding", "Disease"], rows: [
        ["CXR ground glass + ==shaggy (irregular) heart border==", "==Asbestosis=="],
        ["Pleural plaques (mesothelioma) + pleural calcification", "==Asbestosis=="],
        { c: ["HRCT nodules + diffuse GGO + septal thickening = ==crazy paving==", "==Silicosis=="], node: "img-hrct", role: "dx", why: "Silicosis HRCT" }
      ]}, add: "Correction to learn: pleural plaques (often calcified, on the diaphragm and posterolateral chest wall) are benign markers of past asbestos exposure. They are not mesothelioma and not premalignant, though the exposure itself raises mesothelioma risk. Asbestosis itself is lower-zone interstitial fibrosis; mesothelioma shows as nodular pleural thickening encasing the lung, often with an effusion. · Standard teaching: chronic silicosis shows small upper-zone nodules, progressive massive fibrosis and egg-shell calcification of hilar nodes. Crazy paving is the classic HRCT sign of pulmonary alveolar proteinosis; in silica exposure it appears only in acute silicoproteinosis after very heavy exposure." },
      { t: "M/c lung cancer in asbestosis → ==adenocarcinoma==", role: "hy" },
      { t: "Silicosis → macrophage dysfunction → ↑ ==TB== and alveolar proteinosis", see: "tb" }
    ]},
    { type: "diagnosis", title: "Idiopathic ILDs", src: "p.798", wide: true, items: [
      { table: { head: ["Type", "Key facts"], rows: [
        { c: ["==IPF==", "Histology ==UIP== · mortality ==3–5 y== · death by respiratory failure"], hl: true },
        ["NSIP", "Women · ==good prognosis, steroid-responsive=="],
        ["DIP", "==Restrictive disease in smokers== (FEV₁/FVC >0.8)"],
        ["Cryptogenic organising pneumonia", "HRCT ==reverse halo sign=="],
        ["Acute interstitial pneumonia (Hamman–Rich)", "Mimics ARDS"],
        ["LIP", "AIDS — after excluding TB, PJP, MAC"],
        ["==LAM==", "Women · HRCT ==cysts== → spontaneous pneumothorax"],
        ["==Langerhans cell histiocytosis==", "Smokers · CD1a+ · ==tennis-racquet Birbeck granules== (EM)"],
        ["Pulmonary alveolar proteinosis", "M/c autoimmune · HRCT ==crazy paving== · with silicosis"]
      ]}, add: "Standard teaching: lymphocytic interstitial pneumonia is a benign polyclonal lymphocytic infiltration of the lung interstitium. Its commonest association is Sjögren's syndrome (also other autoimmune disease); in HIV it is seen mainly in children, where it is AIDS-defining. A small minority transform to lymphoma. · Standard explanation: in PAP, surfactant fills the alveoli because macrophages cannot clear it. The commonest (autoimmune) form is caused by anti-GM-CSF antibodies, and secondary PAP follows heavy silica dust or blood cancers. BAL fluid is milky and PAS-positive; treatment is whole-lung lavage ± inhaled GM-CSF." },
      { mnemonic: "Smokers' ILDs = 'DRL': DIP · RB-ILD · Langerhans", t: "LAM is NOT smoking-related" }
    ]},
    { type: "clinical", title: "Clinical pointers", src: "p.799", items: [
      { table: { head: ["Clue", "Think"], rows: [
        ["Age 20–40", "Sarcoid · LAM · vasculitis"],
        ["Age >60", "IPF"],
        ["Female", "CTD (except RA — men)"],
        ["Acute onset", "AIP · HP · GPA"],
        ["Haemoptysis", "GPA · LAM · Goodpasture"],
        ["Asthma history", "EGPA (Churg–Strauss)"],
        ["Raynaud", "CTD"],
        ["Smoker", "DIP · RB-ILD · LCH"],
        ["Pigeons", "Bird breeder's lung (HP)"]
      ]}},
      { h: "Exam" },
      "==Bibasal end-inspiratory fine crackles== · clubbing · cyanosis · cor pulmonale",
      "Wheeze → sarcoid (hilar nodes)"
    ]},
    { type: "investigation", title: "Work-up", src: "p.799", items: [
      { table: { head: ["Test", "Finding", "Role"], rows: [
        ["Autoimmune panel", "CTD", "Cause"],
        { c: ["PFT", "==FEV₁/FVC >0.8== (restrictive)", "Pattern"], node: "bed-pft", role: "dx", why: "Restrictive ILD" },
        { c: ["CXR", "Reticular opacities · hilar nodes (sarcoid)", "Initial"], node: "img-cxr", role: "init", why: "ILD screen" },
        { c: ["==HRCT==", "Subpleural reticulation · ==traction bronchiectasis · honeycombing==", "==Imaging of choice=="], node: "img-hrct", role: "ioc", why: "ILD imaging of choice", hl: true },
        { c: ["==Flexible bronchoscopy + cryobiopsy==", "Histology", "==IOC=="], node: "proc-bronchoscopy", role: "ioc", why: "ILD tissue diagnosis" }
      ]}, add: "Standard teaching: ILD is diagnosed in a multidisciplinary discussion. A typical UIP pattern on HRCT in the right clinical setting is enough to diagnose IPF without biopsy; biopsy (transbronchial cryobiopsy or video-assisted thoracoscopic surgical lung biopsy) is kept for uncertain cases, and BAL lymphocytosis supports HP or sarcoid. · Standard teaching: restriction is confirmed by a low TLC, with FEV₁ and FVC both reduced and the ratio normal or high. ↓ DLCO (transfer factor) is often the earliest and most sensitive abnormality, and desaturation on exercise (6-minute walk) is typical." }
    ]},
    { type: "treatment", title: "Treatment", src: "p.799–800", items: [
      { table: { head: ["ILD", "Treatment"], rows: [
        { c: ["==IPF==", "==Pirfenidone · nintedanib (TKI)== → stop fibroblast proliferation"], node: "rx-antifibrotic", role: "first", why: "IPF antifibrotics", hl: true },
        { c: ["NSIP · CTD-ILD", "==Steroids== (mainly) · mycophenolate · rituximab"], node: ["rx-steroids", "rx-mycophenolate"], role: "first", why: "Inflammatory ILD" },
        ["End-stage", "Lung transplant (m/c indication IPF)"]
      ]}, add: "Standard teaching: antifibrotics slow the fall in FVC but do not stop or reverse fibrosis; nintedanib is also used for progressive fibrosis in other ILDs (e.g. systemic sclerosis ILD). Add oxygen, pulmonary rehabilitation, vaccination and early transplant referral. Steroids/immunosuppression are not used in stable IPF → prednisolone + azathioprine + N-acetylcysteine increased deaths." }
    ]},
    { type: "diagnosis", title: "Vasculitis with ILD", src: "p.800", items: [
      { table: { head: ["GPA", "EGPA"], rows: [
        ["URT → epistaxis, sinusitis · LRT → haemoptysis, ==cavitation== · kidney → haematuria", "==Adult-onset asthma== · chronic sinusitis"],
        ["==Strawberry gingiva== · ==c-ANCA==", "==Peripheral eosinophilia== · GN · neuropathy · purpura"],
        ["TOC ==rituximab==", "—"]
      ]}, add: "Standard EGPA treatment: corticosteroids are the mainstay. Add cyclophosphamide or rituximab for organ- or life-threatening disease (heart, kidney, nerves, gut), then maintain with azathioprine or methotrexate; mepolizumab (anti-IL-5) is used for relapsing or refractory disease." }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.800", items: [
      { t: "NOT strongly linked with smoking → ==lymphangioleiomyomatosis== (d)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 797–800 (Interstitial Lung Disease). Mnemonics written for this chart.",
    "Davidson's / Boloor's not available — not used."
  ]
});
