import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import mccLogo from "@/assets/mcc-logo.jpeg";

const aboutChildren = [
  { to: "/about", label: "Overview" },
  { to: "/our-team", label: "Our Team" },
  { to: "/director-message", label: "Director's Message" },
] as const;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About", children: aboutChildren },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            {links.map((l) => (
              <div key={l.to} className="group relative">
                <Link
                  to={l.to}
                  className="relative text-sm font-medium text-foreground/75 transition-colors hover:text-brand inline-flex items-center gap-1"
                  activeProps={{ className: "text-brand" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                </Link>
                {"children" in l && l.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden border border-border bg-background shadow-soft">
                      {l.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-brand"
                          activeProps={{ className: "text-brand bg-muted" }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
            {links.map((l) => (
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
