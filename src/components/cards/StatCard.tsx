import type { StatItem } from "@/content/types";

export function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <p className="font-display text-4xl text-primary sm:text-5xl">{stat.value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}