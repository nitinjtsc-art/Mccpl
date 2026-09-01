import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/gallery/csr")({
  component: CsrPage,
  head: () => ({
    meta: [
      { title: "CSR — Mittal Construction" },
      { name: "description", content: "Community and social initiatives by Mittal Construction." },
      { property: "og:title", content: "CSR — MCC" },
      { property: "og:description", content: "Education, health and community-development initiatives we support." },
    ],
  }),
});

const items = Array.from({ length: 6 }, (_, i) => ({
  title: `Initiative ${i + 1}`,
  caption: "Photo to be added soon.",
}));

function CsrPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Gallery · CSR
          </div>
          <h1 className="display text-[clamp(2.85rem,8.55vw,7.6rem)] leading-[0.9] text-balance">
            Building<br />beyond the brief.
          </h1>
          <p className="mt-8 max-w-4xl text-lg text-muted-foreground">
            We believe in building more than structures. Our CSR initiatives
            focus on education, healthcare, plantation drives and the wellbeing
            of the communities we work with.
          </p>
        </div>
      </section>

      <section className="border-t border-border pb-24">
        <div className="container-x mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 6) * 0.05}>
              <figure className="group overflow-hidden border border-border bg-card">
                <div className="relative flex aspect-[4/3] items-center justify-center bg-muted">
                  <HeartHandshake size={40} className="text-accent/60" strokeWidth={1.25} />
                </div>
                <figcaption className="p-5">
                  <div className="display text-xl">{it.title}</div>
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
