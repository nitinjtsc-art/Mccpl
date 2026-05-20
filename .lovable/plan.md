# Site Build-out Plan

Based on the brief sheet. Email wiring deferred; forms are UI-only for now. Projects/Clients data scaffolded with placeholders (sourced from the IndiaMART page where useful) — easy to swap later.

## Navigation (SiteHeader)

Final nav order: Home · About · Services · Projects · Clients · Gallery · Careers · Contact

- About — keep existing dropdown (Overview, Our Team, Director's Message). Done.
- Services — plain link, no dropdown.
- Projects — plain link to new page.
- Clients — plain link to new page.
- Gallery — dropdown (same pattern as About) with: Awards & Recognitions, CSR.
- Careers — plain link to new page.
- Contact — plain link to new page.

## Pages

### /services (update existing)
- Keep current design and "delivery process" section.
- Replace the 6 service cards with:
  1. Industrial
  2. Commercial
  3. Institutional & Hospitality
  4. Residential
  5. MEP & Finishing
  6. Renovation & Retrofitting
- Keep short keyword/description line next to each (rewritten to match new names).

### /about (expand Overview section)
Add to the existing Overview area (keep current Team, Director's Message, Why Us):
- Overview blurb
- Our Vision
- Our Mission
- Our Values

### /projects (new page — replaces current behaviour)
"Completed Projects" listing. Card grid. Each card:
- Project Type, Year, Name, Client, Location, Consultant, Project Value
- Image when available
Scaffold 8–10 placeholder entries; structure makes it easy to add real ones.

### /clients (new page)
- Grid of client logos (placeholder tiles for now).
- Filter chips to segregate by business type (e.g. Industrial, Institutional, Hospitality, Government). Clicking a chip filters the grid.

### /gallery/awards (new page)
- Photo grid for awards & recognitions (placeholders).

### /gallery/csr (new page)
- Photo grid for CSR activities (placeholders).

### /careers (new page)
- Intro copy about culture at MCC.
- Application form (UI only, no submission yet):
  First Name, Last Name, Email, Phone, Address, Post Applying For, CV upload, About Yourself, Apply Now button.
- Note placeholder: "Submissions will be emailed to hr@mcc.co.in" (wired later).

### /contact (update existing)
- Head Office and Delhi Office addresses with phone + email.
- Keep current enquiry form (UI only). Note placeholder: "info@mcc.co.in".

## Technical notes

- New route files under `src/routes/`: `projects.tsx` (rewrite), `clients.tsx`, `gallery.awards.tsx`, `gallery.csr.tsx`, `careers.tsx`. About/Services/Contact edited in place.
- `SiteHeader.tsx`: add Gallery mega-dropdown (mirror About implementation), reorder nav, update mobile menu.
- `SiteFooter.tsx`: update link list to match new nav; fix existing hydration whitespace issue around the email link.
- All forms are presentational (no backend). Email integration (Resend + Lovable Cloud) added in a later pass when you're ready.

## Out of scope (this pass)
- Actual email delivery for Careers/Contact forms.
- OTP verification.
- Real project photos, client logos, gallery images — placeholders only.
