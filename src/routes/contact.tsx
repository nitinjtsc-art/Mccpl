import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Mittal Construction" },
      { name: "description", content: "Reach Mittal Construction Company at our Head Office and Delhi Office. Enquiries to info@mcc.co.in." },
      { property: "og:title", content: "Contact Mittal Construction" },
      { property: "og:description", content: "Request a quote, share drawings, or visit our offices." },
    ],
  }),
});

const offices = [
  {
    name: "Head Office",
    address: "RIICO Industrial Area, Bhiwadi, Alwar, Rajasthan 301019",
    phone: "+91 98765 43210",
    email: "info@mcc.co.in",
  },
  {
    name: "Delhi Office",
    address: "Nehru Place, New Delhi 110019",
    phone: "+91 98765 43211",
    email: "info@mcc.co.in",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const subject = `Enquiry from ${get("name")}${get("company") ? " — " + get("company") : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      "",
      "Project Brief:",
      get("msg"),
    ].join("\n");

    window.location.href = `mailto:info@mcc.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <SiteHeader />
      <section className="bg-primary pt-40 pb-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">Let's talk</div>
          <h1 className="display text-[clamp(3.5rem,11vw,10rem)] leading-[0.85] text-balance">
            Tell us what<br />you're building.
          </h1>
        </div>
      </section>

      <section className="border-b border-border bg-card py-16">
        <div className="container-x grid gap-10 md:grid-cols-2">
          {offices.map((o) => (
            <Reveal key={o.name}>
              <div className="border-l-2 border-accent pl-6">
                <div className="mono text-[11px] uppercase tracking-[0.25em] text-accent">{o.name}</div>
                <ul className="mt-5 space-y-4 text-foreground/85">
                  <li className="flex gap-3">
                    <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                    <span>{o.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={18} className="mt-1 shrink-0 text-accent" />
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-brand">{o.phone}</a>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={18} className="mt-1 shrink-0 text-accent" />
                    <a href={`mailto:${o.email}`} className="hover:text-brand">{o.email}</a>
                  </li>
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="mono mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Enquiry</div>
            <h2 className="display text-4xl md:text-5xl">Send us a brief.</h2>
            <p className="mt-5 text-muted-foreground">
              Tell us about your project — scope, location and timeline. We'll
              respond within one business day. All enquiries go to{" "}
              <a href="mailto:info@mcc.co.in" className="text-brand hover:text-accent">info@mcc.co.in</a>.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            {sent ? (
              <div className="border-2 border-accent bg-card p-10 text-center">
                <div className="display text-4xl">Thanks.</div>
                <p className="mt-3 text-muted-foreground">
                  Please complete sending the email from your mail client. We'll respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
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
                      maxLength={255}
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
                    maxLength={2000}
                    className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-lg outline-none focus:border-accent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-ink"
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
