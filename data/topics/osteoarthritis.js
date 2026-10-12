/* Osteoarthritis — added at the user's request (2026-10-11).
   The PrepLadder notes have NO osteoarthritis chapter; every point below is collected from mentions inside the
   RA (pp. 637–638) and Crystal Arthropathy (pp. 643, 645) chapters. Nothing is added from outside the notes. */
MF.addTopic({
  id: "osteoarthritis",
  title: "Osteoarthritis",
  aka: ["OA", "degenerative joint disease", "Heberden nodes", "Bouchard nodes", "DIP", "non-inflammatory synovial fluid"],
  oneLine: "Only scattered points exist in these notes: DIP involvement in the elderly, Heberden (DIP) & Bouchard (PIP) nodes, coexistence with hyperuricaemia, and a non-inflammatory synovial fluid. Use it as a comparison card against RA and gout.",
  flow: ["Elderly · DIP ± PIP nodes", "vs RA: DIP spared, PIP/MCP/wrist symmetric", "vs gout: 1st MTP, crystals, tophi (can coexist)", "Synovial fluid non-inflammatory (WBC 200–2000)"],
  related: ["ra", "crystal"],
  bubbles: [
    { type: "definition", title: "What the notes say", src: "p.637–638, 643", items: [
      { t: "The notes have ==no dedicated OA chapter== — this card gathers every OA mention so you can compare it with RA and gout", add: "Standard definition: OA is a disorder of the whole synovial joint → focal loss of articular cartilage with reactive new bone at the joint margins (osteophytes) and subchondral sclerosis · it is the commonest arthritis. It presents with use-related pain eased by rest, brief stiffness in the morning or after rest (under 30 min), crepitus, bony swelling and reduced movement, with no systemic upset.", role: "hy" },
      { t: "DIP involvement in an old patient → ==concomitant osteoarthritis== (RA spares the DIP)", add: "Standard teaching: the other classic arthritis of the DIP joints is psoriatic arthritis → look for nail pitting / onycholysis, dactylitis and skin psoriasis before putting DIP disease down to OA." },
      { t: "Coexistence of OA with hyperuricaemia can occur", add: "Standard explanation: crystals deposit preferentially in joints already damaged by OA → elderly women on diuretics can get gout and tophi in Heberden's nodes, and CPPD (chondrocalcinosis / pseudogout) is commonly seen with knee OA.", see: "crystal" },
      { t: "'Ulnar deviation → indicative of degenerative joint disease' (listed in the RA mnemonic)", add: "Standard teaching: ulnar deviation of the fingers at the MCP joints is a classic deformity of established RA (a reducible form occurs in SLE — Jaccoud's arthropathy) · it is not a feature of OA, which gives Heberden / Bouchard nodes, 'squaring' of the thumb base from 1st CMC OA and sometimes sideways deviation at the IP joints." }
    ]},
    { type: "clinical", title: "Nodes", src: "p.643", items: [
      { table: { head: ["Node", "Joint"], rows: [
        { c: ["==Heberden's nodes==", "==Distal interphalangeal (DIP)=="], hl: true },
        ["==Bouchard's nodes==", "==Proximal interphalangeal (PIP)=="]
      ]}, add: "Standard teaching: Heberden's and Bouchard's nodes are hard bony swellings (osteophytes), the hallmark of nodal generalised OA, typically in middle-aged women with a strong family tendency. They may be red and painful while forming, then usually become painless with good long-term hand function." },
      { mnemonic: "Heberden = Higher up the finger (Distal) · Bouchard = Bottom (Proximal)", t: "alphabet trick: B before H → PIP before DIP" }
    ]},
    { type: "diagnosis", title: "OA vs RA vs gout (from the notes)", src: "p.637–638, 643", wide: true, items: [
      { table: { head: ["", "Osteoarthritis", "Rheumatoid arthritis", "Gout"], rows: [
        { c: ["Who", "Old age", "Young woman (or old lady with deformities)", "Post-menopausal woman on thiazides · man after alcohol + meat"], hl: false },
        { c: ["Joints", "==DIP== (Heberden) · PIP (Bouchard)", "==PIP, MCP, wrist — bilateral symmetric==, DIP spared", "==1st MTP== · ankle · knee"], hl: true },
        ["Nodes / lumps", "Heberden · Bouchard", "Rheumatoid nodules (extensor)", "Tophi (ear lobes, IP joints)"],
        { c: ["Synovial fluid", "Non-inflammatory: straw, translucent, WBC ==200–2000==, <25% PMN", "Inflammatory", "Inflammatory + needle, negatively birefringent crystals"], node: "proc-synovial-fluid", role: "dx", why: "Non-inflammatory fluid pattern (OA picture)" }
      ]}, add: "Standard risk factors: increasing age, female sex, obesity (especially knee), previous joint injury or surgery (e.g. meniscectomy), repetitive occupational loading, joint malalignment and genetic predisposition. · Standard distribution also includes the thumb base (1st carpometacarpal), knees, hips, 1st MTP (hallux rigidus) and the cervical / lumbar spine. MCP joints, wrists, elbows, shoulders and ankles are usually spared → OA there suggests a secondary cause (e.g. previous injury, CPPD, or haemochromatosis at the 2nd/3rd MCP). · Standard teaching: non-inflammatory (group I) fluid is yellow, clear (transparent) and of high viscosity · cloudy, translucent-to-opaque, low-viscosity fluid is the inflammatory (group II) pattern." },
      { t: "Rheumatoid arthritis", see: "ra" },
      { t: "Synovial fluid table", see: "crystal" }
    ]},
    { type: "followup", title: "Not covered in these notes", src: "—", items: [
      { t: "Risk factors, X-ray signs (Kellgren–Lawrence), knee OA management and surgery are ==not in the PrepLadder notes==", add: "Standard X-ray signs: asymmetric (non-uniform) joint-space narrowing, marginal osteophytes, subchondral sclerosis and subchondral cysts, graded 0–4 by Kellgren–Lawrence · periarticular osteopenia and marginal erosions (RA signs) are absent. ESR / CRP are normal or only slightly raised, RF is usually negative, and X-ray severity often matches pain poorly.", role: "hy" },
      { t: "Secondary references were not available, so nothing was added", verify: "To complete this card, add Davidson's / Boloor's OA section (risk factors, imaging, treatment ladder) and mark each point SUPPLEMENT with its page.", add: "Standard management ladder: education, regular exercise / physiotherapy (e.g. quadriceps strengthening) and weight loss if overweight for everyone → topical NSAID (especially knee and hand) → oral NSAID or COX-2 inhibitor at the lowest dose for the shortest time, with a PPI → intra-articular corticosteroid for short-term relief → joint replacement when pain and loss of function persist despite non-surgical care. Current NICE guidance does not advise routine paracetamol or weak opioids, glucosamine, hyaluronic acid injections or arthroscopic washout (unless there is true mechanical locking)." }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes — OA mentions only, in RA (pp. 637–638) and Crystal Arthropathy (pp. 643, 645). The notes contain no OA chapter.",
    "Davidson's / Boloor's not available — so the chart is intentionally limited to what the notes say."
  ]
});
