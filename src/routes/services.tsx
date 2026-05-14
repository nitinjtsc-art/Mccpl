import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Factory, Building2, Hotel, Home, Ruler, Wrench, ShieldCheck, PackageCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Mittal Construction Company" },
      { name: "description", content: "Engineering & design, turnkey EPC delivery, retrofit & renovation, procurement and project execution by MCC across industrial, hospitality, institutional, commercial and residential sectors." },
      { property: "og:title", content: "MCC Services — Turnkey EPC Construction" },
      { property: "og:description", content: "End-to-end construction services for industrial, commercial, hospitality, institutional and residential projects across India." },
    ],
  }),
});

const sectors = [
  { i: Factory, t: "Industrial & Warehousing", d: "Greenfield factories, process plants, PEB sheds and large warehouses for cement, FMCG, pharma, chemical, auto-ancillary and logistics clients." },
  { i: Building2, t: "Commercial Spaces", d: "Showrooms, corporate offices, retail shells and mixed-use blocks engineered for brand-grade finish and a long design life." },
  { i: Hotel, t: "Hospitality & Institutional", d: "Hotels, IIT/NIT campuses, schools, government and CSR buildings — executed under stringent NBCC, CPWD and consultant specs." },
  { i: Home, t: "Residential Projects", d: "Staff colonies, residential blocks, premium villa renovations and Power Grid-class housing refurbishment." },
];

const services = [
  { i: Ruler, t: "Engineering & Design", d: "In-house and consultant-led engineering — civil, structural, MEP — coordinated through a single project team." },
  { i: Factory, t: "Construction & Project Execution", d: "Self-performed civil, RCC, structural steel, masonry, finishes and site supervision by long-tenured crew leaders." },
  { i: PackageCheck, t: "Turnkey Project Delivery", d: "Single-point EPC accountability — design, procurement, construction, MEP, commissioning and hand-over." },
  { i: Wrench, t: "Retrofit & Renovation", d: "Plant expansions, structural strengthening, residential refurbishment and life-extension works." },
  { i: ShieldCheck, t: "Procurement", d: "Pan-India sourcing leveraging long-term vendor relationships — material quality, cost optimisation and on-time mobilisation." },
];

const process = [
  ["Brief", "Site visit, scope alignment, BoQ and drawings review."],
  ["Estimate", "Transparent quote, schedule and project milestones."],
  ["Mobilise", "Crew deployment, material logistics, safety setup."],
  ["Build", "Daily progress logs, weekly client reviews, QA/QC sign-offs."],
  ["Hand-over", "Snag closure, as-built drawings, DLP support."],
];

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Capabilities
          </div>
          <h1 className="display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] text-balance">
            Full-spectrum<br />EPC contractor.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            From engineering to commissioning — civil, structural, MEP, finishes
            and procurement under one accountable team. Four sectors. One
            contractor. One promise: delivered as designed, on schedule.
          </p>
        </div>
      </section>

      {/* Sector grid */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mono mb-8 text-[11px] uppercase tracking-[0.3em] text-accent">Sector expertise</div>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {sectors.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="group relative h-full bg-card p-10 transition-colors hover:bg-primary hover:text-primary-foreground">
                  <s.i size={36} strokeWidth={1.25} className="text-accent" />
                  <div className="mono mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent">
                    Sector · 0{i + 1}
                  </div>
                  <h3 className="display mt-2 text-3xl">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-80">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mono mb-8 text-[11px] uppercase tracking-[0.3em] text-accent">Services offered</div>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="group relative h-full bg-background p-10 transition-colors hover:bg-primary hover:text-primary-foreground">
                  <s.i size={36} strokeWidth={1.25} className="text-accent" />
                  <div className="mono mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent">
                    Service · 0{i + 1}
                  </div>
                  <h3 className="display mt-2 text-2xl">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-80">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              How we work
            </div>
            <h2 className="display text-5xl md:text-7xl text-balance">
              A predictable<br />delivery process.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-5">
            {process.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="h-full bg-background p-8">
                  <div className="display text-5xl text-accent">0{i + 1}</div>
                  <div className="display mt-6 text-2xl">{t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end">
          <h2 className="display text-4xl md:text-6xl text-balance">
            Have drawings ready?<br />Send them over.
          </h2>
          <Link
            to="/contact"
            className="rounded-md bg-primary-foreground px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-ink hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Start Conversation →
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
