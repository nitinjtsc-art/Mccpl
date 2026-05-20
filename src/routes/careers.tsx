import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Send } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Mittal Construction" },
      { name: "description", content: "Apply for open positions at Mittal Construction. Send your application to hr@mcc.co.in." },
    ],
  }),
});

const fields = [
  { id: "firstName", label: "First Name", type: "text", required: true },
  { id: "lastName", label: "Last Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "phone", label: "Phone No.", type: "tel", required: true },
  { id: "address", label: "Address", type: "text", required: true },
  { id: "post", label: "Post Applying For", type: "text", required: true },
] as const;

function CareersPage() {
  const [cvName, setCvName] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const subject = `Job Application — ${get("post") || "Open Position"} — ${get("firstName")} ${get("lastName")}`;
    const body = [
      `First Name: ${get("firstName")}`,
      `Last Name: ${get("lastName")}`,
      `Email: ${get("email")}`,
      `Phone No.: ${get("phone")}`,
      `Address: ${get("address")}`,
      `Post Applying For: ${get("post")}`,
      `CV File: ${cvName || "(please attach manually)"}`,
      "",
      "About:",
      get("about"),
    ].join("\n");

    window.location.href = `mailto:hr@mcc.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[11px] uppercase tracking-[0.3em] text-accent">Careers</div>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">Build your<br />career with us.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We hire site engineers, supervisors, planners, QA/QC, MEP and admin
            talent year-round. Send your application below — our HR team will
            reach out for relevant openings.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="border-l-2 border-accent pl-6">
              <div className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Send applications to</div>
              <a href="mailto:hr@mcc.co.in" className="display mt-2 block text-2xl text-brand hover:text-accent">
                hr@mcc.co.in
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                After submitting, your default email client will open with the
                application pre-filled. Please attach your CV before sending.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            {sent ? (
              <div className="border-2 border-accent bg-card p-10 text-center">
                <div className="display text-4xl">Almost there.</div>
                <p className="mt-3 text-muted-foreground">
                  Please complete sending the email from your mail client (and attach your CV).
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.id} className={f.id === "address" || f.id === "post" ? "md:col-span-2" : ""}>
                      <label htmlFor={f.id} className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required={f.required}
                        maxLength={255}
                        className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-lg outline-none focus:border-accent"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="cv" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    CV Upload (PDF / DOC)
                  </label>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setCvName(e.target.files?.[0]?.name ?? "")}
                    className="mt-2 block w-full text-sm file:mr-4 file:border-0 file:bg-primary file:px-5 file:py-3 file:mono file:text-[11px] file:uppercase file:tracking-[0.2em] file:text-primary-foreground hover:file:bg-ink"
                  />
                  {cvName && <p className="mt-2 text-xs text-muted-foreground">Selected: {cvName}</p>}
                </div>

                <div>
                  <label htmlFor="about" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Write About Yourself
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    required
                    maxLength={2000}
                    className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-ink"
                >
                  Apply Now
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
