import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSubnav } from "@/components/AboutSubnav";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/our-team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — Mittal Construction" },
      { name: "description", content: "The leadership and site team behind Mittal Construction Company." },
    ],
  }),
});

const leadership = [
  { n: "Mr. Mittal", r: "Founder & Managing Director", b: "20+ years in industrial construction. Oversees client relationships and project strategy." },
  { n: "Project Director", r: "Operations Head", b: "Heads execution across all live projects; ex-NBCC with 15+ years experience." },
  { n: "Chief Engineer", r: "Engineering & QA/QC", b: "Civil engineer responsible for design coordination, BoQ and quality systems." },
  { n: "Commercial Head", r: "Procurement & Contracts", b: "Manages vendor empanelment, material logistics and contract administration." },
  { n: "HSE Lead", r: "Safety & Compliance", b: "Implements zero-harm protocols, statutory compliance and daily site audits." },
  { n: "HR & Admin Head", r: "People & Workforce", b: "Looks after recruitment, labour welfare and on-site administration." },
];

const departments = [
  ["Site Engineering", "12+"],
  ["Civil & RCC Crew", "120+"],
  ["MEP & Finishing", "40+"],
  ["QA / QC & HSE", "10+"],
  ["Planning & Billing", "8+"],
  ["Admin & Stores", "10+"],
];

function TeamPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">About · Our Team</div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">The people<br />behind every pour.</h1>
        </div>
      </section>
      <AboutSubnav />

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="mono mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Leadership</div>
            <h2 className="display text-4xl md:text-5xl">Core team.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.04}>
                <div className="h-full bg-background p-8">
                  <div className="aspect-square bg-muted" />
                  <div className="display mt-5 text-2xl">{p.n}</div>
                  <div className="mono mt-1 text-[11px] uppercase tracking-[0.22em] text-accent">{p.r}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border py-20">
        <div className="container-x">
          <Reveal>
            <div className="mono mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Workforce</div>
            <h2 className="display text-4xl md:text-5xl">Departments at a glance.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {departments.map(([t, n], i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="flex items-baseline justify-between border-t-2 border-foreground pt-4">
                  <span className="text-base">{t}</span>
                  <span className="display text-3xl text-accent">{n}</span>
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
