# Product Memory — [Product name]

> Copy this file into each product directory. PM owns it. It stores operational state and pointers; detailed product truth belongs in canonical artifacts. Paths are relative to that product directory. Fill placeholders with facts or `NOT ASSESSED`/`NOT CREATED`; never imply work is complete because a row exists. Remove these template instructions after initialization.

## Identity and control

| Field | Value |
|---|---|
| Product / internal ID | [Name / ID] |
| Human product owner | [Name] |
| PM / working conversation | [Owner / reference] |
| Instruction package location / version | [Location] / 1.1 |
| Product directory | [Path or shared location] |
| Created / last meaningful update | [Date] / [Date] |
| Memory owner / version / status | PM / 0.1 / DRAFT |
| Input baseline / change summary | No PRD yet / Initialized |
| Persistence | [SAVED or PENDING SAVE; exact pending files] |

## Current orchestration state

| Field | Current value |
|---|---|
| Phase | DISCOVERY |
| Active role / assignment | PM / [H-ID or initial discovery] |
| Stage objective | Define credible user, problem, business objective, hypothesis, scope ladder, selected build target, and validation posture. |
| Stage exit criteria | [Decision-specific checklist; unmet criteria explicit] |
| Current PRD version | NONE |
| Gate outcome / latest G-ID | NOT ASSESSED / NONE |
| Build readiness | NOT ASSESSED |
| Final PM verdict | NOT DECIDED |
| Human/delegated build authorization | NOT RECORDED |
| Selected build target | NOT SELECTED |
| Validation posture | NOT SELECTED |
| Selected-target freeze | NOT FROZEN |
| Permitted work and restrictions | Discovery only; [reference to current decision once made] |
| Next stage / entry condition | [Determined after current discovery; no automatic PRD] |

Phase values: `DISCOVERY`, `VALIDATION`, `PRD DRAFTING`, `UX`, `AFTER UX`, `TECHNICAL`, `AFTER TECH`, `RED TEAM`, `FINAL ADJUDICATION`, `BUILD HANDOFF`, `DELIVERY`, `PILOT`, `LEARNING`, `DEFERRED`, `STOPPED`. A backward route changes phase without resetting artifact versions.

Gate outcome: `NOT ASSESSED`, `PASS`, `REWORK`, `VALIDATE`, `DEFER`, `STOP`. Readiness: `NOT ASSESSED`, `NOT READY`, `READY WITH OPEN ITEMS`, `READY`. Final PM verdict: `NOT DECIDED`, `GO`, `CONDITIONAL GO`, `VALIDATE FIRST`, `NO-GO`. Keep these separate; conditional permission must name allowed work.

## Baseline manifest and freshness

Link to actual artifacts. `Reviewed against` records compatibility, not just modification date. Register versions should also be tracked. Specialist artifact acceptance and compatibility need PM confirmation.

| Artifact | Owner | Path | Current version / status | Reviewed against / freshness | Latest G or D ID |
|---|---|---|---|---|---|
| Product brief | PM | `CURRENT_PRODUCT.md` | NOT CREATED | — | — |
| PRD / scope freeze | PM | `PRD.md` | NOT CREATED | — | — |
| Decisions | PM | `DECISION_LOG.md` | NOT CREATED | — | — |
| Questions | PM | `OPEN_QUESTIONS.md` | NOT CREATED | — | — |
| Assumptions | PM | `ASSUMPTION_REGISTER.md` | NOT CREATED | — | — |
| UX spec | UX | `ux/UX_SPEC.md` | NOT CREATED | — | — |
| Technical design | Technical | `technical/TECHNICAL_DESIGN.md` | NOT CREATED | — | — |
| Validation plan | Validation | `evidence/VALIDATION_PLAN.md` | NOT CREATED | — | — |
| Evidence | Validation | `evidence/EVIDENCE.md` | NOT CREATED | — | — |
| Red Team report | Red Team | `red-team/RED_TEAM_REPORT.md` | NOT CREATED | — | — |

**Last accepted baseline / archive or commit:** [Reference or NONE]

**Pending canonical updates or contradictions:** [Files, conflicting sections, owner, resolution action; NONE only after checking]

## Concise product context

At most a short paragraph: user, problem, hypothesis, and immediate decision. Label as derived from `CURRENT_PRODUCT.md` version [x] / PRD version [y], or as a provisional discovery brief. Do not duplicate the full workflow, requirement lists, or business rules.

[Context not yet established.]

**Scope pointer:** [PRD section/version with credible MVP, P0, P1, P2, complete v1-prod, selected build target, NOT IN V1-PROD, manual work, and freeze]

**Validation posture pointer:** [D-ID and Validation Plan section with objective, selected depth/methods, evidence standard, accepted gaps, and investment boundary]

**Recent scope delta:** [REQ IDs and D-IDs; not a second scope list]

## Immediate blockers and critical assumptions

Only active items that can change the next action. Full history remains in the canonical registers.

| Q / A / CR ID | Issue / uncertainty | Confidence / impact if applicable | Blocks which work or gate? | Owner | Resolution method / V-ID | Due trigger / closure proof |
|---|---|---|---|---|---|---|
| [ID] | [Issue] | [Assessment] | [Specific boundary] | [Owner] | [Method] | [Trigger / proof] |

## Evidence and recent decisions

- **Supported observations:** [E-IDs, one-line relevance, limitations; NOT ASSESSED initially]
- **Current beliefs:** [A-IDs; avoid presenting them as facts]
- **Important unknowns or conflicting evidence:** [A/Q/E IDs and decision consequence]
- **Latest consequential decisions:** [D-IDs and one-line reason they affect current work]
- **Active experiments:** [V-ID, execution status, result separately, owner, next checkpoint]

Do not promote beliefs to facts because multiple agents agree. A planned experiment is not evidence.

## Specialist work and handoff queue

Work status: `NOT STARTED`, `IN PROGRESS`, `RETURNED`, `RECONCILING`, `COMPLETE`, `BLOCKED`. Review freshness: `NOT REVIEWED`, `CURRENT`, `STALE`. “Returned” is not “accepted.”

| Role | Work status | H-ID / artifact version | Open CR / action IDs | Freshness / re-review reason | Next responsibility |
|---|---|---|---|---|---|
| UX | NOT STARTED | — | NOT ASSESSED | NOT REVIEWED | Await assignment |
| Technical | NOT STARTED | — | NOT ASSESSED | NOT REVIEWED | Await assignment |
| Validation | NOT STARTED | — | NOT ASSESSED | NOT REVIEWED | Await scope-target and validation-posture checkpoint |
| Red Team | NOT STARTED | — | NOT ASSESSED | NOT REVIEWED | Await integrated review |

**Current assignment:** [H-ID; owner; objective; exact inputs; expected output; completion criteria; return gate]

**Next queued assignment:** [Role; trigger; H-ID when issued; do not pre-authorize a blocked stage]

Detailed handoffs live in `handoffs/H-###.md`; adjudications and action closure live in `reviews/G-###.md`.

## Backward routing and re-entry

| Trigger / source ID | Affected artifacts or requirements | PM-approved route / owner | Return gate | Re-entry condition | Status / closure proof |
|---|---|---|---|---|---|
| [Trigger] | [Scope] | [Route] | [Gate] | [Required evidence or reconciliation] | [Status] |

Typical routes: flawed hypothesis → discovery; unsupported behavior → Validation; Technical workflow change → UX → After UX → After Technical; Red Team existential uncertainty → Validation → PM → affected reviews → Final Adjudication. Record actual routes, not hypothetical tasks, in the table.

## Active compromises and conditions

| D / Q ID | Compromise or condition | Owner | Permitted work / stop boundary | Mitigation and revisit trigger | Closure evidence / deadline |
|---|---|---|---|---|---|
| [ID] | [Summary; detailed truth stays in source] | [Owner] | [Boundary] | [Trigger] | [Proof / due] |

Include accepted UX/technical debt, manual operations, limited scale/integrations, and conditional-go restrictions when active. Risk acceptance does not equal evidence support.

## Readiness checkpoint

Mark each `NOT ASSESSED`, `MET`, `OPEN`, or `N/A WITH REASON` and reference evidence. These summarize the OS/final gate; checkboxes alone cannot approve a build.

| Dimension | Status | Evidence / blocker / decision reference |
|---|---|---|
| User/problem/hypothesis and business objective credible | NOT ASSESSED | — |
| Scope ladder and selected build target clear and justified | NOT ASSESSED | — |
| Validation posture fits the objective, target, stakeholders, and investment boundary | NOT ASSESSED | — |
| Selected-target requirements, non-goals, acceptance criteria, and outcome metrics clear | NOT ASSESSED | — |
| UX journey and critical states aligned with PRD | NOT ASSESSED | — |
| Technical feasibility, dependencies, recovery, security, operations addressed | NOT ASSESSED | — |
| Critical assumptions tested or permissible risk explicitly accepted | NOT ASSESSED | — |
| UX/Technical/Red Team findings adjudicated and actions reconciled | NOT ASSESSED | — |
| Build blockers resolved; conditional boundaries valid if applicable | NOT ASSESSED | — |
| Kill/reconsider criteria, learning plan, delivery owner established | NOT ASSESSED | — |
| Versions aligned; final verdict, freeze, and authorization recorded | NOT ASSESSED | — |

## Single next best action

**Action:** [One concrete action]

**Why now:** [Decision or risk it resolves]

**Owner:** [Role/person]

**Expected artifact or decision:** [Path/ID/change]

**Completion evidence / next checkpoint:** [Observable result]

## Session closeout / resume

PM: update canonical artifacts first, then this snapshot. Verify phase, versions, decisions, questions, assumptions, specialist status, stale reviews, backward routes, conditions, readiness, and next action. Record incomplete writes explicitly. Do not reconstruct or overwrite established truth from conversational memory.

**Latest session delta:** [Changed IDs/files and why; keep brief]

**Unfinished work / pending saves:** [Exact items or NONE after verification]

**Resume instruction:** [Read these current artifacts, resolve this pending item, then take the next action]

During pilot/learning, point to the expected-versus-observed evidence, PM decision, and affected version changes. Keep full historical findings in canonical artifacts and archives, not in this file.
