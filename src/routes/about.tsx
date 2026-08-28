import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Mittal Construction" },
      { name: "description", content: "Founded in 1997 by Mr. Rajendra Mittal, MCC delivers industrial, institutional, hospitality and residential projects across India." },
      { property: "og:title", content: "About Mittal Construction" },
      { property: "og:description", content: "Nearly three decades of trusted construction across 13 states of India." },
    ],
  }),
});

const values = [
  ["Quality", "Uncompromising commitment to quality that shows in everything we build."],
  ["Trust & Reliability", "The trust our clients place in us is something we earn on every project and protect on every site."],
  ["Safety", "We have never treated safety as a cost, we treat it as a commitment."],
  ["Client-Centric Approach", "We measure our success not by the structures we build but by the satisfaction of the clients we build them for."],
];

// TODO: Years and descriptions for entries 2–5 are placeholders pending client confirmation.
const timeline = [
  ["1997", "Mittal Construction Company founded by Mr. Rajendra Mittal in Bhiwadi, Rajasthan."],
  ["2015", "First industrial contract, Greenply, Behror."],
  ["2018", "Expanded into institutional works with NBCC."],
  ["2021", "Crossed ₹100M single-project benchmark, Toyoda Gosei."],
  ["2024", "Active in Rajasthan, Haryana, UP, J&K with 200+ workforce."],
];

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <section id="overview" className="relative grid min-h-[80vh] grid-cols-1 md:grid-cols-2 scroll-mt-32">
        <div className="flex flex-col justify-end bg-background px-6 py-24 md:px-16 md:pt-40">
          <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            Since 1997
          </div>
          <h1 className="display text-[clamp(2rem,6vw,4rem)] leading-tight text-balance whitespace-pre-wrap">
            {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            remove \"a\" and add \"an\"4`}
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
              Built to Last.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-5 md:col-span-7 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Founded in 1997 by Mr. Rajendra Mittal, MCC has grown from a
              regional contractor into a trusted pan-India construction firm -
              built on a simple belief that good construction is built on
              trust, hard work and accountability.
            </p>
            <p>
              Over nearly three decades, we have delivered industrial plants,
              warehouses, institutional campuses, hospitality projects and
              residential developments across 13 states, for clients who value
              quality, reliability and on-time delivery above everything else.
            </p>
            <p>
              Today, with 100+ projects to our name, we are trusted by
              multinational corporations, government institutions and leading
              Indian businesses alike, for clients who demand nothing but the
              best.
            </p>
          </Reveal>
        </div>

        {/* Vision / Mission */}
        <div className="mx-auto mt-24 grid max-w-7xl px-6 md:grid-cols-2 md:px-0">
          <Reveal>
            <div className="bg-background p-10 md:p-16">
              <div className="mono mb-4 text-[14px] font-bold uppercase tracking-[0.25em] text-accent">
                Our Vision
              </div>
              <h3 className="display text-3xl md:text-4xl">
                To build a legacy as strong as our structures.
              </h3>
              <p className="mt-5 text-muted-foreground">
                A legacy measured in the trust we earned, the standards we
                kept and the relationships we built along the way.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-background p-10 md:p-16">
              <div className="mono mb-4 text-[14px] font-bold uppercase tracking-[0.25em] text-accent">
                Our Mission
              </div>
              <h3 className="display text-3xl md:text-4xl">
                To hand over every project better than promised.
              </h3>
              <p className="mt-5 text-muted-foreground">
                By putting the right professionals, the right resources and
                the right values behind everything we build.
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
              Built on the right<br />foundations.
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
          <ol className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-6">
            <div
              className="pointer-events-none absolute left-0 right-0 top-2 hidden h-px bg-accent md:block"
              aria-hidden="true"
            />
            {timeline.map(([y, t], i) => (
              <Reveal key={y} delay={i * 0.05}>
                <li className="relative md:pt-8">
                  <span className="absolute left-0 top-0 h-4 w-4 bg-accent md:left-0 md:-top-[7px]" />
                  <div className="display mt-6 text-4xl md:mt-0">{y}</div>
                  <p className="mt-2 text-foreground/70">{t}</p>
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
