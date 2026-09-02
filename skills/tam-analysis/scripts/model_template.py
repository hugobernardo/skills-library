"""
canonical_model.py — starting point for the one editable market model.

Rules:
- Every input is a variable named by its ASSUMP ID (ASSUMP_PRICE_01) or SRC ID (SRC_CENSUS_02),
  with low/base/high, so a register row and a model input are the same thing.
- Change inputs here, rerun, and copy results into I_TAM_Model_Cards.md and A_Source_of_Truth.md.
  Never edit a number in the markdown by hand.
- Ranges: low = all low inputs, high = all high inputs (state that extremes rarely co-occur).
- Keep SAM price at base to avoid compounding optimism.

Run: python canonical_model.py  ->  prints a summary and writes canonical_results.json
"""
import json

# ---------- Inputs (low, base, high) ----------
# Universe (SRC-…): authoritative establishment/buyer count before removals
SRC_UNIVERSE_01 = dict(low=0, base=0, high=0, note="")
# Removals, as share retained (ASSUMP-UNIVERSE-01, ASSUMP-CATEGORY-01 …)
ASSUMP_UNIVERSE_01 = dict(low=1.00, base=1.00, high=1.00, note="size/type filter, share retained")
ASSUMP_CATEGORY_01 = dict(low=0, base=0, high=0, note="absolute category removals")

# Price per paying unit per month (ASSUMP-PRICE-01), dilution factor (ASSUMP-PRICE-02)
ASSUMP_PRICE_01 = dict(low=0.0, base=0.0, high=0.0, note="monthly, per paying unit")
ASSUMP_PRICE_02 = dict(low=1.0, base=1.0, high=1.0, note="units per account; divides price")

# Geographic extension multiplier (ASSUMP-GEO-01), e.g. Canada = 0.10
ASSUMP_GEO_01 = dict(low=0.0, base=0.0, high=0.0)

# SAM segments: share of universe, coverage within horizon, need-for-paid share
SAM_SEGMENTS = {
    "segment_a": dict(share=(0.0, 0.0, 0.0), coverage=(0.0, 0.0, 0.0), need_paid=(0.0, 0.0, 0.0)),
}

# SOM funnel per year (ASSUMP-SIGNUPS-01 …)
SOM_YEARS = [2027, 2028, 2029, 2030, 2031]
ASSUMP_SIGNUPS_01 = dict(low=[0]*5, base=[0]*5, high=[0]*5)
ASSUMP_ACTIVATION_01 = dict(low=0.0, base=0.0, high=0.0)
ASSUMP_CONVERSION_01 = dict(low=0.0, base=0.0, high=0.0)
ASSUMP_CHURN_01 = dict(low=0.0, base=0.0, high=0.0, note="annual paid logo churn")
ASSUMP_UPGRADE_01 = dict(low=0.0, base=0.0, high=0.0, note="annual free->paid upgrade rate")
SEED_FREE = 0
SEED_PAID = 0

# Overlap between option layers when summed (DEC-OVERLAP-…)
OVERLAP_SHARE = 0.0


def pick(d, case):
    return d[case]


def universe(case):
    return SRC_UNIVERSE_01[case] * ASSUMP_UNIVERSE_01[case] - ASSUMP_CATEGORY_01[case]


def annual_price(case):
    return ASSUMP_PRICE_01[case] / ASSUMP_PRICE_02[case] * 12


def tam_core(case):
    return universe(case) * annual_price(case)


def tam_geo(case):
    return tam_core(case) * (1 + ASSUMP_GEO_01[case])


def sam_units(case):
    i = {"low": 0, "base": 1, "high": 2}[case]
    u = universe("base")
    return sum(u * s["share"][i] * s["coverage"][i] * s["need_paid"][i] for s in SAM_SEGMENTS.values())


def sam_value(case):
    return sam_units(case) * annual_price("base")


def som(case):
    free, paid, out = SEED_FREE, SEED_PAID, []
    arpu = annual_price(case)
    for y, signups in zip(SOM_YEARS, ASSUMP_SIGNUPS_01[case]):
        activated = signups * ASSUMP_ACTIVATION_01[case]
        new_paid = activated * ASSUMP_CONVERSION_01[case]
        upgrades = free * ASSUMP_UPGRADE_01[case]
        paid = paid * (1 - ASSUMP_CHURN_01[case]) + new_paid + upgrades
        free = free + activated - new_paid - upgrades
        out.append(dict(year=y, connected=round(free + paid), paid=round(paid), arr=round(paid * arpu)))
    return out


def run():
    res = {}
    for c in ("low", "base", "high"):
        res[c] = dict(
            universe=round(universe(c)),
            annual_price=round(annual_price(c)),
            tam_core=round(tam_core(c)),
            tam_geo=round(tam_geo(c)),
            sam_units=round(sam_units(c)),
            sam_value=round(sam_value(c)),
            som=som(c),
        )
    with open("canonical_results.json", "w") as f:
        json.dump(res, f, indent=2)
    for c in ("low", "base", "high"):
        r = res[c]
        print(f"{c:5} universe={r['universe']:,} price={r['annual_price']:,} "
              f"TAM={r['tam_core']:,} TAM+geo={r['tam_geo']:,} SAM={r['sam_units']:,} units / {r['sam_value']:,}")
    return res


if __name__ == "__main__":
    run()
