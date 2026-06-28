import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import mccLogo from "@/assets/mcc-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="inline-flex rounded-md bg-primary-foreground p-3">
            <img src={mccLogo} alt="MCC" className="h-9 w-auto md:h-10" />
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Mittal Construction Company is a multi-disciplinary construction firm
            delivering industrial, commercial, institutional, hospitality and
            residential projects across India since 1997.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-medium text-accent"
          >
            Start a project with us <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="md:col-span-2">
          <div className="mono mb-5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
            Company
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">About</Link></li>
            <li><Link to="/services" className="text-primary-foreground/80 hover:text-accent">Services</Link></li>
            <li><Link to="/projects" className="text-primary-foreground/80 hover:text-accent">Projects</Link></li>
            <li><Link to="/clients" className="text-primary-foreground/80 hover:text-accent">Clients</Link></li>
            <li><Link to="/careers" className="text-primary-foreground/80 hover:text-accent">Careers</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="mono mb-5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
            Get in touch
          </div>
          <div className="space-y-6 text-sm text-primary-foreground/80">
            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                Head Office — Bhiwadi
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  A-168, Bhagat Singh Colony,<br />
                  Bhiwadi, Rajasthan – 301019
                </span>
              </div>
              <div className="mt-2 flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href="tel:+919887010003" className="hover:text-accent">+91 98870 10003</a>
              </div>
            </div>

            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                Delhi Office
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  L-84B, First Floor,<br />
                  Malviya Nagar, Delhi – 110017
                </span>
              </div>
              <div className="mt-2 flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <a href="tel:+911141653030" className="hover:text-accent">+91 11 41653030</a>
              </div>
            </div>

            <div className="flex gap-3 border-t border-primary-foreground/10 pt-4">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href="mailto:info@mcc.co.in" className="hover:text-accent">info@mcc.co.in</a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mono mb-5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
            Find Us
          </div>
          <div className="overflow-hidden border border-primary-foreground/10">
            <iframe
              title="MCC Head Office — Bhiwadi"
              src="https://www.google.com/maps?q=A-168,+Bhagat+Singh+Colony,+Bhiwadi,+Rajasthan+301019&output=embed"
              loading="lazy"
              className="h-64 w-full grayscale-[0.4] contrast-[1.05]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Mittal Construction Company. All rights reserved.</span>
          <span className="mono uppercase tracking-[0.2em]">Building since 1997</span>
        </div>
      </div>
    </footer>
  );
}
