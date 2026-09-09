# Virtual Product Team

A reusable Markdown operating package for deciding whether to build a product, defining the scope ladder from credible MVP through complete v1-prod, choosing the right build target, and keeping specialist work aligned.

## Start here

1. Keep this package as your reusable instruction library. Create a separate directory for each product.
2. Copy [Product_Memory.md](Product_Memory.md) into that product directory under the same name. The PM initializes the canonical files listed in [AGENTS.md](AGENTS.md); do not create a PRD until the opportunity gate is met, including the scope-target and validation-posture decisions.
3. Start a PM conversation with `AGENTS.md`, [roles/PM.md](roles/PM.md), the product memory, and your idea or current artifacts.
4. For each specialist, use the shared OS, that role's prompt, and the PM's focused handoff. Return the specialist's output to the PM with the appropriate governance prompt.
5. Keep specialist artifacts and PM decisions in the product directory. Files carry persistent state; a conversation is a workspace, not the archive.

In manual use, provide the actual contents of referenced files. A filename alone does not give a conversation access to them. Keep a continuing PM conversation when practical and use a fresh conversation for Red Team independence. If only one conversation is available, explicitly switch roles and disclose the limitation. In an automated workflow, dispatch and writes must respect the ownership table; this package itself does not provision agents or integrations.

## Package map

| File | Purpose |
|---|---|
| [AGENTS.md](AGENTS.md) | Shared authority, ownership, gates, routing, handoffs, versioning |
| [roles/PM.md](roles/PM.md) | Discovery, scope, PRD method, canonical register schemas |
| [roles/UX.md](roles/UX.md) | Journey, interaction, simplification, states, usability |
| [roles/TECHNICAL_ARCHITECT.md](roles/TECHNICAL_ARCHITECT.md) | Feasibility, system design, data, failure, cost, AI evaluation |
| [roles/RED_TEAM.md](roles/RED_TEAM.md) | Independent challenge across 13 lenses |
| [roles/VALIDATION.md](roles/VALIDATION.md) | Decision-linked experiments and evidence assessment |
| [governance/AFTER_UX.md](governance/AFTER_UX.md) | PM adjudication of UX findings |
| [governance/AFTER_TECH.md](governance/AFTER_TECH.md) | Product value versus engineering cost; return routing |
| [governance/FINAL_ADJUDICATION.md](governance/FINAL_ADJUDICATION.md) | Investment decision, scope freeze, build restrictions |
| [Product_Memory.md](Product_Memory.md) | Copyable project-state template |
| [REVISION_NOTES.md](REVISION_NOTES.md) | Source mapping and substantive revision decisions |

## Example product directory

```text
my-product/
  Product_Memory.md
  CURRENT_PRODUCT.md
  PRD.md                         # created only after opportunity gate
  DECISION_LOG.md
  OPEN_QUESTIONS.md
  ASSUMPTION_REGISTER.md
  ux/UX_SPEC.md
  technical/TECHNICAL_DESIGN.md
  evidence/VALIDATION_PLAN.md
  evidence/EVIDENCE.md
  red-team/RED_TEAM_REPORT.md
  handoffs/H-001.md
  reviews/G-001.md
  archive/                       # or identifiable version-control history
```

These are runtime paths, not additional templates shipped in the bundle. Create specialist files when needed. Use one spelling—`Product_Memory.md`—throughout. The additive scope ladder and selected-target freeze live inside the PRD; there is no second scope document to keep synchronized.

## First PM message

> Act as the Lead PM using the attached AGENTS.md and roles/PM.md. Product directory: [path or shared location]. Read Product_Memory.md and any existing canonical files before acting. My idea or current objective is [description]. Resume the recorded next action if this is an existing product; otherwise begin discovery. Maintain the canonical artifacts and give me the next product decision, its rationale, and the most useful question.

## Scope

The package supports B2B and B2C products, including AI products where relevant. It is strongest from idea through build approval. It also defines the handoff and learning loop for delivery; implementation, QA, deployment, and launch still need named owners and their own working instructions.

Package version 1.1 · Revised 2026-09-09. This is the library's version, independent of any product's PRD document version or selected product scope level.
