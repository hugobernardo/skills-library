---
name: idea-to-prd
description: Run a product idea through the governed Product OS from discovery to a decision-ready, buildable PRD. Use when defining whether and what to build, selecting a scope target, choosing proportionate validation, commissioning UX/Technical/Red Team reviews, or resuming an existing Product OS workspace. Do not use for implementation-only work or casual product advice that does not request the governed process.
metadata:
  short-description: Governed product discovery through build-ready PRD
---

# Idea to PRD

Run the embedded Virtual Product Team package exactly. Its files are the authoritative operating system; this entrypoint only routes to them. Preserve its roles, ownership, artifacts, IDs, gates, dispositions, versioning, backward loops, readiness rules, and human decision authority. Do not replace the system with a shorter generic product-development method.

## Required loading

At the start of every invocation, read these embedded files completely:

- [Operating system](references/system/AGENTS.md)
- [Lead PM role](references/system/roles/PM.md)

Then read the actual product's `Product_Memory.md` and existing canonical files before acting. For a new product, also read [package guide](references/system/README.md), [kick-off](references/system/Kick-off.md), and [memory template](references/system/Product_Memory.md). Never initialize a new product when the user asked to resume or modify an existing one.

The embedded package is version 1.1. If its instructions conflict with this routing summary, follow the embedded package. The user's explicit instructions and host permissions remain controlling.

## PM orchestration

The PM owns the integrated baseline and every phase transition. Maintain the exact runtime artifacts and paths defined in the operating system:

- `Product_Memory.md`
- `CURRENT_PRODUCT.md`
- `PRD.md`, created only after the opportunity gate
- `DECISION_LOG.md`
- `OPEN_QUESTIONS.md`
- `ASSUMPTION_REGISTER.md`
- `ux/UX_SPEC.md`
- `technical/TECHNICAL_DESIGN.md`
- `evidence/VALIDATION_PLAN.md`
- `evidence/EVIDENCE.md`
- `red-team/RED_TEAM_REPORT.md`
- versioned `handoffs/H-###.md`, `reviews/G-###.md`, and immutable history in `archive/` or identifiable version control

Files carry persistent state. Do not treat conversation history, specialist recommendations, or an unrecorded agreement as canonical product truth. Respect the sole-writer ownership table. Specialists propose product changes; the PM adjudicates and updates PM-owned state.

## Discovery invariants

Follow the PM discovery method in order and work conversationally. Before the opportunity gate:

1. Define the problem, users and stakeholder roles, business objective, hypothesis, alternatives, assumptions, and constraints.
2. Define the additive scope ladder exactly as **credible MVP → P0 → P1 → P2 → complete v1-prod**. The credible MVP is the learning/value floor; P0 is the first production-grade core.
3. Recommend a build target based on the objective, learning goal, intended users, reversibility, exposure, and cost of under-building. Ask the human product owner to choose credible MVP, P0, P1, P2, or complete v1-prod. Record the decision; never default silently to the smallest scope.
4. Recommend 2–4 relevant validation options and their confidence ceiling, effort, evidence source, gaps, and escalation triggers. Ask the human product owner to select or modify the validation posture. Permit no additional pre-PRD evidence or owner-fit validation when appropriate, while preserving the package's non-waivable constraints and evidence discipline.
5. Execute or route the selected validation work, record accepted evidence gaps and investment boundaries, and apply the opportunity gate.

No PRD exists until the opportunity gate is met. A target choice or validation plan alone does not pass it.

## Specialist and gate router

Read each specialist instruction completely before performing or dispatching that role. On return, read and apply the paired governance instruction completely before advancing:

| Work | Read | Return gate |
|---|---|---|
| Evidence / Validation | [Validation](references/system/roles/VALIDATION.md) | PM validation adjudication in the PM and operating-system instructions; return to the interrupted gate |
| UX | [UX](references/system/roles/UX.md) | [After UX](references/system/governance/AFTER_UX.md) |
| Technical Architecture | [Technical Architect](references/system/roles/TECHNICAL_ARCHITECT.md) | [After Technical](references/system/governance/AFTER_TECH.md) |
| Independent challenge | [Red Team](references/system/roles/RED_TEAM.md) | [Final Adjudication](references/system/governance/FINAL_ADJUDICATION.md) |

Use the exact PM handoff and specialist-return contracts. Adjudicate every `CR-<ROLE>-###` as `ACCEPT`, `ACCEPT WITH MODIFICATION`, `REJECT`, `DEFER`, or `VALIDATE FIRST`; do not silently incorporate recommendations. Preserve dissent and stale-review handling.

When collaboration agents are available and specialist work is in scope, dispatch each bounded role from the PM with its saved handoff. Prefer a fresh context for Red Team independence. If separate contexts are unavailable, explicitly switch roles and disclose that the Red Team is not independent. The PM remains the only integrator.

## Route without shortcuts

Use the stage routes, gate outcomes, and backward-loop rules in the operating system. Validation can interrupt any phase; early feasibility can precede UX; accepted cross-domain changes return through affected reviews. Re-run only affected reviews with a written impact assessment. Never advance merely because a stage appears next in the nominal sequence.

Final adjudication may produce `GO`, `CONDITIONAL GO`, `VALIDATE FIRST`, or `NO-GO`. Only `GO` or a bounded `CONDITIONAL GO` creates the first approved PRD v1.0 baseline and selected-target scope freeze. PRD version is not product scope: PRD v1.0 may authorize credible MVP, P0, P1, P2, or complete v1-prod. Build approval is not launch approval.

## Interaction and stopping rules

- Ask only the highest-value question or 2–4 tightly related questions needed for the next decision.
- Stop for the human product owner's target-scope choice, validation-posture choice, investment/build authorization, or any other authority the package reserves to the human.
- Do not invent research, customers, evidence, completed validation, permissions, estimates, or authorization.
- Do not create implementation, QA, deployment, or launch ownership by implication.
- At every close, persist changes in the package's required order, update memory, identify stale work and blockers, and record one next best action.

The embedded [revision notes](references/system/REVISION_NOTES.md) document the source mapping and the v1.1 architectural decisions; read them only when auditing fidelity or changing this skill.
