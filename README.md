# Claude Skills

A library of [Agent Skills](https://agentskills.io) for marketing strategy, market research, and content — built and maintained by Hugo Bernardo, fractional CMO.

Skills are plain folders: a `SKILL.md` with instructions plus optional `references/`, `templates/` and `scripts/`. The format is an open standard, so the same folder works in Claude (claude.ai, Claude Code, Cowork) and in other agents that read `SKILL.md` (Cursor, Codex, Windsurf, Gemini CLI).

## Skills

| Skill | What it does |
|---|---|
| [`idea-to-prd`](skills/idea-to-prd) | Run a product idea through a governed virtual product team from discovery to a decision-ready, buildable PRD—with explicit scope-target and validation choices, specialist roles, formal gates, backward loops, and independent Red Team challenge. |
| [`tam-analysis`](skills/tam-analysis) | Research, size, validate and govern a market — TAM/SAM/SOM to a skeptical-investor standard with graded evidence, explicit ranges, no double counting, and a versioned Source of Truth. Three modes: SIZE, RECONCILE, MAINTAIN. |
| [`presentation-builder`](skills/presentation-builder) | Build any presentation — sales pitch, investor deck, board update, conference talk, training — through a staged process that settles the argument before any slide gets made. Assertion headlines, graded evidence, visible gaps instead of invented numbers. |
| [`create-gtm-strategy`](skills/create-gtm-strategy) | Go-to-market strategy as a working document — clarify before drafting, label every claim (fact / assumption / modeled / target), audit the draft for internal contradictions, then convert it into decisions. Handles product launches and services market entry. |
| [`create-content-plan`](skills/create-content-plan) | Content marketing strategy with pillars, editorial calendar and distribution plan. |
| [`angle-finder`](skills/angle-finder) | Research a topic and produce the ingredients for one deep post — angle, hooks, arguments, stats, quotes, closers. Adapted from Marketing Against the Grain's Content Angle Finder. |
| [`starter-session-audit`](skills/starter-session-audit) | End-of-session audit for Cowork workspaces that catches uncaptured corrections, preferences and decisions. |

## Install

**claude.ai / Cowork** — zip a skill folder (the folder itself, so `SKILL.md` is at its root) and upload it under Settings → Capabilities → Skills.

**Claude Code** — copy the folder into your skills directory:

```bash
git clone https://github.com/<you>/claude-skills.git
cp -r claude-skills/skills/tam-analysis ~/.claude/skills/      # personal
# or
cp -r claude-skills/skills/tam-analysis .claude/skills/        # project
```

Other agents: same folder, dropped into that tool's skills directory (`~/.cursor/skills/`, `~/.codex/skills/`, `.windsurf/skills/`).

## Layout

```
skills/<name>/
  SKILL.md          # frontmatter (name, description) + instructions
  references/       # deeper guidance loaded on demand
  templates/        # artifact scaffolds
  scripts/          # helper code
```

## License

MIT — see [LICENSE](LICENSE). `angle-finder` is adapted from third-party material; credit to its original authors.
