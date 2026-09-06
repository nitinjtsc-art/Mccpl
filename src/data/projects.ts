import supremeAsset from "@/assets/projects/supreme.jpeg.asset.json";
import pidiliteAsset from "@/assets/projects/pidilite.png.asset.json";
import anaAsset from "@/assets/projects/ana-logistics.jpg.asset.json";
import vmartAsset from "@/assets/projects/vmart.webp.asset.json";
import ultratechAsset from "@/assets/projects/ultratech.jpg.asset.json";
import indospaceAsset from "@/assets/projects/indospace.jpg.asset.json";
import hellaAsset from "@/assets/projects/hella.png.asset.json";
import passportAsset from "@/assets/projects/passport-office.jpg.asset.json";
import patniAsset from "@/assets/projects/patni-school.jpg.asset.json";
import fortuneAsset from "@/assets/projects/fortune-park.jpg.asset.json";

export type Project = {
  id: string;
  name: string;
  client: string;
  location: string;
  consultant: string;
  value: string;
  category: string;
  image: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "supreme",
    name: "Supreme Industries",
    client: "M/s Supreme Industries Ltd.",
    location: "Malanpur, Madhya Pradesh",
    consultant: "M. R. Warerkar & Associates",
    value: "₹15 Cr",
    category: "Industrial",
    image: supremeAsset.url,
    year: "2025",
  },
  {
    id: "ultratech",
    name: "UltraTech Cement Township",
    client: "M/s UltraTech Cement Ltd.",
    location: "Rajasthan",
    consultant: "In-House",
    value: "On request",
    category: "Residential",
    image: ultratechAsset.url,
    year: "2024",
  },
  {
    id: "pidilite",
    name: "Pidilite Industries",
    client: "M/s Pidilite Industries Limited",
    location: "Lucknow, Uttar Pradesh",
    consultant: "Tata Consulting Engineers",
    value: "₹6 Cr",
    category: "Industrial",
    image: pidiliteAsset.url,
    year: "2023",
  },
  {
    id: "ana-logistics",
    name: "ANA Real Logistics",
    client: "M/s Bestech Group",
    location: "Jhajjar, Haryana",
    consultant: "Vastukriti Consultant",
    value: "₹10 Cr",
    category: "Warehouse",
    image: anaAsset.url,
    year: "2023",
  },
  {
    id: "vmart",
    name: "V-Mart Retail",
    client: "M/s V-Mart Retail Ltd.",
    location: "Palwal, Haryana",
    consultant: "Semac Consultants",
    value: "₹55 Cr",
    category: "Warehouse",
    image: vmartAsset.url,
    year: "2023",
  },
  {
    id: "indospace",
    name: "Indospace Logistics",
    client: "M/s Indospace Industrial Parks Ltd.",
    location: "Badli, Haryana",
    consultant: "Mott MacDonald",
    value: "₹5 Cr",
    category: "Infra Work",
    image: indospaceAsset.url,
    year: "2019",
  },
  {
    id: "hella",
    name: "Hella India Automotive",
    client: "M/s Hella India Automotive Pvt. Ltd.",
    location: "Mehsana, Gujarat",
    consultant: "M. R. Warerkar & Associates",
    value: "₹11 Cr",
    category: "Industrial",
    image: hellaAsset.url,
    year: "2019",
  },
  {
    id: "passport-office",
    name: "Passport Office Amritsar",
    client: "M/s NBCC Ltd.",
    location: "Amritsar, Punjab",
    consultant: "NBCC Ltd.",
    value: "₹8 Cr",
    category: "Institutional",
    image: passportAsset.url,
    year: "2018",
  },
  {
    id: "patni-school",
    name: "Patni Public School",
    client: "M/s RK Marble Ltd.",
    location: "Nimbahera, Rajasthan",
    consultant: "Sanjay Kothari & Associates",
    value: "₹6 Cr",
    category: "Institutional",
    image: patniAsset.url,
    year: "2015",
  },
  {
    id: "fortune-park",
    name: "Fortune Park Orange",
    client: "M/s Fortune Park Hotels Ltd.",
    location: "Gurugram, Haryana",
    consultant: "Genesis Architect",
    value: "₹5 Cr",
    category: "Hospitality",
    image: fortuneAsset.url,
    year: "2012",
  },
];
