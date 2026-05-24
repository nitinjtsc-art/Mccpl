Two targeted edits on `src/routes/services.tsx`:

1. **Bold + larger section labels**
   - Change "Capabilities" (hero label) and "How we work" (process label) from `text-[11px]` to `text-[15px]` and add `font-bold`.

2. **Remove "Service · 0X" verbiage from grid cards**
   - Delete the `<div>` that renders `Service · 0{i + 1}` inside each service card.
   - The grid sections, icons, titles and descriptions remain untouched.