# Sizing methods

## 1. Market architecture first

Before any arithmetic, draw who pays whom for what. A one-screen diagram (buyers → the product → the surfaces/channels it connects to → downstream layers) settles most later disputes. Identify:

- **The core paid trigger** — what the buyer actually pays for. Free tiers, freemium funnels and "we'll monetize later" layers are not the core market.
- **Channels** — ways to reach or bill the same buyer (resellers, OEM, white-label, distributors). Usually $0 additive; they change CAC and coverage, not TAM.
- **Additive layers** — a different payer paying for a genuinely different thing (e.g., a platform paying for onboarding).
- **Conditional layers** — revenue that exists only if a contract or right exists (a take-rate only if a platform agrees to pay per order). Base case $0; show the high case separately.
- **Options** — layers that require density, data rights or a product that doesn't exist yet (data products, media networks, API fees). Sized for optionality; never in the near-term headline.

Publish two composite numbers and keep them apart:
- **Near-term overlap-adjusted headline** = core + additive (+ conditional high case only). *Lead with this.*
- **Full-stack theoretical ceiling** = near-term + options, with explicit overlap deductions where two options draw on the same wallet. *Never a headline.*

## 2. Denominators

Start from an authoritative universe (statistical agency establishment counts, licensing registries, regulator lists, association directories — in that order of preference) and narrow with **documented removals**, each an assumption with a source:

- Wrong size class (enterprise vs SMB; multi-unit vs single-unit — define the threshold and the unit: firm vs establishment vs location).
- Wrong type (online-only, nonstore, categories the product cannot serve).
- Already served by an incumbent channel (a wholesaler, platform or program that provides the capability free).
- Regulatory exclusions.

Produce low / base / high universes. Beware unit mismatches: firms ≠ establishments ≠ locations; employer counts exclude nonemployers; "millions of businesses" headlines usually include everything the product cannot serve.

## 3. Economic unit and price

Decide the unit the buyer is billed on (per location, per account, per seat, per order, per contract) and keep TAM on the *paying* unit — not "per connected customer including free." Anchor price on observed data, in order of strength:

1. The company's own list price and realized mix (A for what it says; note if n=0 payers).
2. Direct comparables' published prices, weighted by which tier the paid trigger lands in.
3. Revealed wallets — what the same buyer already pays for adjacent tools.
4. Analyst ARPU benchmarks (B/C).

Adjust for multi-unit dilution, discounting and mix explicitly, as assumptions. Produce low / base / high.

## 4. Bottom-up TAM

Show every variable in a table: `Variable | Value (low/base/high) | Evidence (SRC) | Confidence`. Then compute two levels:

- **Theoretical TAM** — every qualifying buyer.
- **Practical TAM** — after removing buyers who realistically would not use the solution: digitally native customers already served by modern stacks; those without standardized data/catalogs; segments with incompatible economics; insufficient volume; enterprises likely to build internally; customers on platforms with adequate native functionality. Each removal is an assumption with a reason.

`Qualifying buyers × annual price per paying unit`, with the range as `low universe × low price` to `high universe × high price` (state that the extremes are unlikely to co-occur). Document the formula on a model card.

## 5. Top-down cross-checks (run at least two)

Choose the pool that most closely represents where the company's revenue would actually come from — never an adjacent multi-billion-dollar market cited whole. Show the full reduction chain and explain every step:

`Pool spending/revenue × relevant segment share × geography × addressable share = implied TAM`

Candidate pools: category software spend, local commerce GMV, technology spend, marketplace/delivery revenue, media spend, trade spend, data/analytics spend, expensed-software statistics.

Then reconcile: `Method | TAM` for bottom-up and top-down with the difference in %. If they diverge materially, investigate — wrong definition, aggressive ARPU, overestimated count, category overlap, channel economics, or a pool that includes unrelated services. Do not average incompatible numbers; select the most defensible method and say why.

Methods:

- **Share of buyer revenue** — total revenue of the qualifying segment × plausible software-spend share for this category.
- **Adjacent-tool wallet** — count × what they already pay for the nearest comparable subscription × share.
- **Revealed spend** — a public company's revenue from the same buyer set (e.g., an advertising or SaaS vendor's disclosed revenue and paying-customer count) × addressable share.
- **Expensed software / category spend data** from statistical agencies, where available.

The bottom-up base should sit inside the cross-check band. If it doesn't, the definition is wrong somewhere — fix the definition, don't nudge the number.

## 6. SAM

Serviceable = buyers the company can actually reach and serve within the horizon (default 3 years) **and** who need more than they already get free. Use specific, testable filters, each an assumption:

- Coverage: which segments (by platform, geography, size) can be integrated/served within the horizon, with a share for each.
- Need-for-paid: the share within each segment for whom the free/incumbent alternative is insufficient.
- Regulatory or contractual exclusions.

Compute per segment (`universe × segment share × coverage × need-paid`), sum, then × base price (hold price at base to avoid compounding). Also state the **category-addressable** count if it differs — it is a different concept and gets a different ID.

Add a **beachhead sub-card** for the segments the GTM actually targets first.

## 7. SOM

Operational, not a percentage of SAM. Build a yearly funnel over the horizon:

`activated = signups × activation rate; new paid = activated × conversion; paid_t = paid_{t-1} × (1 − churn) + new paid + upgrades; ARR = paid × ARPU × 12`

Seed with real traction. Gate paid revenue on genuine dependencies (a signed partner, a data right, a launch date) and show the result if the gate fails. Low / base / high on signups, activation, conversion, churn.

## 8. Sensitivity — Bear / Base / Bull

Test at minimum: count, qualifying share and price for buyer-count markets; underlying volume, penetration and take/monetization rate for transaction, media and data markets. Build Bear / Base / Bull scenarios; the Bull case is never the headline. Model multiple revenue streams separately — never hide them inside a blended ARPU.

For each result, identify the 2–3 inputs that move it most, and by how much (e.g., "price low–high moves TAM from $X to $Y"). Any input that could change a *strategic decision* — not just the number — is a **Critical** assumption and usually spawns an Open Question with a validation method and a time to answer.

## 9. Overlap and double counting — the audit

Produce a **TAM overlap map**: for each pair of layers classify as independent · partially overlapping · dependent on another layer · a different monetization of the same customer network. Then report **gross opportunity** (sum of standalone TAMs) and **adjusted ecosystem TAM** (after removing inappropriate overlap). If a single adjusted number would mislead, say so and recommend not presenting one.

When two layers monetize the same wallet (e.g., data fees and advertising sold to the same buyer out of the same budget), deduct an explicit overlap share when summing. When one layer is a channel to the same buyer, additive = $0. Write the classification decision into the decision ledger — this is where most inflated TAMs come from.

## 10. Benchmark import rules

Do not import a ratio from a structurally different business (an advertising yield from companies that own an audience applied to businesses that own none; enterprise ACVs applied to SMBs; a large-company adoption rate applied to small ones). If a benchmark is the only anchor, apply it as the *high* case, mark it C/D, and derive the base from observed program values instead.

## 11. Model card template (one per sized calculation)

| Field | Content |
|---|---|
| ID | `TAM-<GEO>-<MARKET>-nn` |
| Market definition | Reference the MKT ID; one sentence stating exactly what is counted and excluded |
| Formula | Plain-language formula |
| Inputs | Each with value, range and its ASSUMP/SRC ID |
| Result | **Base** (low; high) |
| Sensitivity | The 2–3 inputs that matter and the range they induce |
| Cross-checks | Each method with its result and SRC IDs |
| Confidence / status | High/Medium/Low · VERIFIED/WORKING/HYPOTHESIS |
| Deprecated predecessors | Prior headlines this replaces, with why |
| Last validation | Date and context |
| Dependencies (recalculate on change) | Every card and section downstream |

End the model-card file with a **dependency map** (ASCII is fine) showing SRC → ASSUMP → TAM → SAM → SOM → composite headlines, so an update can be traced top-down.
