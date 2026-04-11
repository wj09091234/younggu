export interface FabricType {
  id: string;
  name: string;
  pricePerSqM: number;
  description: string;
  image: string;
  zoomImage: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  image: string;
  description: string;
  fabrics: FabricType[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  imageBefore?: string;
  imageAfter?: string;
  date: string;
}
