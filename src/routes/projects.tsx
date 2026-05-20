import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Mittal Construction" },
      { name: "description", content: "Completed industrial, institutional and commercial projects by Mittal Construction across North India." },
      { property: "og:title", content: "Projects — Mittal Construction" },
      { property: "og:description", content: "Selected completed projects: Greenply, Toyoda Gosei, Lucid Colloids, Surya Roshni, R K Marble and more." },
    ],
  }),
});

function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <section className="relative bg-ink pt-40 pb-24 text-primary-foreground">
        <div className="container-x relative">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Portfolio · {projects.length} projects
          </div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-balance">
            Built work,<br />on the ground.
          </h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative md:col-span-7">
                  <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                  <div className="mono absolute -top-3 -left-3 bg-accent px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-accent-foreground shadow-soft">
                    0{i + 1} / {projects.length}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {p.category} · {p.year}
                  </div>
                  <h2 className="display mt-3 text-4xl md:text-5xl text-balance">
                    {p.name}
                  </h2>
                  <dl className="mt-8 grid grid-cols-1 gap-y-5 border-t border-border pt-6">
                    {[
                      ["Client", p.client],
                      ["Location", p.location],
                      ["Consultant", p.consultant],
                      ["Contract Value", p.value],
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-4 border-b border-border/60 pb-4">
                        <dt className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {k}
                        </dt>
                        <dd className="col-span-2 text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
