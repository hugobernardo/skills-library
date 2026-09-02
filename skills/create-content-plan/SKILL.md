---
name: create-content-plan
description: Generate comprehensive content marketing strategy with editorial calendar, content pillars, and distribution plans. Use this when users request content strategy, editorial calendar, content plan, or content marketing framework.
---

> **EXECUTION RULE**: Generate the complete marketing output yourself, then render it as an interactive HTML widget using the `show_widget` tool. Do not return raw markdown — the widget IS the deliverable. Use only hardcoded hex colors from the Maestrix design system below. Never use CSS variables — they do not exist in the rendering environment. Never make a secondary API call.

Create a comprehensive content marketing distribution strategy with reader stories, brand voice, content themes, and a 20-day strategic calendar.

## CONTEXT NEEDED

- Company name and description
- Products or services offered
- Target audience
- Keywords (optional)

## CONTENT PLAN DELIVERABLES

### 1. Reader Story
"As a [target persona], I want [specific content solution] so that I can [achieve specific business outcome]."

### 2. Brand Voice Analysis
Rate 1-100: Direct, Innovative, Supportive, Competent

### 3. Content Theme Matrix
5-7 core pillars with:
- Theme name & focus
- Target audience segment
- Buyer journey stage
- Content frequency
- Key messages
- Content examples

### 4. Content Curation Sources
- Industry publications (5-7)
- Thought leaders (10-15)
- Competitors to monitor (3-5)
- Trend monitoring tools

### 5. Content Type Distribution
- Blog articles: X%
- Video content: X%
- Social media: X%
- Infographics: X%
- Case studies: X%
- Webinars/Podcasts: X%
- Email newsletters: X%

### 6. Engagement Metrics Framework
- Awareness metrics (reach, traffic, followers)
- Engagement metrics (rates, time on page)
- Conversion metrics (leads, demos, SQLs)
- Retention metrics (repeat engagement)

### 7. 20-Day Strategic Content Calendar
Daily entries with:
- Content idea
- Platform
- Source type
- Target metrics
- Cross-promotion plan
- CTA strategy
- Hashtags/keywords

## QUALITY RULES

1. NO opening comments
2. Actionable, specific recommendations
3. Measurable goals for each metric

---

*Prompt by [Guillaume Dumortier](https://www.linkedin.com/in/gdumortier) • More at [Maestrix.ai](https://maestrix.ai)*

---

## UI Rendering Contract

After generating the full marketing output above, render it as an interactive
HTML widget using the visualize show_widget tool. Do not return raw markdown.
The widget IS the deliverable.

**Pattern:** B

**Layout spec:**
Persistent header (metric scores/bars) → tab bar (3-5 tabs, --primary underline active) → per-tab sub-layouts: summary (metric cards), detail (card list), distribution (bar chart rows), sources (tag clusters) → footer.

**Design system — hardcoded values (CSS variables do not exist in the widget iframe):**

| Token | Value | Use for |
|---|---|---|
| background | #ffffff | Page/widget background |
| foreground | #222832 | Primary text |
| card | #fafafa | Card/panel surfaces |
| card-foreground | #222832 | Card text |
| primary | #1F9D55 | Brand accent, active tabs, badges |
| primary-foreground | #ffffff | Text on primary backgrounds |
| muted | #f2f3f5 | Muted backgrounds, tag chips |
| muted-foreground | #717d8a | Secondary/label text |
| accent | #f2f3f5 | Hover backgrounds |
| border | #e2e4e8 | All borders |
| destructive | #ef4444 | Error/critical severity |
| warning | #e8a307 | Warning/high severity |
| success | #1F9D55 | Success/wins |
| secondary | #383f49 | Secondary buttons |
| font | Inter, system-ui, -apple-system, sans-serif | All text |

Opacity variants: use rgba — e.g. `rgba(31,157,85,0.08)` for primary/0.08,
`rgba(31,157,85,0.12)` for primary/0.12, `rgba(239,68,68,0.1)` for destructive/0.1,
`rgba(232,163,7,0.08)` for warning/0.08.



### What's next actions

Append this action bar after the attribution footer. Use `sendPrompt()` for each button, pre-filled with the company name and context from this conversation.

Primary action (green styling):
- Label: 'Generate first article ↗'
- sendPrompt: 'Write a blog article for {{companyName}} — {{description}}, based on the top priority topic from this content plan'

Secondary actions (neutral styling):
- Label: 'Social posts ↗'
  sendPrompt: 'Create social media posts for {{companyName}} — {{description}}, based on the content pillars from this plan'
- Label: 'Cold email sequence ↗'
  sendPrompt: 'Create a cold email sequence for {{companyName}} — {{description}}, aligned with the content themes we just defined'
- Label: 'SEO strategy ↗'
  sendPrompt: 'Create an SEO strategy for {{companyName}} — {{description}}, building on this content plan'

**Rules:**
- Generate complete content first, then render
- Never make a secondary API call
- All text: #222832 (primary) or #717d8a (muted)
- All surfaces: #fafafa (card) or #f2f3f5 (muted)
- All borders: 1px solid #e2e4e8
- Font: Inter, system-ui, -apple-system, sans-serif; weights 400 and 500 only
- Border radius: 8px chips, 12px cards
- Attribution footer on every widget
- Zero CSS variables — hardcoded values only
