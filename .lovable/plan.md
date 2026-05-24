## Plan

Three small, targeted UI fixes:

### 1. Careers — Full-width intro paragraph
**File:** `src/routes/careers.tsx`
- Remove `max-w-2xl` from the paragraph on line 35 so the text spans the full container width.

### 2. Careers — Bring "Browse" closer to the CV/Resume field
**File:** `src/routes/careers.tsx`
- The CV/Resume upload label uses `justify-between` (line 106), pushing "Browse" to the far right.
- Change to `justify-start gap-4` so "Browse" sits right next to the filename/upload text.

### 3. Contact — Bold office headings
**File:** `src/routes/contact.tsx`
- Add `font-bold` to the "Head Office — Bhiwadi" label (line 40) and the "Delhi Office" label (line 60).