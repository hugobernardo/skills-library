# Report template

Use this structure exactly. Replace bracketed text. Every table keeps its header row as written so reports are comparable across clients. Note: `build_docx.js` inserts a page break before every `##` heading except the first.

```markdown
# [Client] SEO / AEO Audit Report

**Site:** [domain]
**Date:** [Month D, YYYY]
**Inputs:** [pages crawled], Google Search Console export ([date range]), Google Rich Results Test ([date]), competitor sites and public web. [frameworks used]

---

## 1. Executive Summary

### Company overview
[One paragraph: what it does, for whom, origin/stage, routes to market, team.]

### Top business risk
**[One bold sentence.]** [Two to four sentences of evidence.]

### Scores
| Score | Value | Basis |
|---|---|---|
| **SEO (0-100)** | **[n]** | [What holds it up; what holds it down.] |
| **AEO / GEO (0-100)** | **[n]** | [Same.] |

### Fastest win
[Two sentences: the half-day change and what it removes.]

### Expected effort
| Horizon | Effort |
|---|---|
| Quick wins (week 1) | [engineer-days + copy hours] |
| Medium term (weeks 2 to 6) | [engineer-days + writer-days] |
| Long term (quarters) | [ongoing items] |

### Not verified in this audit
[Two or three sentences naming the checks that could not be run and why. Full list in Appendix B.]

---

## 2. Competitive Research

### Landscape
| Company | What it is | Price or engagement model | Where it shows up | Proof visible | Threat to [Client] |
|---|---|---|---|---|---|

### Where [Client] wins and loses
**Wins:** [semicolon list]
**Loses:** [semicolon list]

### How an LLM sees the set today
| Company | Findability | Biggest gap | One fix |
|---|---|---|---|

### Positioning implication
[One paragraph: the defensible ground nobody else claims.]

---

## 3. SEO Audit

### 3.1 Technical health
| Check | Status | Evidence |
|---|---|---|
[Rendering, HTTPS/HSTS, crawl/index permissions, host redirect, indexation (from GSC), canonical tags, Open Graph, sitemap/robots, structured data (from Rich Results), cache, CWV, organic traffic baseline]

### 3.2 On-page structure
| Element | Status | Detail |
|---|---|---|
[Titles, meta descriptions, headings, body copy, internal linking, external links, image alt, meta keywords, placeholder text, content hub, comparison pages, E-E-A-T]

### 3.3 Schema markup
**Current:** [from Rich Results Test]
**Recommended (full JSON-LD in `[client]-schema-implementation.md`):**
| Page | Schema |
|---|---|
Deliberate omissions: [list]. Implementation: [component approach].
**Validation**
- Rich Results Test result and date
- Conclusion (absent vs JS-hidden)
- Validation plan after implementation

### 3.4 Keyword and intent analysis
| Query family | Intent | Who owns it today | [Client] page | Gap |
|---|---|---|---|---|
[Five rows maximum. One sentence for supporting families. One sentence on keyword mapping.]

### 3.5 Fixes
| # | Fix | Impact | Effort | Confidence |
|---|---|---|---|---|

---

## 4. AEO / GEO Audit

### 4.1 AI visibility
| Query | Cited today | [Client] |
|---|---|---|
[Eight rows.]
**Why competitors are cited and [Client] isn't:** [one paragraph]
**Extractability of the three pages that matter:**
| Check | [page] | [page] | [page] |
|---|---|---|---|

### 4.2 Entity signals
| Signal | Status |
|---|---|

### 4.3 Message clarity
[One sentence on why positioning is an AEO input.]
**Hero Positioning Score: [grade].** [verdict]
**Homepage Positioning Score: [grade].** [verdict]
#### Positioning table
| Question | Hero | Full page |
|---|---|---|
**Product type:** [type and consistency]
#### Positioning gaps
1. ...
#### Suggested hero
- **Headline:** ...
- **Subheadline:** ...

### 4.4 What AI currently says about [Client], and whether it's true
| Claim in circulation | Source | Accuracy | Fix |
|---|---|---|---|

---

## 5. Prioritized Action Plan

### Quick Wins (week 1)
| # | Action | Impact | Effort | Confidence |
|---|---|---|---|---|

### Medium-Term Fixes (weeks 2 to 6)
| # | Action | Impact | Effort | Confidence |
|---|---|---|---|---|

### Long-Term Strategy (quarterly)
| # | Action | Impact | Effort | Confidence |
|---|---|---|---|---|

---

## Appendix A. Data sources
## Appendix B. Not verified in this audit
## Appendix C. Companion file
```
