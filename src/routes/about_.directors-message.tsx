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
      <section className="bg-ink text-primary-foreground pt-40 scroll-mt-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="mono mb-4 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
              From the desk of
            </div>
            <h1 className="display text-5xl md:text-6xl leading-[0.9]">
              Director's<br />
              <span className="text-accent">Message.</span>
            </h1>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border border-accent text-lg font-semibold text-accent">
                RM
              </div>
              <div>
                <div className="text-base font-semibold">Rajesh Mittal</div>
                <div className="mono text-[15px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60">
                  Founder &amp; Managing Director
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
      <SiteFooter />
    </>
  );
}
