import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Factory, Building2, HardHat, Ruler, Wrench, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Mittal Construction" },
      { name: "description", content: "Turnkey industrial, institutional, civil and MEP construction services by Mittal Construction." },
      { property: "og:title", content: "Services — Mittal Construction" },
      { property: "og:description", content: "Industrial, commercial, institutional, civil, MEP and refurbishment construction services." },
    ],
  }),
});

const services = [
  { i: Factory, t: "Industrial", d: "Greenfield factories, processing plants, warehouses, heavy-foundation works, pre-engineered building erection." },
  { i: Building2, t: "Commercial", d: "Showrooms, offices, retail shells, multi-tenant blocks built to consultant specifications." },
  { i: HardHat, t: "Institutional & Hospitality", d: "Colleges, hospitals, hotels and government buildings executed under NBCC and PWD standards." },
  { i: Ruler, t: "Residential", d: "Villas, apartments, group housing and bespoke homes built to architectural intent." },
  { i: Wrench, t: "MEP & Finishing", d: "Plumbing, electrical, HVAC coordination, internal finishes, façade systems." },
  { i: ShieldCheck, t: "Renovation & Retrofitting", d: "Plant expansions, structural strengthening, refurbishment and life-extension retrofitting." },
];

const process = [
  ["Brief", "Site visit, scope alignment, BoQ review."],
  ["Estimate", "Transparent quote, schedule and milestones."],
  ["Mobilise", "Crew deployment, material logistics, safety setup."],
  ["Build", "Daily progress logs, weekly client reviews."],
  ["Hand-over", "Snag-list closure, as-built drawings, DLP support."],
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
            Full-stack<br />contractors.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            One team, end-to-end. From breaking ground to commissioning, we
            self-perform the core trades and coordinate the rest.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="group relative border-b border-r border-border p-10 transition-colors hover:bg-primary hover:text-primary-foreground">
                <s.i size={36} strokeWidth={1.25} className="text-accent" />
                <div className="mono mt-8 text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent">
                  Service · 0{i + 1}
                </div>
                <h3 className="display mt-2 text-3xl">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-80">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32">
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
            className="bg-accent px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-accent-foreground"
          >
            Start Conversation →
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
