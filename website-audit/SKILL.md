---
name: website-audit
description: Run the client website audit, an end-to-end SEO plus AEO/GEO review of a company site that ends in a six-section report delivered as markdown and .docx, plus a ready-to-ship JSON-LD schema file. Use this whenever a client is being onboarded, whenever the user says "audit [domain]", "website audit", "SEO audit", "AEO audit", "how do LLMs see [company]", "is [site] agent-ready", "positioning review of [site]", or asks for a competitive read of a client's category, even if they only name one of those pieces; the pieces are designed to run together and the report depends on all of them. Also use it when the user hands over a Search Console export or a Rich Results Test link, because those are the second-pass inputs this workflow expects.
---

# Website audit

An onboarding audit for a client website. It runs seven passes in a fixed order, asks the client for two things it cannot get itself, and ends in one report (markdown master, .docx copy) and one schema implementation file. The order matters because each pass feeds the next: the company overview sets the ICP the positioning review scores against, the competitive pass decides which comparison pages the SEO pass recommends, and the technical checks decide what the AEO pass can honestly claim.

The audience for the report is a contractor who will do the work. Every finding names the page, the element, and the change. No owners are assigned in the report unless the user asks; the user hands ownership out separately.

## Inputs

| Input | When | If missing |
|---|---|---|
| Client domain | Start | Ask. If it does not resolve or returns only head metadata, stop and report that before anything else; there is nothing to audit yet |
| Search Console Pages/Coverage export (zip of CSVs) | After the first SEO pass | Ask for it once, then proceed with "unverified" flags |
| Google Rich Results Test result link for the homepage | After the first SEO pass | Ask for it once. Without it, schema presence is unverified; never report "no schema" from a web fetch alone |
| Anything the client already knows (traffic baseline, priority queries, competitors) | Start, optional | Proceed with what the public web shows |

## Passes

Run these in order. Each pass has a companion skill or MCP tool; use it when available and fall back to `references/checks.md` when it is not. Do not skip a pass because a tool is missing; run the checks by hand.

### 1. Company overview
Tool: MKT1 `mkt1_company_overview` (MCP) if connected. Fetch the homepage, about, team, and pricing pages. Produce the one-line description, founders, stage, business model, GTM motion (self-serve / sales-led / hybrid), primary and secondary audience, market category and named competitors. Mark every inferred value as DRAFT. Note if the user is on the client's team page; it changes the tone of the report.

### 2. Homepage positioning
Tool: MKT1 `mkt1_homepage_positioning`. Grade the hero and the full page separately (A to F) on the three questions: who is it for, what is it, why is it better, plus comparator and product type (10x Better / New Way / Vertical Solution / Buy vs Build). List gaps with hero/full/both tags, and write a suggested headline (under 8 words) and subheadline (16 to 19 words). This section lives under the AEO half of the report as "Message clarity", because a named buyer and an explicit comparator are what an LLM extracts when it summarizes a company.

### 3. Competitive research, three angles
Tools: MKT1 `mkt1_competitive_research`, `mkt1_incognito_competitive_research`, `mkt1_aeo_audit`. Skip their multi-round intake menus; pick 3 to 4 competitors yourself and state the choice. Always include (a) the free or incumbent default the buyer would use instead, (b) the best-funded direct competitor, (c) whoever owns the how-to content for the category even if they are not a product competitor. Deliver: a CSV dataset the user can paste into Sheets, an audience-lens comparison (pick the lens from the client's primary ICP), and a source-quality / findability table. Leave raw-HTML-only cells blank and say so; never fill them from a rendered fetch.

### 4. SEO audit (first pass)
Tool: `marketing-skills:seo-audit`. Cover crawlability and indexation, canonicals and host consistency, Open Graph per page (og:title, og:description, og:image, og:url all present), titles and meta lengths, H1 count (more than one H1 making different claims is a positioning finding as well as a technical one), body copy volume, repeated blocks (the same section rendered more than once on a page), internal and external links, placeholder or internal-note text in production, content hub structure, comparison pages, E-E-A-T. Placeholder text includes CMS template defaults, not only bracketed notes: "Lorem ipsum", "First choice / Second choice" form options, "Page One", "Collection", placeholder-image assets, and titles like "[Company] - Main" or "Home" left by Webflow, Framer, or Squarespace. If the site is a single page with anchor navigation, say so up front: indexation is one URL, every section competes for one title, and the content-hub and comparison-page findings collapse into "no interior pages exist". Then stop and ask the user for the Search Console export and the Rich Results link. Do not guess indexation counts from a third-party search engine; a prior run reported "only the homepage indexed" when Search Console showed 30 pages, and the report had to be corrected.

### 5. Second pass with the client's data
Unzip the Search Console export and read every CSV (`Chart.csv`, `Critical issues.csv`, `Non-critical issues.csv`, `Metadata.csv`). Report indexed vs not-indexed, impressions per day, and each not-indexed reason with the usual cause and the action. Fetch the Rich Results link; read "No items detected" or the detected types, the HTTP response headers (rendering framework, HSTS, cache Age), and resource load failures. Correct anything from pass 4 that the data contradicts, and say so in the report.

### 6. AEO / GEO
Tool: `marketing-skills:ai-seo`. Build the query table: 8 queries (what is [category], how do I [job], best [category] for [ICP], [incumbent] alternative, [client] vs [competitor], [client] brand, plus one uncontested query the client could own). For each, list who is in the citation pool today. Run the extractability check on the three pages that matter. Assess entity signals (Organization schema, host consistency, Business Profile, third-party mentions, naming consistency, parent or sibling brands the footer or logos point to that an LLM could conflate with the client, stale copyright year). Draft `/llms.txt` and `/pricing.md`. Write the "what AI currently says about [client], and whether it's true" table from third-party scrapes (RocketReach, Crunchbase, search titles) against the live site.

### 7. Schema
Tool: `marketing-skills:schema`. Write the complete JSON-LD for every page type into a separate file `<client>-schema-implementation.md`: shared Organization node with `@id`, homepage graph, pricing OfferCatalog for a product or SaaS client (for a services firm use `ProfessionalService` or `Service` with `hasOfferCatalog` naming the engagements, never `SoftwareApplication`), about with Person nodes, FAQPage, Article + FAQPage for answer pages, WebPage + BreadcrumbList for the rest, plus a server-rendered component for the client's framework. Only mark up what is visibly on the page. Mark unknown facts `TODO`. Deliberately omit: unreleased tiers, aggregateRating without reviews, HowTo unless the steps are user actions. Include the testing checklist.

## The report

Write `<Client>_SEO_AEO_Audit_<YYYY-MM-DD>.md` using the structure in `references/report-template.md`. It is the master; the .docx is generated from it. Rules that came out of client review and should hold:

- Executive summary carries a "Not verified in this audit" box naming the checks that could not be run; the full list also goes in Appendix B.
- Scores (SEO 0-100, AEO/GEO 0-100) each get a one-line basis. State what a comparable site typically scores, or replace the number with a three-word verdict.
- Schema appears once, under SEO, with validation folded in. AEO cross-references it.
- Keyword and intent table is capped at five rows; the rest is one sentence.
- Positioning sits under AEO as "Message clarity".
- Fixes and action-plan tables carry impact / effort / confidence (high/med/low). No owner column.
- Section 4.4 is titled "What AI currently says about [client], and whether it's true".
- Plain operator language: no "leverage", "beachhead", "north star", "wedge"; numbers over adjectives; every fix names a page and an element. No em dashes.

Build the .docx:

```bash
node scripts/build_docx.js <report.md> [out.docx] ["<Client> SEO / AEO Audit"]
```

Then render and look at it (`soffice --headless --convert-to pdf`, `pdftoppm -jpeg -r 60`) before presenting. Present the .docx, the .md, and the schema file together.

## Hard rules

- Blank beats guess. A cell that needs raw HTML, a shell, or a login stays blank with a note.
- Web fetch strips scripts; it cannot see JSON-LD. Only the Rich Results Test or a browser can.
- Third-party search indexes are not Google's index. Indexation claims come from Search Console only.
- Placeholder text, internal notes, and "coming soon" tiers are findings, not things to tidy silently.
- Correct earlier findings in the report when later data contradicts them, and say that a correction was made.
- When a competitor's homepage returns only head metadata to a fetch, flag likely client-side rendering and say it needs a curl to confirm; do not describe their product from memory.

## Files

- `references/report-template.md`: the six-section report skeleton with the agreed section order and table headers.
- `references/checks.md`: condensed checklists for each pass, used when a companion skill or MCP is unavailable.
- `scripts/build_docx.js`: markdown to .docx (headings, tables, bullets, numbered lists, bold, inline code). Requires the `docx` npm package.
