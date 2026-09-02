# [Company] Market Intelligence — Knowledge System (README)

**Mode:** Source-of-Truth Maintenance · **Current version:** SoT v1.0.0 · **Baseline date:** [date] · **Owner:** [name]

This folder is a **versioned knowledge system**, not a report. It answers: *what does [Company] currently believe, why, how confident are we, and what evidence would change our mind.* Nothing is rewritten from scratch; it is updated claim by claim.

## 1. Artifacts
A Source of Truth · B Decision Ledger · C Assumption Register · D Open Questions · E Source Ledger · F Research Archive · (G Competitors · H Theses) · I Model Cards · CHANGELOG · `model/canonical_model.py`

## 2. Canonical IDs
MKT / TAM / SAM / SOM / COMP / THESIS / ASSUMP / OQ / DEC / SRC — persistent; values change, IDs do not. Aliases retained for inherited identifiers.

## 3. Status system
VERIFIED (external use) · WORKING (internal; external only as caveated range) · HYPOTHESIS (internal only) · DEPRECATED — [date] (never cited). Transitions require a DEC entry and a CHANGELOG line. Never upgraded because a number is useful.

## 4. Update triggers and process
See the eight-step process (intake → affected IDs → classify → materiality → conflict handling → apply → report → OQ closure).

## 5. Versioning
Major (architecture / thesis change) · Minor (headline >20%, landscape, assumption validated) · Patch (refresh, wording). Snapshot every version to `F_Research_Archive/versions/`.

## 6. Baseline state
**Status: BASELINE NOT YET COMPLETE.** [n] OQs OPEN, [n] RESEARCHING. Markets covered: … Outstanding hypotheses: … Confidence assessment: … Declaration rule: when the last OQ leaves OPEN/RESEARCHING, record BASELINE COMPLETE here with the date; do not keep expanding the initial research because more could theoretically be collected.

## 7. External-use control
Six-point check: status · source quality · definition · recency · reproducibility · caveat. Cleared claims listed in A §12.

## 8. Red-team cadence
Quarterly or on any Minor version. Next scheduled: [date].
