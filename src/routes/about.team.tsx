import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — Mittal Construction Company" },
      { name: "description", content: "The leadership, engineers and site supervisors who run MCC's projects across North India." },
      { property: "og:title", content: "Our Team — MCC" },
      { property: "og:description", content: "Meet the people behind every MCC project." },
    ],
  }),
});

const leadership = [
  { name: "Mr. Vinod Mittal", role: "Founder & Managing Director", bio: "Civil engineer with 25+ years in industrial construction across North India." },
  { name: "Mr. Rohit Mittal", role: "Director — Projects", bio: "Leads project delivery, scheduling and consultant coordination." },
  { name: "Mr. Anil Sharma", role: "Head — Operations", bio: "Oversees site mobilisation, manpower and material logistics." },
  { name: "Mr. Suresh Kumar", role: "Head — QA / QC", bio: "Ensures consultant-grade quality and full documentation on every project." },
  { name: "Mr. Pradeep Singh", role: "Head — Safety (EHS)", bio: "Drives zero-harm protocols and daily toolbox talks across all active sites." },
  { name: "Ms. Neha Verma", role: "Head — Estimation & Contracts", bio: "Owns BoQs, tender response and commercial closure." },
];

function TeamPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-background pt-40 pb-16 md:pb-24">
        <div className="container-x">
          <div className="eyebrow mb-5">About · Our Team</div>
          <h1 className="display text-balance text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]">
            The people who <span className="text-brand">run every site.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            MCC runs on a long-tenured, owner-led team. Below are the people
            who own the project from estimation to hand-over.
          </p>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="container-x grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <article className="h-full bg-background p-8">
                <div className="flex h-24 w-24 items-center justify-center bg-brand text-3xl font-semibold text-brand-foreground">
                  {m.name.split(" ").slice(-2).map((s) => s[0]).join("")}
                </div>
                <h3 className="display mt-6 text-2xl">{m.name}</h3>
                <div className="mono mt-1 text-[11px] uppercase tracking-[0.2em] text-accent">
                  {m.role}
                </div>
                <p className="mt-4 text-sm text-foreground/70">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x grid gap-10 md:grid-cols-3">
          {[
            ["200+", "Site workforce"],
            ["25+", "Engineers & supervisors"],
            ["11+", "Years of team continuity"],
          ].map(([v, l]) => (
            <Reveal key={l}>
              <div className="border-t-2 border-brand pt-6">
                <div className="display text-5xl">{v}</div>
                <div className="mono mt-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
