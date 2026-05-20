import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Quote, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about/director")({
  component: DirectorPage,
  head: () => ({
    meta: [
      { title: "Director's Message — Mittal Construction Company" },
      { name: "description", content: "A message from the Managing Director of Mittal Construction Company." },
      { property: "og:title", content: "Director's Message — MCC" },
      { property: "og:description", content: "A message from the Managing Director of MCC." },
    ],
  }),
});

function DirectorPage() {
  return (
    <>
      <SiteHeader />

      <section className="relative grid min-h-[70vh] grid-cols-1 pt-28 md:grid-cols-12 md:pt-32">
        <div className="md:col-span-5">
          <div className="relative h-full min-h-[40vh] bg-ink">
            <img src={aboutImg} alt="Managing Director" className="h-full w-full object-cover opacity-90" />
            <div className="absolute bottom-0 left-0 bg-accent px-7 py-6 text-accent-foreground">
              <div className="display text-2xl">Mr. Vinod Mittal</div>
              <div className="mono mt-1 text-[10px] uppercase tracking-[0.22em]">
                Founder & Managing Director
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-7 md:px-16">
          <div className="eyebrow mb-5">Director's Message</div>
          <h1 className="display text-balance text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02]">
            "Every structure we build <span className="text-brand">carries our name.</span>"
          </h1>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-2">
            <Quote size={48} strokeWidth={1.2} className="text-accent" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-10 space-y-6 text-foreground/80">
            <p className="text-xl leading-relaxed">
              When we founded Mittal Construction Company in 2013, we made a
              simple promise to ourselves and to our clients — every project,
              big or small, would be delivered with the same discipline. More
              than a decade later, that promise still defines how we work.
            </p>
            <p>
              Construction is a trust business. A client hands us their
              drawings, their site, and their schedule — and trusts us to
              return a building that will serve them for decades. That trust
              is the foundation of every contract we sign, and we have spent
              eleven years protecting it.
            </p>
            <p>
              I am proud of the team we have built — engineers, supervisors,
              and crews who treat each site as their own. I am proud of the
              partners and consultants who have stayed with us across multiple
              projects. And I am grateful to every client who has given us the
              opportunity to build.
            </p>
            <p>
              We are still a young firm with much to learn. But we promise to
              keep building the way we always have — with safety first, with
              transparent commercials, and with structures engineered to last.
            </p>
            <div className="pt-6">
              <div className="display text-2xl">Vinod Mittal</div>
              <div className="mono mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Founder & Managing Director, MCC
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand py-20 text-brand-foreground">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="display text-3xl md:text-4xl">
            Have a project in mind?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
