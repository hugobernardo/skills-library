# [Company] Market Intelligence — Source of Truth

**Version v1.0.0 · Baseline date [date] · Baseline status: NOT COMPLETE ([n] open questions) · Geography: [scope] · Currency: [year] [currency], annual net revenue to [Company]**

| Artifact | A — Source of Truth (canonical view) |
|---|---|
| Why we believe it | `B_Decision_Ledger.md` |
| What it depends on | `C_Assumption_Register.md` · `I_TAM_Model_Cards.md` · `model/canonical_model.py` |
| What we do not know | `D_Open_Questions_Register.md` |
| Evidence | `E_Source_Ledger.md` |
| History | `F_Research_Archive/` · `CHANGELOG.md` |

This document records **what [Company] currently believes** for decision-making. It does not argue. Every material claim carries a canonical ID, a status (VERIFIED / WORKING / HYPOTHESIS / DEPRECATED), and a note on what evidence would change it. Never edit a number here by hand; change the model, recalculate dependents, log the decision, then replace the affected section.

---

## 1. Executive Market Thesis
*What market · why the market exists · where [Company] sits · where value can be captured (with ranges and statuses) · strongest supporting evidence · biggest unresolved risk.*

## 2. Market Architecture
*Value-chain diagram: buyers → product → surfaces/channels → downstream layers. Then: Core current market / Near-term expansion / Long-term optionality, each with its layer classification.*

## 3. Canonical TAM Table

| ID | Market | TAM | SAM | [horizon] SOM | Confidence | Status |
|---|---|--:|--:|--:|---|---|
| MKT-… · TAM-… / SAM-… / SOM-… | **Core** | **base** (range) | base (range; count) | count / ARR (range) | | Core — WORKING |
| … | Channel | standalone; **$0 additive** | | | | |
| … | Additive / Conditional / Option | | | | | HYPOTHESIS |
| TAM-…-NEARTERM-01 | **Near-term overlap-adjusted (lead with this)** | | | | | |
| TAM-…-FULLSTACK-01 | Full-stack theoretical ceiling — never a headline | | | | | |
| DEC-… | Deprecated headline figures | | | | | **DEPRECATED** |

## 4. TAM Explanation
*Per sized calculation: Canonical definition · Economic unit · Bottom-up calculation · Top-down cross-checks · Defensible conclusion (range, status) · Largest sensitivity.*

## 5. Market Summaries
*Per market: What it is · How it works · Who matters · [Company]'s role · Why the market is attractive · Why the thesis could fail.*

## 6. Competitive Truth
*Direct competitors · Important substitutes (including "do nothing") · Platform threats · Where [Company] is stronger · Where weaker · What must become true for a durable advantage. Profiles in G.*

## 7. Right-to-Win
*Proven today · Emerging · Aspirational.*

## 8. Key Strategic Conclusions
*Numbered; each with [IDs], the claim with range, (STATUS), and "Changes on: OQ-…".*

## 9. Critical Assumptions

| ID | Assumption | Value | Confidence | If wrong |
|---|---|---:|---|---|

## 10. Open Questions
*Top 10 ranked by decision impact, each with time-to-answer and what it decides. Full register in D.*

## 11. Source Index

| Canonical claim | SRC IDs | Grade |
|---|---|---|

## 12. Claims cleared for external use (v1.0.0)

| Claim | Wording to use | Status | Load-bearing SRC |
|---|---|---|---|
| **Not cleared** | … | HYPOTHESIS / DEPRECATED | — |

**Change control.** Semantic versioning. A change to any canonical number requires: model variable changed → every dependent card recalculated → DEC entry → CHANGELOG line → status re-assessed → prior version snapshotted. Superseded numbers are marked `DEPRECATED — [date]` and kept.
