import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import mccLogo from "@/assets/mcc-logo.jpeg";

type DropItem = { to: string; hash?: string; label: string; desc: string };

const aboutMenu: DropItem[] = [
  { to: "/about", label: "Overview", desc: "Who we are and what we stand for." },
  { to: "/about/team", label: "Our Team", desc: "The people behind every project." },
  { to: "/about/directors-message", label: "Director's Message", desc: "A note from our founding director." },
];

const galleryMenu: DropItem[] = [
  { to: "/gallery/awards", label: "Awards & Recognitions", desc: "Honours, certifications and achievements." },
  { to: "/gallery/csr", label: "CSR", desc: "Our community and social initiatives." },
];

const links = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/clients", label: "Clients" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const galleryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAwards = useRouterState({ select: (s) => s.location.pathname === "/gallery/awards" });
  const ctaClass = isAwards
    ? "bg-accent text-accent-foreground hover:bg-accent/90"
    : "bg-brand text-brand-foreground hover:bg-ink";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hoverHandlers = (
    setter: (v: boolean) => void,
    timer: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
  ) => ({
    onMouseEnter: () => {
      if (timer.current) clearTimeout(timer.current);
      setter(true);
    },
    onMouseLeave: () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setter(false), 120);
    },
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-ink text-primary-foreground md:block">
        <div className="container-x flex h-9 items-center justify-between text-[11px] tracking-wide">
          <span className="mono uppercase tracking-[0.18em] text-primary-foreground">
            Mittal Construction Company · Est. 1997
          </span>
          <div className="flex items-center gap-7">
            <a href="tel:+911141653030" className="inline-flex items-center gap-2 hover:text-accent">
              <Phone size={11} /> +91 11 41653030
            </a>
            <a href="mailto:info@mcc.co.in" className="hover:text-accent">
              info@mcc.co.in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-white shadow-soft" : "bg-white"
        }`}
      >
        <div className="container-x flex h-[60px] items-center justify-between md:h-[76px]">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={mccLogo}
              alt="MCC — Mittal Construction Company"
              className="h-10 w-auto md:h-12"
              loading="eager"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: true }}
            >
              Home
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>

            {/* About dropdown */}
            <Dropdown
              label="About"
              to="/about"
              isOpen={aboutOpen}
              setIsOpen={setAboutOpen}
              handlers={hoverHandlers(setAboutOpen, aboutTimer)}
              items={aboutMenu}
              teaserTitle={<>Built on <span className="text-accent">trust,</span> measured in milestones.</>}
              teaserText=""
              teaserCta="Explore About"
              teaserCtaTo="/about"
              eyebrow="About MCC"
              teaserEyebrow="Since 1997"
            />

            <Link
              to="/services"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              Services
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>

            <Link
              to="/projects"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              Projects
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>

            <Link
              to="/clients"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              Clients
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>

            {/* Gallery dropdown */}
            <Dropdown
              label="Gallery"
              to="/gallery/awards"
              isOpen={galleryOpen}
              setIsOpen={setGalleryOpen}
              handlers={hoverHandlers(setGalleryOpen, galleryTimer)}
              items={galleryMenu}
              teaserTitle={<>Our work, <span className="text-accent">recognised.</span></>}
              teaserText=""
              teaserCta="View Gallery"
              teaserCtaTo="/gallery/awards"
              eyebrow="Gallery"
              teaserEyebrow="In the spotlight"
            />

            <Link
              to="/careers"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              Careers
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>

            <Link
              to="/contact"
              className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              Contact
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          </nav>

          <Link
            to="/contact"
            className={`hidden items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors md:inline-flex ${ctaClass}`}
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
            <Link to="/" onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-medium">
              Home
            </Link>
            <details className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-sm font-medium">
                About <ChevronDown size={14} />
              </summary>
              <div className="pb-3 pl-3">
                {aboutMenu.map((it) => (
                  <Link key={it.label} to={it.to} hash={it.hash} onClick={() => setOpen(false)} className="block py-2 text-sm text-foreground/75">
                    {it.label}
                  </Link>
                ))}
              </div>
            </details>
            {links.slice(0, 3).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <details className="border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-sm font-medium">
                Gallery <ChevronDown size={14} />
              </summary>
              <div className="pb-3 pl-3">
                {galleryMenu.map((it) => (
                  <Link key={it.label} to={it.to} onClick={() => setOpen(false)} className="block py-2 text-sm text-foreground/75">
                    {it.label}
                  </Link>
                ))}
              </div>
            </details>
            {links.slice(3).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`mt-4 inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] ${ctaClass}`}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({
  label,
  to,
  isOpen,
  setIsOpen,
  handlers,
  items,
  teaserTitle,
  teaserText,
  teaserCta,
  teaserCtaTo,
  eyebrow,
  teaserEyebrow,
}: {
  label: string;
  to: string;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  handlers: { onMouseEnter: () => void; onMouseLeave: () => void };
  items: DropItem[];
  teaserTitle: React.ReactNode;
  teaserText: string;
  teaserCta: string;
  teaserCtaTo: string;
  eyebrow: string;
  teaserEyebrow: string;
}) {
  return (
    <div className="relative" {...handlers}>
      <Link
        to={to}
        className="group relative inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
        activeProps={{ className: "text-brand" }}
        onClick={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        <span className="absolute -bottom-1.5 left-0 h-0.5 w-[calc(100%-18px)] origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
      </Link>

      <div
        className={`fixed left-1/2 top-[calc(2.25rem+4.75rem)] z-40 w-[min(560px,92vw)] -translate-x-1/2 transition-all duration-300 ${
          isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        {...handlers}
      >
        <div className="overflow-hidden border border-border bg-background shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr]">
            <div className="relative hidden bg-ink p-6 text-primary-foreground md:block">
              <div className="mono text-[10px] uppercase tracking-[0.28em] text-accent">{teaserEyebrow}</div>
              <h3 className="display mt-3 text-2xl leading-[1.1]">{teaserTitle}</h3>
              {teaserText && <p className="mt-3 text-xs text-primary-foreground/70">{teaserText}</p>}
            </div>
            <div className="bg-background p-5">
              <div className="mono mb-4 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</div>
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.label}>
                    <Link
                      to={it.to}
                      hash={it.hash}
                      onClick={() => setIsOpen(false)}
                      className="group block border-b border-border/60 pb-3 last:border-b-0"
                    >
                      <div className="flex items-center justify-between text-sm font-semibold text-foreground transition-colors group-hover:text-brand">
                        {it.label}
                        <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
