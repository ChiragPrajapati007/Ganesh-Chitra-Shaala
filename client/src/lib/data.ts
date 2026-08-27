/**
 * The Atelier Procession: centralized, explicitly replaceable prototype content.
 * Every business-facing string and image URL belongs here, not in the UI components.
 */
export const siteConfig = {
  brand: "Ganesh Chitra Shaala",
  shortBrand: "GCS",
  tagline: "A form of joy, shaped by hand.",
  demoNotice: "Prototype content — replace with verified studio information before launch.",
  contact: {
    phone: "+91 99670 59099",
    whatsapp: "9967059099",
    email: "sameer14patil@gmail.com",
    address: "House No. 113, Ganesh Nivas, Near Datta Mandir, Navghar Goan, Bhayandar East",
    hours: "Mon – Sat: 9:00 AM – 8:00 PM",
    instagram: "[Instagram URL]",
  },
  festivalDate: "2026-09-14T06:00:00+05:30",
  images: {
    logo: "/images/gcs-ganapati-mark.png",
    hero: "/images/ganesh-hero.jpg",
    pop: "/images/pop-collection.jpg",
    eco: "/images/eco-collection.jpg",
    custom: "/images/custom-collection.jpg",
    craft: "/images/craftsmanship.jpg",
  },
  about: {
    eyebrow: "The studio, in progress",
    title: "More Than an Idol. A Tradition We Bring Home.",
    body: "This is editable prototype copy for the studio story. Replace it with the founder’s voice, making philosophy, and verified history once those details are available.",
  },
  eco: {
    material: "[Demo material — confirm with studio]",
    process: "[Demo making process — confirm with studio]",
    immersion: "[Demo immersion guidance — confirm with studio]",
    environmental: "[Demo environmental details — confirm with studio]",
  },
} as const;

export type ProductCategory = "POP" | "Eco-friendly" | "Custom";
export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  material: string;
  category: ProductCategory;
  style: string;
  availability: "Available" | "Made to order" | "Limited";
  image: string;
  secondaryImage: string;
  description: string;
  weight: string;
  finish: string;
};

export const categories = [
  {
    id: "pop",
    label: "POP Idols",
    title: "Traditional forms, made for the season.",
    description: "Traditional Ganpati designs created for festive celebrations.",
    cta: "Explore POP Idols",
    image: siteConfig.images.pop,
    tone: "cream",
  },
  {
    id: "eco-friendly",
    label: "Eco-Friendly Idols",
    title: "A considered way to celebrate.",
    description: "Thoughtfully designed options for a more conscious celebration.",
    cta: "Explore Eco-Friendly",
    image: siteConfig.images.eco,
    tone: "clay",
  },
  {
    id: "custom",
    label: "Custom Idols",
    title: "A form imagined around you.",
    description: "A personalized Ganpati created around your vision.",
    cta: "Customize Your Idol",
    image: siteConfig.images.custom,
    tone: "ink",
  },
] as const;

export const products: Product[] = [
  { id: "rajadhiraj", slug: "rajadhiraj-ganpati", name: "Rajadhiraj Ganpati", price: 14900, size: "24 in", material: "POP", category: "POP", style: "Regal", availability: "Made to order", image: siteConfig.images.pop, secondaryImage: siteConfig.images.hero, description: "A poised, detailed form with a ceremonial presence. Demo product description; replace with verified product notes.", weight: "[Demo weight]", finish: "[Demo finish]" },
  { id: "morya-classic", slug: "morya-classic", name: "Morya Classic", price: 8900, size: "18 in", material: "POP", category: "POP", style: "Traditional", availability: "Available", image: siteConfig.images.hero, secondaryImage: siteConfig.images.pop, description: "A quietly classic silhouette designed to sit beautifully in a festive home. Demo product description; replace before launch.", weight: "[Demo weight]", finish: "[Demo finish]" },
  { id: "siddhivinayak", slug: "shree-siddhivinayak", name: "Shree Siddhivinayak", price: 11200, size: "20 in", material: "POP", category: "POP", style: "Classic", availability: "Limited", image: siteConfig.images.pop, secondaryImage: siteConfig.images.craft, description: "Fine surface details and a warm, composed finish define this prototype collection entry.", weight: "[Demo weight]", finish: "[Demo finish]" },
  { id: "royal-bappa", slug: "royal-bappa", name: "Royal Bappa", price: 18500, size: "30 in", material: "POP", category: "POP", style: "Regal", availability: "Made to order", image: siteConfig.images.hero, secondaryImage: siteConfig.images.pop, description: "A taller statement form with a dignified, gallery-like presentation. Demo product description; replace before launch.", weight: "[Demo weight]", finish: "[Demo finish]" },
  { id: "eco-morya", slug: "eco-morya", name: "Eco Morya", price: 6800, size: "16 in", material: "[Demo material]", category: "Eco-friendly", style: "Natural", availability: "Available", image: siteConfig.images.eco, secondaryImage: siteConfig.images.craft, description: "An unadorned natural-toned study. Material and environmental details are intentional placeholders awaiting studio confirmation.", weight: "[Demo weight]", finish: "Natural clay [Demo]" },
  { id: "bal-ganesh", slug: "bal-ganesh", name: "Bal Ganesh", price: 5400, size: "12 in", material: "POP", category: "POP", style: "Contemporary", availability: "Available", image: siteConfig.images.custom, secondaryImage: siteConfig.images.pop, description: "A smaller, expressive form with the warmth of a hand-finished studio object. Demo product description; replace before launch.", weight: "[Demo weight]", finish: "[Demo finish]" },
  { id: "traditional-bappa", slug: "traditional-bappa", name: "Traditional Bappa", price: 9800, size: "18 in", material: "POP", category: "POP", style: "Traditional", availability: "Made to order", image: siteConfig.images.craft, secondaryImage: siteConfig.images.hero, description: "A studied traditional profile, framed through a restrained contemporary finish. Demo product description; replace before launch.", weight: "[Demo weight]", finish: "[Demo finish]" },
  { id: "divine-crown", slug: "divine-crown", name: "Divine Crown", price: 12800, size: "22 in", material: "POP", category: "POP", style: "Regal", availability: "Limited", image: siteConfig.images.hero, secondaryImage: siteConfig.images.craft, description: "A regal studio piece with detailed crown work and a composed form. Demo product description; replace before launch.", weight: "[Demo weight]", finish: "[Demo finish]" },
];

export const trustFeatures = [
  ["01", "Handcrafted", "Created with attention to detail. Prototype copy — verify before launch."],
  ["02", "Made to Celebrate", "Designed for meaningful festive spaces. Prototype copy — verify before launch."],
  ["03", "Custom Creations", "Personalized options for your celebration. Prototype copy — verify before launch."],
  ["04", "Carefully Packed", "Packing process is a placeholder until studio details are provided."],
] as const;

// Deliberately empty: customer reviews must only be published once they are verified.
export const testimonials: never[] = [];

export const popularSearches = ["Eco-friendly", "Traditional", "18 inch", "Custom idol"];
