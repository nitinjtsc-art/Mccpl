import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Heart, Users, Sprout, BookOpen } from "lucide-react";

export const Route = createFileRoute("/gallery/csr")({
  component: CsrPage,
  head: () => ({
    meta: [
      { title: "CSR — Mittal Construction Company" },
      { name: "description", content: "Corporate Social Responsibility initiatives by Mittal Construction Company — education, community welfare and environment." },
      { property: "og:title", content: "CSR — MCC" },
      { property: "og:description", content: "Education, community welfare and environment initiatives by MCC." },
    ],
  }),
});

const pillars = [
  { icon: BookOpen, t: "Education", d: "Supporting local schools near our project sites with infrastructure, books and scholarships." },
  { icon: Heart, t: "Health & Welfare", d: "Periodic health camps and welfare drives for our workforce families and neighbouring communities." },
  { icon: Sprout, t: "Environment", d: "Tree-plantation drives, low-waste site practices and responsible material sourcing." },
  { icon: Users, t: "Worker Empowerment", d: "Skill-training programs, fair-wage policy and on-site living standards for our crew." },
];

function CsrPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-background pt-40 pb-16 md:pb-24">
        <div className="container-x">
          <div className="eyebrow mb-5">Gallery · CSR</div>
          <h1 className="display text-balance text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
            Building <span className="text-brand">beyond the site.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Construction is a long-term relationship with the communities we
            build in. Our CSR work focuses on education, health, environment
            and worker welfare.
          </p>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-x grid gap-px bg-border md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="h-full bg-background p-10">
                <p.icon size={36} strokeWidth={1.3} className="text-brand" />
                <h3 className="display mt-6 text-2xl">{p.t}</h3>
                <p className="mt-3 text-foreground/65">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x">
          <div className="eyebrow mb-5">Photo gallery</div>
          <h2 className="display text-3xl md:text-4xl">From our CSR activities.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={(i % 3) * 0.07}>
                <div className="aspect-[4/3] bg-gradient-to-br from-sand to-border" />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            CSR photographs will be added here.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
