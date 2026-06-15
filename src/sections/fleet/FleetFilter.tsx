import { cn } from "@/lib/utils";
import { categories } from "@/content/fleet";
import type { VehicleCategory } from "@/content/types";

interface Props {
  active: VehicleCategory | "all";
  onChange: (id: VehicleCategory | "all") => void;
}

export function FleetFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onChange(c.id)}
          className={cn(
            "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.24em] transition",
            active === c.id
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border/60 text-foreground/70 hover:border-primary/40 hover:text-primary",
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}