Increase vertical spacing in the About hero heading between "Concrete, steel," and "conviction."

Current: the `<h1>` uses `leading-[0.85]`, so the two lines sit almost on top of each other.

Fix: change the `<span>` wrapping "conviction." to a block element with a top margin (e.g. `block mt-6` or `mt-8`) while keeping the first line tight. This pushes the second line down without widening spacing inside either line.

Single-file change: `src/routes/about.tsx` — lines 43–47.