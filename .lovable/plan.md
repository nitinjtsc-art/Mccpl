
Apply all approved text/copy changes from the 8 PDFs. Home + Footer + Header phone/email/Est. were already done in earlier turns — skipping those. Project data swap (Excel sheet) and image replacements are out of scope (assets not provided). Form-to-email pipeline (Careers/Contact) is a separate request — not included.

## 1. `src/components/SiteHeader.tsx`
- **About dropdown teaser** (line 117–122): keep `teaserTitle` ("Built on trust, measured in milestones."), change `teaserEyebrow` `"Since 2013"` → `"Since 1997"`, and remove the teaser description (set `teaserText=""` and skip rendering `<p>` when empty).
- **Gallery dropdown teaser** (line 160–165): remove teaser description text (same empty-string treatment).
- **Gallery menu Awards desc** (line 15): `"Honours, certifications, and milestones."` → `"Honours, certifications and achievements."`
- Render guard: in `Dropdown`, only render the `<p>` when `teaserText` is non-empty.

## 2. `src/routes/about.tsx`
- Hero eyebrow: `Since 2013` → `Since 1997`.
- "The firm" section: headline `Eleven years, one trade.` → `Built to Last.`; replace both paragraphs with new 1997-founding copy (single long paragraph from PDF).
- Vision card: headline → `To build a legacy as strong as our structures.`; body → `A legacy measured in the trust we earned, the standards we kept and the relationships we built along the way.`
- Mission card: headline → `To hand over every project better than promised.`; body → `By putting the right professionals, the right resources and the right values behind everything we build.`
- Values: headline `The reasons clients come back.` → `Built on the right foundations.`; replace 4 cards:
  - 01 Quality / "Uncompromising commitment to quality that shows in everything we build."
  - 02 Trust & Reliability / "The trust our clients place in us is something we earn on every project and protect on every site."
  - 03 Safety / "We have never treated safety as a cost — we treat it as a commitment."
  - 04 Client-Centric Approach / "We measure our success not by the structures we build but by the satisfaction of the clients we build them for."
- Timeline entry 1: `2013` → `1997 / Mittal Construction Company founded by Mr. Rajendra Mittal in Bhiwadi, Rajasthan.` Entries 2–5 keep current placeholder years but PDF marks them as TBD — leave as-is with a `// TODO` comment noting they need real years from client.
- Update meta description to reflect 1997 / pan-India.

## 3. `src/routes/services.tsx`
- Hero headline: wrap `contractors.` span in `text-accent`.
- Hero body → `You bring the vision. We handle the execution. From groundbreaking ceremony to ribbon cutting — we take care of everything.`
- Services array — shorten descriptions:
  - Industrial → `Factories, processing plants, warehouses and heavy-foundation works.`
  - Commercial → `Office buildings, retail spaces and mixed-use developments.`
  - Institutional & Hospitality → `Schools, colleges, govt. buildings, hotels and hospitals.`
  - Residential → `Housing complexes, staff quarters and villas.`
  - MEP & Finishing → `Plumbing, electrical, HVAC coordination, internal finishes and facade systems.`
  - Renovation & Retrofitting → `Plant expansions, building renovations, structural upgrades and strengthening.`
- "How we work" headline `A predictable delivery process.` → `A transparent delivery process.`
- Process step descriptions:
  - Brief → `Site visit, scope discussion and BOQ review.`
  - Estimate → (unchanged)
  - Mobilise → `Team deployment, material procurement and safety setup.`
  - Build → `Daily progress reports and regular client reviews.`
  - Hand-over → `Snag list closure and DLP support.`

## 4. `src/routes/projects.tsx`
- Hero eyebrow: `Portfolio · {projects.length} projects` → keep dynamic count, just rename label format (`PORTFOLIO · {N} PROJECTS` — already matches).
- Hero headline: `Built work, on the ground.` → `The structures behind our story.`
- Update meta description to match.
- Add `// TODO` comment near the import noting project data & images need swap from Excel and values should become Crores.

## 5. `src/routes/clients.tsx`
- Headline `Trusted by the makers.` → `Trusted by those who build India.`
- Body → `Quality construction attracts quality clients. Every name on this list represents a project delivered, a promise kept and a client satisfied.`
- Filters tuple: add `"Warehousing"` between `Industrial` and `Commercial`; widen `Sector` type accordingly. (Existing client list has no Warehousing entries — filter will simply show 0; acceptable until logos arrive.)

## 6. `src/routes/careers.tsx`
- Hero headline `Build your career on site.` → `Great projects need great people.`
- Hero body → `At MCC, we invest in our people as much as we invest in our projects — offering a professional environment where you can grow, learn and build a career that adds real value to your profile.`
- 3 cards:
  - 01 Built to last / "We hire for the future, not just for today."
  - 02 Room to grow / "Your potential does not have a ceiling here — only a ladder."
  - 03 Lead from the front / "Take charge, influence outcomes, make a difference."
- Apply-block body → `We are always looking for driven professionals across all functions and disciplines.` Remove the `hr@mcc.co.in` link from public display.

## 7. `src/routes/contact.tsx`
- Head Office address → `A-168, Bhagat Singh Colony, Bhiwadi, Rajasthan – 301019`
- Head Office phone → `+91 98870 10003` (as `tel:` link)
- Delhi Office address → `L-84B, First Floor, Malviya Nagar, Delhi – 110017`
- Delhi Office phone → `+91 11 41653030` (as `tel:` link)
- Delhi Office email row → keep `info@mcc.co.in`.

## 8. `src/routes/gallery.awards.tsx`
- Body text → `A growing record of awards, client commendations and certifications earned through years of dedicated hard work.`

## 9. `src/routes/gallery.csr.tsx`
- Body text → `MCC believes in building more than structures. Our CSR initiatives focus on education, healthcare, plantation drives and the wellbeing of the communities we work with.`

## Out of scope (flagged)
- Project list + photos from Excel sheet
- Client logos / "Trusted by" ticker
- Award and CSR card content (placeholders awaiting client assets)
- About timeline entries 2–5 (years/descriptions TBD)
- Careers form → `hr@mcc.co.in` email pipeline (needs Lovable Cloud + email integration; ask before enabling)

Confirm and I'll implement.
