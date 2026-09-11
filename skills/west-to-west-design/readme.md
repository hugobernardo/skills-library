# West to West — Design System

**West to West** is a San Francisco non-profit bridging Portugal and Silicon Valley. It helps Portuguese founders land in the Bay Area (landing support, mentorship, networking), recruits Bay Area operators/investors as mentors, and partners with institutions (Consulate, AICEP, FLAD, Startup Portugal, Portugal Ventures, universities). Tagline: **"Bridging Portugal and Silicon Valley."**

Three audiences, one system: recruit founders, recruit mentors, reassure institutional partners. The brand must read as a credible peer to consulates and public agencies — a well-run institution, warm but not soft, confident but not loud. No startup-hype tropes.

**Sources**
- Live site code: https://github.com/hugobernardo/westtowest-website-v2 (`index.html`, single-page site, March 2026) — the ground truth for tokens, components, and copy. A local copy is at `reference/website-index.html`. Explore the repo for anything not captured here.
- Uploaded brand assets: lighthouse logo in red/black/white (SVG + PNG), social avatar. Now in `assets/`.

## CONTENT FUNDAMENTALS

- **Voice:** experienced, practical, direct, generous, peer-to-peer, low-ego, globally minded. Credible over promotional. Written by operators, for operators.
- **We/you:** first-person plural "we" for the org, direct "you" for the reader. "We help ventures setup in Silicon Valley…", "If you're an entrepreneur…"
- **Casing:** Title Case for headings and nav ("How We Help Ventures Succeed", "Ask For Help"); sentence case for body. Section eyebrows are uppercase with letter-spacing ("OUR MISSION").
- **Length:** headings short and declarative; body copy in full, plain sentences — no fragments, no exclamation marks, no hype adjectives.
- **Emoji:** never.
- **CTAs:** plain verbs — "Join Us", "Learn More", "Subscribe", "Ask For Help →", "Offer Help →". Arrows (→) allowed on secondary CTAs.
- **Narrative device:** the Age of Discovery echo — "Portuguese entrepreneurs discovered half of the world during the *Age of Discovery.* Now it's time to help the world discover Portugal and its modern-day entrepreneurs." Use sparingly as rhetoric, never as visual clip-art (no galleons).
- **Reciprocity framing:** "Join us if you need help or want to help." Two-sided asks (Ask For Help / Offer Help) are a recurring structure.

## VISUAL FOUNDATIONS

- **Color:** Ink `#0B1220` (dark surfaces, text), Dark Ocean `#0B3958` (primary action/brand blue), Cloud `#F8FAFC` (page bg), White (cards). Accents: Flag Green `#36D0A3` (highlights, eyebrow ticks, active states, hero CTAs) and Sky `#74B9DD` (rare). Neutrals: slate 900/600/200. The lighthouse logo adds Lighthouse Red `#D05353` — used only for the brand mark, not for UI. Palette is Portugal-flag-coded (green + red + ocean blue), not generic startup blue. Max 1-2 dark sections per page (testimonials on Ink, newsletter strip on Dark Ocean).
- **Type:** Sora (400–700) for headings and quotes; Inter (400–600) for body/UI. H1 48/56 (hero 68/76), H2 36/44, H3 24/32 600, body 16/26, body-l 18/28, small 14/22, label 14/16 600. Italic em in Sora used for emphasis inside hero copy, colored flag-green.
- **Spacing:** strict 8pt scale (`--sp-1…--sp-16`). Container max 1120px, 32px side padding. Sections pad 88px vertical. Nav 72px tall.
- **Backgrounds:** flat color sections alternating White/Cloud/Ink; one photographic hero with a dark ink→ocean scrim (`--hero-scrim`) plus a faint 64px grid overlay; concentric-ring decoration at 7% opacity (lighthouse-beam echo). No gradients elsewhere, no textures.
- **Imagery:** cool-toned coastal/bridge photography (current hero is a stock Golden Gate shot — replace with real West to West photos when available). Always behind the scrim when text sits on it.
- **Radii:** 6px (buttons, inputs, small chips), 12px (cards), 20px (rare, large). **Shadows:** three-step ink-tinted (`--shadow-sm/md/lg`); cards get border `1px solid slate-200` + white bg, shadow only on hover.
- **Motion:** ease `cubic-bezier(0.25,0.46,0.45,0.94)`, 0.2–0.5s. Scroll-reveal fade-up (28px) with 0.1s stagger. Hovers: cards lift −4px + shadow-lg + green top-bar scaleX reveal; buttons lift −1px + darken; logos opacity 0.35→0.8. No bounces, no parallax.
- **Buttons:** primary = Dark Ocean fill, white text (on dark heroes: Flag Green fill, Ink text); outline = 1.5px Dark Ocean border, fills on hover. 14px/600 Inter, 14×28 padding, radius 6px.
- **Transparency/blur:** only in the scrolled nav (white 96% + 12px blur) and mobile menu overlay.

## ICONOGRAPHY

- **Style:** inline SVG line icons, 24px, `stroke-width: 1.5`, round caps/joins — matches Feather/Lucide. No icon font, no PNG icons, no emoji. Use **Lucide via CDN** for new icons (same weight); the live site inlines Feather-style paths (home, users, globe, chevrons) and a solid LinkedIn glyph.
- **Icon container:** 48px square, `rgba(11,57,88,0.06)` bg, radius 6px, icon in Dark Ocean.
- **Logo:** lighthouse-in-striped-tower + "WEST TO WEST" wordmark in a keyline box. Variants in `assets/`: `logo-red.svg/.png` (#D05353), `logo-black.svg/.png` (#333333), `logo-white.svg/.png` (for dark grounds). `social-avatar.png` = white-on-navy square. Use white on dark sections, black on light, red only as a standalone brand moment. Never redraw or recolor the mark.
- **Unicode:** → arrows in CTA labels; typographic quotes around testimonials.

## Index

- `styles.css` → `tokens/` (fonts, colors, typography, spacing, effects)
- `assets/` — logos (3 variants, SVG+PNG), `social-avatar.png`, `sponsors/` (FLAD, Portugal Ventures, Startup Braga, SATA Azores, AICEP), `hero-golden-gate.jpg`
- `components/core/` — Button, SectionHeader, NewsletterForm
- `components/cards/` — ServiceCard, InvolvedCard, OfficerCard, TestimonialSlider
- `components/navigation/` — NavBar, Footer, SponsorRow
- `ui_kits/website/` — full homepage recreation (`index.html`)
- `guidelines/` — specimen cards for the Design System tab
- `reference/website-index.html` — verbatim copy of the shipped site
- `SKILL.md` — agent skill entry point

**Intentional additions:** none — component inventory matches the shipped site exactly.

**Notes / caveats:** Fonts are Google-hosted (Sora, Inter) via `tokens/fonts.css` @import — no local binaries. An unshipped redesign proposal (Ocean #1D4ED8/Coral/Emerald) exists but was NOT adopted; this system codifies the shipped flag-coded palette.
