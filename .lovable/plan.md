Reduce excessive vertical whitespace between three adjacent sections on the homepage by adjusting Tailwind padding classes in `src/routes/index.tsx`.

Changes:
1. **SERVICES ("What we do")** — change `py-24 md:py-32` to `pt-24 md:pt-32 pb-12 md:pb-16` (keep top, halve bottom)
2. **PROJECTS ("Selected Work")** — change `py-24 md:py-32` to `pt-12 md:pt-16 pb-12 md:pb-16` (halve both)
3. **WHY US ("Why MCC")** — change `py-24 md:py-32` to `pt-12 md:pt-16 pb-24 md:pb-32` (halve top, keep bottom)

This preserves breathing room within each section while cutting the dead space between them by roughly half.