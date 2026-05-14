import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Mittal Construction Company" },
      { name: "description", content: "Flagship projects by MCC: IIT Mandi, Wonder Cement, Markem-Imaje, V-Mart Retail, Prince Pipes, Fortune Park Orange Hotel and 100+ more across India." },
      { property: "og:title", content: "MCC Projects Portfolio" },
      { property: "og:description", content: "100+ delivered projects across 11 states & 2 UTs — industrial, institutional, hospitality, commercial and residential." },
    ],
  }),
});

const recentlyCompleted = [
  ["Adani Power", "Construction of residential building", "Singrauli, MP", "₹8.5 Cr"],
  ["V-Mart Retail", "Construction of warehouse (5,00,000 sq.ft.)", "Palwal, Haryana", "₹54 Cr"],
  ["Supreme Industries", "Construction of factory building", "Gwalior, MP", "₹18 Cr"],
  ["Pidilite Industries", "Construction of factory building", "Lucknow, UP", "₹7 Cr"],
  ["JK Cement", "Construction of institutional building", "Panna, MP", "₹12 Cr"],
  ["Ardex Group", "Construction of an industrial shed", "Neemrana, Rajasthan", "₹7 Cr"],
  ["ANA Real Logistics", "Construction of warehouse", "Jhajjar, Haryana", "₹10 Cr"],
  ["Fenesta (DCM Shriram)", "Expansion of factory building", "Kota, Rajasthan", "₹8.5 Cr"],
  ["Propus Inc.", "Construction of warehouse", "Karoli, Rajasthan", "₹6.5 Cr"],
  ["DS Group", "Construction of cow shed", "Manesar, Haryana", "₹2 Cr"],
  ["Power Grid Corporation", "Renovation of residential buildings", "Gurugram, Haryana", "₹13.5 Cr"],
];

function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <section className="relative bg-ink pt-40 pb-24 text-primary-foreground">
        <div className="container-x relative">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Portfolio · 100+ projects · 10 Mn+ sq.ft.
          </div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-balance">
            Built work,<br />on the ground.
          </h1>
          <p className="mt-8 max-w-2xl text-primary-foreground/70">
            A selection of flagship projects delivered for India's most demanding
            industrial, institutional and hospitality clients — across 11 states
            and 2 union territories.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative md:col-span-7">
                  <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                  <div className="mono absolute -top-3 -left-3 bg-accent px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-accent-foreground shadow-soft">
                    0{i + 1} / {projects.length}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {p.category}
                  </div>
                  <h2 className="display mt-3 text-4xl md:text-5xl text-balance">
                    {p.name}
                  </h2>
                  {p.summary && (
                    <p className="mt-4 text-foreground/70 leading-relaxed">{p.summary}</p>
                  )}
                  <dl className="mt-8 grid grid-cols-1 gap-y-5 border-t border-border pt-6">
                    {[
                      ["Client", p.client],
                      ["Location", p.location],
                      ["Sector", p.category],
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-4 border-b border-border/60 pb-4">
                        <dt className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {k}
                        </dt>
                        <dd className="col-span-2 text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Recently completed table */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">Recently Completed</div>
            <h2 className="display text-4xl md:text-5xl">A snapshot of recent deliveries.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto border border-border bg-background">
              <table className="w-full text-left text-sm">
                <thead className="bg-card">
                  <tr className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Project</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {recentlyCompleted.map(([c, p, l, v]) => (
                    <tr key={c + p} className="border-t border-border">
                      <td className="px-6 py-4 font-medium">{c}</td>
                      <td className="px-6 py-4 text-foreground/70">{p}</td>
                      <td className="px-6 py-4 text-foreground/70">{l}</td>
                      <td className="px-6 py-4 text-foreground/70">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
