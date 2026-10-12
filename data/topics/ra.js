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
      { t: "Z-deformity → subluxed 1st MCP + IP hyperextension · piano-key ulnar styloid", add: "Z-thumb (boutonnière of the thumb) = flexion ± palmar subluxation at the 1st MCP with hyperextension of the IP joint, so the thumb takes a 'Z' shape. Piano-key sign = synovitis and ligament laxity at the distal radio-ulnar joint let the ulnar head/styloid ride up dorsally → pressed down, it springs back like a piano key." },
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
      ]}, add: "Standard teaching (WHO): osteoporosis = T-score ≤ −2.5 in postmenopausal women and men ≥50. The Z-score compares with age-matched people and is used in younger adults, where ≤ −2.0 means 'below the expected range for age'. Bone loss in RA comes from inflammation, immobility and glucocorticoids. · Standard teaching: membranous nephropathy in RA is classically drug-induced (gold, penicillamine). Other renal disease in RA → AA amyloidosis in long-standing active disease (nephrotic proteinuria; the main cause of renal failure in RA, now less common), NSAID nephrotoxicity and mesangial GN." },
      { t: "Rheumatoid effusion by Light criteria → protein ratio >0.5, LDH ratio >0.6, LDH >2/3 upper limit", add: "These are Light's criteria: meeting any one only shows the fluid is an exudate. What marks a rheumatoid effusion is very low glucose (classically <30 mg/dL), low pH, high LDH, low complement and high RF, typically in middle-aged men with seropositive, nodular RA.", see: "pleural-effusion" },
      { t: "==Felty syndrome== = RA + splenomegaly + neutropenia", role: "hy" }
    ]},
    { type: "diagnosis", title: "Classification — JSAD (notes)", src: "p.640", items: [
      { mnemonic: "JSAD (notes)", add: "Standard 2010 ACR/EULAR classification score (needs ≥1 swollen joint not explained by another disease): joints → 1 large = 0 · 2–10 large = 1 · 1–3 small = 2 · 4–10 small = 3 · >10 (≥1 small) = 5; serology → RF and anti-CCP negative = 0 · low-positive = 2 · high-positive (>3× upper limit) = 3; abnormal ESR or CRP = 1; duration ≥6 weeks = 1 → total ≥6/10 = definite RA. Standard terms: oligoarthritis = 2–4 joints, polyarthritis ≥5.", lines: [["J", "Joints — mono (1) · oligo (<4) · poly (≥5)"], ["S", "Serology — RF, anti-CCP"], ["A", "Acute-phase reactants — ESR, CRP"], ["D", "Duration of symptoms"]] }
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
      { t: "NSAIDs → adjunct only, ==don't stop erosions== · avoid steroids as far as possible", add: "Standard teaching: short-term glucocorticoids (low-dose oral, intramuscular or intra-articular) are used as a 'bridge' while a newly started DMARD takes effect, then tapered and stopped as quickly as possible. It is long-term steroid use that is avoided.", node: "rx-nsaid", role: "adjunct", type: "treatment", why: "Symptom relief only" },
      { t: "==Methotrexate = 1st-line DMARD==", add: "Start a DMARD as soon as RA is diagnosed, because early treatment limits joint damage. Methotrexate is given ONCE WEEKLY (oral or subcutaneous, usually up to 20–25 mg/week) with folic acid supplementation · monitor FBC, LFTs and creatinine · limit alcohol · teratogenic, so stop before a planned pregnancy. Leflunomide or sulfasalazine are used if methotrexate is contraindicated.", node: "rx-methotrexate", role: "first", type: "treatment", why: "RA first line" },
      { t: "==Triple therapy== → methotrexate + sulfasalazine + hydroxychloroquine (or MTX + leflunomide)", node: ["rx-methotrexate", "rx-hcq"], role: "second", type: "treatment", why: "RA combination" },
      { t: "Biologics ==ACE:IG== → adalimumab, certolizumab, etanercept, infliximab, golimumab · IL-6 → tocilizumab", add: "Used when the target is not reached on conventional DMARDs, usually together with methotrexate. Before any biologic → screen for latent TB (IGRA or Mantoux + chest X-ray) and hepatitis B/C; the ACE:IG drugs are all anti-TNF and are avoided in moderate–severe heart failure and demyelinating disease. Other standard biologics: rituximab (anti-CD20), abatacept (blocks T-cell co-stimulation), sarilumab (IL-6 receptor).", node: "rx-biologic", role: "second", type: "treatment", why: "Refractory RA" },
      { t: "Targeted synthetic → tofacitinib (JAK1/3), baricitinib (JAK1/2) → ==↑ CV mortality== · upadacitinib, filgotinib", add: "Standard explanation: in the ORAL Surveillance trial (RA patients ≥50 with a cardiovascular risk factor), tofacitinib caused more major cardiovascular events, cancers, venous thromboembolism and deaths than anti-TNF therapy. So JAK inhibitors as a class are now used in people ≥65, long-term smokers, or those at high cardiovascular or cancer risk only when no suitable alternative exists, and with caution if there is venous thrombosis risk. They also increase herpes zoster.", node: "rx-biologic", role: "second", type: "treatment", why: "JAK inhibitors" },
      { t: "**Remission** → tender joints <1 · swollen joints <1 · CRP normal · patient global (0–10) low", add: "Standard ACR/EULAR Boolean remission: tender joint count ≤1, swollen joint count ≤1, CRP ≤1 mg/dL and patient global ≤1 on the 0–10 scale (relaxed to ≤2 in the 2022 revision). In clinic, activity is usually tracked with DAS28 (remission <2.6), and treatment is changed if there is no improvement by 3 months or the target is not reached by 6 months (treat-to-target).", node: "lab-crp", role: "monitor", type: "followup", why: "Remission criteria" }
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
