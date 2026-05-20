import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Award } from "lucide-react";

export const Route = createFileRoute("/gallery/awards")({
  component: AwardsPage,
  head: () => ({
    meta: [
      { title: "Awards & Recognitions — Mittal Construction Company" },
      { name: "description", content: "Awards, certifications and recognitions received by Mittal Construction Company over the years." },
      { property: "og:title", content: "Awards & Recognitions — MCC" },
      { property: "og:description", content: "Recognitions earned by MCC over a decade of construction excellence." },
    ],
  }),
});

const awards = [
  { year: "2024", title: "Excellence in Industrial Construction", issuer: "Rajasthan Builders Association" },
  { year: "2023", title: "Safety Performance Award", issuer: "National Safety Council — Rajasthan Chapter" },
  { year: "2022", title: "Best Turnkey Contractor", issuer: "Greenply Industries — Vendor Awards" },
  { year: "2021", title: "On-Time Delivery Recognition", issuer: "Toyoda Gosei India" },
  { year: "2020", title: "ISO 9001:2015 Certification", issuer: "Bureau Veritas" },
  { year: "2019", title: "Quality Excellence Award", issuer: "Construction Industry Development Council" },
];

function AwardsPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-ink pt-40 pb-20 text-primary-foreground">
        <div className="container-x">
          <div className="eyebrow mb-5 text-accent">Gallery · Awards & Recognitions</div>
          <h1 className="display text-balance text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
            Recognised for <span className="text-accent">what we build.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/70">
            A decade of disciplined execution has earned MCC recognition from
            clients, industry councils and safety bodies. A small selection
            below.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <article className="group relative aspect-[4/5] overflow-hidden bg-sand transition-colors hover:bg-brand hover:text-brand-foreground">
                <div className="flex h-full flex-col justify-between p-8">
                  <Award size={40} strokeWidth={1.3} className="text-brand transition-colors group-hover:text-accent" />
                  <div>
                    <div className="mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {a.year}
                    </div>
                    <h3 className="display mt-3 text-2xl">{a.title}</h3>
                    <p className="mt-3 text-sm text-foreground/65 transition-colors group-hover:text-primary-foreground/75">
                      {a.issuer}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-16">
          <p className="text-sm text-muted-foreground">
            Photographs of award ceremonies and certificates will be added here.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
