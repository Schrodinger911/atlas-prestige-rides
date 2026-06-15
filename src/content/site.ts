export const site = {
  name: "Atlas Prestige Cars",
  shortName: "Atlas Prestige",
  tagline: "Morocco's premier luxury car rental — chauffeured or self-drive.",
  description:
    "Atlas Prestige Cars rents Mercedes, BMW, Porsche, Audi and Range Rover across Marrakech, Casablanca and the Atlas. Concierge delivery, 24/7 support.",
  locale: "en",
  contact: {
    phone: "+212 661 234 567",
    phoneHref: "tel:+212661234567",
    whatsapp: "212661234567",
    email: "concierge@atlasprestigecars.com",
    address: "Avenue Mohammed VI, Guéliz, Marrakech 40000, Morocco",
    hours: "Open 24/7 — concierge always on call",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Avenue+Mohammed+VI+Marrakech&output=embed",
    mapLink:
      "https://maps.google.com/?q=Avenue+Mohammed+VI+Gueliz+Marrakech",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  nav: [
    { label: "Home", to: "/" as const },
    { label: "Fleet", to: "/fleet" as const },
    { label: "About", to: "/about" as const },
    { label: "Contact", to: "/contact" as const },
  ],
  cities: ["Marrakech", "Casablanca", "Rabat", "Tangier", "Fez", "Agadir"],
} as const;

export type SiteNavItem = (typeof site.nav)[number];