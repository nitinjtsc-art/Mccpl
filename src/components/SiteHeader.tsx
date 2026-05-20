import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import mccLogo from "@/assets/mcc-logo.jpeg";

type AboutItem = { to: "/about" | "/services" | "/projects"; hash?: string; label: string; desc: string };
type AboutCol = { heading: string; items: AboutItem[] };

const aboutMenu: AboutCol[] = [
  {
    heading: "The Company",
    items: [
      { to: "/about", hash: "overview", label: "Overview", desc: "Who we are and what we stand for." },
      { to: "/about", hash: "story", label: "Our Story", desc: "Eleven years, one trade." },
      { to: "/about", hash: "timeline", label: "Milestones", desc: "Key moments since 2013." },
    ],
  },
  {
    heading: "How We Work",
    items: [
      { to: "/about", hash: "values", label: "Values & Approach", desc: "Self-perform, schedule-first, zero-harm." },
      { to: "/services", label: "Capabilities", desc: "RCC, steel, MEP, turnkey industrial." },
      { to: "/projects", label: "Completed Projects", desc: "Plants, institutions, infrastructure." },
    ],
  },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openAbout = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAboutOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setAboutOpen(false), 120);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-ink text-primary-foreground/80 md:block">
        <div className="container-x flex h-9 items-center justify-between text-[11px] tracking-wide">
          <span className="mono uppercase tracking-[0.18em] text-primary-foreground/60">
            Mittal Construction Company · Est. 2013 · Bhiwadi, Rajasthan
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 hover:text-accent">
              <Phone size={11} /> +91 98765 43210
            </a>
            <a href="mailto:hello@mittalconstruction.in" className="hover:text-accent">
              hello@mittalconstruction.in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur shadow-soft"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={mccLogo}
              alt="MCC — Mittal Construction Company"
              className="h-8 w-auto md:h-10"
              loading="eager"
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {/* Home */}
            <Link
              to="/"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: true }}
            >
              Home
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>

            {/* About — mega dropdown */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={scheduleClose}
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
                onClick={() => setAboutOpen(false)}
              >
                About
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-[calc(100%-18px)] origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </Link>

              {/* Mega panel */}
              <div
                className={`fixed left-1/2 top-[calc(2.25rem+5rem)] z-40 w-[min(880px,92vw)] -translate-x-1/2 transition-all duration-300 ${
                  aboutOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
                onMouseEnter={openAbout}
                onMouseLeave={scheduleClose}
              >
                <div className="overflow-hidden border border-border bg-background shadow-soft">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">
                    {/* Left teaser */}
                    <div className="relative hidden bg-ink p-8 text-primary-foreground md:block">
                      <div className="mono text-[10px] uppercase tracking-[0.28em] text-accent">
                        Since 2013
                      </div>
                      <h3 className="display mt-4 text-3xl leading-[0.95]">
                        Built on <span className="text-accent">trust,</span> measured in milestones.
                      </h3>
                      <p className="mt-4 text-sm text-primary-foreground/70">
                        A Bhiwadi-based contractor delivering industrial and institutional projects across North India.
                      </p>
                      <Link
                        to="/about"
                        onClick={() => setAboutOpen(false)}
                        className="mono mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-[11px] uppercase tracking-[0.22em] text-accent hover:gap-3 transition-all"
                      >
                        Explore About →
                      </Link>
                    </div>

                    {/* Right columns */}
                    <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                      {aboutMenu.map((col) => (
                        <div key={col.heading} className="bg-background p-6">
                          <div className="mono mb-4 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                            {col.heading}
                          </div>
                          <ul className="space-y-3">
                            {col.items.map((it) => (
                              <li key={it.label}>
                                <Link
                                  to={it.to}
                                  hash={it.hash || undefined}
                                  onClick={() => setAboutOpen(false)}
                                  className="group block"
                                >
                                  <div className="flex items-center justify-between text-sm font-semibold text-foreground transition-colors group-hover:text-brand">
                                    {it.label}
                                    <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                      →
                                    </span>
                                  </div>
                                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                    {it.desc}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-ink md:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-sm font-medium"
            >
              Home
            </Link>
            <details className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-sm font-medium">
                About <ChevronDown size={14} />
              </summary>
              <div className="pb-3 pl-3">
                {aboutMenu.flatMap((c) => c.items).map((it) => (
                  <Link
                    key={it.label}
                    to={it.to}
                    hash={it.hash || undefined}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/75"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            </details>
            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
