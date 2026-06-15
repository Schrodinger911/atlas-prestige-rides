import type { Feature } from "./types";

export const whyChooseUs: { title: string; subtitle: string; features: Feature[] } = {
  title: "An uncompromising standard.",
  subtitle:
    "Every detail is curated by a team that obsesses over the small things — so your time in Morocco is spent driving, not waiting.",
  features: [
    {
      title: "Hand-picked fleet",
      description:
        "Late-model Mercedes, BMW, Porsche, Audi and Range Rover — serviced after every rental.",
      icon: "Sparkles",
    },
    {
      title: "Concierge delivery",
      description:
        "Complimentary delivery to any hotel, riad or airport across our six cities.",
      icon: "KeyRound",
    },
    {
      title: "24/7 support",
      description:
        "Direct line to your dedicated concierge, in English, French or Arabic, any time.",
      icon: "Headset",
    },
    {
      title: "Comprehensive cover",
      description:
        "Full insurance, roadside assistance and zero-excess options on every booking.",
      icon: "ShieldCheck",
    },
    {
      title: "Transparent pricing",
      description:
        "All-inclusive daily rates. No fuel scams, no airport surcharges, no fine print.",
      icon: "Receipt",
    },
    {
      title: "Optional chauffeur",
      description:
        "Professional drivers fluent in English & French — by the day or by the week.",
      icon: "UserRound",
    },
  ],
};