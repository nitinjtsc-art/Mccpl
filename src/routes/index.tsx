import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, HardHat, Building2, Factory, Ruler } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mittal Construction — Industrial & Civil Builders, Rajasthan" },
      { name: "description", content: "Turnkey industrial, institutional and commercial construction. 11+ years across North India. ₹500M+ delivered." },
    ],
  }),
});

const stats = [
  { v: "11+", l: "Years Building" },
  { v: "50+", l: "Projects Delivered" },
  { v: "₹500M+", l: "Contract Value" },
  { v: "100%", l: "On-time Hand-over" },
];

const services = [
  { icon: Factory, t: "Industrial", d: "Factories, plants, warehouses — turnkey." },
  { icon: Building2, t: "Commercial", d: "Showrooms, offices, mixed-use shells." },
  { icon: HardHat, t: "Institutional", d: "Colleges, hospitals, government works." },
  { icon: Ruler, t: "Civil & MEP", d: "Earthworks, RCC, finishing, services." },
];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section ref={ref} className="noise relative h-[100svh] overflow-hidden bg-primary text-primary-foreground">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Construction site at dusk"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />
        </motion.div>

        {/* Drifting accent blob */}
        <div
          aria-hidden
          className="drift pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
        />

        <motion.div style={{ opacity }} className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.04] px-4 py-2 backdrop-blur-sm"
          >
            <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/80">
              Now building · Bhiwadi · Rajasthan
            </span>
          </motion.div>

          <h1 className="display text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] text-balance">
            {["WE BUILD", "WHAT LASTS."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${i === 1 ? "text-accent" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            <p className="max-w-md text-lg text-primary-foreground/80">
              Turnkey industrial, institutional and commercial construction across
              North India. Engineered for decades, delivered on schedule.
            </p>
            <div className="flex gap-3">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-accent px-6 py-4 mono text-xs uppercase tracking-[0.2em] text-accent-foreground"
              >
                <span className="absolute inset-0 -translate-x-full bg-primary-foreground transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative flex items-center gap-2 transition-colors group-hover:text-primary">
                  See Our Work
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-4 mono text-xs uppercase tracking-[0.2em] hover:bg-primary-foreground/10"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="overflow-hidden border-y border-border bg-primary text-primary-foreground">
        <div className="marquee-track flex whitespace-nowrap py-5">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
              {["RCC & Steel Structures", "Industrial Turnkey", "Institutional", "MEP Coordination", "11+ Years", "Bhiwadi · Alwar", "Mott MacDonald · NBCC", "On-time Hand-over"].map((t) => (
                <span key={t} className="flex items-center gap-12 display text-4xl md:text-6xl">
                  {t}
                  <span className="inline-block h-2 w-2 rotate-45 bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="p-8 md:p-12">
              <div className="display text-5xl md:text-6xl">{s.v}</div>
              <div className="mono mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden py-32">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              [ 01 ] About
            </div>
            <h2 className="display text-5xl md:text-7xl text-balance">
              A decade of<br />precision concrete.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              Since 2013, Mittal Construction has executed industrial plants and
              institutional buildings across Rajasthan, Haryana, UP and Jammu —
              partnering with consultants like Mott MacDonald, Artscan and NBCC.
            </p>
            <p className="text-foreground/70">
              We self-perform earthworks, RCC, structural steel, masonry, finishes,
              and MEP coordination. One contractor. One accountability line.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.2em]"
            >
              Read our story
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-primary py-32 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              [ 02 ] Capabilities
            </div>
            <h2 className="display max-w-3xl text-5xl md:text-7xl text-balance">
              From foundation pit<br />to ribbon cutting.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-px bg-primary-foreground/10 md:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="group relative h-full bg-primary p-8 transition-colors hover:bg-accent hover:text-accent-foreground">
                  <s.icon size={32} strokeWidth={1.25} />
                  <div className="display mt-10 text-3xl">{s.t}</div>
                  <p className="mt-3 text-sm opacity-70 group-hover:opacity-100">
                    {s.d}
                  </p>
                  <div className="mono absolute right-6 top-6 text-[10px] opacity-40">
                    0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex items-end justify-between gap-6">
            <div>
              <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
                [ 03 ] Selected Work
              </div>
              <h2 className="display text-5xl md:text-7xl text-balance">
                Recently<br />delivered.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden mono text-xs uppercase tracking-[0.2em] hover:text-accent md:inline-flex"
            >
              All projects →
            </Link>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.1}>
                <Link to="/projects" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="mono absolute left-4 top-4 bg-accent px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-accent-foreground">
                      {p.category}
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="display text-2xl md:text-3xl">{p.name}</div>
                      <div className="mono mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {p.location} · {p.year}
                      </div>
                    </div>
                    <div className="display text-xl text-accent">{p.value}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-accent py-32 text-accent-foreground">
        <div className="grid-lines absolute inset-0 opacity-30" />
        <Reveal className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em]">
            Ready to break ground?
          </div>
          <h2 className="display text-[clamp(3rem,9vw,8rem)] text-balance leading-[0.9]">
            Let's build<br />something serious.
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 bg-primary px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:translate-y-[-2px]"
          >
            Request a Quote
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
