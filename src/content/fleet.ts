import type { Vehicle, VehicleCategory } from "./types";
import mercedesCClass from "@/assets/vehicles/mercedes-c-class.jpg";
import mercedesG63 from "@/assets/vehicles/mercedes-g63.jpg";
import bmwX5 from "@/assets/vehicles/bmw-x5.jpg";
import rangeRoverSport from "@/assets/vehicles/range-rover-sport.jpg";
import porscheCayenne from "@/assets/vehicles/porsche-cayenne.jpg";
import audiQ8 from "@/assets/vehicles/audi-q8.jpg";

export const categories: { id: VehicleCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "economy", label: "Economy" },
  { id: "premium", label: "Premium" },
  { id: "luxury", label: "Luxury" },
  { id: "suv", label: "SUV" },
  { id: "sports", label: "Sports" },
];

export const vehicles: Vehicle[] = [
  {
    slug: "mercedes-c-class",
    name: "C-Class",
    brand: "Mercedes-Benz",
    category: "premium",
    tagline: "The benchmark executive sedan.",
    pricePerDay: 950,
    image: mercedesCClass,
    specs: { seats: 5, transmission: "Automatic", fuel: "Hybrid", luggage: 3 },
    features: ["Nappa leather", "Burmester audio", "Heated seats", "Wireless CarPlay"],
    featured: true,
  },
  {
    slug: "mercedes-g63-amg",
    name: "G63 AMG",
    brand: "Mercedes-AMG",
    category: "luxury",
    tagline: "An icon — equally at home on Boulevard or Berber road.",
    pricePerDay: 4200,
    image: mercedesG63,
    specs: { seats: 5, transmission: "Automatic", fuel: "Petrol", luggage: 4 },
    features: ["585 hp V8", "AMG Performance", "Massage seats", "Night package"],
    featured: true,
  },
  {
    slug: "bmw-x5",
    name: "X5 xDrive40i",
    brand: "BMW",
    category: "suv",
    tagline: "Composed, commanding, effortlessly fast.",
    pricePerDay: 1650,
    image: bmwX5,
    specs: { seats: 5, transmission: "Automatic", fuel: "Petrol", luggage: 4 },
    features: ["xDrive AWD", "Panoramic roof", "Harman Kardon", "Live Cockpit"],
    featured: true,
  },
  {
    slug: "range-rover-sport",
    name: "Range Rover Sport",
    brand: "Land Rover",
    category: "luxury",
    tagline: "British refinement for every Moroccan terrain.",
    pricePerDay: 2400,
    image: rangeRoverSport,
    specs: { seats: 5, transmission: "Automatic", fuel: "Diesel", luggage: 4 },
    features: ["Terrain Response 2", "Meridian sound", "Air suspension", "Heated steering"],
    featured: true,
  },
  {
    slug: "porsche-cayenne",
    name: "Cayenne",
    brand: "Porsche",
    category: "sports",
    tagline: "An SUV with a sports car's soul.",
    pricePerDay: 2800,
    image: porscheCayenne,
    specs: { seats: 5, transmission: "Automatic", fuel: "Petrol", luggage: 3 },
    features: ["Sport Chrono", "PASM suspension", "BOSE Surround", "Sport exhaust"],
    featured: true,
  },
  {
    slug: "audi-q8",
    name: "Q8 55 TFSI",
    brand: "Audi",
    category: "suv",
    tagline: "Architectural design, quattro confidence.",
    pricePerDay: 1850,
    image: audiQ8,
    specs: { seats: 5, transmission: "Automatic", fuel: "Petrol", luggage: 4 },
    features: ["quattro AWD", "Virtual Cockpit", "Matrix LED", "B&O 3D audio"],
    featured: true,
  },
];

export const getVehicleBySlug = (slug: string) =>
  vehicles.find((v) => v.slug === slug);