import { Link } from "@tanstack/react-router";
import mccLogo from "@/assets/mcc-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="stripe-amber absolute inset-x-0 top-0 h-2" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-sm bg-primary-foreground/95 p-4">
            <img
              src={mccLogo}
              alt="Rajendra Mittal Constructions logo"
              className="h-14 w-auto md:h-16"
            />
          </div>
          <div className="mono mt-4 text-xs uppercase tracking-[0.3em] text-accent">
            Est. 2013 · Bhiwadi, Rajasthan
          </div>
          <p className="mt-6 max-w-md text-sm text-primary-foreground/70">
            Engineering durable industrial, institutional and commercial structures
            across North India for over a decade.
          </p>
        </div>

        <div>
          <div className="mono mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
            Navigate
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="mono mb-4 text-[10px] uppercase tracking-[0.25em] text-accent">
            Office
          </div>
          <address className="not-italic text-sm leading-relaxed text-primary-foreground/70">
            RIICO Industrial Area<br />
            Bhiwadi, Alwar<br />
            Rajasthan, India<br /><br />
            +91 98765 43210<br />
            hello@mittalconstruction.in
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
          <span>© 2026 Mittal Construction</span>
          <span>Built on bedrock.</span>
        </div>
      </div>
    </footer>
  );
}
