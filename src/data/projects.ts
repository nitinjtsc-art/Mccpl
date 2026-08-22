import greenply from "@/assets/project-greenply.jpg";
import toyoda from "@/assets/project-toyoda.jpg";
import college from "@/assets/project-college.jpg";
import lucid from "@/assets/project-lucid.jpg";
import surya from "@/assets/project-surya.jpg";
import rkmarble from "@/assets/project-rkmarble.jpg";

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
    id: "greenply",
    name: "Greenply Industries Plant",
    client: "Greenply Industries Ltd.",
    location: "Behror, Rajasthan",
    consultant: "M R Warerkar & Associates, New Delhi",
    value: "₹80 Million",
    category: "Industrial",
    image: greenply,
    year: "2022",
  },
  {
    id: "toyoda",
    name: "Toyoda Gosei Building",
    client: "Toyoda Gosei India Pvt. Ltd.",
    location: "Neemrana, Rajasthan",
    consultant: "Artscan, New Delhi",
    value: "₹100 Million",
    category: "Industrial",
    image: toyoda,
    year: "2021",
  },
  {
    id: "college",
    name: "Gove. Degree College Bilawar, J&K",
    client: "Gove. Degree College",
    location: "Bilawar, Jammu & Kashmir",
    consultant: "National Building Construction Corp.",
    value: "₹85 Million",
    category: "Institutional",
    image: college,
    year: "2020",
  },
  {
    id: "lucid",
    name: "lucid colloids, Bikaner, rajasthan",
    client: "Lucid Colloids Ltd.",
    location: "Bikaner, Rajasthan",
    consultant: "Mott MacDonald India Ltd.",
    value: "₹110 Million",
    category: "Process Plant",
    image: lucid,
    year: "2023",
  },
  {
    id: "surya",
    name: "Surya Roshni Facility",
    client: "Surya Roshni Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    consultant: "Gian P. Mathur, New Delhi",
    value: "₹95 Million",
    category: "Industrial",
    image: surya,
    year: "2019",
  },
  {
    id: "rkmarble",
    name: "R K Marble Building",
    client: "R K Marble",
    location: "Kishangarh, Rajasthan",
    consultant: "In-house design team",
    value: "₹70 Million",
    category: "Commercial",
    image: rkmarble,
    year: "2018",
  },
];
