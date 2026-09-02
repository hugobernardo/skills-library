# Stage 3 — Design system, build, and QA

Contents:
1. Deriving the design system
2. Design principles
3. Building the file
4. The QA loop
5. Editing a deck the person has already changed

---

## 1 · Deriving the design system

Confirm the system before building fifteen slides in it. Where does it come from, in order of preference:

1. **An existing template or prior deck** the person points to. Study it and treat it as the primary reference. Don't invent new patterns when an established system exists.
2. **Brand material** — brand book, visual principles document, website, logo files. Derive type, colour, imagery rules and iconography from it.
3. **Nothing** — propose a system and get it approved before building.

Whichever source, write the system down explicitly before you build. It should specify:

- Canvas size (16:9, 13.333 × 7.5in is standard) and margins
- A grid — columns and gutters
- Colour roles: the ground, the ink, the primary, the single accent. Name what each is *for*, not just its hex value
- Type: heading face, body face, and a size scale with real numbers
- A small set of named layouts — four or five is plenty. Something like *statement*, *photo*, *evidence*, *number*, *diagram*
- Imagery direction and what to avoid
- Diagram conventions

Two things worth checking in brand material. **Voice rules often don't apply.** A brand book written for customer-facing communication may ban exactly the vocabulary an internal or investor audience expects. If a document governs one audience and you're building for another, say so rather than silently violating it or silently obeying it. And **brand documents contradict themselves** — a palette section and a components section written months apart. Flag the conflict; don't average.

Show two or three sample slides that exercise the range of the system — a text-led one, a dense evidence one, a diagram one — before building the rest. If those three hold, the others follow.

---

## 2 · Design principles

**One idea per slide.** Every slide has one dominant communication objective.

**Visual hierarchy.** The audience should know instantly what to look at first, second, third.

**Restraint.** Don't fill space because it exists. Whitespace reads as confidence.

**Show rather than explain** where possible.

**Consistency without repetition.** Slides should belong to one system without all having identical layouts.

**Presentation distance.** Design for someone across a room, not twelve inches from a page. This kills most small type and most low-contrast text.

**Data integrity.** Charts make the insight obvious without distorting the data. Truncated axes and rescaled comparisons get noticed.

**Minimal ornamentation.** No gratuitous icons, boxes, gradients, arrows, decorative diagrams or stock photography. Two specific things read as filler to a design-literate audience: accent stripes along the edge of a card, and a thin rule under every title.

---

## 3 · Building the file

Default output is PowerPoint — editable, opens in Google Slides and Keynote, exports clean to PDF.

**New deck:** generate it with `pptxgenjs` (Node) or `python-pptx`. Whichever you use, keep the generator in a script file rather than composing slides ad hoc, so revisions are a diff rather than a rebuild.

**Existing deck, or one the person has edited:** edit in place with `python-pptx`. See section 5.

If a `pptx` skill is available in the session, read it before building — it carries the current library gotchas, and the failure modes it lists (colour formats that corrupt the file, chart XML PowerPoint refuses, coordinate systems that silently drop shapes off-canvas) will cost you a rebuild each if you meet them fresh.

Things that reliably go wrong and are cheap to prevent:

- **Fonts.** The font name you write is rendered by the reader's machine. If the design calls for fonts they may not have, say so and tell them where to get them, or choose fonts that ship with the OS.
- **Theme effects.** Shapes added programmatically often inherit a theme drop shadow. If the design is flat, strip the style reference explicitly — an empty effect list alone may not be enough.
- **Text boxes have internal padding.** Set it to zero whenever text must align with a shape edge.
- **Speaker notes go in the notes field**, never in a text box on the slide.
- **Placeholders must look like placeholders.** If content is pending, mark it clearly. A plausible-looking invented figure is worse than an obvious gap, because it can survive into the room.

---

## 4 · The QA loop

Never deliver a deck you haven't looked at. Text overflow and collisions are invisible in code and obvious on screen.

```
build → validate → render to images → inspect every slide → fix → re-render
```

**Validate.** If a validation script is available, run it. Structural faults that make a file refuse to open are worth catching before a person does.

**Run the mechanical check.** `scripts/deck_check.py` reports the faults that are unambiguous in geometry — shapes off-canvas, text past the slide edge, slides missing presenter notes — plus warnings for tight margins and possible overlaps, and an inventory of every unfilled placeholder so none reaches the room by accident.

```bash
python scripts/deck_check.py deck.pptx
```

It deliberately does not attempt to detect text overflow, because estimating rendered text extent without a layout engine produces confident wrong answers, and overflow is the defect that matters most. Clearing this check does not mean the deck is fine; it means the cheap faults are gone and your eyes are now the only thing standing between the deck and the room.

**Render.** Convert to PDF, then to per-slide images:
```bash
soffice --headless --convert-to pdf deck.pptx
pdftoppm -jpeg -r 110 deck.pdf slide
```

**Inspect with fresh eyes.** After writing the generator you see what you intended rather than what rendered. If subagents are available, hand the images to one with an explicit defect checklist — it will find things you look straight past. Otherwise force yourself to check mechanically, slide by slide, against the list.

What to look for, in priority order:

1. Text overflowing its container, clipped, or running past the slide edge — the most common defect, always visible to the audience
2. Overlapping elements: text over text, text through shapes, footnotes colliding with content above
3. Elements under ~0.3in apart, or margins under ~0.5in from a slide edge
4. Misalignment — columns, cards or repeated rows not sharing baselines or edges
5. Unintended drop shadows on flat designs
6. Low-contrast text, especially light-on-light and pale text on dark grounds
7. Uneven whitespace — a cramped area next to a dead one
8. Leftover placeholder text

**Expect two rounds.** The first pass finds real defects; fixing them sometimes introduces one more. Re-render after every fix — the PDF must be regenerated from the edited file before the images reflect anything.

**Then run the four final tests** from the main skill: headline, five-second, presenter, transformation.

---

## 5 · Editing a deck the person has already changed

This matters more than it sounds, and getting it wrong destroys work.

People edit decks between turns — rewriting copy, adding speaker notes, regrouping shapes, running the file through Google Slides. If you regenerate from your build script, all of it disappears silently.

The sequence:

1. **Read the current file back** before touching anything.
2. **Diff it against what you produced.** Extracting all text and notes from both and comparing is quick and shows exactly what changed.
3. **Tell them what you found** — the copy edits and notes you're preserving.
4. **Edit in place** with `python-pptx`: delete the specific shapes you're replacing, add the new ones, leave everything else alone.
5. **Never regenerate from the script** once they've edited, unless they say the file is disposable.

Two details that save trouble. Text inside grouped shapes doesn't appear in a naive shape walk, so a slide can look empty when it isn't — recurse into groups before concluding anything is missing. And when a change spans several slides, apply it from the current file each time rather than accumulating edits in a working copy that drifts from what they have.

If they ask you to keep specific edits, treat an *absence* as possibly deliberate too — a speaker note they deleted may have been deleted on purpose. Flag it rather than restoring it.
