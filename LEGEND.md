# Colour legend & conventions

Colour always carries meaning, and it is never the only signal. Every bubble also shows a **numbered badge**, an **icon letter** and an **UPPERCASE type label**, so the chart still reads in greyscale and with colour-vision deficiency.

## Bubble types
| Colour | Icon | Type label | Used for |
|---|---|---|---|
| Blue | D | DEFINITION | Definitions, classifications, core concepts |
| Orange | E | ETIOLOGY & RISK FACTORS | Causes, risk factors, classification by cause |
| Purple | P | PATHOPHYSIOLOGY | Mechanisms |
| Green | C | CLINICAL FEATURES | Symptoms, signs, characteristic presentations |
| Teal | Ix | INVESTIGATIONS | Laboratory and bedside tests, findings |
| Indigo | Im | IMAGING | Imaging modalities and characteristic findings |
| Steel blue | Dx | DIAGNOSIS | Diagnostic criteria, essential findings, differentials |
| Red | ! | EMERGENCY | Emergencies, danger signs, urgent interventions |
| Dark green | Rx | MANAGEMENT & TREATMENT | Stabilisation → first-line → subsequent → definitive |
| Yellow | Cx / ★ / Q | COMPLICATIONS · EXAM PEARLS · MCQ | Complications, precautions, high-yield points, MCQs from the notes |
| Slate | F | FOLLOW-UP & SPECIAL | Monitoring, screening, prevention, prognosis, special groups |
| Grey | ⇄ | SHARED / CROSS-REFERENCE | Shared nodes, cross-links, navigation |

## Role badges (on investigations and treatments)
| Family | Badges |
|---|---|
| Teal (diagnostic role) | Initial test · Screening · Diagnostic · Confirmatory · Gold standard · Inv. of choice · Monitoring |
| Dark green (treatment line) | 1st-line · 2nd-line · Rescue · Definitive · Adjunct · Prevention |
| Red, solid (urgent or forbidden) | Emergency · Danger sign · Contraindicated (the list item also gets a red left edge) |
| Yellow | High-yield |

## Shared-node chips
A pill-shaped chip such as `[A1c ⇄3]` is one **shared node**: a single investigation, drug, protocol or concept used across topics.
- The **glyph** (e.g. `A1c`, `MET`, `GAD`) and the **colour family** are fixed per node, so the node looks the same everywhere: teal = lab/bedside test, indigo = imaging, dark green = drug, green = management protocol, red = emergency protocol, grey = concept.
- `⇄n` = the number of topics linked to this node.
- Clicking a chip opens a table of every disease using it, with that disease's **role** and **specific reason**. Same drug ≠ same indication.

## Connectors
- **Grey elbow arrows** join the numbered bubbles in reading order: the clinical approach from definition to follow-up.
- **↓ inside pathways** = next step. A **dashed grey box** is a decision point, and its options fan out into side-by-side branches.
- **"see … →"** links jump to another topic.
- The **dashed spine strip** under the title is the one-line clinical sequence for the topic.

## Text marks
- <mark>Pink highlight</mark> = text that is highlighted high-yield in the PrepLadder notes.
- **Bold** = key value, threshold or drug of choice.
- **⚠ VERIFY** = conflicting, unclear or possibly outdated (collected in `REVIEW-FLAGS.md`).
- **SUPPLEMENT** = from a secondary reference, never the primary notes; the source is shown.
- `p.NNN` = PDF page in `Medicine Prep X - ZeroTrace - Copy.pdf`.

## Memory aids & layout (v2)
- **MNEMONIC** boxes (dashed purple) are memory aids written for this chart. They are not from the notes.
- **Mini tables** inside bubbles compare tests, drugs or types at a glance. A **yellow row** is the one to remember.
- **Normal values** sit beside every lab. Values from the notes carry their page number; a **†** means a standard reference range the notes don't print.
- <span>Teal key terms</span> (`++term++` in the data) anchor recall. Pink is reserved for the notes' own high-yield highlights.
- **Chains** (`A → B → C` boxes) show a mechanism or sequence on one line.
- **Treatment and emergency management** are drawn as their own flowcharts inside the chart, spanning the full width, with decision branches side by side.
