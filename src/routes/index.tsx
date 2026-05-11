import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowUpRight, HardHat, Building2, Factory, Ruler, Sparkles } from "lucide-react";
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
  { v: "11+", l: "Years Active" },
  { v: "50+", l: "Projects Shipped" },
  { v: "₹500M+", l: "Contract Value" },
  { v: "100%", l: "On-time Delivery" },
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // cursor-following spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section ref={ref} className="noise relative min-h-[100svh] overflow-hidden bg-background">
        {/* Aurora mesh background */}
        <div className="absolute inset-0 bg-mesh" />

        {/* Animated grid */}
        <div className="grid-lines-animated absolute inset-0 opacity-60" />

        {/* Cursor spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: useTransform(
              [sx, sy],
              ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, oklch(0.82 0.16 195 / 0.18), transparent 60%)`
            ),
          }}
        />

        {/* Parallax hero image */}
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </motion.div>

        {/* Spinning aurora orb */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] opacity-40">
          <div className="spin-slow h-full w-full rounded-full bg-aurora blur-3xl" />
        </div>

        <motion.div style={{ opacity }} className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-16">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-10 inline-flex w-fit items-center gap-3 rounded-full px-4 py-2"
          >
            <span className="pulse-dot relative inline-block h-2 w-2 rounded-full bg-accent" />
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-foreground/80">
              Now building · Bhiwadi · Rajasthan
            </span>
            <Sparkles size={12} className="text-accent" />
          </motion.div>

          <h1 className="display text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] text-balance">
            {[
              { text: "We engineer", className: "" },
              { text: "the future", className: "text-gradient" },
              { text: "of construction.", className: "" },
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${line.className}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            <p className="max-w-md text-lg leading-relaxed text-foreground/70">
              Turnkey industrial, institutional & commercial construction across
              North India. <span className="text-foreground">Engineered for decades.</span> Delivered on schedule.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-plasma px-7 py-4 mono text-[11px] uppercase tracking-[0.2em] text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <span className="relative flex items-center gap-2">
                  See Our Work
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="glass glow-border inline-flex items-center gap-2 rounded-full px-7 py-4 mono text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/[0.06]"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="relative overflow-hidden border-y border-border/60 bg-card/40">
        <div className="marquee-track flex whitespace-nowrap py-6">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
              {["RCC & Steel Structures", "Industrial Turnkey", "Institutional", "MEP Coordination", "11+ Years", "Bhiwadi · Alwar", "Mott MacDonald · NBCC", "On-time Hand-over"].map((t) => (
                <span key={t} className="flex items-center gap-12 display text-4xl md:text-6xl text-foreground/40 hover:text-foreground transition-colors">
                  {t}
                  <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_20px] shadow-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-b border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border/60 md:grid-cols-4 md:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="group relative p-8 md:p-12 overflow-hidden">
              <div className="display text-5xl md:text-6xl text-gradient">{s.v}</div>
              <div className="mono mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.l}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-plasma scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden py-32">
        <div className="grid-lines absolute inset-0 opacity-50" />
        <div
          aria-hidden
          className="drift pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--neon), transparent 65%)" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              [ 01 ] / About
            </div>
            <h2 className="display text-5xl md:text-7xl text-balance">
              A decade of <span className="text-gradient">precision</span> concrete.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              Since 2013, Mittal Construction has executed industrial plants and
              institutional buildings across Rajasthan, Haryana, UP and Jammu —
              partnering with consultants like Mott MacDonald, Artscan and NBCC.
            </p>
            <p className="text-foreground/60">
              We self-perform earthworks, RCC, structural steel, masonry, finishes,
              and MEP coordination. One contractor. One accountability line.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              Read our story
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              [ 02 ] / Capabilities
            </div>
            <h2 className="display max-w-3xl text-5xl md:text-7xl text-balance">
              From foundation pit to <span className="text-gradient">ribbon cutting.</span>
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="glass glow-border group relative h-full rounded-2xl p-8 transition-transform hover:-translate-y-1">
                  <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-plasma text-accent-foreground">
                    <s.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="display text-3xl">{s.t}</div>
                  <p className="mt-3 text-sm text-foreground/60">
                    {s.d}
                  </p>
                  <div className="mono absolute right-6 top-6 text-[10px] text-foreground/30">
                    /0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex items-end justify-between gap-6">
            <div>
              <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
                [ 03 ] / Selected Work
              </div>
              <h2 className="display text-5xl md:text-7xl text-balance">
                Recently <span className="text-gradient">delivered.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden mono text-xs uppercase tracking-[0.2em] hover:text-accent md:inline-flex"
            >
              All projects →
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.1}>
                <Link to="/projects" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-2xl" />
                    <div className="mono absolute left-4 top-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-accent">
                      {p.category}
                    </div>
                    <div className="absolute inset-x-6 bottom-6">
                      <div className="display text-2xl md:text-3xl">{p.name}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                          {p.location} · {p.year}
                        </div>
                        <div className="display text-lg text-accent">{p.value}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-aurora opacity-25 blur-3xl" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <Reveal className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Ready to break ground?
          </div>
          <h2 className="display text-[clamp(3rem,9vw,8rem)] text-balance leading-[0.9]">
            Let's build something <span className="text-gradient">serious.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-plasma px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-accent-foreground shadow-glow transition-transform hover:-translate-y-1"
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
