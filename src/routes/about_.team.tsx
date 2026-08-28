import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about_/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team | Mittal Construction" },
      { name: "description", content: "The people behind every Mittal Construction project, leadership, operations, projects, QA/QC, safety and procurement." },
      { property: "og:title", content: "Our Team, Mittal Construction" },
      { property: "og:description", content: "Leadership and site team behind Mittal Construction." },
    ],
  }),
});

type Member = { name: string; role: string; initials: string };

const founder: Member = { name: "Rajesh Mittal", role: "Founder & Managing Director", initials: "RM" };
const directors: Member[] = [
  { name: "Anil Mittal", role: "Director, Operations", initials: "AM" },
  { name: "Vikas Sharma", role: "Head of Projects", initials: "VS" },
];
const leads: Member[] = [
  { name: "Sunita Verma", role: "QA / QC Lead", initials: "SV" },
  { name: "Deepak Yadav", role: "Site Safety Officer", initials: "DY" },
  { name: "Priya Singh", role: "Procurement & Contracts", initials: "PS" },
];

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

          <div className="flex flex-col items-center">
            {/* Level 1 */}
            <Reveal>
              <Card m={founder} accent />
            </Reveal>

            {/* connector */}
            <div className="h-10 w-px bg-accent/50" aria-hidden="true" />

            {/* Level 2 */}
            <div className="relative w-full max-w-3xl">
              <div className="absolute left-1/4 right-1/4 top-0 h-px bg-accent/50" aria-hidden="true" />
              <div className="grid grid-cols-2 justify-items-center gap-8 pt-0">
                {directors.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.08} className="relative flex flex-col items-center">
                    <div className="h-10 w-px bg-accent/50" aria-hidden="true" />
                    <Card m={m} />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* connector down */}
            <div className="h-10 w-px bg-accent/50" aria-hidden="true" />

            {/* Level 3 */}
            <div className="relative w-full max-w-5xl">
              <div className="absolute left-[16%] right-[16%] top-0 h-px bg-accent/50" aria-hidden="true" />
              <div className="grid grid-cols-1 justify-items-center gap-8 pt-0 md:grid-cols-3">
                {leads.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.08} className="relative flex flex-col items-center">
                    <div className="h-10 w-px bg-accent/50" aria-hidden="true" />
                    <Card m={m} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
