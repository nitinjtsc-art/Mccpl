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
import princePipes from "@/assets/clients/prince-pipes.png.asset.json";
import pidilite from "@/assets/clients/pidilite.jpg.asset.json";
import toyodaGosei from "@/assets/clients/toyoda-gosei.png.asset.json";
import greenply from "@/assets/clients/greenply.png.asset.json";
import safexpress from "@/assets/clients/safexpress.png.asset.json";
import unitedSpirits from "@/assets/clients/united-spirits.png.asset.json";
import kansaiNerolac from "@/assets/clients/kansai-nerolac.png.asset.json";
import lucidColloids from "@/assets/clients/lucid-colloids.png.asset.json";
import micromax from "@/assets/clients/micromax.jpg.asset.json";
import vMart from "@/assets/clients/v-mart.png.asset.json";
import rkMarble from "@/assets/clients/rk-marble.png.asset.json";
import powerGrid from "@/assets/clients/power-grid.png.asset.json";
import kusumHealthcare from "@/assets/clients/kusum-healthcare.jpg.asset.json";
import adaniWilmar from "@/assets/clients/adani-wilmar.jpg.asset.json";
import adaniGroup from "@/assets/clients/adani.png.asset.json";
import ardex from "@/assets/clients/ardex.png.asset.json";
import fenesta from "@/assets/clients/fenesta.png.asset.json";
import unicharm from "@/assets/clients/unicharm.png.asset.json";
import jbm from "@/assets/clients/jbma.png.asset.json";
import supreme from "@/assets/clients/supreme.png.asset.json";
import adaniPower from "@/assets/clients/adani-power.webp.asset.json";
import nbcc from "@/assets/clients/nbcc.png.asset.json";
import nitPatna from "@/assets/clients/nit-patna.jpeg.asset.json";
import ashokLeyland from "@/assets/clients/ashok-leyland.png.asset.json";
import jkCement from "@/assets/clients/jk-cement.png.asset.json";
import shreeCement from "@/assets/clients/shree-cement.png.asset.json";
import ultratech from "@/assets/clients/ultratech.png.asset.json";
import dsGroup from "@/assets/clients/ds-group.png.asset.json";
import cocaCola from "@/assets/clients/coca-cola.png.asset.json";
import iitMandi from "@/assets/clients/iit-mandi.jpg.asset.json";


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
  { name: "Adani Group", sector: "Industrial", logo: adaniGroup.url },
  { name: "Adani Wilmar", sector: "Industrial", logo: adaniWilmar.url },
  { name: "GSK", sector: "Industrial", logo: gsk.url },
  { name: "Wonder Cement", sector: "Industrial", logo: wonderCement.url },
  { name: "RK Marble", sector: "Industrial", logo: rkMarble.url },
  { name: "Paracoat Products", sector: "Industrial", logo: paracoat.url },
  { name: "Markem-Imaje", sector: "Industrial", logo: markem.url },
  { name: "Ardex Group", sector: "Industrial", logo: ardex.url },
  { name: "Power Grid Corporation of India", sector: "Industrial", logo: powerGrid.url },
  { name: "JBM Group", sector: "Industrial", logo: jbm.url },
  { name: "Unicharm", sector: "Industrial", logo: unicharm.url },
  { name: "Kusum Healthcare", sector: "Industrial", logo: kusumHealthcare.url },
  { name: "Supreme", sector: "Industrial", logo: supreme.url },
  { name: "Prince Pipes", sector: "Industrial", logo: princePipes.url },
  { name: "Pidilite", sector: "Industrial", logo: pidilite.url },
  { name: "Toyoda Gosei", sector: "Industrial", logo: toyodaGosei.url },
  { name: "Greenply", sector: "Industrial", logo: greenply.url },
  { name: "United Spirits", sector: "Industrial", logo: unitedSpirits.url },
  { name: "Kansai Nerolac", sector: "Industrial", logo: kansaiNerolac.url },
  { name: "Lucid Colloids", sector: "Industrial", logo: lucidColloids.url },
  { name: "Micromax", sector: "Industrial", logo: micromax.url },
  { name: "Adani Power", sector: "Industrial", logo: adaniPower.url },
  { name: "Ashok Leyland", sector: "Industrial", logo: ashokLeyland.url },
  { name: "JK Cement", sector: "Industrial", logo: jkCement.url },
  { name: "Shree Cement", sector: "Industrial", logo: shreeCement.url },
  { name: "UltraTech Cement", sector: "Industrial", logo: ultratech.url },
  { name: "DS Group", sector: "Industrial", logo: dsGroup.url },
  { name: "Hindustan Coca-Cola Beverages", sector: "Industrial", logo: cocaCola.url },
  { name: "IndoSpace", sector: "Warehousing", logo: indospace.url },
  { name: "Safexpress", sector: "Warehousing", logo: safexpress.url },
  { name: "Fenesta", sector: "Commercial", logo: fenesta.url },
  { name: "V Mart", sector: "Commercial", logo: vMart.url },
  { name: "Propus", sector: "Commercial", logo: propus.url },
  { name: "NBCC (India)", sector: "Commercial", logo: nbcc.url },
  { name: "Gyan Bharati School", sector: "Institutional", logo: gyanBharati.url },
  { name: "L.K. Singhania Education Centre", sector: "Institutional", logo: lkSinghania.url },
  { name: "NIT Patna", sector: "Institutional", logo: nitPatna.url },
  { name: "IIT Mandi", sector: "Institutional", logo: iitMandi.url },
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
          <h1 className="display text-[clamp(2.25rem,7vw,6.5rem)] leading-[1.05]">
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

          <div className="mt-10 grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {list.map((c, i) => (
              <Reveal key={c.name} delay={(i % 8) * 0.04} className="h-full">
                <div className="group flex h-full min-h-[180px] flex-col items-center justify-center gap-3 border border-border bg-background p-6 text-center transition-colors hover:border-accent hover:bg-card">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="h-14 w-auto max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
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
