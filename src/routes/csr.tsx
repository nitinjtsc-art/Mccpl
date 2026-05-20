import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSubnav } from "@/components/AboutSubnav";
import { Reveal } from "@/components/Reveal";
import { Leaf, GraduationCap, HeartPulse, Users } from "lucide-react";

export const Route = createFileRoute("/csr")({
  component: CsrPage,
  head: () => ({
    meta: [
      { title: "CSR — Mittal Construction" },
      { name: "description", content: "Corporate Social Responsibility initiatives at Mittal Construction Company." },
    ],
  }),
});

const pillars = [
  { i: GraduationCap, t: "Education", d: "Sponsoring schooling for children of on-site workers and supporting local government schools." },
  { i: HeartPulse, t: "Healthcare", d: "Free medical camps near our active project sites in collaboration with local hospitals." },
  { i: Leaf, t: "Environment", d: "Tree plantation drives, dust mitigation, and responsible material sourcing on every site." },
  { i: Users, t: "Community", d: "Skill-training and livelihood support for workers and their families." },
];

const initiatives = [
  ["School Kit Distribution", "Bhiwadi, Rajasthan", "2024", "Notebooks, uniforms and bags distributed to 200+ children of workers."],
  ["Free Health Camp", "Bilawar, J&K", "2023", "General check-up camp for 500+ residents near our college project."],
  ["Plantation Drive", "Neemrana, Rajasthan", "2023", "Planted 1,000+ saplings around the Toyoda Gosei facility perimeter."],
  ["Skill Training", "Behror, Rajasthan", "2022", "Masonry & shuttering upskilling for 60 site workers in partnership with NSDC."],
];

function CsrPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">About · CSR</div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">Building beyond<br />the site fence.</h1>
        </div>
      </section>
      <AboutSubnav />

      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <p className="max-w-3xl text-lg text-foreground/80">
              Construction touches the communities it operates in. Our CSR
              programme focuses on giving back through education, healthcare,
              the environment and skill-building — anchored around the people
              who build with us.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05}>
                <div className="h-full bg-background p-8">
                  <p.i size={32} strokeWidth={1.25} className="text-accent" />
                  <div className="display mt-6 text-2xl">{p.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border py-20">
        <div className="container-x">
          <Reveal>
            <div className="mono mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Initiatives</div>
            <h2 className="display text-4xl md:text-5xl">Recent programmes.</h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {initiatives.map(([t, loc, yr, d], i) => (
              <Reveal key={t} delay={i * 0.04}>
                <li className="grid gap-4 py-8 md:grid-cols-12">
                  <div className="mono text-[11px] uppercase tracking-[0.22em] text-accent md:col-span-2">{yr}</div>
                  <div className="md:col-span-4">
                    <div className="display text-2xl">{t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{loc}</div>
                  </div>
                  <p className="text-foreground/80 md:col-span-6">{d}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
