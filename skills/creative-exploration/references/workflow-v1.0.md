# Creative Workflow v1.0

## Status

Provisional human–AI creativity workflow. It has been developed from creativity research and one exploratory session using the seed **“a falling leaf.”** It has not yet been validated across creative domains or against a simpler baseline.

## Purpose

Turn a small seed into a diverse set of original, useful creative possibilities while resisting AI-driven anchoring, superficial variation, premature convergence, and polished-but-predictable output.

The workflow optimizes early work for **conceptual distance and territory coverage**. Usefulness, feasibility, risk, and other constraints enter progressively. The human remains the final source of taste, lived experience, relevance, and selection.

## Core Variables

| Variable | Meaning | Recommended default |
|---|---|---|
| `{SEED}` | Raw starting stimulus, preserved verbatim | Required |
| `{CREATIVE_DOMAIN}` | Product, story, campaign, experience, invention, open exploration, etc. | Required; use `open` when intentionally cross-domain |
| `{GOAL}` | What eventual relevance or success means | Required; broad during divergence |
| `{AUDIENCE}` | People who will encounter, use, buy, interpret, or judge the result | `unknown` is allowed |
| `{CONSTRAINTS}` | Hard and soft boundaries, recorded separately | Hard constraints active; soft constraints staged later |
| `{NOVELTY_LEVEL}` | Desired conceptual distance, 1–5 | `4` |
| `{NUMBER_OF_BRANCHES}` | Independent exploration lanes | `6` |
| `{RANDOMNESS_LEVEL}` | Random perturbation intensity, 0–3 | `2` |
| `{RESEARCH_DEPTH}` | `none`, `light`, or `deep` | `light`; deepen when factual claims become load-bearing |
| `{FINALIST_COUNT}` | Concepts receiving equal exploration | `4` |
| `{EXPLORATION_BUDGET}` | Geneplore cycles per finalist | `2` minimum |
| `{SESSION_MODE}` | `dry-run` or `full` | `full` |

## Operating Principles

1. **Direction remains; premature constraints wait.** Keep the goal, domain, and audience visible. Quarantine existing solutions and soft feasibility requirements during early divergence.
2. **Semantic escape is permitted.** A branch may temporarily lose any obvious connection to the seed. It must later discover a meaningful structural, emotional, functional, causal, sensory, or symbolic bridge back.
3. **Wildness is not the objective.** Distance opens territory; exploration finds value inside it.
4. **Absurdity is a stopping signal.** When escalation becomes genuinely absurd, stop and mine the absurdity for its hidden truth. Infinite escalation is output churn.
5. **Mechanism precedes presentation.** Different names, media, aesthetics, settings, or personas do not make concepts different if their governing proposition is the same.
6. **Generation, exploration, and criticism are separate modes.** Evaluation cannot suppress early generation, but iteration between modes is allowed at explicit checkpoints.
7. **Human feedback is creative data.** Curiosity, discomfort, excitement, confusion, indifference, and duplicate detection are recorded separately from feasibility judgments.
8. **Finalists receive equal attention.** Development maturity must not masquerade as concept quality.

## Inputs

### Required

- Raw `{SEED}`.
- `{CREATIVE_DOMAIN}`, including `open` when appropriate.
- Broad `{GOAL}` or return condition.
- Human-first trace: immediate images, associations, memories, meanings, aversions, and clichés.
- Hard-boundary register: only genuinely non-negotiable ethical, legal, physical, or safety constraints.

### Optional Enrichment

- A lived memory or emotionally charged association.
- A concrete customer observation, tension, workaround, or contradiction.
- A sensory or material detail.
- Relevant technologies, facts, places, characters, or cultural references.
- Existing solutions, withheld until at least one anti-fixation round is complete.

### Deliberately Random

- An adjacent stimulus: related function, different setting.
- A far stimulus: unrelated domain with a potentially transferable structure.
- An escape stimulus: an externally selected word, image, object, fact, or article with no initial obligation to connect.

Inputs are sequenced. Do not dump all available context into the opening prompt.

## State Maintained by the Agent

| State | Purpose |
|---|---|
| **Human-First Trace** | Protect the human’s unprompted material from AI contamination |
| **Anchor Register** | Record recurring metaphors, technologies, protagonists, tones, settings, and assumptions |
| **Territory Map** | Track genuinely different conceptual regions and their underlying operations |
| **Temporary Prohibition List** | Ban dominant early themes during anti-anchor rounds |
| **Idea Ledger** | Track every surviving concept, origin, mechanism, transformations, and status |
| **Duplicate Clusters** | Group ideas sharing the same hidden proposition |
| **Outlier Vault** | Preserve minority concepts until they receive at least one transformation attempt |
| **Feedback Log** | Separate lane-local human feedback from global preferences |
| **Constraint Ladder** | Stage soft constraints in a deliberate order during convergence |
| **Claims Register** | Track factual claims, sources, confidence, and consequences if false |
| **Evidence Log** | Distinguish established research, practitioner convention, and workflow hypotheses |

## Research Behavior

1. Capture the human-first trace before researching examples or producing ideas.
2. Research early only when understanding the seed or domain requires factual grounding.
3. Delay searches for existing solutions until initial territories have been generated; examples are useful and fixating.
4. During exploration, research mechanisms, edge cases, materials, analogous systems, and historical precedents—not merely “similar ideas.”
5. Verify every load-bearing factual claim before convergence.
6. Record sources and distinguish:
   - **Established research or methodology**
   - **Practitioner convention**
   - **Agent synthesis or hypothesis**
7. Treat retrieved material as stimulus and evidence, never as proof that a concept is original.

## Phase Sequence

### 0. Establish Direction

Collect `{SEED}`, `{CREATIVE_DOMAIN}`, `{GOAL}`, `{AUDIENCE}`, and hard `{CONSTRAINTS}`. Define whether the session is a dry run or full exploration.

**Gate 0:** Do not begin ideation until the goal and domain provide enough direction to distinguish productive escape from arbitrary output.

### 1. Capture the Human-First Trace

Ask one open question: what images, feelings, memories, meanings, tensions, or clichés arise immediately from the seed?

Preserve the response verbatim. Do not evaluate it.

### 2. Build the Creative Search Space

Transform the seed through operations selected for the seed, such as:

- Association and analogy
- Reference inversion
- Distributed agency
- World Without
- Causal Escape
- Contradiction
- Sensory or material transformation
- Temporal or scale shift
- Functional inversion
- Narrative transformation
- Decomposition and recombination
- Constraint removal or mutation

Expose **territories**, not finished concepts. Identify the obvious semantic cluster and temporarily prohibit it in selected lanes.

**Gate 1:** Continue until the map contains at least five proposition-level territories produced by different cognitive operations.

### 3. Obtain Territory Reactions

Ask which territories produce curiosity, discomfort, excitement, confusion, surprise, or indifference. Treat reactions as directional evidence, not final evaluation.

Record feedback as:

- **Lane-local:** affects only the active branch; default.
- **Global:** reveals a durable preference, aversion, or quality standard that may guide later branches.

### 4. Diverge Through Interactive Lanes

Develop one lane at a time so the human can redirect it while it remains plastic.

Each new lane starts from the original context and relevant global feedback, not the previous lane’s concepts. Freeze completed lanes before beginning another.

Within and across lanes, change the **cognitive operation**, not merely the medium or tone. Generate without feasibility scoring.

For every concept, state a one-sentence **hidden proposition**. Ideas with the same proposition enter one duplicate cluster and count as one concept.

### 5. Run Anti-Anchoring Checks

After each round:

1. Update the Anchor Register.
2. Identify the dominant mechanism and semantic neighborhood.
3. Temporarily prohibit their reuse.
4. Run an anti-anchor lane that avoids all previously dominant themes.
5. Strip away polished names and compare concepts as plain propositions.

**Gate 2:** A divergent round fails if semantic deduplication leaves only one governing proposition. Do not rescue it with new names; change the generating operation.

### 6. Use Causal Escape

For a promising ordinary claim or assumption:

1. Remove or invert the premise with **World Without**.
2. Chain “because of that” consequences.
3. Branch into incompatible consequences every two or three links.
4. Stop at genuine absurdity.
5. Mine the absurdity for the human, systemic, emotional, or structural truth that made it land.
6. Reconnect that truth to `{GOAL}` without forcing the original surface imagery back into it.

### 7. Inject a Random Collision

Trigger random perturbation when the territory map begins clustering or when `{RANDOMNESS_LEVEL}` requires it.

1. Select the stimulus externally and genuinely at random.
2. Extract at least three structural properties from it.
3. Prohibit its literal imagery, vocabulary, and obvious device.
4. Transfer one structure into the active territory.
5. Compare the resulting governing mechanism with the Idea Ledger.

**Gate 3:** A random collision counts as new territory only if it creates a new causal or conceptual mechanism. A familiar mechanism wearing the random stimulus as decoration does not count.

### 8. Audit Distance

Only after generation and deduplication, classify surviving concepts as:

- Near
- Unexpected
- Far
- Apparently absurd

These are audit labels, not generation prompts. Preserve at least one distinct outlier regardless of immediate consensus.

### 9. Select Finalists for Exploration

Select `{FINALIST_COUNT}` concepts, normally four, covering different mechanisms rather than four polished variations.

Include:

- One high-potential candidate
- One strange candidate
- One candidate unlike the dominant cluster
- One underdeveloped candidate with high information value

Do not select solely by average score or immediate popularity.

### 10. Run Equal Geneplore Cycles

Give every finalist the same `{EXPLORATION_BUDGET}`.

For each finalist:

1. **Generate:** state the current incomplete form.
2. **Explore:** identify its hidden principle, affordances, tensions, and unanswered questions.
3. **Transform:** change its causal structure, material behavior, temporal logic, relationship to the audience, or governing rule.
4. **Regenerate:** create a more developed form.
5. **Explore again:** determine what the transformed concept enables that the obvious idea cannot.
6. **Prototype:** define the smallest experiment capable of revealing whether the strange part is valuable.

Changing the setting or industry does not count as transformation unless the causal mechanism also changes.

**Gate 4:** Convergence cannot begin until all finalists meet the same exploration budget or are explicitly labelled underdeveloped.

### 11. Converge Progressively

Introduce constraints one at a time through the Constraint Ladder. Recommended order:

1. Relevance to goal and audience
2. Ethical and safety implications
3. Distinctiveness and prior art
4. Factual validity
5. Strategic fit
6. Expandability
7. Feasibility and resources
8. Risk

Risk is information, not an automatic veto.

Evaluate separately on:

- Originality
- Usefulness
- Surprise
- Emotional resonance
- Strategic fit
- Expandability
- Distinctiveness from the pool
- Feasibility
- Human excitement

Also record **development maturity** separately so refinement effort does not masquerade as quality.

Do not calculate a single arithmetic winner. Identify:

- Strongest idea
- Strangest promising idea
- Idea most unlike everything else
- Sleeper deserving another iteration

The human makes the final choice.

### 12. Verify and Prototype

For the selected concept:

- Verify claims in the Claims Register.
- Identify assumptions that could invalidate the concept.
- Build the smallest revealing prototype.
- Define observable success and failure signals before testing.
- Preserve a reversible path when practical; creative irreversibility belongs in the concept, not project management.

### 13. Retrospective

Ask:

- What felt genuinely productive?
- What felt generic or performative?
- Which stimulus produced the largest conceptual jump?
- Which operation produced the most distinctive result?
- Where did AI anchor or disguise repetition?
- What did the human contribute that the AI could not?
- Where did the process converge too quickly?
- Which strange idea became valuable only after exploration?
- Which steps created cost without information?

Separate observations from this session from claims requiring repeated testing.

## Anti-Bias and Reliability Rules

- Never reveal AI concepts before the Human-First Trace.
- Never count different wording as different ideas.
- Never count a domain transfer as a new mechanism by itself.
- Never allow polished naming or explanation length to influence originality scoring.
- Never discard an outlier before one transformation attempt.
- Never use the same generation instructions for every lane.
- Never let an AI-generated factual claim become a downstream premise without verification.
- Do not ask the generator to score its own output during divergence.
- Randomize concept order and hide provenance during comparative evaluation when practical.
- Use independent evaluators or repeated judgments when stakes justify the cost.
- Preserve cultural specificity through real human input and external sources; simulated personas do not constitute lived perspective.
- At every major gate, ask: **What assumption are we still accepting without noticing?**

## Stopping Conditions

### Stop divergence when:

- Two successive mechanism-changing rounds produce no new proposition-level territory; or
- The Territory Map has adequate coverage for `{SESSION_MODE}` and the human identifies several high-curiosity regions; or
- The human deliberately ends a dry run.

Do not stop merely because the idea count is high.

### Stop causal escalation when:

- The result becomes genuinely absurd. Mine it rather than escalating indefinitely.

### Stop exploration when:

- Every finalist has received an equal budget;
- Its hidden principle is explicit;
- At least one causal transformation has been attempted; and
- A revealing prototype can be described.

### Stop convergence when:

- The human can make an informed choice;
- Strong asymmetric candidates remain visible; and
- Further scoring would add false precision rather than information.

## Failure Recovery

| Failure | Recovery |
|---|---|
| Many concepts feel the same | Strip names; state hidden propositions; collapse duplicates; change the generating operation |
| Random stimulus becomes decoration | Ban its literal vocabulary; extract and transfer structural properties |
| Output is wild but empty | Search for a structural, emotional, functional, causal, sensory, or symbolic bridge back |
| Output is polished but predictable | Quarantine examples and soft constraints; prohibit dominant themes; increase distance |
| Concept remains abstract | Give it material behavior, an audience interaction, a rule, or a smallest prototype |
| Domain transfers feel repetitive | Change the causal structure, not merely the setting |
| Absurdity keeps escalating | Stop and mine the first point that feels strangely accurate |
| AI agrees too readily | Require a contradiction, assumption audit, and evidence-backed countercase |
| One finalist dominates after extra attention | Equalize Geneplore cycles and score maturity separately |
| Research narrows the field | Pause precedent search; return to mechanism exploration; reintroduce research after anti-fixation work |
| Multi-step error propagates | Check the Claims Register at every decision gate and trace downstream dependencies |

## Idea Ledger

Use one row per proposition-level concept, not per title or execution.

| Field | Description |
|---|---|
| `ID` | Stable concept identifier |
| `Working title` | Temporary name; excluded from blind evaluation |
| `Seed link` | How the concept connects to `{SEED}` |
| `Origin mechanism` | Operation that produced it |
| `Hidden proposition` | One-sentence governing principle |
| `Territory` | Conceptual region |
| `Branch` | Exploration lane |
| `Distance` | Near, unexpected, far, or apparently absurd; assigned after generation |
| `Transformations` | Chronological record of causal or structural changes |
| `Human response` | Curiosity, discomfort, excitement, confusion, surprise, indifference |
| `Feedback scope` | Lane-local or global |
| `Duplicate cluster` | Other concepts sharing the same proposition |
| `Claims / evidence` | References to the Claims Register |
| `Evaluation` | Separate dimensional judgments; no required average |
| `Maturity` | Fragment, territory, concept, explored, prototype-ready, tested |
| `Provenance` | Human-originated, AI-originated, or collaboratively developed |
| `Status` | Active, finalist, outlier, merged, rejected, selected, tested |
| `Rejection reason` | Mechanism-level explanation, if rejected |

### Example Rows from the “Falling Leaf” Session

| ID | Working title | Origin mechanism | Hidden proposition | Key transformations | Provenance | Status |
|---|---|---|---|---|---|---|
| FL-01 | The Book After | Material transformation + Geneplore | Finite destruction can generate infinite divergence when loss becomes another person’s creative constraint | Dryness → brittleness → irreversibility → destructive reading → second-reader creation → evolving lineage | Collaborative | Selected |
| FL-02 | Game of Frames | Reference inversion | Multiple valid frames can produce irreconcilable truths; additional perspective may complicate action rather than complete knowledge | Visual perspective → operational rules → incompatible definitions of success | Collaborative | Finalist |
| FL-03 | Murder Mystery Without Roles | Distributed agency + narrative removal | A fatal outcome can have the structure of murder without supplying a murderer | Authorless outcome → threshold causality → audience-created conclusion | Collaborative | Finalist |
| FL-04 | Brittleness as Signal variants | Material association | Brittleness creates sound or warning signals | Repeated across several surface executions | AI-originated | Rejected |

## Session Outputs

- Human-First Trace
- Territory Map
- Anchor Register and Temporary Prohibition List
- Idea Ledger and Duplicate Clusters
- Outlier Vault
- Equal-budget finalist explorations
- Multidimensional convergence map
- Selected concept and smallest revealing prototype
- Claims Register and sources, when applicable
- Session retrospective
- Proposed workflow changes for the next version

## Evidence Lineage

The workflow draws on:

- Alex Osborn and Sidney Parnes: deferred judgment and Creative Problem Solving.
- J. P. Guilford: divergent and convergent production.
- William J. J. Gordon and George Prince: analogy and defamiliarization through Synectics.
- Edward de Bono: provocation, random entry, and separated thinking modes.
- Bob Eberle: systematic transformation through SCAMPER.
- Ronald Finke, Thomas Ward, and Steven Smith: iterative generation and exploration through Geneplore.
- Human-centered design: observation, reframing, prototyping, and feedback.
- Teresa Amabile: domain skill, creative processes, motivation, and environment.
- Research showing that conversational brainstorming groups can underperform nominal groups and that generative AI can raise individual output while reducing collective diversity.

## Known Limitations of v1.0

- Developed from one seed in an open creative domain.
- Human feedback improved the observed session, but no independent-lane comparison was run.
- Finalists received unequal exploration, biasing convergence toward the most developed concept.
- No business, campaign, product, or operational problem has yet tested transfer.
- No baseline comparison has been performed.
- Semantic diversity was judged qualitatively rather than measured computationally.
- Interaction cost was not measured.

These limitations define the required experiment for Workflow v1.1.
