import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSubnav } from "@/components/AboutSubnav";
import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/director-message")({
  component: DirectorPage,
  head: () => ({
    meta: [
      { title: "Director's Message — Mittal Construction" },
      { name: "description", content: "A message from the Managing Director of Mittal Construction Company." },
    ],
  }),
});

function DirectorPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">About · Director's Message</div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">From the<br />Director's desk.</h1>
        </div>
      </section>
      <AboutSubnav />

      <section className="py-24">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={aboutImg} alt="Managing Director" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6">
              <div className="display text-2xl">Mr. Mittal</div>
              <div className="mono mt-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Founder & Managing Director
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/85">
            <Quote className="text-accent" size={42} />
            <p>
              When we started Mittal Construction in 2013, the idea was simple:
              build the kind of firm we ourselves would want to hire. One that
              shows up on time, says what it can and cannot do, and treats every
              site — small or large — with the same engineering rigour.
            </p>
            <p>
              Over the last eleven years we have delivered factories, institutional
              buildings, and commercial blocks across Rajasthan, Haryana, Uttar
              Pradesh and Jammu & Kashmir. Behind each of those projects is a
              long-tenured site team, a supportive client, and a thousand small
              decisions taken in the right way.
            </p>
            <p>
              Construction is ultimately a business of trust. We are grateful to
              every owner, consultant, vendor and crew member who has trusted us
              with their work — and we promise to keep earning that trust on
              every project we take on next.
            </p>
            <p className="mono text-sm uppercase tracking-[0.22em] text-accent">— Mr. Mittal, Managing Director</p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
