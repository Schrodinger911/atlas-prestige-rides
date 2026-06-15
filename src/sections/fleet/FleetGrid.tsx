import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { VehicleCard } from "@/components/cards/VehicleCard";
import { vehicles } from "@/content/fleet";
import type { VehicleCategory } from "@/content/types";
import { FleetFilter } from "./FleetFilter";

export function FleetGrid() {
  const [active, setActive] = useState<VehicleCategory | "all">("all");
  const filtered = useMemo(
    () => (active === "all" ? vehicles : vehicles.filter((v) => v.category === active)),
    [active],
  );
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FleetFilter active={active} onChange={setActive} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted-foreground">
            No vehicles in this category yet — contact us for tailored options.
          </p>
        )}
      </Container>
    </section>
  );
}