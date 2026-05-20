import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      { title: "Clients — Mittal Construction" },
      { name: "description", content: "Clients we've built for, across industrial, institutional, commercial and government sectors." },
    ],
  }),
});

type Client = { name: string; industry: string };

const clients: Client[] = [
  { name: "Greenply Industries", industry: "Manufacturing" },
  { name: "Toyoda Gosei India", industry: "Automotive" },
  { name: "Lucid Colloids", industry: "Process / Chemical" },
  { name: "Surya Roshni", industry: "Manufacturing" },
  { name: "R K Marble", industry: "Mining & Minerals" },
  { name: "NBCC (India) Ltd.", industry: "Government" },
  { name: "Govt. Degree College, Bilawar", industry: "Institutional" },
  { name: "Mott MacDonald India", industry: "Consultant" },
  { name: "M R Warerkar & Associates", industry: "Consultant" },
  { name: "Artscan, New Delhi", industry: "Consultant" },
  { name: "Gian P. Mathur Associates", industry: "Consultant" },
  { name: "Honda Motorcycle & Scooter", industry: "Automotive" },
  { name: "Saint-Gobain", industry: "Manufacturing" },
  { name: "JCB India", industry: "Automotive" },
  { name: "PWD Rajasthan", industry: "Government" },
  { name: "AIIMS Jammu", industry: "Institutional" },
];

const industries = ["All", ...Array.from(new Set(clients.map((c) => c.industry)))];

function ClientsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () => (filter === "All" ? clients : clients.filter((c) => c.industry === filter)),
    [filter],
  );

  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">Clients</div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">Built for<br />companies we<br />trust back.</h1>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-x flex flex-wrap gap-2 py-5">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`mono px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                filter === ind
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground/70 hover:bg-primary/10"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.02}>
                <div className="group flex aspect-[5/3] flex-col items-center justify-center bg-background p-6 text-center transition-colors hover:bg-primary hover:text-primary-foreground">
                  <div className="display text-xl leading-tight">{c.name}</div>
                  <div className="mono mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-accent">
                    {c.industry}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">No clients in this category yet.</p>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
