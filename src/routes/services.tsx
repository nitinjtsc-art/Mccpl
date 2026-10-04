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
  { i: Factory, t: "Industrial", d: "Factories, processing plants, warehouses and heavy-foundation works." },
  { i: Building2, t: "Commercial", d: "Office buildings, retail spaces and mixed-use developments." },
  { i: HardHat, t: "Institutional & Hospitality", d: "Schools, colleges, govt. buildings, hotels and hospitals." },
  { i: Ruler, t: "Residential", d: "Housing complexes, staff quarters and villas." },
  { i: Wrench, t: "MEP & Finishing", d: "Plumbing, electrical, HVAC coordination, internal finishes and facade systems." },
  { i: ShieldCheck, t: "Renovation & Retrofitting", d: "Plant expansions, building renovations, structural upgrades and strengthening." },
];

const process = [
  ["Brief", "Site visit, scope discussion and BOQ review."],
  ["Estimate", "Transparent quote, schedule and milestones."],
  ["Mobilise", "Team deployment, material procurement and safety setup."],
  ["Build", "Daily progress reports and regular client reviews."],
  ["Hand-over", "Snag list closure and DLP support."],
];

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            Capabilities
          </div>
          <h1 className="display text-[clamp(3.3rem,10.4vw,9.5rem)] leading-[0.85] text-balance">
            Full-stack<br /><span className="text-accent">contractors.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Your vision. Our execution. From groundbreaking ceremony to ribbon
            cutting, we take care of everything.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05} className="h-full">
              <div className="group relative h-full bg-card p-8">
                <div className="flex items-center gap-4">
                  <s.i size={28} strokeWidth={1.25} className="shrink-0 text-accent" />
                  <h3 className="display text-2xl">{s.t}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed opacity-80">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
              How we work
            </div>
            <h2 className="display text-6xl md:text-8xl text-balance">
              A transparent<br />delivery process.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-5">
            {process.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className={`relative h-full bg-background p-8 ${i > 0 ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:h-16 md:before:w-px md:before:-translate-y-1/2 md:before:bg-border" : ""}`}>
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
