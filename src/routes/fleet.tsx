import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { FleetGrid } from "@/sections/fleet/FleetGrid";
import { ContactCTA } from "@/sections/home/ContactCTA";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — Mercedes, BMW, Porsche, Range Rover · Atlas Prestige Cars" },
      {
        name: "description",
        content:
          "Browse our hand-picked fleet of luxury vehicles for rent in Morocco — Mercedes C-Class & G63, BMW X5, Range Rover Sport, Porsche Cayenne, Audi Q8.",
      },
      { property: "og:title", content: "The Fleet — Atlas Prestige Cars" },
      {
        property: "og:description",
        content: "Luxury cars for rent in Marrakech, Casablanca, Rabat and beyond.",
      },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card/30 py-20 sm:py-28">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-primary">The fleet</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[1.02] sm:text-7xl">
            Choose your <span className="gold-text italic">drive.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Every car is on our own fleet — late-model, fully insured, serviced after every rental.
          </p>
        </Container>
      </section>
      <FleetGrid />
      <ContactCTA />
    </>
  );
}