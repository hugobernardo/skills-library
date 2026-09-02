# I. TAM Model Cards

**SoT version:** v1.0.0 · Every sized calculation is a live model of individually traceable variables. When one input changes, recalculate every card listed under **Dependencies** — never the headline alone. Formulas are implemented in `model/canonical_model.py`; variable names match ASSUMP IDs.

---

## TAM-<GEO>-<MARKET>-01 — [name] (Core)

| Field | Value |
|---|---|
| Market definition | MKT-…: |
| Formula | **buyers × annual price per paying unit** |
| Inputs | … (SRC-…, ASSUMP-…) = **base** (range) |
| Result | **base** (low; high) |
| Sensitivity | |
| Cross-checks | |
| Confidence / status | Medium · WORKING |
| Deprecated predecessors | |
| Last validation | [date] |
| Dependencies (recalculate on change) | SAM-… · SOM-… · TAM-…-NEARTERM-01 · A §3 |

## SAM-… / SOM-… / layer cards follow the same table.

---

## Dependency map (read top-down; a change propagates to every node below)

```
SRC-… ─► ASSUMP-… ─┐
SRC-… ─► ASSUMP-… ─┼─► TAM-… ─► TAM-…-NEARTERM-01 ─► TAM-…-FULLSTACK-01
ASSUMP-PRICE-01 ───┘ ├─► SAM-… ─► beachhead SAM
                     └─► SOM-…
```
