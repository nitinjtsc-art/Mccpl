import { Link } from "@tanstack/react-router";

const items = [
  { to: "/about", label: "Overview" },
  { to: "/director-message", label: "Director's Message" },
  { to: "/our-team", label: "Our Team" },
  { to: "/csr", label: "CSR" },
] as const;

export function AboutSubnav() {
  return (
    <div className="border-y border-border bg-card">
      <div className="container-x flex flex-wrap gap-x-8 gap-y-3 py-4">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            activeOptions={{ exact: true }}
            className="mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-brand"
            activeProps={{ className: "text-brand" }}
          >
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
