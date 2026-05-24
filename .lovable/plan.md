# About page refinements

All changes are scoped to the About area only.

1. **#11 — Hero heading layout**
   "Concrete, steel, conviction." becomes two visual blocks:
   `Concrete, steel` — then a thin horizontal divider line — then `conviction.` below.

2. **#12 — (per annotation)** apply as marked on the PDF; visual-only tweak, no content change.

3. **#13 — Why Us (01–04)**
   Keep the numbered items but lay them out horizontally with a connecting line running through the numbers, so they read as a single progression.

4. **#14 — (per annotation)** apply as marked; visual-only.

5. **#15 — Director's Message → its own page**
   New route `/about/directors-message` with the existing content. Remove the Director's Message block from `/about` entirely.

6. **#16 — Our Team → its own page**
   New route `/about/team` with the team content. Remove the Team block from `/about` entirely. Add both new pages to the About mega-dropdown in the header.

7. **#17 — Team hierarchy (org chart)**
   On the new `/about/team` page, render an org chart:
   - Level 1: Rajesh Mittal (Founder)
   - Level 2: Anil Mittal (Operations), Vikas Sharma (Projects)
   - Level 3: Sunita Verma (QA/QC), Deepak Yadav (Safety), Priya Singh (Procurement)

## Out of scope
- No copy rewrites beyond what's needed to move the two sections to their new pages.
- No changes to other pages, no logic changes, no new dependencies.
