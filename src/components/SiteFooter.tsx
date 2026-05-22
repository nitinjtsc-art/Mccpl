import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import mccLogo from "@/assets/mcc-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-md bg-primary-foreground p-3">
            <img src={mccLogo} alt="MCC" className="h-9 w-auto md:h-10" />
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Mittal Construction Company is a multi-disciplinary construction firm
            delivering industrial, institutional and commercial projects across
            North India since 2013.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-accent"
          >
            Start a project with us <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <div className="mono mb-5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
            Company
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent">Services</Link></li>
            <li><Link to="/projects" className="text-primary-foreground/80 hover:text-accent">Projects</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="mono mb-5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
            Sectors
          </div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>Industrial</li>
            <li>Institutional</li>
            <li>Commercial</li>
            <li>Civil & MEP</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="mono mb-5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
            Get in touch
          </div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" /> RIICO Industrial Area, Bhiwadi, Alwar, Rajasthan</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-accent" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-accent" /> hello@mittalconstruction.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Mittal Construction Company. All rights reserved.</span>
          <span className="mono uppercase tracking-[0.2em]">Building since 2013</span>
        </div>
      </div>
    </footer>
  );
}
