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

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <section id="overview" className="relative grid min-h-[80vh] grid-cols-1 md:grid-cols-2 scroll-mt-32">
        <div className="flex flex-col justify-end bg-background px-6 py-24 md:px-16 md:pt-40">
          <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            Since 2013
          </div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85] text-balance">
            Concrete, steel,
            <span className="my-4 block h-px w-24 bg-accent" aria-hidden="true" />
            <span className="text-accent">conviction.</span>
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
            <div className="mono mb-4 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
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
              <div className="mono mb-4 text-[14px] font-bold uppercase tracking-[0.25em] text-accent">
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
              <div className="mono mb-4 text-[14px] font-bold uppercase tracking-[0.25em] text-accent">
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
            <div className="mono mb-4 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
              Our Values · Why Us
            </div>
            <h2 className="display text-5xl md:text-6xl text-balance">
              The reasons clients<br />come back.
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            <div
              className="pointer-events-none absolute left-6 right-6 top-8 hidden h-px bg-accent/40 md:block"
              aria-hidden="true"
            />
            {values.map((v, i) => (
              <Reveal key={v[0]} delay={i * 0.06}>
                <div className="relative">
                  <div className="display relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-card text-2xl text-accent">
                    0{i + 1}
                  </div>
                  <div className="display mt-6 text-2xl">{v[0]}</div>
                  <p className="mt-3 max-w-sm text-muted-foreground">{v[1]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-32 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
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

      <SiteFooter />
    </>
  );
}
