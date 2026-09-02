# Evidence grading, freshness, and status labels

## Source hierarchy (where to look, in order)

- **Tier 1 — Primary / authoritative**: statistical agencies (Census, BLS, BEA, StatCan and equivalents), regulators, SEC and other filings, investor reports, official platform/marketplace documentation and APIs, trade associations, publicly reported transaction or revenue data.
- **Tier 2 — High-quality industry research**: Bain, McKinsey, BCG, Deloitte, PwC, EMARKETER, Forrester, Gartner, IDC, PitchBook, CB Insights, reputable vertical research firms — only where methodology is visible.
- **Tier 3 — Company and ecosystem evidence**: competitor sites, pricing pages, case studies, partner and customer announcements, job postings, API and product documentation, executive interviews.
- **Tier 4 — Secondary**: reputable press, analyst commentary, industry publications.

Avoid SEO articles, market-size aggregation sites, unsourced statistics and AI-generated summaries. Trace every secondary statistic back to its original source; the grade attaches to the original.

## Per-statistic record

For every major statistic capture: statistic · value · year · geography · definition · source · URL · grade · caveats. This is what fills a Source Ledger row; capture it at research time, not at write-up.

## Source grades

| Grade | Meaning | Typical examples | How it may be used |
|---|---|---|---|
| **A** | Primary or authoritative; methodology public; reproducible | Census / statistical agencies, regulators, SEC filings, official product documentation, vendor pricing pages (for price), the company's own data (for what the company says) | Load-bearing inputs to VERIFIED claims |
| **B** | Strong secondary; named methodology; reputable analyst or survey | Analyst forecasts with published method (EMARKETER, IAB), large-sample surveys, peer-reviewed or institutional studies | Load-bearing for WORKING; supporting for VERIFIED |
| **C** | Directional; company-reported without method; trade press; association estimates | "4,000+ customers" on a homepage, association counts with no methodology, single-case benchmarks, consultancy decks | Cross-checks and bounds; never the sole support for a headline |
| **D** | Weak; untraced; self-interested; SEO aggregators; stale beyond relevance | Deck statistics with no source, "$4B market" from a content farm, a company's traction in one geography used as evidence about another | Record, mark "do not cite", never load-bearing |

Split grades are normal and should be explicit: `A (price) / C (traction)`, `A (data) / D (generalization)`, `A (company) / D (as market evidence)`. The grade attaches to the *use*, not just the publisher.

Re-verified on the primary page during this work: append `[V]` with the date. Otherwise record the access date of whichever report you inherited the citation from.

## Freshness classes

| Class | Meaning | Effect |
|---|---|---|
| **Current** | Appropriate now; no newer release exists | None |
| **Aging** | A newer release exists or is imminent; or the source is >2 years old for a fast-moving metric | Add to the freshness watch list; refresh at next version |
| **Stale** | No longer primary support | Downgrade dependent claims one status level until revalidated |

A source going Stale does not make a conclusion wrong; it lowers confidence until revalidated. Every ledger keeps a **freshness watch list**: source → trigger (e.g., "FY2025 filing available") → action (e.g., "refresh cross-check C; patch version").

## Source Ledger row (columns)

`ID · Source (what it says, with the specific figures used) · Publisher / type · Published · Period measured · Accessed · Refresh cadence · Freshness · Grade · Supports (IDs) · Caveats`

The "Source" cell should contain the specific numbers extracted, so a reader never has to reopen the document to know what was used.

## Status labels (governance)

Every material canonical claim carries exactly one:

| Status | Requirement | Allowed use |
|---|---|---|
| **VERIFIED** | A/B evidence on load-bearing inputs; definition unambiguous; calculation reproducible | Investor, board, external communications |
| **WORKING** | Best available estimate; depends on material assumptions | Internal planning with caveats; externally only as an explicit caveated range |
| **HYPOTHESIS** | Plausible; insufficiently validated | Internal only; never presented externally as established |
| **DEPRECATED — [date]** | Previously canonical; superseded by stronger evidence or a revised definition | Never cited; stays visible in the archive |

Transitions in either direction require a decision-ledger entry and a changelog line. Confidence (High / Medium / Low) is recorded alongside status and answers a different question: status is *how it may be used*, confidence is *how sure we are of the value*.

## Labeling sentences

Within narrative text, label the kind of statement: **fact** (sourced), **calculation** (from the model), **assumption** (register ID), **inference** (analyst judgment). Company announcements are "announced capability" until deployment is observed; then "observed."

## External-use checklist

Before any market claim goes into investor, board or public material, confirm all six:

1. **Status** is VERIFIED, or WORKING presented as an explicit range. HYPOTHESIS never.
2. **Source quality** is A/B for the load-bearing inputs.
3. **Definition** — the number means exactly what the slide says it means.
4. **Recency** — load-bearing sources are Current, not Aging or Stale.
5. **Reproducibility** — another analyst can recreate it from the model cards.
6. **Caveat** — the material limitation is understood internally (the "what would change our mind" line).

Maintain a "Claims cleared for external use" table in the Source of Truth: claim · exact wording to use · status · load-bearing source IDs · and an explicit **Not cleared** row listing what must not be quoted.
