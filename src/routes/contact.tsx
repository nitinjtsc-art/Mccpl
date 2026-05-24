import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Mittal Construction" },
      { name: "description", content: "Get a quote from Mittal Construction. Industrial and civil construction across North India." },
      { property: "og:title", content: "Contact Mittal Construction" },
      { property: "og:description", content: "Request a quote, share drawings, or visit the office in Bhiwadi, Rajasthan." },
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
          <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            Let's talk
          </div>
          <h1 className="display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] text-balance">
            Tell us what<br />you're building.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5 space-y-8">
            <div>
              <div className="mono mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                Head Office — Bhiwadi
              </div>
              <div className="space-y-3 border-l-2 border-accent pl-6">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>RIICO Industrial Area, Bhiwadi, Alwar, Rajasthan 301019</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>info@mcc.co.in</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mono mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                Delhi Office
              </div>
              <div className="space-y-3 border-l-2 border-accent pl-6">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>New Delhi, NCR</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>+91 98765 43211</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>info@mcc.co.in</span>
                </div>
              </div>
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
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-primary-foreground"
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
