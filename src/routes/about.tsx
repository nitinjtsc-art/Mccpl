import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSubnav } from "@/components/AboutSubnav";
import { Reveal } from "@/components/Reveal";
import { Target, Compass, ShieldCheck, Award, Users, Hammer, TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: OverviewPage,
  head: () => ({
    meta: [
      { title: "About — Overview · Mittal Construction" },
      { name: "description", content: "Our vision, mission, values, and why clients choose Mittal Construction." },
    ],
  }),
});

const values = [
  { i: ShieldCheck, t: "Integrity", d: "Transparent quotes, transparent progress, transparent billing." },
  { i: Hammer, t: "Craftsmanship", d: "Long-tenured crews who self-perform the core scope." },
  { i: TrendingUp, t: "Schedule", d: "Critical path managed weekly; hand-overs on the promised date." },
  { i: Users, t: "People First", d: "Zero-harm sites, fair labour, daily toolbox talks." },
];

const why = [
  ["11+ Years", "Operating since 2013 across Rajasthan, Haryana, UP & J&K."],
  ["₹500M+", "Cumulative contract value delivered to date."],
  ["200+", "On-roll and project workforce."],
  ["Zero LTI", "Long-track safety record across active sites."],
];

function OverviewPage() {
  return (
    <>
      <SiteHeader />
      <section className="relative grid min-h-[70vh] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-end bg-background px-6 py-24 md:px-16 md:pt-40">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            About · Overview
          </div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85] text-balance">
            Concrete,<br />steel,<br /><span className="text-accent">conviction.</span>
          </h1>
        </div>
        <div className="relative bg-primary">
          <img src={aboutImg} alt="On site" loading="lazy" className="h-full w-full object-cover opacity-90" />
        </div>
      </section>

      <AboutSubnav />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <div className="border-l-2 border-accent pl-6">
              <Compass size={28} className="text-accent" />
              <div className="mono mt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Our Vision</div>
              <h2 className="display mt-2 text-4xl">To be North India's most trusted name in industrial and civil construction.</h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                We aim to deliver projects that outlast their warranty period —
                built with sound engineering, ethical practices, and a relentless focus
                on the people who use them every day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-l-2 border-accent pl-6">
              <Target size={28} className="text-accent" />
              <div className="mono mt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Our Mission</div>
              <h2 className="display mt-2 text-4xl">Deliver every project on time, on budget, and to specification.</h2>
              <p className="mt-5 text-foreground/75 leading-relaxed">
                We self-perform core trades, run lean site teams, and invest in
                long-term relationships with clients, consultants and craftspeople
                — because predictable execution is the only sustainable edge.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-card border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Our Values</div>
            <h2 className="display text-5xl md:text-6xl">What we stand on.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="h-full bg-card p-8">
                  <v.i size={32} strokeWidth={1.25} className="text-accent" />
                  <div className="display mt-6 text-2xl">{v.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Why Us</div>
            <h2 className="display text-5xl md:text-6xl">Why clients hire us again.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {why.map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.05}>
                <div className="border-t-2 border-foreground pt-6">
                  <div className="display text-5xl">{k}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <ul className="mt-14 grid gap-4 md:grid-cols-2">
              {[
                "Self-perform civil, RCC and finishing trades.",
                "Single point of accountability — owner-led firm.",
                "Documented QA/QC across every pour and weld.",
                "ISO procedures with statutory clearances in place.",
                "Pan-India mobilisation capability from Bhiwadi base.",
                "Long-standing consultant relationships (NBCC, Mott MacDonald, M R Warerkar).",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/85">
                  <Award size={18} className="mt-1 shrink-0 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
