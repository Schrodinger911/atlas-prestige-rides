export type VehicleCategory = "economy" | "premium" | "luxury" | "suv" | "sports";

export interface Vehicle {
  slug: string;
  name: string;
  brand: string;
  category: VehicleCategory;
  tagline: string;
  pricePerDay: number;
  image: string;
  specs: {
    seats: number;
    transmission: "Automatic" | "Manual";
    fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
    luggage: number;
  };
  features: string[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string; // lucide icon name
}