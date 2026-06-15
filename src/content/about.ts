import type { StatItem } from "./types";

export const about = {
  eyebrow: "Our story",
  title: "Morocco, in the cars it deserves.",
  paragraphs: [
    "Atlas Prestige Cars was founded in Marrakech in 2012 by a small team of automotive obsessives. We were tired of the worn-out fleets, hidden fees and three-hour airport queues that defined luxury rental in Morocco at the time.",
    "We built the opposite: a tight, hand-picked fleet of late-model German and British prestige cars, serviced after every rental, delivered to your door by a concierge who treats every booking like a private brief.",
    "Today we serve travellers, production companies, weddings and long-stay residents across six Moroccan cities — but our promise has not changed. Drive something extraordinary. Be looked after at every step.",
  ],
  stats: [
    { value: "12+", label: "Years in operation" },
    { value: "120+", label: "Prestige vehicles" },
    { value: "9,400", label: "Happy clients" },
    { value: "4.9★", label: "Average rating" },
  ] as StatItem[],
  advantages: [
    {
      title: "Owned, not brokered",
      body: "Every vehicle is on our own fleet — we control quality, servicing and cleanliness end-to-end.",
    },
    {
      title: "Concierge-led",
      body: "One point of contact for the whole rental, with WhatsApp on speed-dial.",
    },
    {
      title: "Designed for Morocco",
      body: "All cars are spec'd and serviced for Atlas roads, coastal heat and city traffic.",
    },
  ],
} as const;