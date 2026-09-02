# Knowledge-system schema

The Source of Truth is a versioned system of related files, not a document. It answers four questions at any moment: *what do we currently believe, why, how confident are we, and what evidence would change our mind.* Each file has one job and one edit discipline, so updates are surgical and history survives.

## Artifact map

| Artifact | File | Holds | Edit discipline |
|---|---|---|---|
| README | `00_README.md` | Artifact map, ID system, status system, versioning rules, baseline state, external-use checklist, red-team cadence | Update baseline state and version in place |
| **A** Source of Truth | `A_Source_of_Truth.md` | Current canonical view: executive thesis, market architecture, canonical TAM table, TAM explanations, market summaries, competitive truth, right-to-win, strategic conclusions, critical assumptions, open questions (top 10), source index, claims cleared for external use | Replace only the affected section; bump version |
| **B** Decision Ledger | `B_Decision_Ledger.md` | Why every material conclusion was adopted or changed | Append-only; never edit a past entry, supersede it |
| **C** Assumption Register | `C_Assumption_Register.md` | Every material assumption with value, origin, evidence, confidence, calculations affected, sensitivity, last reviewed | Update in place; when an assumption becomes observed fact, change status and log a DEC |
| **D** Open Questions Register | `D_Open_Questions_Register.md` | Unresolved questions with lifecycle status, validation method, time to answer, decision impact | Never delete; answered questions keep answer and evidence |
| **E** Source Ledger | `E_Source_Ledger.md` | All evidence with grade, dates, refresh cadence, freshness, IDs supported, caveats; freshness watch list | Append new sources; re-class freshness on review |
| **F** Research Archive | `F_Research_Archive/` | Original research, superseded estimates, prior models, prior SoT versions (`versions/`) | Append-only |
| **G** Competitor Profiles | `G_Competitor_Profiles.md` | Per-competitor: observed / announced / inferred capability, pricing, footprint, threat classification | Update in place with dates |
| **H** Strategic Theses | `H_Strategic_Theses.md` | Core beliefs with status (Proven / Plausible but Unproven / Falsified), supporting and contradicting evidence, what would falsify | Update in place with DEC reference |
| **I** TAM Model Cards | `I_TAM_Model_Cards.md` | One card per sized calculation + dependency map | Recalculate every dependent card when any input changes |
| CHANGELOG | `CHANGELOG.md` | One line per change: `Date · ID · Change · Previous · New · Reason` | Append-only |
| Model | `model/canonical_model.py` (+ results JSON) | The one editable calculation; variables named by ASSUMP ID | Change here first, then propagate |

For small markets or early-stage work, G and H can be sections inside A rather than separate files. Do not drop B, C, D, E or I — they are what makes the system maintainable.

## Canonical ID system

IDs are **persistent**. A value changing never creates a new ID; a new ID is created only for a new component. If the work inherits earlier identifiers (a consultant's claim numbers, a prior pass's D01–D34), keep them as aliases in an "Alias" column so archived documents stay traceable.

| Prefix | Component | Pattern | Example |
|---|---|---|---|
| `MKT-` | Market conclusion | `MKT-<GEO>-<MARKET>-nn` | `MKT-US-SMB-01` |
| `TAM-` / `SAM-` / `SOM-` | Sized calculation | `TAM-<GEO>-<MARKET>-nn` | `TAM-US-SMB-01` |
| `COMP-` | Competitor | `COMP-<NAME>-nn` | `COMP-ACME-01` |
| `THESIS-` | Strategic thesis | `THESIS-<TOPIC>-nn` | `THESIS-MOAT-01` |
| `ASSUMP-` | Assumption | `ASSUMP-<TOPIC>-nn` | `ASSUMP-PRICE-01` |
| `OQ-` | Open question | `OQ-<TOPIC>-nn` | `OQ-DATA-01` |
| `DEC-` | Decision | `DEC-<TOPIC>-nn` | `DEC-TAM-01` |
| `SRC-` | Source | `SRC-<PUBLISHER>-nn` | `SRC-CENSUS-01` |

Model variable names equal ASSUMP IDs (e.g., `ASSUMP_PRICE_01`), so a register row and a model input are literally the same thing.

## Decision Ledger entry — nine fields

`DEC ID · Date · Claim affected (IDs) · Previous conclusion · New evidence (SRC IDs) · New conclusion · Reason · Strategic impact · Confidence`

Also record "re-derived, retained" decisions from red-team exercises — a decision to keep a number is still a decision.

For reconciliation-phase adjudications the same entry can be written as `DEC ID · Question · A says · B says · Final decision · Reason · Confidence` — but keep the nine-field form once in MAINTAIN mode.

## Strategic Thesis row

`THESIS ID · Current wording · Supporting evidence (SRC) · Contradicting evidence (SRC) · Verdict (Strongly Supported / Supported / Plausible but Unproven / Weak / Contradicted) · Confidence · Last reviewed · What would falsify it`

## Assumption Register row

`ASSUMP ID · Alias · Assumption · Value (low / base / high) · Origin (who introduced it, which analysis) · Evidence (SRC IDs) · Confidence · Calculations affected (TAM/SAM/SOM IDs) · Sensitivity (how much the result moves) · Criticality (Critical / Material / Minor) · Status (Assumption / Observed fact) · Last reviewed`

Only **Critical** assumptions are surfaced in A §Critical Assumptions, with an "If wrong" column stating the consequence in strategic terms, not just percentages.

## Open Question row

`OQ ID · Alias · Question · Why it matters (which IDs it decides) · Validation method · Time to answer · Owner · Status (OPEN → RESEARCHING → ANSWERED / CLOSED — INCONCLUSIVE / CLOSED — NO LONGER MATERIAL) · Answer + SRC · Date`

Rank by decision impact. A **baseline** is declared complete only when no OQ is OPEN or RESEARCHING — and the README says explicitly not to keep expanding the initial research because more could theoretically be collected.

## Versioning (semantic)

| Level | When | Example |
|---|---|---|
| **Major** `v1 → v2` | Market architecture changes; a monetization layer is added or removed; a strategic thesis is invalidated; a fundamentally different market is entered | New vertical adopted; an option removed |
| **Minor** `v1.0 → v1.1` | TAM/SAM/SOM materially changes (>20% on a headline); competitive landscape materially changes; a significant assumption is validated; market priority changes | Integration list published → SAM re-based |
| **Patch** `v1.0.0 → v1.0.1` | Source refresh; minor statistical revision; wording; corrections that do not change strategy | Annual data release with <5% movement |

Every published version is snapshotted to `F_Research_Archive/versions/`.

## Update process (MAINTAIN mode) — eight steps

1. **Intake** — ledger row with SRC ID, grade, dates, cadence. Not material and not useful → stop.
2. **Identify affected IDs** — follow the dependency map in I.
3. **Classify impact** — CONFIRMS · REFINES · CONTRADICTS · INVALIDATES · NEW.
4. **Test materiality** — changes a decision, headline (>20%), status, external claim, or Critical assumption? No → ledger entry, optional changelog line, done.
5. **Handle conflict without recency bias** — compare quality, methodology, definition, geography, period, sample, relevance, and whether the market itself changed. Retain / refine / replace / reopen (reopen = downgrade status + open an OQ).
6. **Apply** — (a) mark the previous conclusion `DEPRECATED — [date]` in place; (b) DEC entry, nine fields; (c) change the model variable, rerun, update every dependent number in A and I; (d) update statuses; (e) update C, D, G/H; (f) changelog line; (g) bump version and snapshot.
7. **Report** — `## Evidence received` · `## Claims affected` · `## Analysis` · `## Changes required` · `## Calculation impact` · `## Decision Ledger updates` · `## New Open Questions` · `## Updated Source-of-Truth excerpt`. Replacement text for affected sections only.
8. **Open-question closure** — record the answer with SRC, update ASSUMP rows and conclusions, add DEC entries, set status, keep the row. Declare BASELINE COMPLETE when the last OQ leaves OPEN/RESEARCHING.

## Update triggers

New authoritative data · new primary evidence (interviews, pricing tests, pilot data, partner data) · material company learning (conversion, churn, realized ARPU) · competitive change (launches, acquisitions, pricing, exits) · platform or regulatory change · strategic change (new segment, geography, monetization). Anecdote and immaterial news go to the Source Ledger at most.

## Periodic red team

Quarterly, or on any Minor version: re-derive from first principles, without reference to the current conclusion, the market definition, price, qualifying buyer count, SAM exclusions, competitive threats, platform dependency, moat, data or regulatory rights, distribution scalability and growth. Record a DEC entry even when nothing changes. The purpose is to catch institutional anchoring.
