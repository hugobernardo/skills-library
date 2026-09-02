---
name: create-gtm-strategy
description: Generate comprehensive go-to-market strategy with launch plan, channels, and metrics. Use this when users request GTM strategy, go-to-market plan, product launch strategy, or market entry plan.
---

> **EXECUTION RULE**: Generate the complete marketing output yourself, then render it as an interactive HTML widget using the `show_widget` tool. Do not return raw markdown — the widget IS the deliverable. Use only hardcoded hex colors from the Maestrix design system below. Never use CSS variables — they do not exist in the rendering environment. Never make a secondary API call.

Create a comprehensive go-to-market strategy for product/feature launch or market entry.

## CONTEXT NEEDED

- Company name and description
- Product/feature being launched
- Target audience
- Launch timeline
- Budget range (optional)
- Competitive landscape (optional)

## GTM STRATEGY FRAMEWORK

### 1. Market Opportunity Summary

- Total Addressable Market (TAM)
- Serviceable Addressable Market (SAM)
- Serviceable Obtainable Market (SOM)
- Market timing factors
- Competitive white space

### 2. Target Audience Definition

**Primary Segment**
- Profile description
- Size and accessibility
- Pain points addressed
- Willingness to pay
- Decision-making process

**Secondary Segment**
- Profile description
- Expansion potential

**Anti-Personas** (who NOT to target initially)

### 3. Value Proposition & Positioning

**Positioning Statement**
For [target customer] who [need], [product] is a [category] that [key benefit]. Unlike [alternatives], we [key differentiator].

**Value Pillars** (3-4):
- Pillar name
- Customer benefit
- Proof point
- Competitive advantage

### 4. Pricing Strategy

| Tier | Price Point | Target Segment | Key Features | Rationale |
|------|-------------|----------------|--------------|-----------|

- Pricing model recommendation
- Competitive price positioning
- Promotional pricing (if applicable)

### 5. Channel Strategy

**Primary Channels**
| Channel | Role | Investment Level | Expected CAC | Timeline to Results |
|---------|------|------------------|--------------|---------------------|

**Channel Mix Rationale**

### 6. Launch Phases

**Phase 1: Pre-Launch** (Weeks -4 to 0)
- Activities
- Goals
- Deliverables

**Phase 2: Launch** (Weeks 0-2)
- Activities
- Goals
- Deliverables

**Phase 3: Post-Launch** (Weeks 3-12)
- Activities
- Goals
- Deliverables

### 7. Content & Messaging Plan

| Asset | Purpose | Audience | Channel | Due Date |
|-------|---------|----------|---------|----------|

List 15-20 launch assets.

### 8. Sales Enablement

- Battle cards
- Demo scripts
- Objection handling
- Competitive positioning
- ROI calculator

### 9. Partnership & Ecosystem

- Strategic partners to engage
- Integration opportunities
- Co-marketing potential

### 10. Metrics & Success Criteria

**Launch Metrics** (Day 1-30)
- Metric, target, tracking method

**Growth Metrics** (Day 31-90)
- Metric, target, tracking method

**Efficiency Metrics** (Ongoing)
- CAC, LTV, payback period targets

### 11. Risk Mitigation

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|---------------------|

### 12. Budget Allocation

| Category | % of Budget | Activities |
|----------|-------------|------------|

## QUALITY RULES

1. NO opening comments
2. Specific, actionable tactics
3. Realistic timelines and metrics
4. Clear ownership and accountability

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
- Label: 'Content plan ↗'
- sendPrompt: 'Create a content plan for {{companyName}} — {{description}}, aligned with the GTM strategy we just built'

Secondary actions (neutral styling):
- Label: 'Cold email sequence ↗'
  sendPrompt: 'Create a cold email sequence for {{companyName}} — {{description}}, targeting the ICP segments from this GTM strategy'
- Label: 'Google Ads ↗'
  sendPrompt: 'Create Google Ads for {{companyName}} — {{description}}, based on the channel strategy from this GTM plan'
- Label: 'Pipeline playbook ↗'
  sendPrompt: 'Create a pipeline playbook for {{companyName}} — {{description}}, building on this GTM strategy'

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
