import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Award } from "lucide-react";

export const Route = createFileRoute("/gallery/awards")({
  component: AwardsPage,
  head: () => ({
    meta: [
      { title: "Awards & Recognitions : Mittal Construction" },
      { name: "description", content: "Honours, certifications and recognitions earned by Mittal Construction." },
      { property: "og:title", content: "Awards & Recognitions : MCC" },
      { property: "og:description", content: "A look at the milestones, honours and certifications earned across a decade of building." },
    ],
  }),
});

const items = Array.from({ length: 8 }, (_, i) => ({
  title: `Recognition ${i + 1}`,
  year: `${2017 + i}`,
  caption: "Photo to be added soon.",
}));

function AwardsPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Gallery · Awards & Recognitions
          </div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-balance">
            Recognised<br /><span className="text-accent">on site.</span>
          </h1>
          <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-lg text-muted-foreground">
            A growing record of awards, client commendations and certifications
            earned through years of dedicated hard work.
          </p>
        </div>
      </section>

      <section className="border-t border-border pb-24">
        <div className="container-x mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 6) * 0.05}>
              <figure className="group relative overflow-hidden border border-border bg-card transition-colors hover:border-accent">
                <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent/10 via-muted to-background">
                  <Award size={48} className="text-accent" strokeWidth={1.25} />
                  <div className="mono absolute left-3 top-3 bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {it.year}
                  </div>
                </div>
                <figcaption className="p-5">
                  <div className="display text-xl transition-colors group-hover:text-accent">{it.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{it.caption}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
