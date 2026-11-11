# Implementation handoff package

Use this reference after the identity is approved or when the user explicitly asks for a package another designer, developer, or agent can apply.

## Principle

A handoff is an operational source of truth, not a mood board. It should let an implementer apply the brand without inventing missing rules or reopening settled choices.

State authority clearly: brand guidance changes presentation and language; it does not authorize changes to calculations, information architecture, privacy, security, recovery, consent, or established product behavior unless the user explicitly includes those changes.

## Recommended package

Adapt filenames to the brand:

```text
brand/
|-- README.md
|-- BRAND-HANDOFF.md
|-- IMPLEMENTATION-BRIEF.md
|-- brand.tokens.json
|-- brand.tokens.css          Optional, when web implementation is likely
|-- asset-manifest.json
|-- brand-identity-v1.svg
|-- brand-identity-v1.svg.png
|-- brand-lockup.svg
|-- brand-mark-transparent-dark.svg
|-- brand-mark-transparent-light.svg
|-- brand-app-icon-light.svg  When relevant
`-- brand-app-icon-dark.svg   When relevant
```

Keep superseded studies out of the delivery archive or label them unambiguously as non-production.

## Brand handoff contents

The main guide should include:

1. **What is locked:** name, descriptor, brand line, promise, and boundary.
2. **Decision hierarchy:** product truth, safety/accessibility, behavior, brand expression, decoration.
3. **Product/business expression:** the information or experience hierarchy the brand supports.
4. **Visual identity:** mark meaning, clear space, minimum size, color, typography, layout, motion, and misuse.
5. **Voice:** behavioral rules plus use/avoid examples for normal and difficult states.
6. **Accessibility and trust:** contrast, focus, scaling, labels, uncertainty, provenance, and high-stakes language.
7. **Acceptance checklist:** observable conditions for a brand-complete implementation.
8. **Scope note:** unresolved or excluded work such as a full dark theme, illustration system, or public trademark clearance.

For umbrella brands, document studio identity and product signature separately. Define exactly where each may appear and prohibit forced product resemblance.

## Tokens

Use semantic token names rather than palette nicknames alone. Include only approved values.

- Background, surface, primary/secondary text, borders, focus, data, and accents.
- Typography families, sizes, weights, and numeric treatment.
- Spacing, radii, shadow, and motion when they are part of the system.
- Theme and status metadata, including whether dark mode is actually approved.

Check contrast for essential combinations and record the ratios or constraints in the guide. Decorative low-contrast values must be labeled as such.

Do not invent semantic success/warning/error colors from decorative accents. Do not infer an application dark theme from a dark app icon.

## Assets

- Prefer SVG masters for marks and lockups.
- Supply transparent dark and inverse variants.
- Include 1024px app-icon masters when an app icon is part of the assignment.
- Preserve geometry, opacity, clear space, and aspect ratio.
- If a wordmark contains live font references, label it provisional. Convert final public artwork to outlines only after the typeface is selected and licensed.
- Render and inspect assets, including small-size and light/dark contexts. XML validity alone does not prove visual correctness.
- Keep preview PNGs separate from editable masters and say which is authoritative.

The asset manifest should name each file, its intended role, production status, and any caveat.

## Implementation brief

Provide a short, ready-to-paste brief that tells another agent to:

- Read the handoff, tokens, and manifest before editing.
- Preserve product logic and established flows.
- Map tokens into the existing theme system instead of scattering raw values.
- Use approved assets without redrawing them.
- Apply the brand's product-expression and voice rules.
- Verify responsive behavior, accessibility, and existing tests.
- Report changed files, token mappings, screenshots, test results, and deliberate deviations.

## Validation

Before delivery:

- Parse JSON token and manifest files.
- Validate SVG/XML.
- Render and visually inspect the approved assets.
- Verify every referenced file exists.
- Test the archive and remove operating-system metadata files.
- Make the entry point obvious.

If the package is meant for public launch, separately flag name clearance, font licensing, image rights, and any other unresolved legal dependency. A practical search screen is not legal clearance.
