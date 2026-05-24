## Answer to Q2 first

Yes, it's possible. The SiteHeader is shared across all pages, but we can detect the current route with `useRouterState` (or `useLocation`) and conditionally swap the "Get a Quote" button's classes to an orange/accent style only when the path is `/gallery/awards`. No new component or route fork needed.

## Plan

### 1. `src/components/SiteHeader.tsx` — route-aware orange CTA

- Import `useRouterState` from `@tanstack/react-router`.
- Inside the component, compute `const isAwards = useRouterState({ select: (s) => s.location.pathname === "/gallery/awards" });`
- Desktop "Get a Quote" (line 180–185): swap `bg-brand … text-brand-foreground hover:bg-ink` → when `isAwards`, use `bg-accent text-accent-foreground hover:bg-accent/90` (orange accent token from the design system). Otherwise keep existing classes.
- Mobile "Get a Quote" (line 237–243): same conditional swap.

### 2. `src/routes/gallery.awards.tsx` — inject more orange warmth (keep current layout intact)

Targeted accent additions only — no structural redesign since the user said "design is okay":

- **Hero eyebrow** (line 31): bump weight with `font-semibold` and add a small orange dot/separator before the text to make the accent line read stronger.
- **Hero headline** (line 34–36): wrap "on site." in a `<span className="text-accent">` so the second line glows orange against the headline.
- **Hero paragraph** (line 37): add a left orange border accent `border-l-2 border-accent pl-5` to anchor it visually.
- **Award card thumbnail** (line 49–54):
  - Replace flat `bg-muted` with a subtle orange wash: `bg-gradient-to-br from-accent/10 via-muted to-background`.
  - Bump icon from `text-accent/60` to `text-accent` and increase size to 48.
  - Add a thin top accent bar that grows on hover: `<span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />`.
- **Card border on hover** (line 48): add `transition-colors hover:border-accent` so cards light up orange on hover.
- **Year chip** (line 51): already orange text on ink — bump to `font-semibold` for stronger contrast.
- **Card title** (line 56): on group hover, shift to accent: `transition-colors group-hover:text-accent`.

All colors use existing semantic tokens (`accent`, `accent-foreground`) — no hardcoded hex.

## Out of scope

- No layout/grid changes, no copy changes, no new sections.
- No changes to other gallery pages or the global theme.
- The orange button override is scoped to `/gallery/awards` only; all other routes keep the current brand-colored CTA.