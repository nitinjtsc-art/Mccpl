import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Ruler,
  Users,
  CheckCircle2,
  Package,
  Repeat,
  Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-team.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { homeProjects } from "@/data/homeProjects";
import home1 from "@/assets/home/home-1.jpg.asset.json";
import home2 from "@/assets/home/home-2.jpg.asset.json";
import home3 from "@/assets/home/home-3.jpg.asset.json";
import home4 from "@/assets/home/home-4.jpg.asset.json";
import home5 from "@/assets/home/home-5.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mittal Construction Company — Industrial & Civil Builders, Rajasthan" },
      {
        name: "description",
        content:
          "Multi-disciplinary construction firm delivering industrial, commercial, institutional, hospitality and residential projects across India since 1997. ₹1000 Cr+ delivered.",
      },
      { property: "og:title", content: "Mittal Construction Company — Industrial & Civil Builders" },
      {
        property: "og:description",
        content:
          "Multi-disciplinary construction firm delivering industrial, commercial, institutional, hospitality and residential projects across India since 1997.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const heroSlides = [
  {
    image: home1.url,
    eyebrow: "Industrial · Facilities",
    title: "Modern industrial buildings, built to perform.",
  },
  {
    image: home2.url,
    eyebrow: "Industrial · Manufacturing",
    title: "Turnkey factories, delivered on schedule.",
  },
  {
    image: home3.url,
    eyebrow: "Institutional",
    title: "Public buildings designed to serve generations.",
  },
  {
    image: home4.url,
    eyebrow: "Industrial · Process Plant",
    title: "Engineering plants that run for decades.",
  },
  {
    image: home5.url,
    eyebrow: "Commercial",
    title: "Landmark facilities that stand out, day and night.",
  },
];

const services = [
  {
    icon: Ruler,
    title: "Engineering & Design",
    desc: "The foundation of every good project is a good plan.",
  },
  {
    icon: HardHat,
    title: "Construction & Project Execution",
    desc: "Experienced teams delivering on every commitment.",
  },
  {
    icon: Factory,
    title: "Turnkey Project Delivery",
    desc: "You share your vision, we handle everything else.",
  },
  {
    icon: Building2,
    title: "Retrofit & Renovation",
    desc: "Old building, new potential, we make it happen.",
  },
  {
    icon: Package,
    title: "Procurement",
    desc: "Sourcing the right materials, at the right price.",
  },
];

const stats = [
  { v: "28+", l: "Years in Business" },
  { v: "100+", l: "Projects Delivered" },
  { v: "₹1000 Cr+", l: "Cumulative Value" },
  { v: "13", l: "States Served" },
];

const whyUs = [
  {
    icon: Users,
    t: "Proven Client List",
    d: "From multinationals to government institutions, India's most demanding clients trust MCC with their projects.",
  },
  {
    icon: Repeat,
    t: "Repeat Business",
    d: "We earn the next project by delivering the first one right.",
  },
  {
    icon: Clock,
    t: "On-time Delivery",
    d: "Behind every deadline is a business waiting to start. We make sure they never wait.",
  },
];

function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SiteHeader />

      {/* HERO — full bleed image carousel */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink pt-20 md:h-[85svh] md:min-h-[560px] md:pt-28">
        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-x-0 bottom-0 top-20 md:top-[116px]"
          >
            <img
              src={heroSlides[active].image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div aria-hidden="true" className="hero-overlay absolute inset-0" />
          </motion.div>
        </AnimatePresence>

        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-20 md:pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-primary-foreground"
            >
              <div className="mono mb-5 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.32em] text-primary-foreground">
                <span aria-hidden="true" className="h-4 w-0.5 shrink-0 bg-accent" />
                {heroSlides[active].eyebrow}
              </div>
              <h1 className="display text-balance text-[clamp(2.25rem,5.6vw,5rem)] font-bold leading-[1.05] tracking-tight text-primary-foreground">
                {heroSlides[active].title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-[2px] bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore Our Work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-[2px] border border-primary-foreground/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-ink"
            >
              Request a Quote
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className="group relative h-1 w-14 overflow-hidden bg-primary-foreground/35"
              >
                <span
                  className={`block h-full bg-accent transition-all duration-500 ${
                    i === active ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
            <span className="mono ml-3 text-[12px] font-bold uppercase tracking-[0.25em] text-primary-foreground/90">
              0{active + 1} / 0{heroSlides.length}
            </span>
          </div>
        </div>
      </section>




      {/* ABOUT */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-x grid items-start gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="relative overflow-hidden">
              <img
                src={aboutImg}
                alt="Mittal Construction site team"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-px -right-px bg-accent px-7 py-6 text-accent-foreground">
                <div className="display text-5xl font-semibold leading-none">28+</div>
                <div className="mono mt-2 text-[10px] uppercase tracking-[0.2em]">
                  Years of Excellence
                </div>
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow mb-5">About MCC</div>
              <h2 className="display text-balance text-4xl md:text-6xl">
                A construction partner built on{" "}
                <span className="text-brand">experience, trust and delivery.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80">
                Founded in 1997 by Mr. Rajendra Mittal, MCC has spent nearly three decades
                doing one thing well, building. From large industrial plants and warehouses
                to institutional campuses and hospitality projects, we have earned the trust
                of some of India's most demanding clients.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80">
                We manage the full construction lifecycle, engineering, procurement,
                execution and handover, with a focus on quality, safety and on-time
                delivery.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Trusted by leading Indian & multinational corporations",
                  "Long-standing relationships with clients and consultants",
                  "End-to-end project delivery under one roof",
                  "A track record built on timely, quality delivery",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base leading-relaxed text-foreground/80">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="link-underline mt-10 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-brand"
              >
                Read our story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand text-brand-foreground">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 0.08}
              className={`flex min-w-0 flex-col items-center justify-center px-3 py-10 text-center md:px-6 md:py-14 ${
                i > 0 ? "border-l border-primary-foreground/10" : ""
              } ${i > 1 ? "max-md:border-t max-md:border-primary-foreground/10" : ""} ${
                i === 2 ? "max-md:border-l-0" : ""
              }`}
            >
              <div className="display w-full whitespace-nowrap text-[clamp(1.5rem,4.2vw,3.25rem)] font-semibold leading-none">
                {s.v}
              </div>
              <div className="mono mt-3 text-[11px] uppercase leading-relaxed tracking-[0.18em] text-primary-foreground md:text-xs">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-background pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <div className="eyebrow mb-5">What we do</div>
              <h2 className="display text-balance text-4xl md:text-6xl">
                One partner for your complete <span className="text-brand">construction journey.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="max-w-none text-base leading-relaxed text-foreground/80">
                From groundbreaking ceremony to ribbon cutting, we manage every stage of
                your project with the same commitment and care.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="h-full">
                <div className="group relative flex h-full flex-col bg-background p-7">
                  <div className="flex items-center gap-3">
                    <s.icon size={26} strokeWidth={1.4} className="shrink-0 text-brand " />
                    <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                    {s.desc}
                  </p>
                  <div className="mono mt-auto inline-flex items-center gap-2 pt-8 text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                    /0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-background pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="container-x">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div className="eyebrow mb-5">Selected Work</div>
              <h2 className="display text-balance text-4xl md:text-6xl">
                Recently <span className="text-brand">delivered.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/projects"
                className="link-underline text-sm font-semibold uppercase tracking-[0.18em] text-brand"
              >
                View all projects <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homeProjects.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <Link to="/projects" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-card">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="img-hover h-full w-full object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                    <div className="absolute left-5 top-5 bg-accent px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                      {p.category}
                    </div>
                    <div className="absolute inset-x-6 bottom-6 text-primary-foreground">
                      <div className="mono mb-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/70">
                        {p.location} · {p.year}
                      </div>
                      <div className="display text-xl font-semibold leading-tight md:text-2xl">
                        {p.name}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-primary-foreground/20 pt-4 text-sm">
                        <span className="text-primary-foreground/70">{p.value}</span>
                        <ArrowUpRight
                          size={18}
                          className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-background pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-12">
              <div className="eyebrow mb-5">Why MCC</div>
              <h2 className="display text-[clamp(1.6rem,4.6vw,4rem)] leading-[1.1]">
                <span className="block sm:whitespace-nowrap">We don't just build structures,</span>
                <span className="block text-accent sm:whitespace-nowrap">we build relationships.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-8">
              <p className="text-base leading-relaxed text-foreground/80">
                With nearly three decades of experience, MCC has built a reputation that
                speaks for itself, trusted by some of India's leading corporations and
                institutions, project after project.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <div className="border-t border-brand pt-7">
                  <div className="flex items-center gap-3.5">
                    <w.icon size={26} strokeWidth={1.4} className="shrink-0 text-brand" />
                    <h3 className="text-2xl font-semibold">{w.t}</h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-foreground/80">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-16 text-primary-foreground md:py-24">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </div>
        <div className="container-x relative grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-8">
            <div className="eyebrow mb-5 !text-accent before:bg-accent">Let's build</div>
            <h2 className="display text-balance text-4xl md:text-6xl">
              Have a project on the <span className="text-accent">drawing board?</span>
            </h2>
            <p className="mt-6 max-w-xl text-primary-foreground/90">
              Share your scope, drawings and timeline. We will get back to you with a
              detailed proposal and a clear execution schedule.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:justify-self-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-accent px-8 py-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE — clients / consultants */}
      <section className="border-y border-border bg-background">
        <div className="container-x flex items-center gap-8 py-3.5">
          <span className="mono shrink-0 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by
          </span>
          <div className="overflow-hidden">
            <div className="marquee-track flex whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
                  {[
                    "Greenply Industries",
                    "Toyoda Gosei",
                    "Lucid Colloids",
                    "Surya Roshni",
                    "R K Marble",
                    "Mott MacDonald",
                    "Artscan",
                    "NBCC",
                    "Gian P. Mathur",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-sm font-medium uppercase tracking-[0.18em] text-foreground"
                    >
                      {t}
                      <span className="mx-12 inline-block h-1 w-1 rounded-full bg-accent" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

    </>
  );
}
