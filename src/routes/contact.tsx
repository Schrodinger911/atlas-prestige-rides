import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactFormSection } from "@/sections/contact/ContactFormSection";
import { WhatsAppCTA } from "@/sections/contact/WhatsAppCTA";
import { MapSection } from "@/sections/contact/MapSection";

const ContactSearch = z.object({
  vehicle: z.string().trim().max(80).optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => ContactSearch.parse(search),
  head: () => ({
    meta: [
      { title: "Contact — Atlas Prestige Cars" },
      {
        name: "description",
        content:
          "Contact our concierge in Marrakech to reserve a luxury vehicle — phone, WhatsApp, email or form. 24/7 response.",
      },
      { property: "og:title", content: "Contact — Atlas Prestige Cars" },
      {
        property: "og:description",
        content: "Our concierge replies within minutes, 24/7.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { vehicle } = Route.useSearch();
  return (
    <>
      <ContactFormSection defaultVehicle={vehicle} />
      <WhatsAppCTA />
      <MapSection />
    </>
  );
}