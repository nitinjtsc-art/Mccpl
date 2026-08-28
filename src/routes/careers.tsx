import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Send, Upload } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers | Mittal Construction" },
      { name: "description", content: "Join Mittal Construction, open roles in engineering, project management, QA/QC and site execution." },
      { property: "og:title", content: "Careers at MCC" },
      { property: "og:description", content: "Build a long-term career with a contractor that self-performs the core scope." },
    ],
  }),
});

function CareersPage() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            Careers
          </div>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-balance">
            Great projects need<br />great people.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground">
            At MCC, we invest in our people as much as we invest in our
            projects, offering a professional environment where you can grow,
            learn and build a career that adds real value to your profile.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20">
        <div className="container-x grid gap-12 md:grid-cols-3">
          {[
            ["Built to last", "We hire for the future, not just for today."],
            ["Room to grow", "Your potential does not have a ceiling here, only a ladder."],
            ["Lead from the front", "Take charge, influence outcomes, make a difference."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div>
                <div className="display text-5xl text-accent">0{i + 1}</div>
                <div className="display mt-6 text-2xl">{t}</div>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.3em] text-accent">
              Apply
            </div>
            <h2 className="display text-4xl md:text-5xl text-balance">
              Send us your application.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              We are always looking for driven professionals across all
              functions and disciplines.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-8">
            {sent ? (
              <div className="border-2 border-accent bg-card p-10 text-center">
                <div className="display text-4xl">Application received.</div>
                <p className="mt-3 text-muted-foreground">
                  Thanks for applying, we'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                <Field id="firstName" label="First Name" required />
                <Field id="lastName" label="Last Name" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="phone" label="Phone No." type="tel" required />
                <div className="sm:col-span-2">
                  <Field id="address" label="Address" />
                </div>
                <div className="sm:col-span-2">
                  <Field id="post" label="Post Applying For" required />
                </div>

                <div className="sm:col-span-2">
                  <label className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    CV / Resume
                  </label>
                  <label className="mt-2 flex cursor-pointer items-center justify-start gap-4 border-2 border-dashed border-border px-4 py-4 transition-colors hover:border-accent">
                    <span className="flex items-center gap-3 text-sm">
                      <Upload size={16} className="text-accent" />
                      {fileName ?? "Upload your CV (PDF, DOC)"}
                    </span>
                    <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Browse
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                    />
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="about" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Write About Yourself
                  </label>
                  <textarea
                    id="about"
                    rows={5}
                    className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-accent resize-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-primary px-8 py-5 mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-ink"
                  >
                    Apply Now
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-accent"
      />
    </div>
  );
}
