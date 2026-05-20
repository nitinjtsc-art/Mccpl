import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { Send, Upload, HardHat, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — Mittal Construction Company" },
      { name: "description", content: "Join Mittal Construction Company. Build a career in industrial and civil construction across North India." },
      { property: "og:title", content: "Careers — MCC" },
      { property: "og:description", content: "Apply to join the MCC team." },
    ],
  }),
});

const culturePoints = [
  { icon: HardHat, t: "Site-First Culture", d: "Engineers and managers grow on the ground. Real responsibility from day one." },
  { icon: TrendingUp, t: "Career Growth", d: "Long-tenured leadership, structured progression and continuous training." },
  { icon: Users, t: "Owner-Led Team", d: "Direct access to leadership. Decisions get made fast, work gets recognised." },
];

function CareersPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    about: "",
  });
  const [fileName, setFileName] = useState<string>("");
  // OTP-ready architecture (future):
  // const [otpRequired, setOtpRequired] = useState(false);
  // const [otp, setOtp] = useState("");
  // const [phoneVerified, setPhoneVerified] = useState(false);

  const onChange = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: if (!phoneVerified) { triggerOtpFlow(); return; }
    const subject = encodeURIComponent(`Job Application — ${form.position || "MCC Careers"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.firstName} ${form.lastName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Address: ${form.address}`,
        `Position Applied For: ${form.position}`,
        `CV: ${fileName || "(please attach separately)"}`,
        ``,
        `About the candidate:`,
        form.about,
      ].join("\n"),
    );
    window.location.href = `mailto:hr@mcc.co.in?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <SiteHeader />

      <section className="bg-background pt-40 pb-16 md:pb-20">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="eyebrow mb-5">Careers at MCC</div>
            <h1 className="display text-balance text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95]">
              Build a <span className="text-brand">career</span> that is built to last.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70">
              At Mittal Construction Company, we believe great structures are
              built by great people. We are an owner-led, site-first
              construction firm where engineers and supervisors get real
              ownership from day one. If you take pride in your craft and
              want to grow with a team that does the same — we would love to
              hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 md:col-span-5">
            {culturePoints.map((c) => (
              <div key={c.t} className="border-l-2 border-accent pl-5">
                <c.icon size={22} className="text-brand" />
                <div className="display mt-2 text-xl">{c.t}</div>
                <p className="mt-1 text-sm text-foreground/65">{c.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="apply" className="bg-sand py-24 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="eyebrow mb-5">Application Form</div>
            <h2 className="display text-4xl md:text-5xl">
              Apply to <span className="text-brand">join MCC.</span>
            </h2>
            <p className="mt-5 text-foreground/70">
              Fill in your details and attach your CV. Applications are sent
              directly to our HR team at <span className="font-medium text-brand">hr@mcc.co.in</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-8">
            {sent ? (
              <div className="border-2 border-brand bg-background p-10">
                <div className="display text-3xl">Thanks for applying.</div>
                <p className="mt-3 text-foreground/70">
                  Your email client should have opened with the application
                  pre-filled. Please attach your CV and send. Our HR team
                  will get back to you within 5 working days.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mono mt-6 inline-flex text-[11px] uppercase tracking-[0.2em] text-brand underline underline-offset-4"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 bg-background p-8 shadow-soft md:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="First Name" id="firstName" required value={form.firstName} onChange={(v) => onChange("firstName", v)} />
                  <Field label="Last Name" id="lastName" required value={form.lastName} onChange={(v) => onChange("lastName", v)} />
                  <Field label="Email" id="email" type="email" required value={form.email} onChange={(v) => onChange("email", v)} />
                  <Field label="Phone No." id="phone" type="tel" required value={form.phone} onChange={(v) => onChange("phone", v)} />
                </div>
                <Field label="Address" id="address" value={form.address} onChange={(v) => onChange("address", v)} />
                <Field label="Post Applying For" id="position" required value={form.position} onChange={(v) => onChange("position", v)} />

                <div>
                  <label htmlFor="cv" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    CV Upload
                  </label>
                  <label
                    htmlFor="cv"
                    className="mt-2 flex cursor-pointer items-center gap-3 border-2 border-dashed border-border bg-sand px-5 py-4 text-sm text-foreground/70 hover:border-brand hover:text-brand"
                  >
                    <Upload size={18} />
                    {fileName || "Choose a PDF / DOC file"}
                  </label>
                  <input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </div>

                <div>
                  <label htmlFor="about" className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Write About Yourself
                  </label>
                  <textarea
                    id="about"
                    rows={5}
                    required
                    value={form.about}
                    onChange={(e) => onChange("about", e.target.value)}
                    className="mt-2 w-full resize-none border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-brand"
                  />
                </div>

                {/* Future: OTP step will appear here after Apply Now is clicked
                    once phone verification is enabled. Form state already
                    includes phone, and submission is gated server-side. */}

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-brand px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground transition-colors hover:bg-ink"
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

function Field({
  id, label, type = "text", required, value, onChange,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-0 border-b-2 border-border bg-transparent px-0 py-3 text-base outline-none focus:border-brand"
      />
    </div>
  );
}
