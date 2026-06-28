
Apply every change listed in MCC_UI_Changes.pdf. Strictly visual/text/layout — no business-logic or data changes.

## Global header — `src/components/SiteHeader.tsx`
- **H1**: enlarge logo (increase `h-8`/equivalent to roughly `h-12 md:h-14`), preserve aspect ratio.
- **H2**: top-bar location text → `EST. 1997 · BHIWADI · DELHI`.
- **H3**: drop `(Bhiwadi)` / `(Delhi)` labels from phone strings; add a `Mail` icon before `info@mcc.co.in` matching the phone-icon style.
- **About dropdown** (About-page items 1–4):
  - Reduce panel padding/width so it's more compact.
  - Push "EXPLORE ABOUT" CTA toward the bottom of the teaser column (flex column + `mt-auto`).
  - Increase teaser headline ("Built on trust, measured in milestones.") font size to fill the panel.
  - Strip trailing full stops from Overview / Our Team / Director's Message descriptions.
- **Gallery dropdown** (Gallery items 3–6):
  - Enlarge "Our work, recognised." headline.
  - Push "VIEW GALLERY" CTA lower.
  - Reduce dropdown panel width (eliminate right-side empty space).
  - Strip trailing full stops from Awards & Recognitions and CSR descriptions.

## Home — `src/routes/index.tsx`
- **H4**: unify About-MCC paragraph block to one consistent size and colour (e.g. `text-base text-muted-foreground` for both paragraphs).
- **H5**: align/space the 4-item checklist evenly (grid with consistent gap, identical icon + text styles).
- **H6, H8, H9, H12, H14**: make section eyebrows `ABOUT MCC`, `WHAT WE DO` (x2), `WHY MCC`, `LET'S BUILD` **bold** (`font-bold`) without enlarging.
- **H7**: stats bar — keep `₹1000 Cr+` on a single line (`whitespace-nowrap`) and tighten spacing so all 4 cards distribute evenly.
- **H10**: "WHAT WE DO" headline — enlarge + bold, reduce surrounding whitespace.
- **H11**: services grid currently shows 5 cards with an empty 6th cell. Switch to `lg:grid-cols-3` with the last 2 cards centred (wrapper trick: `lg:grid-cols-6` + `lg:col-span-2`, last row offset).
- **H13**: "WHY MCC" headline — wrap **"build relationships"** in `text-accent` (#F5821F), enlarge, bold; reduces right-side whitespace.
- **H15**: footer "GET IN TOUCH" block — split into 2 columns (Bhiwadi office | Delhi office) with phone clearly under each.
- **H16**: fill the empty right area of the footer with an **embedded Google Maps iframe** (no API key needed) pinning the Bhiwadi head office.

## About — `src/routes/about.tsx`
- **A5**: fix hero headline kerning — replace the wide `tracking` on `conviction.` so its letter/word spacing matches the lines above.
- **A6**: "Built to Last." — enlarge heading (e.g. `text-6xl md:text-8xl`), let it fill the left column.
- **A7**: right-side paragraph block — unify size & colour across all 3 paragraphs (`text-base text-muted-foreground leading-relaxed`).
- **A8**: make "OUR VISION" and "OUR MISSION" eyebrows identical in size, weight, colour, tracking.
- **A9**: "Built on the right foundations." — enlarge, reduce whitespace.
- **A10**: trim the horizontal connector line so it ends exactly at point 04 (cap the absolute line at `right` of the 4th col, not full container width).
- **A11**: 4 value headings (Quality, Trust & Reliability, Safety, Client-Centric Approach) — increase font size slightly + bold.
- **A12**: "Timeline." heading — enlarge slightly + bold; reduce whitespace.

## Services — `src/routes/services.tsx`
- **S1**: left-edge align `CAPABILITIES`, headline `Full-stack contractors.`, and body paragraph so all start at the same `pl-0` baseline within the container.
- **S2**: services array — render icon **inline** beside heading (`flex items-center gap-3`) instead of above.
- **S3**: swap Residential icon → `Home` (house) from lucide.
- **S4**: swap Institutional & Hospitality icon → `School` or `Hotel` from lucide.
- **S5, S6**: remove grey background bands on left & right edges of the card grid — set section background to `bg-background` (white).
- **S7**: "A transparent delivery process." — enlarge / bold to fill the block.
- **S8**: 5 step sub-headings (Brief, Estimate, Mobilise, Build, Hand-over) — increase font size + bold.

## Clients — `src/routes/clients.tsx`
- **C1**: headline bold; wrap `build India` in `text-accent` (#F5821F).
- **C2**: sub-paragraph alignment — match heading's left edge (`pl-0`, container alignment).
- **C3**: add `Residential` filter button to the existing filter tuple `[All, Industrial, Warehousing, Commercial, Institutional, Hospitality, Residential]`; widen `Sector` type.

## Gallery — `src/routes/gallery.awards.tsx`
- **G1**: change `GET A QUOTE` button colour to navy (match other pages — `bg-primary text-primary-foreground` instead of any orange variant).
- **G2**: fix sub-paragraph formatting & alignment to match other hero sub-paragraphs.

## Gallery — `src/routes/gallery.csr.tsx`
- **G7**: bold the `GALLERY · CSR` eyebrow.
- **G8**: fix sub-paragraph formatting & alignment.
- **G9**: force line break — `Building` line 1, `beyond the brief.` line 2 (`<br/>` between words).

## Careers — `src/routes/careers.tsx`
- **CA1**: wrap `great people` in `text-accent` (#F5821F).
- **CA2**: fix hero sub-paragraph alignment under heading.
- **CA3**: enlarge 3 card sub-headings (Built to last, Room to grow, Lead from the front) + bold.
- **CA4**: bold the `APPLY` eyebrow.
- **CA5**: enlarge `Send us your application.` heading + bold.
- **CA6**: move BROWSE button to the right end of the upload field (`justify-between` instead of `justify-start`).

## Contact — `src/routes/contact.tsx`
- **CT1**: change hero background from navy (`bg-primary`) to **black** (`bg-ink` or `bg-black`); keep heading text unchanged.
- **CT3**: Bhiwadi address — break onto 2 lines: line 1 `A-168, Bhagat Singh Colony,`, line 2 `Bhiwadi, Rajasthan – 301019`.
- **CT4**: Delhi address — break onto 2 lines: line 1 `L-84B, First Floor,`, line 2 `Malviya Nagar, Delhi – 110017`.

## Technical notes
- Footer map: plain `<iframe src="https://www.google.com/maps?q=...&output=embed">` — no Google Maps Platform connector needed.
- All colours via existing tokens: `text-accent` = #F5821F, `bg-primary` = #0F2A4A navy, `bg-ink`/`bg-black` for the new Contact hero.
- No new dependencies. No route additions. No data/business-logic changes.

Confirm and I'll implement in a single pass.
