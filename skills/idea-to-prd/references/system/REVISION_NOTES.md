# Revision Notes and Source Map

Originally revised 2026-09-02 from all eight attachments in **Branch · Prompt for PRD Development**, plus its recommendation to separate orchestration, role methods, governance, and state. Version 1.1 was revised 2026-09-09 to add scope-target choice and proportionate validation. The bundle is a substantive refactor rather than a line-by-line copy.

## Source mapping

| Original attachment | Revised home | Strongest instructions retained |
|---|---|---|
| `Product_Manager_Brainstorming_Partner-Idea_to_PRD.md` | `roles/PM.md`, shared rules in `AGENTS.md` | Conversational discovery; problem/hypothesis/solution separation; alternative solutions; aggressive MVP discipline; comprehensive requirements and acceptance; stable registers; explicit adjudication; four-perspective quality check |
| `UX_Product_Design_Brain.md` | `roles/UX.md` | User context; complete journey; fewer steps/decisions; defaults; information architecture; surface and interaction states; recovery; onboarding; realistic edge cases; essential UX versus debt; requested PRD changes |
| `Technical_Architect_Brain.md` | `roles/TECHNICAL_ARCHITECT.md` | Proportionate architecture; options; data authority; integration contracts; failure modes; realistic scale; security; AI quality; observability; vertical slices; complexity challenge; build/buy and debt |
| `Product_Red_Team.md` | `roles/RED_TEAM.md` | Independent commercial skepticism; all 13 lenses; alternatives including doing nothing; P0 challenge; demo versus repeated-use AI; pre-mortem; kill criteria; four-color verdict |
| `PM_REVIEW_UX_FINDINGS.md` | `governance/AFTER_UX.md` | Learning synthesis; five dispositions; journey simplification; P0 reassessment; unresolved uncertainty; targeted architecture handoff |
| `PM_REVIEW_TECHNICAL_ARCHITECTURE.md` | `governance/AFTER_TECH.md` | Value versus complexity; keep/simplify/manualize/buy/defer/remove; technical P0; debt triggers; readiness; complete Red Team context |
| `PM_FINAL_ADJUDICATION.md` | `governance/FINAL_ADJUDICATION.md` | Independent reassessment before rebuttal; zero-based MVP; assumption disposition; decision-linked tests; outcomes and kill criteria; four investment verdicts; freeze and reopening rules |
| `Product_Memory.md` | `Product_Memory.md` | Operational memory distinct from product truth; active blockers/assumptions; evidence status; specialist status; handoff queue; backward routing; next best action; session closeout |

The new `roles/VALIDATION.md` formalizes the Evidence role anticipated in the original memory and follow-up recommendation. `AGENTS.md` is the concise orchestration replacement for the master OS described in the referenced conversation. `README.md` explains manual use and product-directory setup.

## Intentional changes

- **One location for common rules.** Authority, handoff fields, change-request dispositions, persistence, versions, and global readiness rules live in the OS. Roles retain specialist depth; governance applies the rules at a particular decision gate.
- **Product accountability and domain authorship separated.** PM alone changes product commitments and canonical registers. UX, Technical, Validation, and Red Team maintain their detailed artifacts. PM controls accepted baseline inclusion without rewriting source evidence or independent critique.
- **One naming scheme.** Use `CURRENT_PRODUCT.md`, `PRD.md`, `DECISION_LOG.md`, `OPEN_QUESTIONS.md`, `ASSUMPTION_REGISTER.md`, and `Product_Memory.md`. Numbered legacy paths and competing memory aliases are removed.
- **Memory is smaller in responsibility.** It holds pointers and active state rather than duplicating the scope ladder, full product definitions, or independent decisions. Version and freshness tracking makes stale reviews visible.
- **Versions follow changes.** v0.2/v0.3 are typical milestones, not mandatory stage labels. Backward loops never reset versions. v1.0 is withheld for VALIDATE FIRST/NO-GO, resolving the original final prompt's tension between conditional publication and unconditional “produce v1.0.”
- **Readiness and permission separated.** Technical readiness is advisory. Final PM verdict, human/delegated authorization, and allowed implementation scope are distinct. Conditional go is bounded and cannot bury existential or essential safety/security blockers.
- **Evidence is not consensus.** Validation distinguishes plans, execution, findings, and product decisions; uses pass/fail/inconclusive rules and provenance; preserves negative evidence. Assumptions use `SUPPORTED/REFUTED/INCONCLUSIVE` rather than implying permanent proof through “Validated.”
- **Scope is an explicit ladder, not a minimization reflex (v1.1).** Discovery defines credible MVP → P0 → P1 → P2 → complete v1-prod as additive levels. The credible MVP is the learning/value floor; P0 is the first production-grade core. The human product owner selects which level to build toward after a PM recommendation, and later gates may challenge but not silently shrink that target.
- **Validation is proportionate and chosen (v1.1).** The PM recommends validation options based on the business objective, problem, selected target, stakeholders, exposure, and risk; the human product owner chooses the posture. Owner-fit validation can be sufficient for a sole-user personal product. Evidence about external users or buyers still requires an appropriate source, and safety, security, legal, and material third-party risks remain constraints.
- **Vocabularies remain distinct.** Credible MVP/P0/P1/P2/complete v1-prod describe scope levels; critical/high/medium/low describe finding severity; blocking/important/optional describe change urgency. PRD v1.0 is a document baseline, not a synonym for complete v1-prod. Red Team does not create a second assumption register.
- **Backward routes have return conditions.** Changes identify affected artifacts, owner, interrupted gate, and re-entry proof. Accepted technical workflow changes require UX reconsideration; changed investment cases require appropriate Red Team re-review.
- **No quota-driven analysis.** Preserve the original high-value questions and top-ten/pre-mortem intent, while allowing fewer items when extra entries would be invented or repetitive. Unsupported savings percentages and exact timelines are not treated as facts.
- **Delivery is a defined boundary.** The package includes build handoff and pilot learning, but does not imply that the five roles are an implementation, QA, or release team. Named delivery ownership remains necessary.

## What this bundle does not contain

The package supplies reusable instructions and the project-state template. It does not invent a product, PRD, completed research, customer evidence, or build authorization. Product-specific artifacts are created during actual use, according to the ownership table and gates.
