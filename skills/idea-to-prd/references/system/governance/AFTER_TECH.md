# PM Gate — After Technical Architecture

Act as Lead PM using [AGENTS.md](../AGENTS.md) and [PM.md](../roles/PM.md). Do not accept architecture automatically or remove user value merely because it is inconvenient to engineer. Equally, do not retain sophistication whose cost overwhelms its value.

Use **User Value × Business Value ÷ Complexity** as a qualitative tradeoff lens, not a fabricated numerical score.

## Inputs and entry check

Read the H-ID, technical design and return, exact PRD/UX versions reviewed, requested changes, evidence, and relevant registers. Verify baseline compatibility. A feasibility assessment does not establish demand or authorize a build.

## Review

1. **Extract material findings.** Separate feasibility, complexity drivers, reliability, dependency/vendor risk, data ownership/synchronization/quality/freshness, security/privacy, AI quality/latency/cost/evaluation, and premature engineering.
2. **Compare value and cost.** For significant capabilities through the selected build target use `REQ ID | Scope level | User/business value | Engineering and operating complexity | Risk | Simpler alternative | Treatment`. Treatment is `KEEP`, `SIMPLIFY`, `MANUALIZE`, `BUY`, `MOVE LEVEL`, `DEFER`, or `REMOVE`. Seek modest reductions in sophistication that yield large savings, but do not assume the credible MVP is the correct destination. Require a defensible estimate before quoting a percentage.
3. **Adjudicate every requested change.** Use the OS dispositions and decision table. Treatment is the resulting scope/implementation approach, not a substitute for `ACCEPT` or another disposition. Evaluate how cost changes the economics while protecting the hypothesis and actual user outcome.
4. **Review build/buy/manual.** Examine differentiation, commodity options, integration effort, vendor pricing/dependency, data/control needs, migration, and ownership. A manual pilot needs an operator, volume/capacity assumption, unit effort/cost, quality controls, and a revisit trigger.
5. **Reassess the ladder and target.** Classify affected work as credible MVP, P0, P1, P2, complete v1-prod, or not in v1-prod; then recommend keeping, raising, or lowering the selected build target. Essential authentication, data validation, recovery, observability, accessibility, and security may distinguish production-grade P0 from the credible MVP. Require a specific need rather than generic infrastructure ambition.
6. **Record accepted compromises.** For each debt item state choice, reason, risk, mitigation, owner, and trigger such as usage, reliability, cost, operational burden, or customer requirement. “Fix later” is insufficient. Link the D-ID to detailed Technical or UX documentation.
7. **Assess readiness without inventing certainty.** Use the OS readiness values and list blockers, owners, methods, and work they block. This assessment remains provisional until Final Adjudication. `READY WITH OPEN ITEMS` is not blanket permission to build.

## Reconcile and route

Follow the OS persistence sequence. The first technical pass often creates PRD v0.3; later loops use the next actual version. Summarize accepted changes affecting scope, user/system behavior, business rules, dependencies, reliability, data, security, or AI. Keep architecture detail in the Technical Design Brief.

For every accepted change, assess UX impact explicitly. Changes to workflow, timing, permissions, trust, feedback, or recovery require a focused UX mini-review. Route it through After UX, then return here to confirm technical compatibility. If no UX re-review is needed, record why. Changed user/problem/hypothesis returns to discovery; uncertain data/API/AI capability returns to Validation. Preserve versions and mark affected downstream reviews stale.

Choose gate outcome `PASS`, `REWORK`, `VALIDATE`, `DEFER`, or `STOP`, with rationale and re-entry criteria. PASS requires adjudication and aligned artifacts with no unresolved blocker to the intended Red Team review. Limited Red Team input may be sought earlier, but cannot masquerade as final review of a settled proposal.

## Red Team handoff and output

On PASS, provide exact versions of current product, PRD, UX, Technical Design, evidence/validation plan, and relevant D/Q/A entries. Highlight the scope ladder, selected build target, accepted UX/technical compromises, manual costs, low-confidence/high-impact assumptions, and unresolved items. Separate known, believed, and unknown.

Ask Red Team to challenge problem importance, behavior change, the scope ladder and selected target, simpler alternatives, technical proportionality, external dependencies, meaningful metrics, fatal assumptions, proportionate pre-build tests, and whether to build at all. Tailor emphasis to this product.

Return synthesis, value/cost treatments, adjudication, revised artifacts, provisional readiness, routing, updated memory, and justified next handoff. Check both failure modes: sophistication ahead of need, and lost product value for engineering convenience.
