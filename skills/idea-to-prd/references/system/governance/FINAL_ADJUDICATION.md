# Final PM Adjudication — Investment and Build Baseline

Act as Lead PM using [AGENTS.md](../AGENTS.md) and [PM.md](../roles/PM.md). Judge future investment, not whether prior work deserves defending. Input: integrated current PRD, UX, Technical Design, evidence/plan, registers, accepted compromises, exact versions reviewed, and complete independent Red Team report.

## 1. Reassess independently

Before responding to individual Red Team comments, reconsider from first principles: Is the problem compelling? Is the user correct? Is behavior change realistic? Is value sufficient? Is the scope ladder coherent? Does the selected build target fit the business objective, or are we reflexively minimizing or overbuilding? Is technical and operating cost proportionate? Are dependencies acceptable? Do metrics reveal value? Is validation proportionate to the authorized investment and affected stakeholders?

Record a preliminary PM view: `BUILD`, `BUILD WITH CHANGES`, `VALIDATE FIRST`, or `DO NOT BUILD`, with reasons. This is a bias check, not authorization.

## 2. Adjudicate and zero-base scope

Apply the OS adjudication table to every requested change; address all critical/high findings individually even when they lack a change request. A rejected blocking objection requires substantive evidence or reasoning, an explicit accepted risk where permissible, and named authorization. Do not erase the Red Team's dissent. Low-impact findings may share rationale only if every ID retains an explicit disposition.

Starting from no existing feature list, reconstruct the additive ladder: credible MVP, production-grade P0, P1, P2, and complete v1-prod. Compare it with the current ladder using `KEEP`, `SIMPLIFY`, `MANUALIZE`, `VALIDATE BEFORE BUILD`, `MOVE LEVEL`, `REMOVE`, and `MISSING`. Then recommend whether to keep, raise, or lower the selected build target based on the business objective and authorized investment. Explain indispensable controls as well as user-facing value. The selected level, not automatically the smallest one, becomes the freeze candidate.

## 3. Resolve consequential uncertainty

Review every existential-impact, high-impact, or low-confidence assumption against the recorded validation posture and authorized investment boundary. For each choose:

- `VALIDATE BEFORE BUILD`: blocks named implementation until evidence meets the decision rule.
- `VALIDATE DURING PILOT`: uncertainty is bounded and a credible pilot can resolve it within the allowed investment.
- `ACCEPT RISK`: record rationale, evidence limits, owner, mitigation, stop/revisit boundary, and authorizer. This does not convert uncertainty into fact.
- `INVALIDATES PROJECT`: evidence defeats the current premise; route to redefinition or NO-GO.

Do not waive an untested existential premise when the authorized investment still depends on it. For every pre-build validation, commission or refine a plan proportionate to the business objective, selected target, and affected stakeholders, with hypothesis, credible method, evidence source or target/sample, evidence required, pass/fail/inconclusive rules, and consequence of failure. Apply the Validation role method; a plan without results does not clear a pre-build condition. For a sole-user personal product, owner-fit evidence may be sufficient for user/problem fit; do not manufacture external-customer requirements.

Material accepted changes must return to the affected UX/Technical reviews and, where the investment case changes, a focused Red Team re-review. Record the return gate and re-entry evidence. Do not freeze a bundle whose design still describes rejected or stale behavior.

## 4. Set outcome and stop criteria

Specify primary customer outcome, leading indicators, activation, retention/repeat value where relevant, and guardrails. Define denominator/cohort, observation window, source, owner, threshold, and rationale. Avoid activity metrics that can rise without value.

Define evidence that would cause stop, pivot, lower investment, a different user, or a different solution. Consider adoption, activation, retention, acquisition economics/willingness to pay, AI quality, integration reliability, and operating burden as applicable. Do not invent arbitrary numbers; if calibration is needed, name its method and decision deadline. Required pre-build thresholds must be established before that gate can clear.

## 5. Decide, then define allowed work

Choose exactly one final PM verdict:

| Verdict | Requirement and consequence |
|---|---|
| GO | All build-blocking questions resolved, required evidence sufficient, critical findings adjudicated, accepted artifacts aligned. Recommend implementation of the approved scope. |
| CONDITIONAL GO | Only explicitly listed, bounded work may proceed. Every open condition has an owner, deadline/trigger, closure proof, and a stop boundary. No allowed work depends on an unresolved blocker. |
| VALIDATE FIRST | Perform named learning work; withhold meaningful implementation of the uncertain proposal. |
| NO-GO | Stop the product in its current form; record rationale and any evidence that would warrant reconsideration. |

Record PM recommendation, human/delegated authorization status, and permitted work separately. Honor authorization already granted; do not request it again. Readiness alone does not authorize spending, launch, or actions outside the user's delegation. Gate outcome is `PASS` for GO or valid bounded CONDITIONAL GO, `VALIDATE` for VALIDATE FIRST, and `STOP` for NO-GO; use `DEFER` for an explicit postponement while the verdict remains NOT DECIDED. If product/design rework remains, record `REWORK` as gate outcome, retain or reset the verdict to NOT DECIDED, and hold affected implementation; do not mislabel incomplete definition as GO. Validation/rework can repeat without forcing a release version.

## 6. Freeze and verify the build package

Only after GO or valid bounded CONDITIONAL GO, establish the first approved build baseline. The PRD document version may become v1.0 even when the selected product scope is credible MVP, P0, P1, P2, or complete v1-prod; document version and product scope level are different concepts. For VALIDATE FIRST or NO-GO retain the current draft version, recorded verdict, and unfrozen scope. A mature draft does not earn v1.0 by ceremony.

Inside the PRD, create the authoritative **SELECTED-TARGET SCOPE FREEZE**: the complete scope ladder; chosen build target; all cumulative requirements included through that level; higher levels not currently authorized; `NOT IN V1-PROD`; manual work; and parallel validation. Conditional approval also lists permitted and prohibited work. Do not create a separate competing freeze document.

At the PRD top record product status, document version, selected scope target, verdict, authorization, freeze status, validation posture, critical pre-build validations, blocking questions, allowed work, and exact baseline artifact versions. Use the PM PRD structure for complete behavior and testable acceptance criteria through the selected target. Link full assumptions, questions, decisions, validation, evidence, and debt detail.

Verify the integrated package: PRD, Current Product, Decision Log, Open Questions, Assumption Register, UX Spec, Technical Design, Validation Plan/Evidence, Red Team report, final gate record, and memory. Required artifacts must exist; any N/A decision needs a reason. Confirm accepted behavior and version compatibility, outstanding action closure, outcome/kill criteria, and a named receiving delivery owner. Preserve independent authorship and source evidence.

## 7. Reopening and learning

After freeze, material changes require evidence or a material constraint: customer findings, failed assumption, technical discovery, security/compliance need, changed dependency, observed product failure, or strategy change. Changes to the scope ladder, selected target, core workflow, primary user, hypothesis, architecture-critical behavior, validation posture, or success metrics require a D-ID, PRD increment, impact review, and affected specialist gates. Normal implementation clarification gets a patch when behavior is unchanged.

Hand off to delivery planning, vertical-slice implementation, QA/UX acceptance, and pilot with named owners. Capture expected versus observed outcomes and route learning through PM/Validation. Preserve the option to iterate, scale, pivot, or stop.

Return the decision and rationale first, then adjudication, scope delta, conditions and permitted work, baseline manifest or outstanding rework, updated memory, and one next best action. Apply the OS persistence rules before declaring completion.
