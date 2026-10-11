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
      { t: "The notes have ==no dedicated OA chapter== — this card gathers every OA mention so you can compare it with RA and gout", role: "hy" },
      "DIP involvement in an old patient → ==concomitant osteoarthritis== (RA spares the DIP)",
      { t: "Coexistence of OA with hyperuricaemia can occur", see: "crystal" },
      "'Ulnar deviation → indicative of degenerative joint disease' (listed in the RA mnemonic)"
    ]},
    { type: "clinical", title: "Nodes", src: "p.643", items: [
      { table: { head: ["Node", "Joint"], rows: [
        { c: ["==Heberden's nodes==", "==Distal interphalangeal (DIP)=="], hl: true },
        ["==Bouchard's nodes==", "==Proximal interphalangeal (PIP)=="]
      ]}},
      { mnemonic: "Heberden = Higher up the finger (Distal) · Bouchard = Bottom (Proximal)", t: "alphabet trick: B before H → PIP before DIP" }
    ]},
    { type: "diagnosis", title: "OA vs RA vs gout (from the notes)", src: "p.637–638, 643", wide: true, items: [
      { table: { head: ["", "Osteoarthritis", "Rheumatoid arthritis", "Gout"], rows: [
        { c: ["Who", "Old age", "Young woman (or old lady with deformities)", "Post-menopausal woman on thiazides · man after alcohol + meat"], hl: false },
        { c: ["Joints", "==DIP== (Heberden) · PIP (Bouchard)", "==PIP, MCP, wrist — bilateral symmetric==, DIP spared", "==1st MTP== · ankle · knee"], hl: true },
        ["Nodes / lumps", "Heberden · Bouchard", "Rheumatoid nodules (extensor)", "Tophi (ear lobes, IP joints)"],
        { c: ["Synovial fluid", "Non-inflammatory: straw, translucent, WBC ==200–2000==, <25% PMN", "Inflammatory", "Inflammatory + needle, negatively birefringent crystals"], node: "proc-synovial-fluid", role: "dx", why: "Non-inflammatory fluid pattern (OA picture)" }
      ]}},
      { t: "Rheumatoid arthritis", see: "ra" },
      { t: "Synovial fluid table", see: "crystal" }
    ]},
    { type: "followup", title: "Not covered in these notes", src: "—", items: [
      { t: "Risk factors, X-ray signs (Kellgren–Lawrence), knee OA management and surgery are ==not in the PrepLadder notes==", role: "hy" },
      { t: "Secondary references were not available, so nothing was added", verify: "To complete this card, add Davidson's / Boloor's OA section (risk factors, imaging, treatment ladder) and mark each point SUPPLEMENT with its page." }
    ]}
  ],
  sources: [
    "Primary: PrepLadder Medicine notes — OA mentions only, in RA (pp. 637–638) and Crystal Arthropathy (pp. 643, 645). The notes contain no OA chapter.",
    "Davidson's / Boloor's not available — so the chart is intentionally limited to what the notes say."
  ]
});
