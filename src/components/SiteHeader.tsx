import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import mccLogo from "@/assets/mcc-logo.jpeg";

type NavLink =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string }[] };

const links: NavLink[] = [
  { to: "/", label: "Home" },
  {
    label: "About",
    children: [
      { to: "/about", label: "Overview" },
      { to: "/about/team", label: "Our Team" },
      { to: "/about/director", label: "Director's Message" },
    ],
  },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/clients", label: "Clients" },
  {
    label: "Gallery",
    children: [
      { to: "/gallery/awards", label: "Awards & Recognitions" },
      { to: "/gallery/csr", label: "CSR" },
    ],
  },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const hoverOpen = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const hoverClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-ink text-primary-foreground/80 md:block">
        <div className="container-x flex h-9 items-center justify-between text-[11px] tracking-wide">
          <span className="mono uppercase tracking-[0.18em] text-primary-foreground/60">
            Mittal Construction Company · Est. 2013 · Bhiwadi, Rajasthan
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 hover:text-accent">
              <Phone size={11} /> +91 98765 43210
            </a>
            <a href="mailto:info@mcc.co.in" className="hover:text-accent">
              info@mcc.co.in
            </a>
          </div>
        </div>
      </div>

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

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) =>
              "children" in l ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => hoverOpen(l.label)}
                  onMouseLeave={hoverClose}
                >
                  <button
                    type="button"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
                    onClick={() => setOpenMenu(openMenu === l.label ? null : l.label)}
                  >
                    {l.label}
                    <ChevronDown size={14} className={`transition-transform ${openMenu === l.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === l.label && (
                    <div className="absolute left-1/2 top-full z-40 mt-3 w-60 -translate-x-1/2 border border-border bg-background shadow-soft">
                      <div className="h-0.5 w-full bg-accent" />
                      {l.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block border-b border-border/60 px-5 py-3 text-sm text-foreground/80 last:border-b-0 hover:bg-sand hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand"
                  activeProps={{ className: "text-brand" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </Link>
              ),
            )}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-ink lg:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) =>
              "children" in l ? (
                <div key={l.label} className="border-b border-border py-2">
                  <div className="mono py-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {l.label}
                  </div>
                  {l.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-3 text-sm font-medium"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-sm font-medium"
                >
                  {l.label}
                </Link>
              ),
            )}
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
