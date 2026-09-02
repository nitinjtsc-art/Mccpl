import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about_/directors-message")({
  component: DirectorsMessagePage,
  head: () => ({
    meta: [
      { title: "Director's Message — Mittal Construction" },
      { name: "description", content: "A note from Rajesh Mittal, Founder & Managing Director of Mittal Construction." },
      { property: "og:title", content: "Director's Message — Mittal Construction" },
      { property: "og:description", content: "A note from Rajesh Mittal, Founder & Managing Director." },
    ],
  }),
});

function DirectorsMessagePage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-32 scroll-mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
              From the desk of
            </div>
            <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-balance text-foreground">
              Director's<br />
              <span className="text-accent">Message.</span>
            </h1>
          </Reveal>

          <div className="mt-20 grid gap-16 md:grid-cols-12">
            {/* Left: signature card */}
            <Reveal delay={0.1} className="md:col-span-4">
              <div className="sticky top-32 border border-border bg-card p-8">
                <div className="flex h-20 w-20 items-center justify-center bg-ink text-xl font-semibold text-accent">
                  RM
                </div>
                <div className="mt-6 display text-2xl leading-tight text-foreground">
                  Rajesh Mittal
                </div>
                <div className="mono mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Founder &amp; Managing Director
                </div>
                <div className="mt-6 h-px w-12 bg-accent" />
                <p className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Bhiwadi, Rajasthan
                </p>
              </div>
            </Reveal>

            {/* Right: message */}
            <Reveal delay={0.2} className="md:col-span-8">
              <div className="border-l-2 border-accent pl-8">
                <p className="display text-2xl md:text-3xl leading-snug text-foreground text-balance">
                  "Construction is a business of promises, of dates, of
                  drawings, of the people who trust us with their capital.
                  We've built this company by keeping those promises, one
                  pour at a time."
                </p>
              </div>

              <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  When we started in 2013, we made a simple decision: stay
                  small enough to remain accountable, large enough to take on
                  serious industrial work. A decade later, that philosophy
                  still defines us. We self-perform the core scope, employ
                  our supervisors directly, and put our name on every
                  handover.
                </p>
                <p>
                  The clients we're proudest of, Greenply, Toyoda Gosei,
                  Lucid Colloids, Surya Roshni, came back to us not because
                  we were the cheapest bid, but because we delivered on the
                  date we promised. That's the legacy we're building, and
                  the standard we owe every future project.
                </p>
              </div>

              <div className="mt-16 flex items-center gap-6">
                <div className="display text-3xl text-foreground italic">
                  Rajesh Mittal
                </div>
                <div className="h-px flex-1 bg-border" />
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Est. 2013
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
