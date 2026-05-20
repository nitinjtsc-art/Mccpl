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
      { title: "Contact — Mittal Construction Company" },
      { name: "description", content: "Get in touch with Mittal Construction Company — Head Office Bhiwadi and Delhi Office." },
      { property: "og:title", content: "Contact MCC" },
      { property: "og:description", content: "Reach our Head Office (Bhiwadi) or Delhi Office, or send a project enquiry." },
    ],
  }),
});

const offices = [
  {
    name: "Head Office — Bhiwadi",
    address: "RIICO Industrial Area, Bhiwadi, Alwar, Rajasthan 301019",
    phone: "+91 98765 43210",
    email: "info@mcc.co.in",
  },
  {
    name: "Delhi Office",
    address: "B-12, Lajpat Nagar IV, New Delhi 110024",
    phone: "+91 98765 43211",
    email: "delhi@mcc.co.in",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  // OTP-ready: const [phoneVerified, setPhoneVerified] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: if (!phoneVerified) { triggerOtpFlow(); return; }
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const subject = encodeURIComponent(`Project Enquiry — ${fd.get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${fd.get("name")}`,
        `Company: ${fd.get("company")}`,
        `Email: ${fd.get("email")}`,
        `Phone: ${fd.get("phone")}`,
        ``,
        `Project Brief:`,
        fd.get("msg") as string,
      ].join("\n"),
    );
    window.location.href = `mailto:info@mcc.co.in?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <SiteHeader />
      <section className="bg-ink pt-40 pb-20 text-primary-foreground">
        <div className="container-x">
          <div className="eyebrow mb-5 text-accent">Let's talk</div>
          <h1 className="display text-balance text-[clamp(3rem,9vw,7rem)] leading-[0.9]">
            Tell us what<br />you're building.
          </h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container-x grid gap-10 md:grid-cols-2">
          {offices.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.08}>
              <div className="h-full border-l-2 border-brand bg-sand p-8 md:p-10">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Office · 0{i + 1}
                </div>
                <h2 className="display mt-3 text-3xl">{o.name}</h2>
                <ul className="mt-6 space-y-4 text-foreground/80">
                  <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand" /><span>{o.address}</span></li>
                  <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand" /><a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-brand">{o.phone}</a></li>
                  <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-brand" /><a href={`mailto:${o.email}`} className="hover:text-brand">{o.email}</a></li>
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="eyebrow mb-5">Project Enquiry</div>
            <h2 className="display text-4xl md:text-5xl">
              Send us your <span className="text-brand">brief.</span>
            </h2>
            <p className="mt-5 text-foreground/70">
              Submissions go directly to our team at{" "}
              <span className="font-medium text-brand">info@mcc.co.in</span>.
              We respond within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            {sent ? (
              <div className="border-2 border-brand bg-background p-10 text-center">
                <div className="display text-3xl">Thanks.</div>
                <p className="mt-3 text-foreground/70">
                  Your email client has opened — please send it across.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 bg-background p-8 shadow-soft md:p-10">
                {[
                  ["name", "Name", true],
                  ["company", "Company", false],
                  ["email", "Email", true],
                  ["phone", "Phone", false],
                ].map(([id, label, req]) => (
                  <div key={id as string}>
                    <label htmlFor={id as string} className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {label as string}{req && <span className="text-accent"> *</span>}
                    </label>
                    <input
                      id={id as string}
                      name={id as string}
                      required={Boolean(req)}
                      type={id === "email" ? "email" : id === "phone" ? "tel" : "text"}
                      className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-brand"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="msg" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Project Brief <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-brand"
                  />
                </div>
                {/* Future: OTP step appears here when phone verification is enabled */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-brand px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground transition-colors hover:bg-ink"
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
