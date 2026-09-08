# Checklists by pass

Use these when the companion skill or MKT1 tool is not available in the session. They are the minimum; the companion skills go deeper.

## Pass 0: Before anything
- Fetch the domain. No response, a parked page, a login wall, or head metadata with no body: stop and say so. Head-only responses usually mean client-side rendering; that is the first finding, and a curl is needed to confirm before describing the company from memory

## Pass 1: Company overview
- One-line description (from meta description or hero)
- Founders and titles (team page), HQ, stage, funding if public
- Business model: tiers, prices, billing terms; enterprise/custom
- GTM motion: self-serve, sales-led, or hybrid; state which dominates revenue, not which is loudest on the page
- Primary buyer (economic) and secondary buyers; TAM shape (broad vs a finite listable set)
- Category: established / emerging / new; named competitors; ecosystem partners
- Mark inferred values DRAFT; end with 3 to 4 questions the public web cannot answer (revenue, customer count, priority channel, funding)

## Pass 2: Homepage positioning
- Extract hero: H1, subhead, CTAs, trust strip. Then full page: sections, proof, audience segments, nav, closing CTA
- Score hero and full page separately: Who / What / Why (Clear, Partially clear, Unclear) plus comparator (Yes / Partially / No)
- Grade A to F with +/-; early-stage sites must do the positioning work in the hero
- Product type: 10x Better (vs incumbent), New Way (vs doing nothing), Vertical Solution (vs horizontal), Buy vs Build
- CTAs: primary clear? secondary competing? nav distinct? sections dead-ending?
- Messaging mistakes: no transformation, audience too broad, missing benefits, no credibility, weak personality, no intrigue, category confusion, multi-use-case overload, positioning mismatch
- Suggested headline under 8 words; subheadline 16 to 19 words

## Pass 3: Competitive research
- Competitor set: the free/incumbent default, the best-funded direct rival, the content owner of the category, plus one adjacent
- Per company: domain, HQ, GTM, primary audience, hero H1, who/what/why summary, product type, public pricing (Yes / No / JS-shell), starting price or engagement model (services), homepage logos, case study customers, compliance badges
- Leave blank: follower counts, funding, headcount, schema, hero-in-raw-HTML unless verified by curl
- Spot-check: name the second source or call it unverified
- Audience-lens comparison: summary paragraph, apples-to-apples table (max 8 rows, include "How they describe themselves"), source quality table (max 6 rows), findability table (one row per company)
- Always ask once about a recurring rerun (monthly default)

## Pass 4: SEO technical and on-page
- Fetch homepage on both hosts; note redirect direction; compare og:url and og:image host to canonical host
- Look for `canonical:` in fetch output; absence across pages plus GSC "duplicate without user-selected canonical" confirms missing canonicals
- Titles: unique, 50 to 60 chars, keyword first; meta descriptions 150 to 160
- One H1 per page; H2 structure; body word count
- In-body internal links (not nav/footer); external citation links
- Image alt coverage; site-wide meta keywords
- Grep visible text for `[PLACEHOLDER`, `TODO`, `keep sourced`, `draft in`, `coming soon`, `Lorem ipsum`, `First choice`, `Page One`, `Collection`, `placeholder-image`, `Select one...`; check whether the title is a CMS default ("- Main", "Home", "Untitled") and whether the meta description is a form label or CTA fragment rather than a sentence about the company
- Count H1s; if more than one, quote each and note whether they make the same claim
- Look for blocks repeated on the same page (same heading and body appearing 2+ times); flag as duplicate on-page content
- Single-page site with anchor links? State it first; it reframes indexation, titles, hub, and comparison findings
- Open Graph: og:title, og:description, og:image, og:url each present or missing
- Content hub: does each answer/article have its own URL?
- /vs/, /compare, /alternative pages present?
- E-E-A-T: named customers, bylines, linked stats, labeled geography for track-record numbers, team page, address, legal pages

## Pass 5: Client data
- Search Console export CSVs: Chart (indexed / not indexed / impressions by day), Critical issues (reason, pages), Non-critical, Metadata (sitemap source; "All known pages" usually means none submitted)
- Common reasons and actions: Duplicate without user-selected canonical (add canonicals); Page with redirect (benign); Not found 404 (find and 301); Alternate page with proper canonical (benign); Discovered/Crawled currently not indexed (thin or duplicate content)
- Rich Results Test: detected items or "No items detected"; crawl allowed; indexing allowed; HTTP headers (framework, `X-Nextjs-Prerender`, HSTS, `Age`); resources that failed
- Correct earlier findings explicitly

## Pass 6: AEO / GEO
- Query table: what is [category]; how do I [job]; best [category] for [ICP]; [incumbent] alternative; [client] vs [competitor]; [client]; one uncontested query. Cited today vs client
- Why competitors are cited: dedicated URL per question, sourced stats, named authorship, schema, dates, third-party mentions
- Extractability per key page: definition first paragraph, 40 to 60 word answer blocks, linked stats, comparison table, FAQ, schema, author, date, query-phrased headings
- Entity: Organization schema with sameAs/address/foundingDate; host consistency across canonical, og:url, sitemap, schema @id; founder entities; Business Profile; partner-status verifiability; third-party mentions; naming consistency; parent, group, or sibling brands linked from the footer or logo that an LLM could merge with the client (name the relationship in schema with `parentOrganization` or leave it out, but do not let a footer link do the talking); copyright year current
- Keyword collisions: does a coined term already mean something else in search?
- Fan-out cluster: list the 5 to 10 sub-queries an AI generates around the parent query; map to pages
- Machine-readable: draft /llms.txt and /pricing.md; robots.txt should allow GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot
- Presence: partner and app-marketplace directories, one podcast, LinkedIn Articles, outreach to the guides that own the citation pool; skip Reddit as a program
- Monitoring: 8 queries x 3 platforms x 3 to 5 runs monthly; track rate, not single runs

## Pass 7: Schema
- Shared Organization node with `@id`; reference from every page
- Homepage: Organization, WebSite, WebPage, plus SoftwareApplication/Product with live offers only (product or SaaS) or ProfessionalService/Service with hasOfferCatalog (services firm)
- Pricing: OfferCatalog; unpriced tiers without `price` (warning acceptable)
- About: AboutPage, Person nodes with sameAs
- FAQ and answer pages: FAQPage with verbatim on-page Q/A text; Article with author and dates
- Vertical, industry, or solution pages: WebPage (+ BusinessAudience), BreadcrumbList
- Never: aggregateRating without reviews, unreleased offers, HowTo for descriptions
- Server-render; mark unknowns TODO; grep built HTML for TODO before ship
- Validate on six URLs with Rich Results Test; check Search Console Enhancements after 7 to 14 days
