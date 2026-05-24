### Scope
Remove the "Government" filter option and all Government-sector clients from the `/clients` page, and update the page metadata.

### Changes
1. **src/routes/clients.tsx**
   - Remove `"Government"` from the `Sector` type union.
   - Remove the 3 Government clients from the `clients` array: NBCC India, PWD Rajasthan, PWD J&K.
   - Remove `"Government"` from the `filters` array.
   - Update `meta` description and `og:description` to remove the "government" mention.

2. **src/data/projects.ts**
   - No Government-category projects exist in the dataset; no changes needed here.

### Out of scope
- No routing or navigation changes.
- No visual redesign beyond removing the filter tab and associated client cards.