---
name: tam-analysis
description: "Research, size, validate and govern the market for a product — TAM/SAM/SOM built to a skeptical-investor standard: graded evidence, explicit ranges, no double counting across revenue layers, and a versioned Source of Truth that survives new evidence. Use whenever the user asks to size a market, estimate TAM/SAM/SOM, validate or stress-test a market number, reconcile conflicting market reports or analyst estimates, build or update a source of truth for market intelligence, or judge whether new evidence (Census release, competitor move, pricing test, pilot result) changes what a company believes about its market. Trigger even without the word TAM — 'how big is this market really', 'these two decks disagree on market size', 'does this report change our numbers', 'is our market slide defensible' all belong here. Three modes: SIZE (new market), RECONCILE (adjudicate competing analyses), MAINTAIN (evaluate new evidence against an existing Source of Truth)."
---

# TAM Analysis — Size, Reconcile, Maintain

## What this skill produces and why

Most market sizing fails the same way: a big headline number, sourced to a slide, with no definition, no range, and no record of what would change it. Investors discount it to zero and the company keeps making decisions on it anyway. This skill optimizes for **defensibility, not size** — every number carries a definition, a formula, graded sources, a range, a status label, and a "what would change our mind" line. The output is not a report; it is a **knowledge system** that can be updated claim by claim as evidence arrives.

The working standard throughout: *would a skeptical investor who has read the sources reach the same number?* If the answer depends on an assumption, say so and label the claim accordingly.

Work as a combined **senior market researcher, VC analyst, strategy consultant and skeptical investment-committee reviewer** — and switch to the last role deliberately before finalizing. Do not assume the company's thesis is correct; test it. Do not begin from an existing company estimate and rationalize it; discover what the evidence supports.

## Reference files — read the ones the mode needs

| File | Read when |
|---|---|
| `references/evidence-grading.md` | Always — source tiers, A–D grades, freshness, status labels, external-use checklist |
| `references/knowledge-system-schema.md` | Always — artifact map, IDs, ledger columns, versioning, update process |
| `references/sizing-methods.md` | SIZE and RECONCILE — architecture, denominators, price, bottom-up/top-down, SAM/SOM, scenarios, overlap audit |
| `references/competitive-and-moat.md` | Whenever competitors or right-to-win are in scope |
| `references/red-team-and-scoring.md` | Before finalizing in any mode — skeptical review, objections, thesis verdicts, scoring, ranking, QC gate |
| `references/reconciliation-protocol.md` | RECONCILE |
| `references/report-structure.md` | When a research report, memo or investor explanation is a deliverable |

## Working method — five passes (SIZE and RECONCILE)

1. **Define** — market definitions, value chains, monetization models, non-overlapping economic units.
2. **Research** — gather graded evidence; build top-down and bottom-up models.
3. **Reconcile** — resolve discrepancies, build scenarios, settle defensible TAM/SAM/SOM.
4. **Red team** — attack calculations, assumptions, competitive thesis and strategic logic.
5. **Synthesize** — write the narrative and investor explanation using only conclusions that survived pass 4.

## Pick the mode first

| Mode | Trigger | Output |
|---|---|---|
| **SIZE** | New market, no prior canonical view. "How big is the market for X?" | A first Source of Truth (v1.0.0) with model cards, source ledger, assumption and open-question registers |
| **RECONCILE** | Two or more existing analyses disagree (internal decks, consultants, prior AI research). "These reports say $2B and $400M — which is right?" | A reconciliation report + decision ledger that adjudicates each conflict on evidence, then the canonical Source of Truth |
| **MAINTAIN** | A Source of Truth already exists and new evidence arrives. "Census just released new data — does anything change?" | An evidence-review memo with replacement text for affected sections only, DEC entries, version bump |

If the user has existing reports but no canonical view, that is RECONCILE, not SIZE — do not throw away work that exists. If a Source of Truth exists, never rewrite it from scratch; that is MAINTAIN. When unsure, ask which mode and what artifacts exist.

## Non-negotiable principles (all modes)

These come from hard-won reconciliation work; each prevents a specific failure.

1. **Definition before number.** Most disagreements between market estimates are definitional (different denominators, different economic units), not empirical. State exactly what is being counted (who the buyer is, what the economic unit is, what is excluded) before any arithmetic. Two numbers can only be compared once their definitions match.
2. **Ranges before points.** Quote every canonical number as base with low/high. A point estimate alone is an error. The range comes from sensitivity on the load-bearing inputs, not from a ±20% haircut.
3. **Bottom-up primary, top-down as cross-check.** Bottom-up (count of buyers × price per buyer) is reproducible; top-down (share of a big pool) is a sanity check. Run at least two independent methods. If they disagree by more than ~2×, the definition is wrong somewhere — find it before publishing.
4. **No double counting across revenue layers.** Channels, partnerships, take-rates, data products and media are usually the *same buyer* monetized differently, not separate markets. Classify each layer as Core / Channel / Additive / Conditional / Option, and publish an overlap-adjusted near-term headline separate from a theoretical full-stack ceiling that is never used as a headline.
5. **Grade every source.** A (primary/authoritative), B (strong secondary), C (directional), D (weak). Company-provided figures are A for what the company says and D as market evidence. Untraced deck statistics are D and marked "do not cite."
6. **Adjudicate, never average.** When sources conflict, compare quality, methodology, definition, geography, period, sample and relevance. Choose one, refine it, or reopen the question — averaging conflicting estimates manufactures false consensus.
7. **Status is earned by evidence, not by usefulness.** VERIFIED / WORKING / HYPOTHESIS / DEPRECATED. A status is never upgraded because the number helps a pitch. When evidence contradicts an attractive narrative, evidence wins.
8. **Never delete history.** Superseded numbers are marked `DEPRECATED — [date]` and kept, so anyone can trace why a number changed.
9. **Reproducibility.** Every quantitative sentence must be recreatable by another analyst from the model cards and the source ledger. Formulas live in one place (a model card and, ideally, a small script); the narrative only quotes them.
10. **Separate observed / announced / inferred** for competitor capabilities. A press release is announced capability until deployment is evidenced.

## Workflow — SIZE mode

Read `references/sizing-methods.md` before starting; `references/evidence-grading.md` for grading rules; `references/knowledge-system-schema.md` for the artifact structure.

1. **Scope with the user.** Product, buyer, geography, currency and year basis, revenue layers in play, time horizon for SAM/SOM, and what decision the number will inform (seed deck vs. board SAM commitment sets the required rigor). Ask what internal data exists (pricing, traction, pipeline) — it seeds the SOM. Analyze each candidate market separately, and add any market that logically emerges from the company's infrastructure — but do not classify every monetization idea as an independent TAM.
2. **Industry overview per market** (plain English, before any number): definition, customer vs end user, value chain, economics, structure, evolution, and exactly what the company replaces, complements and enables — and who loses economic power. See `report-structure.md`.
3. **Define the market architecture.** Draw the value chain: who pays whom for what. Identify the core paid trigger (the thing the buyer actually pays for, not the free tier). Classify every other revenue idea as Channel / Additive / Conditional / Option. This step decides what gets summed.
4. **Build the denominator.** Start from authoritative counts (Census, statistical agencies, regulators, industry registries) and apply documented removals. Record every removal as an assumption with a source. Produce low/base/high.
5. **Establish the economic unit and price.** State it explicitly: *"The TAM being measured here is …"* and what is excluded. Per what (per location, per account, per seat, per transaction)? Anchor on observed prices — the company's own list price, comparables' list prices, revealed wallets. Weight by realistic mix. Produce low/base/high.
6. **Compute TAM bottom-up** (theoretical, then practical), then run 2–3 independent top-down cross-checks and publish the reconciliation table with the difference explained. Never let bottom-up reverse-engineer top-down.
7. **SAM** — apply serviceability filters that are specific and testable (integration coverage, regulatory exclusions, need-for-paid share, segment focus), not a generic percentage. Keep price at base to avoid compounding optimism.
8. **SOM** — 3-year and 5-year, in customers and revenue, from an operational funnel model (signups → activation → conversion → churn → ARPU), seeded with real traction where it exists. Gate on genuine dependencies (a partner contract, a data right) and show what SOM is if the gate fails.
9. **Sensitivity and scenarios.** Bear / Base / Bull per market; identify the 2–3 inputs that move each result most and by how much. Any assumption that can move TAM, SAM, SOM or priority by >20% is Critical and gets an Open Question with a validation method.
10. **Double-counting audit.** Overlap map, gross vs adjusted ecosystem TAM; recommend not presenting a single number if it would mislead.
11. **Competitive analysis and moat** per `competitive-and-moat.md`: all six competitor classes, the dimension table with Unknown where data is missing, the two-sided competitive red team, build-vs-partner risk for each platform, moat grades (current vs future) with reproduction cost.
12. **Red team, scoring, verdicts** per `red-team-and-scoring.md`: skeptical-analyst review, ≥5 IC objections, evidence challenge per thesis, 1–5 confidence scores, attractiveness ranking, market verdicts, venture-scale verdict, 12–24-month milestones. Then re-derive definition, denominator and price from first principles without looking at the draft; note what moved.
13. **Write the artifacts** per `references/knowledge-system-schema.md`, starting from `templates/`. Every claim gets an ID and a status. Populate the external-use table (what may be quoted, in what wording, at what status). Then the research report and investor explanation per `report-structure.md` if requested, and always a short executive memo. Run the twelve-point QC gate before delivering.

## Workflow — RECONCILE mode

Read `references/reconciliation-protocol.md`.

1. **Inventory the inputs.** List every analysis, its author, date, scope, headline numbers and (crucially) its definitions. Often there are more analyses than the user thinks — check for addenda, prior passes, and deck figures that were never sourced.
2. **Decompose into a claim ledger.** Every material claim (denominator, price, growth, competitive fact, strategic thesis) becomes one row with the value each source gives. Do not compare headlines; compare claims.
3. **Build a graded evidence ledger** of every source cited by any analysis. Re-verify load-bearing sources on the primary page where possible and mark them `[V]`.
4. **Find the conflicts that matter.** Usually three to five drive the whole gap. For each: is it definitional, methodological, or a genuinely different empirical read?
5. **Adjudicate each conflict** with a decision entry (nine fields — see schema). Outcomes: adopt one, refine into a canonical definition, or reopen as an open question. Deprecate what loses, with the reason.
6. **Rebuild the canonical numbers** from the adjudicated inputs in one model. Never carry a number forward unexamined.
7. **Red team** the reconciled view: what got promoted to Critical, what dependency was underweighted?
8. **Write** the reconciliation report (why we believe it), the decision ledger, and the Source of Truth (what we believe), plus a short memo to the decision-maker: TL;DR, the conflicts that mattered, what changed, what to do next, where the analysis is still weak.

## Workflow — MAINTAIN mode

Read `references/knowledge-system-schema.md` §Update process. Start by reading the existing README/Source of Truth and the affected registers — never work from memory of them.

1. **Intake** the new source into the Source Ledger with an ID, grade, publication date, period measured, access date and refresh cadence. If immaterial, stop here with a one-line changelog entry.
2. **Identify affected IDs** by following the dependency map in the model cards (a denominator change propagates through TAM → SAM → SOM → market priority).
3. **Classify impact**: CONFIRMS · REFINES · CONTRADICTS · INVALIDATES · NEW.
4. **Test materiality**: does it change a strategic decision, a headline by >20%, a status, an external claim, or a Critical assumption? If not, ledger entry and done.
5. **Handle conflict without recency bias** — newer is not automatically better. Retain / refine / replace / reopen.
6. **Apply the update**: deprecate the old conclusion in place, add the decision entry, change the model variable and recalculate every dependent card, update statuses and registers, add a changelog line, bump the version (major / minor / patch per schema), snapshot the prior version to the archive.
7. **Report** using the update format: Evidence received · Claims affected · Analysis · Changes required · Calculation impact · Decision ledger updates · New open questions · Updated Source-of-Truth excerpt. Replacement text for affected sections only.

## Output conventions

- Default deliverable is a set of Markdown files matching the artifact map in the schema (README, A Source of Truth, B Decision Ledger, C Assumption Register, D Open Questions, E Source Ledger, I Model Cards; G Competitors and H Theses when in scope; CHANGELOG). Use the templates in `templates/` — they encode the column sets that make the system maintainable. Save to the working/outputs directory unless the user names a Drive folder.
- Put the live arithmetic in one small script (`scripts/model_template.py` is the starting point) whose variable names match assumption IDs, so a register row and a model input are the same thing.
- The Source of Truth is the system of record; the research report (SIZE/RECONCILE) and investor explanation are views of it. Produce them in Markdown by default and as Word only when asked. Always include a ≤2-page executive memo.
- Label every claim FACT / CALCULATION / ASSUMPTION / INFERENCE in narrative text. Where evidence is missing write "Not sufficiently supported" rather than filling the gap.
- Lead any memo with the TL;DR and the ranges. Facts, calculations, assumptions and inferences are labeled as such. US spelling unless the user's documents say otherwise.

## Common failure modes to avoid

- Summing every revenue idea into one TAM (double counting). Ask "who is paying, for what, is it the same wallet?"
- Importing a benchmark ratio from a different kind of company (e.g., an advertising yield from companies that own an audience applied to businesses that own none).
- Treating "3M businesses" as the denominator when the plausible-buyer set is a fraction of it. Denominators need removals with reasons.
- Presenting a theoretical ceiling as the headline. Lead with the overlap-adjusted near-term figure.
- Letting a useful number drift up in status. WORKING stays WORKING until A/B evidence arrives.
- Rewriting the Source of Truth from scratch because it is easier than updating it. The history is the asset.
