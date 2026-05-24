# Plan: Enlarge About Section Tiny Headings

## Scope
All `.mono` uppercase section-label headings across the three About-area routes.

## What to change
- `text-[11px]` → `text-[15px] font-bold`
- `text-[10px]` → `text-[14px] font-bold`

## Files & exact lines
1. **src/routes/about.tsx**
   - Line 40: `Since 2013`
   - Line 62: `The firm`
   - Line 88: `Our Vision`
   - Line 102: `Our Mission`
   - Line 120: `Our Values · Why Us`
   - Line 152: `Milestones`

2. **src/routes/about_.directors-message.tsx**
   - Line 25: `From the desk of`
   - Line 38: `Founder & Managing Director`

3. **src/routes/about_.team.tsx**
   - Line 45: role labels inside `Card` (e.g. `Founder & Managing Director`)
   - Line 60: `The people`
   - Line 76: `Leadership structure`

## Out of scope
- No copy changes, no layout changes, no other pages.