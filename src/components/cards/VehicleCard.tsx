import { ArrowUpRight, Users, Fuel, Briefcase, Cog } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Vehicle } from "@/content/types";
import { formatPrice } from "@/utils/format";
import { cn } from "@/lib/utils";

interface Props {
  vehicle: Vehicle;
  className?: string;
}

export function VehicleCard({ vehicle, className }: Props) {
  return (
    <article
      className={cn(
        "group glass relative flex flex-col overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1 hover:border-primary/40",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-primary backdrop-blur">
          {vehicle.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {vehicle.brand}
            </p>
            <h3 className="truncate font-display text-2xl font-light">{vehicle.name}</h3>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-display text-xl text-primary">{formatPrice(vehicle.pricePerDay)}</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">per day</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{vehicle.tagline}</p>
        <ul className="grid grid-cols-4 gap-2 border-t border-border/60 pt-4 text-[11px] text-muted-foreground">
          <li className="flex flex-col items-center gap-1">
            <Users className="h-4 w-4 text-primary/80" />
            {vehicle.specs.seats}
          </li>
          <li className="flex flex-col items-center gap-1">
            <Cog className="h-4 w-4 text-primary/80" />
            {vehicle.specs.transmission === "Automatic" ? "Auto" : "Man"}
          </li>
          <li className="flex flex-col items-center gap-1">
            <Fuel className="h-4 w-4 text-primary/80" />
            {vehicle.specs.fuel}
          </li>
          <li className="flex flex-col items-center gap-1">
            <Briefcase className="h-4 w-4 text-primary/80" />
            {vehicle.specs.luggage}
          </li>
        </ul>
        <Link
          to="/contact"
          search={{ vehicle: vehicle.slug }}
          className="mt-auto inline-flex items-center justify-between rounded-full border border-primary/40 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          Reserve
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}