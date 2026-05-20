import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Award, Users, Eye, Target, Heart } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about/")({
  component: OverviewPage,
  head: () => ({
    meta: [
      { title: "Overview — Mittal Construction Company" },
      { name: "description", content: "Overview, vision, mission and values of Mittal Construction Company — a multi-disciplinary contractor delivering across North India since 2013." },
      { property: "og:title", content: "Overview — Mittal Construction Company" },
      { property: "og:description", content: "Vision, mission and values of MCC." },
    ],
  }),
});

const values = [
  ["Integrity", "Transparent contracts, transparent measurements. What we promise is what we build."],
  ["Safety First", "Zero-harm site protocols, full PPE, daily toolbox talks — non-negotiable."],
  ["Quality", "Consultant-grade execution backed by full QA/QC documentation."],
  ["On-Time Delivery", "Schedule treated as a contract. Hand-overs on the promised date."],
  ["Self-Performance", "Core trades executed by our own crews — less hand-off, less risk."],
  ["Sustainability", "Material discipline, low-waste sites, durable detailing for long life."],
];

const whyUs = [
  { icon: ShieldCheck, t: "Engineered for safety", d: "Site safety embedded into every method statement. Zero lost-time incidents on recent projects." },
  { icon: Award, t: "Consultant-grade quality", d: "Delivered to specifications of Mott MacDonald, Artscan, Gian P. Mathur and NBCC." },
  { icon: Users, t: "Self-performed crews", d: "Direct workforce for civil, RCC, steel and finishes — no quality dilution through layered subcontracting." },
];

function OverviewPage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="relative grid min-h-[70vh] grid-cols-1 pt-28 md:grid-cols-2 md:pt-32">
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <div className="eyebrow mb-5">About MCC · Since 2013</div>
          <h1 className="display text-balance text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95]">
            Building <span className="text-brand">trust</span>, one project at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Mittal Construction Company is a multi-disciplinary contractor
            delivering industrial, institutional and commercial projects across
            North India.
          </p>
        </div>
        <div className="relative min-h-[40vh] bg-ink">
          <img src={aboutImg} alt="MCC site team" className="h-full w-full object-cover opacity-90" />
        </div>
      </section>

      {/* 1. OVERVIEW */}
      <section id="overview" className="bg-background py-24 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="eyebrow mb-4">01 · Overview</div>
            <h2 className="display text-4xl md:text-5xl">The firm at a glance.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 md:col-span-8 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Founded in 2013 in Bhiwadi, Rajasthan, Mittal Construction Company
              (MCC) has grown into a respected name in industrial and civil
              construction across North India. With more than a decade of
              project execution, we have delivered plants for Greenply, Toyoda
              Gosei, Lucid Colloids and Surya Roshni — and institutional works
              under NBCC supervision in Jammu & Kashmir.
            </p>
            <p>
              We operate as a lean, owner-led firm with a long-tenured site
              leadership team. The office stays small; the site stays heavy.
              Most of our scope is self-performed, which is how we keep
              schedule and quality predictable across geographies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. VISION */}
      <section className="bg-ink py-24 text-primary-foreground md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Eye size={36} strokeWidth={1.4} className="text-accent" />
            <div className="eyebrow mt-6 text-accent">02 · Our Vision</div>
            <h2 className="display mt-4 text-4xl md:text-5xl">Build to last.</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="text-xl leading-relaxed text-primary-foreground/85">
              To be the most trusted construction partner in North India for
              industrial and institutional projects — known for engineering
              discipline, on-time delivery, and structures that serve their
              owners for generations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. MISSION */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Target size={36} strokeWidth={1.4} className="text-brand" />
            <div className="eyebrow mt-6">03 · Our Mission</div>
            <h2 className="display mt-4 text-4xl md:text-5xl">Deliver as designed.</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-4 text-foreground/80">
            <p className="text-lg leading-relaxed">
              To execute every project with technical rigour, financial
              transparency, and uncompromising safety — while empowering our
              crews, supporting our clients' growth, and giving back to the
              communities where we build.
            </p>
            <ul className="mt-6 grid gap-2 text-foreground/75 sm:grid-cols-2">
              {[
                "Deliver each project on time, on budget, on spec.",
                "Maintain zero-harm site protocols across every job.",
                "Invest in our crews — training, safety, fair wages.",
                "Stay accountable to the consultant and the client.",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. VALUES */}
      <section className="bg-sand py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <Heart size={36} strokeWidth={1.4} className="text-brand" />
            <div className="eyebrow mt-6">04 · Our Values</div>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              The principles that <span className="text-brand">run every site.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full bg-background p-8">
                  <div className="display text-4xl text-accent">0{i + 1}</div>
                  <div className="display mt-4 text-2xl">{t}</div>
                  <p className="mt-3 text-sm text-foreground/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — preserved */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <div className="eyebrow mb-5">Why MCC</div>
            <h2 className="display text-balance text-4xl md:text-6xl">
              Engineered to last. <span className="text-brand">Delivered to plan.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <div className="border-t-2 border-brand pt-8">
                  <w.icon size={28} strokeWidth={1.4} className="text-brand" />
                  <h3 className="mt-6 text-2xl font-semibold">{w.t}</h3>
                  <p className="mt-3 text-foreground/65">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
