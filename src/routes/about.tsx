import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Mittal Construction" },
      { name: "description", content: "Founded in 2013, Mittal Construction is a Rajasthan-based industrial and civil contractor delivering across North India." },
      { property: "og:title", content: "About Mittal Construction" },
      { property: "og:description", content: "Eleven years of industrial and civil construction across North India." },
    ],
  }),
});

const values = [
  ["Self-Perform", "Our crews execute the core scope. Less hand-off, less risk."],
  ["Schedule First", "Critical path managed weekly. Hand-overs on the promised date."],
  ["Safety Standard", "Zero-harm site protocols, full PPE, daily toolbox talks."],
  ["Compliance", "ISO procedures, statutory clearances, full QA/QC documentation."],
];

const timeline = [
  ["2013", "Mittal Construction founded in Bhiwadi, Rajasthan."],
  ["2015", "First industrial contract — Greenply, Behror."],
  ["2018", "Expanded into institutional works with NBCC."],
  ["2021", "Crossed ₹100M single-project benchmark — Toyoda Gosei."],
  ["2024", "Active in Rajasthan, Haryana, UP, J&K with 200+ workforce."],
];

const team = [
  { name: "Rajesh Mittal", role: "Founder & Managing Director", initials: "RM" },
  { name: "Anil Mittal", role: "Director — Operations", initials: "AM" },
  { name: "Vikas Sharma", role: "Head of Projects", initials: "VS" },
  { name: "Sunita Verma", role: "QA / QC Lead", initials: "SV" },
  { name: "Deepak Yadav", role: "Site Safety Officer", initials: "DY" },
  { name: "Priya Singh", role: "Procurement & Contracts", initials: "PS" },
];

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <section id="overview" className="relative grid min-h-[80vh] grid-cols-1 md:grid-cols-2 scroll-mt-32">
        <div className="flex flex-col justify-end bg-background px-6 py-24 md:px-16 md:pt-40">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Since 2013
          </div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85] text-balance">
            Concrete,<br />steel,<br /><span className="text-accent">conviction.</span>
          </h1>
        </div>
        <div className="relative bg-primary">
          <img
            src={aboutImg}
            alt="Engineer on site"
            loading="lazy"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
      </section>

      <section id="story" className="py-32 scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              The firm
            </div>
            <h2 className="display text-5xl md:text-6xl">
              Eleven years, one trade.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-5 md:col-span-7 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Mittal Construction is a Bhiwadi-based general contractor founded
              in 2013. We've built plants for Greenply, Toyoda Gosei, Lucid
              Colloids and Surya Roshni — and institutional buildings under
              NBCC supervision in Jammu & Kashmir.
            </p>
            <p>
              We keep the office lean and the site heavy. Most of our scope is
              self-performed by long-tenured crew supervisors, which is how we
              keep schedule and quality predictable across geographies.
            </p>
          </Reveal>
        </div>

        {/* Vision / Mission */}
        <div className="mx-auto mt-24 grid max-w-7xl gap-px bg-border px-6 md:grid-cols-2 md:px-0">
          <Reveal>
            <div className="bg-background p-10 md:p-16">
              <div className="mono mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
                Our Vision
              </div>
              <h3 className="display text-3xl md:text-4xl">
                To be North India's most trusted self-performing contractor.
              </h3>
              <p className="mt-5 text-muted-foreground">
                Known not for the size of our bid sheet, but for the certainty
                of the date we sign against.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-background p-10 md:p-16">
              <div className="mono mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
                Our Mission
              </div>
              <h3 className="display text-3xl md:text-4xl">
                Deliver every project on the promised date, to the promised standard.
              </h3>
              <p className="mt-5 text-muted-foreground">
                We do this by self-performing the core scope, employing our
                supervisors directly, and keeping the office close to the site.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="values" className="bg-card border-y border-border py-24 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              Our Values · Why Us
            </div>
            <h2 className="display text-5xl md:text-6xl text-balance">
              The reasons clients<br />come back.
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v[0]} delay={i * 0.05}>
              <div className="border-b border-r border-border p-10 md:p-16">
                <div className="display text-6xl text-accent">0{i + 1}</div>
                <div className="display mt-6 text-3xl">{v[0]}</div>
                <p className="mt-3 max-w-md text-muted-foreground">{v[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="timeline" className="py-32 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              Milestones
            </div>
            <h2 className="display text-5xl md:text-7xl">Timeline.</h2>
          </Reveal>
          <ol className="mt-16 border-l-2 border-accent">
            {timeline.map(([y, t], i) => (
              <Reveal key={y} delay={i * 0.05}>
                <li className="relative pl-10 pb-12">
                  <span className="absolute -left-[9px] top-2 h-4 w-4 bg-accent" />
                  <div className="display text-4xl">{y}</div>
                  <p className="mt-2 max-w-2xl text-foreground/70">{t}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Director's Message */}
      <section id="directors-message" className="bg-ink text-primary-foreground scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              From the desk of
            </div>
            <h2 className="display text-5xl md:text-6xl leading-[0.9]">
              Director's<br />
              <span className="text-accent">Message.</span>
            </h2>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border border-accent text-lg font-semibold text-accent">
                RM
              </div>
              <div>
                <div className="text-base font-semibold">Rajesh Mittal</div>
                <div className="mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  Founder & Managing Director
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 md:col-span-8 text-primary-foreground/80">
            <p className="display text-2xl leading-snug text-primary-foreground">
              "Construction is a business of promises — of dates, of drawings,
              of the people who trust us with their capital. We've built this
              company by keeping those promises, one pour at a time."
            </p>
            <p className="leading-relaxed">
              When we started in 2013, we made a simple decision: stay small
              enough to remain accountable, large enough to take on serious
              industrial work. A decade later, that philosophy still defines us.
              We self-perform the core scope, employ our supervisors directly,
              and put our name on every handover.
            </p>
            <p className="leading-relaxed">
              The clients we're proudest of — Greenply, Toyoda Gosei, Lucid
              Colloids, Surya Roshni — came back to us not because we were the
              cheapest bid, but because we delivered on the date we promised.
              That's the legacy we're building, and the standard we owe every
              future project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-32 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              The people
            </div>
            <h2 className="display text-5xl md:text-7xl">Our Team.</h2>
            <p className="mt-6 max-w-2xl text-foreground/70">
              Long-tenured engineers and site supervisors who self-perform the
              core scope of every project.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group flex items-center gap-5 bg-background p-8 transition-colors hover:bg-card">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-ink text-base font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                    {m.initials}
                  </div>
                  <div>
                    <div className="display text-xl">{m.name}</div>
                    <div className="mono mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {m.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
