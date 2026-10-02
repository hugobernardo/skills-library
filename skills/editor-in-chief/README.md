# Editor-in-Chief: candidate skills

These are the 12 skills selected in the content-stack review (2026-10-01), staged here for individual testing before a meta-agent orchestrates them. Every folder is copied unmodified from its source. The only addition is the upstream `LICENSE`, placed in each third-party folder because MIT requires the notice to travel with the code.

These folders sit one level deeper than the rest of `skills/`, so the hugo-skills plugin shouldn't load them alongside the originals. To test one, zip that folder (with `SKILL.md` at its root) and upload it, or copy it into `~/.claude/skills/`.

## Pipeline order

| Step | Skill | Stage | Source | Pinned commit | License |
|---|---|---|---|---|---|
| 1 | `content-strategy` | Strategy | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) v2.11.6 | `c0e35b7` | MIT |
| 2 | `customer-research` | Audience and topic research | marketingskills v2.11.6 | `c0e35b7` | MIT |
| 3 | `angle-finder` | Ideation, angles, brief | this repo (`skills/angle-finder`) | — | repo license |
| 0 | `copywriting-prose-creator` | Voice and style (run once per language) | [samber/cc-skills](https://github.com/samber/cc-skills) | `123cb15` | MIT |
| 4a | `substack-ghostwriting` | Drafting: newsletter and long-form | samber/cc-skills | `123cb15` | MIT |
| 4b | `linkedin-content` | Drafting: LinkedIn, plus the repurposing ledger | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | `19392f7` | MIT |
| 5 | `blog-factcheck` | Fact-checking | [AgriciDaniel/claude-blog](https://github.com/AgriciDaniel/claude-blog) | `2500d4c` | MIT |
| 6 | `copy-editing` | Copyediting sweeps | marketingskills v2.11.6 | `c0e35b7` | MIT |
| 7 | `humanizer` | AI-tell removal (English) | [blader/humanizer](https://github.com/blader/humanizer) | `225a6f3` | MIT |
| 8 | `ai-seo` | SEO and AEO/GEO | marketingskills v2.11.6 | `c0e35b7` | MIT |
| 9 | `social` | Repurposing and distribution | marketingskills v2.11.6 | `c0e35b7` | MIT |
| 10 | `linkedin-analytics` | Performance review | alirezarezvani/claude-skills | `19392f7` | MIT |

The Spanish editor (a neutral-Spanish fork of [macCesar humaniza](https://github.com/macCesar/aiskills/tree/main/skills/humaniza)) is the planned 13th skill and doesn't exist yet.

## What to check while testing each one

- **content-strategy, customer-research, copy-editing, ai-seo, social.** All five read `.agents/product-marketing.md` from the working directory, so create that file first or they'll ask for context every time. Links to `../../tools/...` point into the marketingskills repo and won't resolve here. They're optional API integrations.
- **angle-finder.** Three known defects remain in this copy:
  1. Step 3 calls `scripts/singleangle-research.py`, which doesn't exist, so the skill falls back to WebSearch.
  2. The Reframe lens and green-light patterns produce the "X isn't Y, it's Z" line.
  3. The anti-trigger list is English only.
- **copywriting-prose-creator.** Run AUDIT on 10+ published pieces before BUILD. It ships English and French guidance only; the Spanish rules are yours to write (one PROSE.md per language). It mentions sibling skills (`copywriting-tone-of-voice-creator`, `copywriting-hooks`, `deep-research`) that aren't included.
- **substack-ghostwriting.** It has hard stops: an intake interview, then a title and hook choice, then the body. Phase 5b expects a humanizer skill to be available.
- **linkedin-content.** The Python scripts use only the standard library. `repurpose_splitter.py` writes `.linkedin-ledger.json`. The linter's patterns are English regexes, so Spanish posts will under-report. It refers to `linkedin-strategy`, which isn't included.
- **blog-factcheck.** Self-contained. It's invoked upstream as `/blog factcheck`, but works on any draft path.
- **humanizer.** §8 removes em and en dashes unless your writing sample uses them. Give it a sample, and keep it off Spanish copy. §1 targets "Not X but Y".
- **linkedin-analytics.** Needs your own LinkedIn post export (CSV or JSON). It refuses to draw conclusions from fewer than 10 posts.

## Name overlaps

`angle-finder` duplicates `skills/angle-finder`. Five skills share names with the installed marketing-skills plugin, which namespaces them as `marketing-skills:<name>`. When testing a standalone copy, disable the plugin version or invoke the skill by its exact name, so you know which one ran.
