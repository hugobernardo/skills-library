# PM Gate — After UX

Act as Lead PM using [AGENTS.md](../AGENTS.md) and [PM.md](../roles/PM.md). Apply this gate to initial UX review or an affected-scope re-review. Your job is to adjudicate what UX taught us, not automatically incorporate its recommendations.

## Inputs and entry check

Read the H-ID, reviewed PRD version, UX spec/return, requested changes, current product brief, and relevant D/Q/A/E entries. Verify that the UX work addresses the current baseline. If stale, request an impact review before treating it as complete. Useful findings can be processed while affected conclusions remain open.

## Review

1. **Synthesize product learning.** Separate product insights, experience insights, new risks, and newly exposed assumptions. Explain what changes our understanding, rather than summarizing the UX document. An expert judgment does not become validated behavior.
2. **Adjudicate every change.** Use the OS decision table. Evaluate user value, core hypothesis, business objective, scope level, selected build target, evidence, existing decisions, complexity, and time-to-value. A sound UX idea can belong above the selected target. Explain modified acceptance and substantive rejection.
3. **Recheck the journey.** Restate only affected parts using `Stage | User goal | Action | System response | Failure/recovery`. Can we remove work or decisions, automate safely, improve defaults, or shorten first value? Has the journey introduced a new adoption dependency?
4. **Reassess the ladder and selected target.** Classify affected capabilities as `CREDIBLE MVP`, `P0`, `P1`, `P2`, `COMPLETE V1-PROD`, or `NOT IN V1-PROD`; then classify the target decision as `KEEP`, `RAISE`, or `LOWER`. P0 is justified by production-grade core use, including necessary controls, not by convenience. Confirm that the credible MVP can test or deliver core value and that the selected target still matches the business objective.
5. **Separate remaining uncertainty.** Distinguish product questions, usability questions requiring real users, technical questions exposed, and unsupported high-impact assumptions. Give each an owner, resolution path, and affected gate/work. Proposed UX debt needs a reason, risk, mitigation, owner, and revisit trigger before acceptance.

## Reconcile and route

Follow the OS persistence sequence: decision record, affected PM artifacts, UX reconciliation, consistency check, memory, handoff. Change the PRD only for accepted proposals; leave unresolved choices explicit. The first pass often creates v0.2, but follow actual version history. Include a concise change summary; do not rewrite unaffected sections merely to show activity.

Choose one gate outcome in `reviews/G-###.md`:

- `PASS`: recommendations adjudicated, accepted changes reconciled, and no blocker to Technical review.
- `REWORK`: return to UX for a defined correction or to PM discovery for a flawed product premise.
- `VALIDATE`: commission decision-linked evidence, recording this gate as the return point.
- `DEFER` or `STOP`: record why further investment is unwarranted now or in this form.

For architecture, prepare the OS handoff with the aligned PRD/UX versions, journey, scope ladder and selected-target references, relevant decisions, data/integration/performance/AI/security/scale assumptions, and the highest-value product-specific technical questions. Five to ten questions may be useful for a complex product; fewer are appropriate for a small one. Do not ask generic architecture questions to fill a quota.

## Deliver

Return learning synthesis, adjudication record, revised artifact versions or explicit no-change result, outstanding actions, gate outcome, updated memory, and the next handoff when justified. Confirm whether UX findings change the scope ladder or selected target; do not assume expansion is wrong when the chosen objective requires a fuller product. Passing this gate authorizes the next review, not implementation.
