import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Mittal Construction Company (MCC)" },
      { name: "description", content: "Founded in 1997 by Mr. Rajendra Mittal, MCC is a pan-India civil EPC firm — 100+ projects, 10M+ sq.ft., 11 states & 2 UTs delivered." },
      { property: "og:title", content: "About Mittal Construction Company" },
      { property: "og:description", content: "28 years of civil infrastructure across India — industrial, hospitality, institutional, commercial and residential." },
    ],
  }),
});

const values = [
  ["Trust & Reliability", "Long-term client partnerships built on consistent, transparent delivery."],
  ["Integrity & Ethics", "Ethical business practices govern every contract, vendor relationship and site decision."],
  ["Quality & Excellence", "ISO procedures, consultant-grade specifications and rigorous QA/QC across every trade."],
  ["Sustainability & Responsibility", "3R principles — efficient resource use, dust & pollution control, structured waste management."],
  ["Client-Centric Approach", "Tailored EPC solutions and dedicated project leadership for every client."],
  ["Innovation & Growth", "In-house ERP, modern equipment, continuous workforce training."],
];

const timeline = [
  ["1997", "Mittal Construction Company founded by Mr. Rajendra Mittal."],
  ["2000s", "Established sectoral expertise across cement, FMCG, auto-ancillary and pharma plants."],
  ["2010s", "Pan-India footprint expanded — IIT Mandi, NIT Patna, Wonder Cement, JK Cement, Adani projects executed."],
  ["2020s", "100+ projects delivered across 11 states & 2 UTs; 10M+ sq.ft. of built-up area; 5M+ safe man-hours."],
  ["Today", "Headquartered in Delhi-NCR with offices in Bhiwadi & Malviya Nagar — actively executing turnkey EPC contracts nationwide."],
];

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <section className="relative grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-end bg-background px-6 py-24 md:px-16 md:pt-40">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Established 1997
          </div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85] text-balance">
            Civil works,<br />engineered<br /><span className="text-accent">to last.</span>
          </h1>
        </div>
        <div className="relative bg-primary">
          <img
            src={aboutImg}
            alt="MCC project team on site"
            loading="lazy"
            className="h-full w-full object-cover opacity-90"
          />
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              About MCC
            </div>
            <h2 className="display text-5xl md:text-6xl">
              Built since 1997.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-5 md:col-span-7 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Mittal Construction Company (MCC) is a leading civil-infrastructure
              firm specialising in industrial, commercial, hospitality,
              institutional and residential projects. Established in 1997 by
              Mr. Rajendra Mittal, MCC has grown into a trusted national name
              for reliable, timely and sustainable construction.
            </p>
            <p>
              Headquartered in Delhi-NCR, we have successfully executed over
              100 projects across 11 states and 2 union territories — with a
              total built-up area exceeding 10 million square feet. Our
              clientele spans heavy machinery, cement, food, chemicals,
              pharmaceuticals, institutional, hospitality, automobile-ancillary
              and industrial-equipment sectors.
            </p>
            <p>
              Operational excellence and ethical business practices are the
              foundation of long-term client partnerships. From single-shed
              industrial sheds to multi-million square foot integrated
              townships, every project is delivered under a single accountable
              EPC team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-card border-y border-border py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <Reveal className="border-l-2 border-accent pl-8">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-accent">Our Mission</div>
            <p className="mt-5 text-lg text-foreground/80 leading-relaxed">
              To deliver high-quality, sustainable and cost-effective construction
              solutions while upholding industry standards. We aim to build
              long-term relationships with our clients through timely execution,
              superior workmanship and unwavering integrity in every project.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="border-l-2 border-accent pl-8">
            <div className="mono text-[10px] uppercase tracking-[0.25em] text-accent">Our Vision</div>
            <p className="mt-5 text-lg text-foreground/80 leading-relaxed">
              To be one of India's most trusted and preferred EPC partners —
              known for excellence in construction, quality and sustainable
              solutions that contribute to the nation's growth and development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v[0]} delay={i * 0.05}>
              <div className="border-b border-r border-border p-10 md:p-12">
                <div className="display text-5xl text-accent">0{i + 1}</div>
                <div className="display mt-6 text-2xl">{v[0]}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-sand">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">Leadership</div>
            <h2 className="display text-5xl md:text-6xl">Mr. Rajendra Mittal</h2>
            <p className="mt-3 text-foreground/60">Founder &amp; Managing Director</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 space-y-5 text-foreground/80">
            <p><strong className="text-foreground">Experience —</strong> 30+ years in civil infrastructure, specialising in industrial and large-scale projects.</p>
            <p><strong className="text-foreground">Leadership —</strong> Pioneered MCC's growth from a regional contractor to a pan-India EPC firm.</p>
            <p><strong className="text-foreground">Expertise —</strong> Strategic resource allocation, sustainable construction practices and long-term client relationships.</p>
            <div className="grid gap-6 sm:grid-cols-3 pt-8 border-t border-border">
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-accent">Engineering Heads</div>
                <p className="mt-2 text-sm text-foreground/70">15–25 years in managing complex projects across diverse terrains.</p>
              </div>
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-accent">Project Managers</div>
                <p className="mt-2 text-sm text-foreground/70">Certified PMs delivering turnkey projects on accelerated timelines.</p>
              </div>
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-accent">Procurement &amp; Logistics</div>
                <p className="mt-2 text-sm text-foreground/70">Pan-India sourcing, cost optimisation and supply-risk mitigation.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              Milestones
            </div>
            <h2 className="display text-5xl md:text-7xl">Our journey.</h2>
          </Reveal>
          <ol className="mt-16 border-l-2 border-accent">
            {timeline.map(([y, t], i) => (
              <Reveal key={y} delay={i * 0.05}>
                <li className="relative pl-10 pb-12">
                  <span className="absolute -left-[9px] top-2 h-4 w-4 bg-accent" />
                  <div className="display text-3xl">{y}</div>
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
