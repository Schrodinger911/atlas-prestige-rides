export const hero = {
  eyebrow: "Luxury car rental · Morocco",
  title: ["Drive the", "extraordinary", "across Morocco."],
  subtitle:
    "From Marrakech to the Atlas, glide through the kingdom in a hand-picked Mercedes, Porsche, BMW or Range Rover — delivered to your riad, hotel or airport.",
  ctaPrimary: { label: "Explore the fleet", to: "/fleet" as const },
  ctaSecondary: { label: "Speak to concierge", to: "/contact" as const },
  stats: [
    { value: "120+", label: "Vehicles in fleet" },
    { value: "24/7", label: "Concierge support" },
    { value: "6", label: "Cities served" },
  ],
} as const;