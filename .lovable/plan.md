# Homepage refinements (from annotated PDF)

Surgical, visual-only changes. No business logic touched.

1. **Main navbar row → white** (`SiteHeader.tsx`)
   Change the main nav strip (logo + Home/About/Services/… + Get a Quote) background from the current gray to white. Top utility bar stays unchanged.

2. **Hero eyebrow → bold** (`src/routes/index.tsx`)
   Make the eyebrow label bold on all 3 hero slides ("Industrial · Process Plant", "Industrial · Institutional", "Manufacturing" — whatever the 3 current labels are; preserving existing text).

3. **About mega-dropdown → rebalance 40/60** (`SiteHeader.tsx`)
   Shorten the black left panel's width and tighten the white right panel so there is less empty space. Target proportions ~40% black / 60% white, with overall panel width reduced.

4. **Gallery mega-dropdown → narrower** (`SiteHeader.tsx`)
   Reduce overall panel width using the same pattern as About.

5. **"Capabilities across the full construction lifecycle" section → white bg** (`src/routes/index.tsx`)
   Swap the cream/beige background for white. Keep all content and cards unchanged.

6. **"Engineered to last. Delivered to plan." (Why MCC) section → white bg** (`src/routes/index.tsx`)
   Same swap: cream → white.

7. **Trusted By marquee → black text** (component used on index)
   Keep current background. Change logo/text color from light to black so it reads on the (now lighter) surrounding sections.

8. **Footer → pure black background** (`SiteFooter.tsx`)
   Change the entire footer background from dark navy to `#000`. Adjust any token-based muted text colors only if contrast breaks.

## Out of scope
- No content rewrites, no new sections, no route changes, no logic changes.
- "BUILDING SINCE 2013" footer text stays as-is.
