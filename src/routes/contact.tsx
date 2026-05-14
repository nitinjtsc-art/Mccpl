import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Mittal Construction Company" },
      { name: "description", content: "Reach Mittal Construction Company at our Bhiwadi head office or Delhi office. +91 98870 10003 · info@mcc.co.in" },
      { property: "og:title", content: "Contact MCC — Mittal Construction Company" },
      { property: "og:description", content: "Request a quote, share drawings, or visit our offices in Bhiwadi (Rajasthan) and Malviya Nagar (Delhi)." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SiteHeader />
      <section className="bg-primary pt-40 pb-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">
            Let's build the future together
          </div>
          <h1 className="display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] text-balance">
            Tell us what<br />you're building.
          </h1>
          <p className="mt-8 max-w-2xl text-primary-foreground/70">
            Reach out for project discussions, business proposals or customised
            EPC construction solutions tailored to your scope and schedule.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5 space-y-8">
            <div className="border-l-2 border-accent pl-6">
              <MapPin size={20} className="text-accent" />
              <div className="mono mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Head Office</div>
              <div className="mt-1 text-lg">A-168, Bhagat Singh Colony,<br />Bhiwadi, Rajasthan 301019</div>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <MapPin size={20} className="text-accent" />
              <div className="mono mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Delhi Office</div>
              <div className="mt-1 text-lg">L-84B, First Floor, Malviya Nagar,<br />Delhi 110017</div>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <Phone size={20} className="text-accent" />
              <div className="mono mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Phone</div>
              <a href="tel:+919887010003" className="mt-1 block text-lg hover:text-accent">+91 98870 10003</a>
              <a href="tel:+911141653030" className="mt-1 block text-lg hover:text-accent">+91 11 4165 3030</a>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <Mail size={20} className="text-accent" />
              <div className="mono mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</div>
              <a href="mailto:info@mcc.co.in" className="mt-1 block text-lg hover:text-accent">info@mcc.co.in</a>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <Globe size={20} className="text-accent" />
              <div className="mono mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Web</div>
              <a href="https://www.mcc.co.in" className="mt-1 block text-lg hover:text-accent">www.mcc.co.in</a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            {sent ? (
              <div className="border-2 border-accent bg-card p-10 text-center">
                <div className="display text-4xl">Thanks.</div>
                <p className="mt-3 text-muted-foreground">
                  We'll respond within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-6"
              >
                {[
                  ["name", "Name"],
                  ["company", "Company"],
                  ["email", "Email"],
                  ["phone", "Phone"],
                ].map(([id, label]) => (
                  <div key={id}>
                    <label htmlFor={id} className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      required={id === "name" || id === "email"}
                      type={id === "email" ? "email" : "text"}
                      className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-lg outline-none focus:border-accent"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="msg" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Project Brief
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={4}
                    required
                    className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-lg outline-none focus:border-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-md bg-primary px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Send Enquiry
                  <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
