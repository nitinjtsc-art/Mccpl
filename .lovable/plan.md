## 1. Services — fix grid lines

The capabilities grid in `src/routes/services.tsx` uses `border-b border-r border-border` on every cell. With 6 items in a 3-column grid this leaves a stray right border on the last column and a stray bottom border on the last row, and the lines don't align cleanly across breakpoints (1/2/3 cols).

Switch to the same divider pattern already used by the "process" section below it: a `gap-px bg-border` container with each cell `bg-card`. This produces perfectly aligned 1px hairlines between cells with no leftover outer edges, regardless of breakpoint.

```text
- <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
+ <div className="mx-auto grid max-w-7xl gap-px bg-border grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {services.map(...)}
-     <div className="... border-b border-r border-border p-10 ...">
+     <div className="... bg-card p-10 ...">
```

The hover state (`hover:bg-primary hover:text-primary-foreground`) stays unchanged.

## 2. Director's Message — make it professional

`src/routes/about_/directors-message.tsx` currently renders the whole hero as `bg-ink text-primary-foreground`, which clashes with the white navbar sitting above it (hard black slab right under a white header — looks unfinished).

Rework it into a proper editorial layout consistent with the rest of the site:

- Light page background (`bg-background`) matching About / Services pages.
- A small dark accent block holds only the portrait/initials card + name, sitting beside the message rather than swallowing the page.
- Eyebrow in accent, large display heading in `text-foreground` with accent on "Message.".
- Pull-quote in `text-foreground`, body copy in `text-muted-foreground`, generous padding (`pt-40 pb-32`), accent vertical rule on the quote for a refined editorial feel.
- Add a subtle signature block at the bottom of the message column.

Result: a calm, premium director's-letter page that flows naturally from the white header instead of a flat black wall.

No other files change.