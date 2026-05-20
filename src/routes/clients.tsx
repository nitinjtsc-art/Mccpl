import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      { title: "Clients — Mittal Construction Company" },
      { name: "description", content: "Industrial, institutional, commercial and consultant partners served by Mittal Construction Company." },
      { property: "og:title", content: "Clients — MCC" },
      { property: "og:description", content: "Companies, government bodies and consultants we have built for." },
    ],
  }),
});

type Sector =
  | "Industrial"
  | "Institutional"
  | "Commercial"
  | "Consultant"
  | "Government";

const clients: { name: string; sector: Sector }[] = [
  { name: "Greenply Industries", sector: "Industrial" },
  { name: "Toyoda Gosei", sector: "Industrial" },
  { name: "Lucid Colloids", sector: "Industrial" },
  { name: "Surya Roshni", sector: "Industrial" },
  { name: "R K Marble", sector: "Commercial" },
  { name: "Saint-Gobain", sector: "Industrial" },
  { name: "Havells India", sector: "Industrial" },
  { name: "Honda Motorcycles", sector: "Industrial" },
  { name: "Govt. Degree College", sector: "Government" },
  { name: "NBCC India", sector: "Government" },
  { name: "PWD Rajasthan", sector: "Government" },
  { name: "AIIMS — Bilaspur", sector: "Institutional" },
  { name: "DPS Bhiwadi", sector: "Institutional" },
  { name: "Manipal University", sector: "Institutional" },
  { name: "Mott MacDonald", sector: "Consultant" },
  { name: "Artscan", sector: "Consultant" },
  { name: "Gian P. Mathur", sector: "Consultant" },
  { name: "M R Warerkar & Associates", sector: "Consultant" },
];

const filters: ("All" | Sector)[] = [
  "All",
  "Industrial",
  "Institutional",
  "Commercial",
  "Consultant",
  "Government",
];

function ClientsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (active === "All" ? clients : clients.filter((c) => c.sector === active)),
    [active],
  );

  return (
    <>
      <SiteHeader />

      <section className="bg-background pt-40 pb-16 md:pb-20">
        <div className="container-x">
          <div className="eyebrow mb-5">Our Clients</div>
          <h1 className="display text-balance text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
            Built for India's <span className="text-brand">most demanding brands.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            From greenfield industrial plants to institutional and consultant
            partnerships — a snapshot of who we have built for.
          </p>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2 border-y border-border py-5">
            <span className="mono mr-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Filter by sector
            </span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`mono border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  active === f
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border text-foreground/70 hover:border-brand hover:text-brand"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {visible.map((c, i) => (
              <Reveal key={c.name} delay={(i % 5) * 0.04}>
                <div className="group flex aspect-[4/3] flex-col items-center justify-center bg-background p-6 text-center transition-colors hover:bg-sand">
                  <div className="display text-lg leading-tight text-foreground/85 transition-colors group-hover:text-brand">
                    {c.name}
                  </div>
                  <div className="mono mt-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.sector}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-sm text-muted-foreground">No clients in this sector yet.</p>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
