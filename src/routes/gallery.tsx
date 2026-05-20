import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import heroImg from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Mittal Construction" },
      { name: "description", content: "Photo gallery of completed projects and works under construction by Mittal Construction." },
    ],
  }),
});

const completed = projects.map((p) => ({ img: p.image, caption: `${p.name} · ${p.location}` }));

const ongoing = [
  { img: heroImg, caption: "Industrial shed · Bhiwadi" },
  { img: aboutImg, caption: "Site mobilisation · Neemrana" },
  { img: heroImg, caption: "RCC frame works · Alwar" },
  { img: aboutImg, caption: "Pre-engineered building · Behror" },
];

function GalleryPage() {
  const [tab, setTab] = useState<"completed" | "ongoing">("completed");
  const items = tab === "completed" ? completed : ongoing;

  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-12">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">Gallery</div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">From the<br />field.</h1>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-x flex">
          {([
            ["completed", "Completed Projects"],
            ["ongoing", "Under Construction"],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`mono relative px-6 py-5 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                tab === key ? "text-brand" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              {tab === key && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" />}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={`${tab}-${i}`} delay={i * 0.04}>
                <figure className="group overflow-hidden bg-muted">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="bg-background p-4 text-sm">
                    {it.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
