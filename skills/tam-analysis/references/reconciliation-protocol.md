# Reconciliation protocol

Use when two or more market analyses disagree and the company needs one canonical view. The premise: analyses usually agree far more than their headlines suggest, and where they disagree it is almost always because they measured different things. The job is to surface the definitions, adjudicate on evidence, and record why — so the canonical view is defensible and the losing numbers stay traceable.

## Phase 1 — Inventory and normalize

For every input analysis: label it (A1, A2, B1, B2…), author, date, scope, geography, currency and year basis, headline numbers, and the **definition** behind each headline. Look beyond the obvious: addenda, earlier passes, the investor deck, a spreadsheet at the root of a folder. Record unsourced deck figures as their own input so they can be formally deprecated.

Then map every analysis into one common structure per market so differences become visible before anything is judged: market definition · customer · industry structure · value chain · company's role · customer problem · market size · bottom-up TAM · top-down TAM · SAM · SOM · pricing/ARPU · growth · competitors · advantages · disadvantages · moats · distribution · platform dependency · key risks · key assumptions · evidence gaps. Do not decide which analysis is right yet.

## Phase 2 — Claim ledger

Decompose every analysis into material claims. One row per claim, one column per analysis:

`Claim ID · Question / claim · A1 value · A2 value · B1 value · … · Agreement status · Importance`

Agreement status: **Agreement · Minor Difference · Material Conflict · Different Definition · Only One Report Addresses · Insufficient Evidence**. Importance: **Critical / High / Medium / Low**. Spend reconciliation effort on Critical and High.

Do not compare headlines. A $2B and a $400M TAM are not in conflict until you know whether one counted enterprises and the other didn't.

## Phase 3 — Evidence ledger

Every source cited by any analysis goes into one graded ledger (see `evidence-grading.md`). Re-verify load-bearing sources on the primary page and mark `[V]`; correct dates and figures that were mis-transcribed by an input analysis (record the correction). Note where two analyses cite the same source for different numbers.

## Phase 4 — Identify the conflicts that matter

Typically three to five conflicts drive the entire gap between headlines. For each, classify the cause:

Check definitions **first** — establishments vs companies, businesses vs locations, SMB thresholds, customer counts vs installations, software TAM vs transaction volume, theoretical vs serviceable, locations vs accounts, one geography vs global, current market vs optionality. Then classify each discrepancy and resolve each class separately:

- **A. Data disagreement** — same definition, different source/value. Resolve on source quality, recency, sample.
- **B. Definition disagreement** — different things measured. Adopt one canonical definition (most authoritative and reproducible); restate every analysis on it.
- **C. Assumption disagreement** — same facts, different assumptions (often a benchmark imported from a structurally different business). Rebuild from observed values; the losing assumption goes to the register with its origin.
- **D. Calculation disagreement** — arithmetic or modeling difference. Recompute.
- **E. Judgment disagreement** — same facts, different strategic interpretation (e.g., separate market vs channel to the same buyer). A market-architecture decision, recorded as a DEC; if genuinely unresolvable, reopen as an OQ.

## Phase 5 — Adjudicate

One decision entry per conflict (nine fields, see schema). Outcomes: **adopt** one analysis's value; **refine** into a new canonical definition/value; **reopen** as an OQ with a downgraded status. Never average. State what is deprecated and why, in one sentence a skeptic would accept.

## Phase 6 — Rebuild

Do not pick one analysis's model by default. Build a fresh canonical model from the strongest evidence in any input plus new verification where needed. For every variable: `Variable | A value | B value | … | Canonical input | Why selected | Confidence`. Then compute bottom-up, top-down, SAM and 3/5-year SOM independently, and publish per market: `Metric (Bottom-up TAM / Top-down TAM / Defensible TAM / SAM / 5Y SOM) | A | B | Reconciled | Confidence`, explaining exactly why the reconciled figure differs from every original. If nothing is sufficiently supported, produce a new estimate or leave it unresolved — never average. Numbers carried over without recomputation are a defect.

Reconcile competitors the same way: pool discovery from all inputs, adjudicate conclusions independently, and never inherit optimistic competitive claims (see `competitive-and-moat.md`). Adjudicate each strategic thesis with supporting and contradicting evidence and a verdict (see `red-team-and-scoring.md`).

## Phase 7 — Registers

Populate the Assumption Register (with the *origin* column — which analysis introduced each assumption) and the Open Questions Register. Rank OQs by decision impact; give each a validation method and time-to-answer.

## Phase 8 — Red team

Re-derive definition, denominator, price and largest exclusion from first principles without reference to the reconciled draft. Typical outcomes: an assumption gets promoted to Critical; a dependency (a partner contract, a data right, a regulatory constraint) gets elevated; a sensitivity gets flagged that no input analysis had. Record as DEC entries even if no headline moves.

## Phase 9 — Write

Run the twelve-point quality-control gate in `red-team-and-scoring.md` first; if any answer is no, the reconciliation is incomplete.

1. **Reconciliation report** (why we believe it) — inventory, claim ledger, evidence ledger, conflicts and adjudications, rebuilt numbers, red-team findings, what remains weak.
2. **Decision ledger** — every adjudication.
3. **Source of Truth** (what we believe) — per the schema; every claim with ID and status.
4. **Memo to the decision-maker** — under two pages: TL;DR with ranges · what was found (how many inputs, what they were) · the conflicts that mattered and how each was resolved · what the red team changed · what to do with it (what to lead with externally, what never to show, what to validate next and in what order) · where the analysis is still weak, stated plainly · deliverables list.

## Phase 10 — Hand off to MAINTAIN

Tag the result v1.0.0, set baseline status (usually NOT COMPLETE until OQs are answered), write the README, and snapshot everything to the archive. From here on the system is updated claim by claim, never rewritten.
