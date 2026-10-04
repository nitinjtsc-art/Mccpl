import iitMandi from "@/assets/home/hero-iit-mandi.jpg";
import markem from "@/assets/home/hero-markem.jpg";
import wonderCement from "@/assets/home/hero-wonder-cement.jpg";
import vmart from "@/assets/home/hero-vmart.jpg";
import princePipes from "@/assets/home/hero-prince-pipes.jpg";
import fortuneHotel from "@/assets/home/hero-fortune-hotel.jpg";

export type HomeProject = {
  id: string;
  name: string;
  client: string;
  location: string;
  consultant: string;
  value: string;
  category: string;
  image: string;
  year: string;
  summary?: string;
};

export const homeProjects: HomeProject[] = [
  {
    id: "iit-mandi",
    name: "IIT Mandi Campus Infrastructure",
    client: "Indian Institute of Technology Mandi",
    location: "Kamand, Himachal Pradesh",
    consultant: "Institutional consultants",
    value: "Institutional",
    category: "Institutional",
    image: iitMandi,
    year: "Flagship",
    summary:
      "Select infrastructure for a premier IIT campus built on challenging mountainous terrain. Required terrain-adaptive structural engineering for stability and longevity.",
  },
  {
    id: "markem-imaje",
    name: "Markem-Imaje Manufacturing Facility",
    client: "Markem-Imaje (France)",
    location: "Karoli, Rajasthan",
    consultant: "Green-building consultants",
    value: "Industrial",
    category: "Industrial",
    image: markem,
    year: "Flagship",
    summary:
      "Industrial ink manufacturing facility for the French specialist. Modern factory layout with premium specifications, certified as a green building.",
  },
  {
    id: "wonder-cement",
    name: "Wonder Cement Integrated Township",
    client: "Wonder Cement Ltd.",
    location: "Nimbahera, Chittorgarh, Rajasthan",
    consultant: "In-house & multi-discipline",
    value: "Integrated",
    category: "Industrial",
    image: wonderCement,
    year: "Flagship",
    summary:
      "Integrated development covering cement-plant civil works, external infrastructure, staff accommodation and an on-campus school.",
  },
  {
    id: "vmart-palwal",
    name: "V-Mart Retail Mega Warehouse",
    client: "V-Mart Retail Ltd.",
    location: "Palwal, Haryana",
    consultant: "PEB & logistics consultants",
    value: "₹54 Cr",
    category: "Warehousing",
    image: vmart,
    year: "Delivered ahead of schedule",
    summary:
      "5,00,000 sqft warehousing development executed in a stringent 6-month window — delivered ahead of schedule with zero compromise on quality.",
  },
  {
    id: "prince-pipes",
    name: "Prince Pipes Greenfield Factory",
    client: "Prince Pipes & Fittings Ltd.",
    location: "Jaipur, Rajasthan",
    consultant: "Industrial consultants",
    value: "Industrial",
    category: "Industrial",
    image: princePipes,
    year: "Flagship",
    summary:
      "Greenfield factory engineered for pipe and fitting production — efficient material flow, durable construction, industry-specific specifications.",
  },
  {
    id: "fortune-park-orange",
    name: "Fortune Park Orange Hotel",
    client: "ITC Fortune Hotels",
    location: "Gurugram, Haryana",
    consultant: "Hospitality designers & PMC",
    value: "Hospitality",
    category: "Hospitality",
    image: fortuneHotel,
    year: "Flagship",
    summary:
      "Premium hospitality build executed with strict quality control and close coordination with designers — refined, guest-grade finishes throughout.",
  },
];
