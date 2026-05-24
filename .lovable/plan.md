## Change

In `src/routes/clients.tsx`, line 51, update the "Our Clients" label styling:

- Add `font-bold` class
- Increase font size from `text-[11px]` to `text-[15px]` (4px larger)

```text
Before:
  <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">

After:
  <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
```

No other changes needed.