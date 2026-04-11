import { Product, FabricType, Review } from "./types";

export const FABRICS: FabricType[] = [
  {
    id: "dimout",
    name: "Premium Dimout",
    pricePerSqM: 45000,
    description: "Blocks 90% of light, perfect for bedrooms.",
    image: "https://picsum.photos/seed/fabric1/800/800",
    zoomImage: "https://picsum.photos/seed/fabric1zoom/1200/1200",
  },
  {
    id: "chiffon",
    name: "Soft Chiffon",
    pricePerSqM: 25000,
    description: "Light and airy, creates a dreamy atmosphere.",
    image: "https://picsum.photos/seed/fabric2/800/800",
    zoomImage: "https://picsum.photos/seed/fabric2zoom/1200/1200",
  },
  {
    id: "linen",
    name: "Natural Linen",
    pricePerSqM: 38000,
    description: "Eco-friendly texture with high durability.",
    image: "https://picsum.photos/seed/fabric3/800/800",
    zoomImage: "https://picsum.photos/seed/fabric3zoom/1200/1200",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "curtain-01",
    name: "Signature Living Room Curtain",
    category: "Curtains",
    basePrice: 120000,
    image: "https://picsum.photos/seed/curtain1/1200/800",
    description: "Our best-selling custom curtain for modern living spaces.",
    fabrics: FABRICS,
  },
  {
    id: "blind-01",
    name: "Honeycomb Shade",
    category: "Blinds",
    basePrice: 85000,
    image: "https://picsum.photos/seed/blind1/1200/800",
    description: "Energy-efficient blinds with a unique cellular structure.",
    fabrics: [FABRICS[0]],
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    user: "Kim Min-ji",
    rating: 5,
    comment: "The custom simulation was so accurate! My living room looks completely different now.",
    imageBefore: "https://picsum.photos/seed/before1/600/400",
    imageAfter: "https://picsum.photos/seed/after1/600/400",
    date: "2024-03-15",
  },
  {
    id: "rev-02",
    user: "Lee Sang-ho",
    rating: 4,
    comment: "High quality fabric. The sage green color is exactly what I wanted.",
    date: "2024-03-10",
  },
];
