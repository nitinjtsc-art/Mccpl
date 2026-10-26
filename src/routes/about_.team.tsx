import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about_/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — Mittal Construction" },
      { name: "description", content: "The people behind every Mittal Construction project — leadership, operations, projects, QA/QC, safety and procurement." },
      { property: "og:title", content: "Our Team — Mittal Construction" },
      { property: "og:description", content: "Leadership and site team behind Mittal Construction." },
    ],
  }),
});

type Member = { name: string; role: string; initials: string };

const founder: Member = { name: "Rajendra Mittal", role: "Founder & Managing Director", initials: "RM" };

function Card({ m, accent = false }: { m: Member; accent?: boolean }) {
  return (
    <div className="group relative flex w-64 items-center gap-4 border border-border bg-background p-5 shadow-soft transition-colors hover:bg-card">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center text-sm font-semibold transition-colors ${
          accent
            ? "bg-accent text-ink"
            : "bg-ink text-accent group-hover:bg-accent group-hover:text-ink"
        }`}
      >
        {m.initials}
      </div>
      <div className="min-w-0">
        <div className="display truncate text-lg">{m.name}</div>
        <div className="mono mt-1 text-[14px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {m.role}
        </div>
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <>
      <SiteHeader />
      <section className="pt-40 pb-24 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
              The people
            </div>
            <h1 className="display text-5xl md:text-7xl">Our Team.</h1>
            <p className="mt-6 max-w-2xl text-foreground/70">
              Long-tenured engineers and site supervisors who self-perform the
              core scope of every project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Org chart */}
      <section className="bg-card border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-10 text-center text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
              Leadership structure
            </div>
          </Reveal>

          <div className="flex justify-center">
            <Reveal>
              <Card m={founder} accent />
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
