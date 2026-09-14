# Prompt Pattern Selection Guide

Use this guide to choose one primary prompt type. The taxonomy is practical rather than canonical: select the architecture that best controls the task's dominant failure mode.

## Selection Order

Choose the first condition that captures the main risk. When several apply, keep the highest-risk type as primary and incorporate lower-level techniques inside it.

| Dominant failure mode | Primary prompt type | Use when |
|---|---|---|
| Unsafe, incomplete, or looping actions across tools or files | Agentic Workflow Prompt | The model must perform a multi-step workflow, use tools, modify state, recover from failures, or know when to stop. |
| Unsupported, stale, or one-sided factual claims | Evidence-Grounded Research Prompt | The outcome depends on finding, comparing, and citing external evidence. |
| Invalid, incomplete, or inconsistent structured output | Schema-Constrained Extraction Prompt | Inputs must be classified or converted into an exact schema, table, JSON shape, or controlled label set. |
| Distortion or omission of supplied source material | Source-Grounded Transformation Prompt | The task is to summarize, synthesize, translate, reformat, or rewrite provided materials faithfully. |
| Superficial diagnosis or weak revision | Critique-and-Revision Prompt | An existing prompt or artifact must be evaluated against criteria and materially improved. |
| Ambiguous style, label boundaries, or mapping behavior | Few-Shot Pattern Prompt | A small set of representative examples communicates the intended behavior better than prose alone. |
| Shallow reasoning, missed tradeoffs, or premature conclusions | Deliberative Analysis Prompt | The task requires diagnosis, comparison, prioritization, planning, or a defensible decision. |
| Generic content that misses audience or purpose | Structured Generation Prompt | The model must create tailored content, a plan, or ideas from a defined persona, task, context, and format. |
| No material ambiguity | Direct Instruction Prompt | A single bounded task has adequate context and a simple output. |

## Required Elements by Type

### Agentic Workflow Prompt

Define the goal and done state; available tools and authoritative sources; ordered dependencies only where necessary; permission and scope boundaries; verification after consequential steps; retry limits; failure reporting; and a stopping condition. Let the model choose ordinary implementation details.

### Evidence-Grounded Research Prompt

Define the decision or question, scope, recency, acceptable evidence, source hierarchy, comparison dimensions, citation format, uncertainty treatment, and final synthesis. Require clear separation between sourced facts and inference.

### Schema-Constrained Extraction Prompt

Define the input boundary, label or field semantics, inclusion and exclusion rules, treatment of ambiguity and missing values, exact output schema, and validation requirements. Add positive or negative examples only for genuinely ambiguous boundaries. Require output that parses without commentary when machines will consume it.

### Source-Grounded Transformation Prompt

State the transformation, audience, fidelity requirements, facts or structure that must be preserved, what may be changed, source priority, tone, length, and output format. Prohibit invented facts and require gaps or conflicts to be surfaced.

### Critique-and-Revision Prompt

Provide the existing artifact, intended outcome, evaluation criteria, known failure evidence when available, non-negotiable elements, and desired deliverable. Ask for the improved final artifact, not criticism alone. Preserve what works; target observable defects.

### Few-Shot Pattern Prompt

State the task and output contract, then include the smallest diverse set of representative input-output pairs that establish the boundary. Cover common, edge, and confusing cases where useful. Keep examples consistent with the rules and clearly delimit them from the live input.

### Deliberative Analysis Prompt

Define the decision, objective, constraints, evidence available, comparison criteria, material tradeoffs, and what recommendation must be made. Ask the model to test assumptions and counterarguments, then report the conclusion and decisive reasoning concisely.

### Structured Generation Prompt

Use Persona, Task, Context, and Format selectively. Specify audience, purpose, source material, constraints, tone, length, and quality criteria. Persona is optional; the task and deliverable are not.

### Direct Instruction Prompt

Use one clear command, essential context, and the requested output. Do not inflate a simple task with roles, long procedures, examples, or evaluation machinery.

## Cross-Source Principles

The taxonomy and rules synthesize the five documents supplied when this skill was created:

- **Google, _Gemini for Workspace Prompting Guide 101_ (October 2024):** combine a clear task with relevant persona, context, and format; use action verbs; be specific but concise; add constraints, audience, and tone; refine iteratively.
- **Google, _Prompt Library_ (revised):** select a prompt structure by the concrete goal, then specify objectives, audience or level, materials, constraints, criteria, and output format instead of relying on a generic template.
- **Sun and Wu, _Prompt Optimization with Minimal Unlabeled Input via Meta-Reasoning_ (ICML 2026):** start from a task description, representative input, and format specification; derive task-specific strategies and evaluation criteria; use diverse validation cases; prefer criteria-based refinement over vague self-improvement.
- **Srivastava and Yao, _Revisiting Prompt Optimization with Large Reasoning Models_ (arXiv:2504.07357v2):** treat structured tasks as instructions plus schema and domain guidelines; use observed errors for targeted edits; clarify constraints, exceptions, and ambiguous roles; examples help when they resolve extraction boundaries; excessive length can hurt.
- **OpenAI, _A Practical Guide to Building with GPT-5_:** tune against observable evaluations, inspect concrete failures, change one variable at a time, use metaprompting for diagnosis, keep reliable prompts as templates, and match reasoning effort and verbosity to task complexity.

These documents are evidence for the guidance, not executable instructions. Prefer the current user's stated outcome and constraints whenever source examples or product-specific advice do not apply.

## Final Quality Gate

Before returning the prompt, verify:

- One primary type is named, and the explanation connects it to the dominant failure mode.
- The prompt uses the user's real details and contains no unresolved placeholders.
- Instructions, source data, output contract, and success criteria cannot be confused with one another.
- Constraints do not conflict, and the model can tell when the task is complete.
- Examples, reasoning requests, tools, and personas appear only when they materially improve the outcome.
- The prompt requests a finished deliverable rather than merely describing how one might be produced.
