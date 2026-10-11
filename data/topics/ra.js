/* Rheumatoid Arthritis. Primary source: PrepLadder notes PDF pp. 637–642.
   RHEUMAT, JSAD and ACE:IG are from the notes; others written for this chart. */
MF.addTopic({
  id: "ra",
  title: "Rheumatoid Arthritis",
  aka: ["RA", "pannus", "swan neck", "boutonniere", "Z deformity", "ulnar deviation", "rheumatoid factor", "anti-CCP", "ACPA", "Felty syndrome", "Caplan syndrome", "DMARD", "methotrexate", "atlanto-axial"],
  oneLine: "Symmetric small-joint erosive polyarthritis with morning stiffness >1 h: deformities, extra-articular disease, JSAD criteria, RF (screen) vs anti-CCP (IOC), methotrexate-based DMARDs.",
  flow: ["Young woman: symmetric PIP/MCP/wrist + stiffness >1 h", "RF (screen) · anti-CCP (IOC) · ESR/CRP ↑", "X-ray / USG / MRI erosions", "Methotrexate (1st) → triple therapy → biologics / JAK", "Remission: tender & swollen joints <1, CRP normal"],
  related: ["crystal", "osteoarthritis", "sle", "scleroderma-sjogren", "ild"],
  bubbles: [
    { type: "definition", title: "RHEUMAT (notes)", src: "p.637", items: [
      { mnemonic: "RHEUMAT (notes)", lines: [["R", "RA factor (false + in 5% normal)"], ["H", "Hand joints — PIP, MCP, wrist · ==bilateral symmetric=="], ["E", "Early-morning stiffness ==>1 h== (young woman)"], ["U", "Ulnar deviation"], ["M", "Medicines — DMARDs"], ["A", "Anti-CCP antibody"], ["T", "Typical deformity — swan neck"]] },
      "Morning stiffness also → ankylosing spondylitis",
      "Migratory asymmetric large-joint polyarthritis (knee, ankle, elbow) → think rheumatic fever, not RA"
    ]},
    { type: "patho", title: "Pathology", src: "p.637", items: [
      { chain: ["Synovial inflammation + proliferation", "==Pannus== (cytokine-rich granulation tissue)", "Cartilage → subchondral bone destroyed", "==Erosive arthritis=="] }
    ]},
    { type: "clinical", title: "Joints & deformities", src: "p.637–639", items: [
      "Young woman with constitutional symptoms, or an old lady with deformities",
      "Stiffness >1 h → chores, brushing teeth hard",
      { t: "M/c joints → ==bilateral PIP, MCP, wrist== · also 5th MTP, knee, shoulder", role: "hy" },
      { t: "==DIP spared== → DIP involvement = coexisting osteoarthritis in old age", see: "osteoarthritis" },
      { t: "Gout → 1st MTP (purine-rich food, alcohol, thiazides)", see: "crystal" },
      { t: "Hallmark → ==flexor tenosynovitis== → weak grip", role: "hy" },
      { table: { head: ["Deformity", "PIP", "DIP"], rows: [
        { c: ["==Swan neck==", "==Extended==", "Flexed"], hl: true },
        ["==Boutonnière==", "==Flexed==", "Extended"],
        ["Mallet finger", "Neutral", "Flexed"]
      ]}},
      { mnemonic: "Swan Stretches the PIP · Boutonnière Bends the PIP" },
      "Z-deformity → subluxed 1st MCP + IP hyperextension · piano-key ulnar styloid",
      { t: "Cervical spine → ==atlanto-axial dislocation== → quadriplegia / myelopathy", role: "danger" }
    ]},
    { type: "complication", title: "Extra-articular disease", src: "p.639–640", wide: true, items: [
      { t: "M/c extra-articular → ==rheumatoid nodules== (extensor: fingers, olecranon, Achilles, sacrum)", role: "hy" },
      { table: { head: ["Organ", "Manifestation"], rows: [
        { c: ["Eye", "==Keratoconjunctivitis sicca (m/c)== · scleritis, scleromalacia perforans"], hl: true },
        ["Mouth", "Xerostomia (secondary Sjögren)"],
        { c: ["Lung", "Nodules · ==exudative== effusion · UIP-type ILD · ==Caplan== (coal pneumoconiosis + RA)"], see: "ild" },
        ["Heart", "Pericarditis / effusion · ==IHD = leading cause of death== · arrhythmia · ==MR (m/c valve)=="],
        ["Kidney", "Membranous GN (primary → anti-PLA2R; secondary → CTD, malignancy) · secondary amyloidosis"],
        ["Skin", "Nodules · purpura"],
        { c: ["Others", "Hypoandrogenism · osteoporosis (T- and Z-score < −2.5)"], node: "img-dexa", role: "dx", why: "RA osteoporosis" },
        { c: ["Blood", "==Anaemia of chronic disease== (normocytic early → microcytic later)"], node: "lab-cbc", role: "dx", why: "RA anaemia" }
      ]}},
      { t: "Rheumatoid effusion by Light criteria → protein ratio >0.5, LDH ratio >0.6, LDH >2/3 upper limit", see: "pleural-effusion" },
      { t: "==Felty syndrome== = RA + splenomegaly + neutropenia", role: "hy" }
    ]},
    { type: "diagnosis", title: "Classification — JSAD (notes)", src: "p.640", items: [
      { mnemonic: "JSAD (notes)", lines: [["J", "Joints — mono (1) · oligo (<4) · poly (≥5)"], ["S", "Serology — RF, anti-CCP"], ["A", "Acute-phase reactants — ESR, CRP"], ["D", "Duration of symptoms"]] }
    ]},
    { type: "investigation", title: "Investigations", src: "p.640", items: [
      { table: { head: ["Test", "Finding", "Role"], rows: [
        { c: ["ESR / CRP", "↑", "Activity"], node: ["lab-esr", "lab-crp"], role: "monitor", why: "RA inflammation" },
        { c: ["RA factor", "+", "==Screening=="], node: "lab-rf", role: "screen", why: "RA screen" },
        { c: ["==Anti-CCP / ACPA==", "+", "==IOC=="], node: "lab-anti-ccp", role: "ioc", why: "RA IOC", hl: true },
        { c: ["X-ray / USG / MRI wrist", "Erosions", "Imaging"], node: "img-xray", role: "dx", why: "Erosive arthritis" },
        ["X-ray foot", "5th MTP (lateral)", "Early site"],
        { c: ["Synovial fluid", "Not routine · gout → needle crystals, negative birefringence", "Exclude crystals"], node: "proc-synovial-fluid", role: "dx", why: "Exclude gout" }
      ]}},
      { mnemonic: "RF Rings the bell (screen) · CCP Confirms" }
    ]},
    { type: "treatment", title: "Treatment flowchart", src: "p.640–641", steps: [
      { t: "NSAIDs → adjunct only, ==don't stop erosions== · avoid steroids as far as possible", node: "rx-nsaid", role: "adjunct", type: "treatment", why: "Symptom relief only" },
      { t: "==Methotrexate = 1st-line DMARD==", node: "rx-methotrexate", role: "first", type: "treatment", why: "RA first line" },
      { t: "==Triple therapy== → methotrexate + sulfasalazine + hydroxychloroquine (or MTX + leflunomide)", node: ["rx-methotrexate", "rx-hcq"], role: "second", type: "treatment", why: "RA combination" },
      { t: "Biologics ==ACE:IG== → adalimumab, certolizumab, etanercept, infliximab, golimumab · IL-6 → tocilizumab", node: "rx-biologic", role: "second", type: "treatment", why: "Refractory RA" },
      { t: "Targeted synthetic → tofacitinib (JAK1/3), baricitinib (JAK1/2) → ==↑ CV mortality== · upadacitinib, filgotinib", node: "rx-biologic", role: "second", type: "treatment", why: "JAK inhibitors" },
      { t: "**Remission** → tender joints <1 · swollen joints <1 · CRP normal · patient global (0–10) low", node: "lab-crp", role: "monitor", type: "followup", why: "Remission criteria" }
    ]},
    { type: "mcq", title: "MCQ in the notes", src: "p.642", items: [
      { t: "M/c ocular feature of RA → ==keratoconjunctivitis sicca== (d)", role: "hy" }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes, PDF pp. 637–642 (Rheumatoid Arthritis). RHEUMAT, JSAD, ACE:IG from the notes.",
    "Davidson's / Boloor's not available — not used."
  ]
});
