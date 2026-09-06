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
import adaniPowerAsset from "@/assets/projects/adani-power.jpeg.asset.json";
import propusAsset from "@/assets/projects/propus.jpg.asset.json";
import iitMandiAsset from "@/assets/projects/iit-mandi.jpg.asset.json";
import markemImajeAsset from "@/assets/projects/markem-imaje.jpg.asset.json";
import kansaiNerolacAsset from "@/assets/projects/kansai-nerolac.jpg.asset.json";
import princePipesAsset from "@/assets/projects/prince-pipes.jpeg.asset.json";
import nitPatnaAsset from "@/assets/projects/nit-patna.jpg.asset.json";
import toyodaGoseiAsset from "@/assets/projects/toyoda-gosei.jpg.asset.json";
import rkMarbleAsset from "@/assets/projects/rk-marble.jpg.asset.json";
import lucidColloidsAsset from "@/assets/projects/lucid-colloids.png.asset.json";

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
    id: "adani-power",
    name: "Adani Power",
    client: "M/s Adani Power Ltd.",
    location: "Singrauli, Madhya Pradesh",
    consultant: "In-House",
    value: "₹10 Cr",
    category: "Residential",
    image: adaniPowerAsset.url,
    year: "2024",
  },
  {
    id: "propus",
    name: "Propus Designs & Display",
    client: "M/s Propus Designs & Displays Pvt. Ltd.",
    location: "Bhiwadi, Rajasthan",
    consultant: "Shilpkaar Architects Pvt. Ltd.",
    value: "₹6 Cr",
    category: "Industrial",
    image: propusAsset.url,
    year: "2023",
  },
  {
    id: "iit-mandi",
    name: "IIT Mandi",
    client: "M/s NBCC Ltd.",
    location: "Kamand, Himachal Pradesh",
    consultant: "STUP Consultants",
    value: "₹155 Cr",
    category: "Institutional",
    image: iitMandiAsset.url,
    year: "2020",
  },
  {
    id: "markem-imaje",
    name: "Markem Imaje",
    client: "M/s Markem Imaje India Pvt. Ltd.",
    location: "Karoli, Rajasthan",
    consultant: "Archicon Associates",
    value: "₹13 Cr",
    category: "Industrial",
    image: markemImajeAsset.url,
    year: "2020",
  },
  {
    id: "kansai-nerolac",
    name: "Kansai Nerolac Paints",
    client: "M/s Kansai Nerolac Paints India Ltd.",
    location: "Goindwal Sahib, Punjab",
    consultant: "Triplan India Pvt. Ltd.",
    value: "₹9 Cr",
    category: "Industrial",
    image: kansaiNerolacAsset.url,
    year: "2020",
  },
  {
    id: "prince-pipes",
    name: "Prince Pipes & Fittings",
    client: "M/s Prince Pipes & Fittings Ltd.",
    location: "Jaipur, Rajasthan",
    consultant: "Semac Consultants",
    value: "₹28 Cr",
    category: "Industrial",
    image: princePipesAsset.url,
    year: "2019",
  },
  {
    id: "nit-patna",
    name: "NIT Patna",
    client: "M/s NBCC Ltd.",
    location: "Patna, Bihar",
    consultant: "Axis Consultant",
    value: "₹10 Cr",
    category: "Institutional",
    image: nitPatnaAsset.url,
    year: "2015",
  },
  {
    id: "toyoda-gosei",
    name: "Toyoda Gosei",
    client: "M/s Minda Projects",
    location: "Neemrana, Rajasthan",
    consultant: "Artscan Delhi",
    value: "₹10 Cr",
    category: "Industrial",
    image: toyodaGoseiAsset.url,
    year: "2014",
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
    id: "rk-marble",
    name: "RK Marble",
    client: "M/s RK Marble Ltd.",
    location: "Nimbahera, Rajasthan",
    consultant: "In-House",
    value: "On request",
    category: "Industrial",
    image: rkMarbleAsset.url,
    year: "2015",
  },
  {
    id: "lucid-colloids",
    name: "Lucid Colloids",
    client: "M/s Lucid Colloids Ltd.",
    location: "Jodhpur, Rajasthan",
    consultant: "Mott MacDonald",
    value: "₹21 Cr",
    category: "Industrial",
    image: lucidColloidsAsset.url,
    year: "2014",
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
