import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import mahindra from "@/assets/clients/mahindra.png.asset.json";
import adani from "@/assets/clients/adani-defence.png.asset.json";
import gsk from "@/assets/clients/gsk.jpeg.asset.json";
import wonderCement from "@/assets/clients/wonder-cement.png.asset.json";
import paracoat from "@/assets/clients/paracoat.png.asset.json";
import markem from "@/assets/clients/markem-imaje.png.asset.json";
import indospace from "@/assets/clients/indospace.jpg.asset.json";
import propus from "@/assets/clients/propus.png.asset.json";
import gyanBharati from "@/assets/clients/gyan-bharati.png.asset.json";
import lkSinghania from "@/assets/clients/lk-singhania.jpg.asset.json";


export const Route = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      { title: "Clients — Mittal Construction" },
      { name: "description", content: "Industrial, institutional, commercial and hospitality clients served by Mittal Construction." },
      { property: "og:title", content: "Our Clients — Mittal Construction" },
      { property: "og:description", content: "Trusted by Greenply, Toyoda Gosei, Lucid Colloids, Surya Roshni and more." },
    ],
  }),
});

type Sector = "Industrial" | "Warehousing" | "Institutional" | "Hospitality" | "Commercial";

const clients: { name: string; sector: Sector; logo?: string }[] = [
  { name: "Mahindra & Mahindra", sector: "Industrial", logo: mahindra.url },
  { name: "Adani Defence & Aerospace", sector: "Industrial", logo: adani.url },
  { name: "GSK", sector: "Industrial", logo: gsk.url },
  { name: "Wonder Cement", sector: "Industrial", logo: wonderCement.url },
  { name: "Paracoat Products", sector: "Industrial", logo: paracoat.url },
  { name: "Markem-Imaje", sector: "Industrial", logo: markem.url },
  { name: "IndoSpace", sector: "Warehousing", logo: indospace.url },
  { name: "Propus", sector: "Commercial", logo: propus.url },
  { name: "Gyan Bharati School", sector: "Institutional", logo: gyanBharati.url },
  { name: "L.K. Singhania Education Centre", sector: "Institutional", logo: lkSinghania.url },
];


const filters: ("All" | Sector)[] = ["All", "Industrial", "Warehousing", "Commercial", "Institutional", "Hospitality"];

function ClientsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () => (active === "All" ? clients : clients.filter((c) => c.sector === active)),
    [active],
  );

  return (
    <>
      <SiteHeader />
      <section className="bg-background pt-40 pb-16">
        <div className="container-x">
          <div className="mono mb-6 text-[15px] font-bold uppercase tracking-[0.3em] text-accent">
            Our Clients
          </div>
          <h1 className="display text-[clamp(2.8rem,8.4vw,7.5rem)] leading-[0.9] text-balance">
            Trusted by those<br />who <span className="text-accent">build India.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Quality construction attracts quality clients. Every name on this
            list represents a project delivered, a promise kept and a client
            satisfied.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-background pb-24">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 border-b border-border py-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  active === f
                    ? "bg-ink text-primary-foreground"
                    : "border border-border text-foreground/70 hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
            {list.map((c, i) => (
              <Reveal key={c.name} delay={(i % 8) * 0.04}>
                <div className="group flex aspect-[5/3] flex-col items-center justify-center gap-4 bg-background p-6 text-center transition-colors hover:bg-card">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="h-14 w-auto max-w-[70%] object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center border border-border text-sm font-semibold text-foreground/70 transition-colors group-hover:border-accent group-hover:text-accent">
                      {c.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                    </div>
                  )}
                  <div className="text-sm font-medium text-foreground">{c.name}</div>
                  <div className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.sector}
                  </div>
                </div>

              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
