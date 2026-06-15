import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { VehicleCard } from "@/components/cards/VehicleCard";
import { vehicles } from "@/content/fleet";

export function FeaturedFleet() {
  const featured = vehicles.filter((v) => v.featured).slice(0, 6);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_auto]">
          <SectionHeader
            eyebrow="The fleet"
            title="Six cars. Zero compromises."
            subtitle="A tight, hand-picked selection — every car serviced after every rental."
            align="left"
          />
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-primary transition hover:gap-3"
          >
            View entire fleet <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </Container>
    </section>
  );
}