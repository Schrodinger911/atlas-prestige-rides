import * as Icons from "lucide-react";
import type { Feature } from "@/content/types";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon =
    ((Icons as unknown as Record<string, LucideIcon>)[feature.icon] as LucideIcon | undefined) ??
    Icons.Sparkles;
  return (
    <div className="glass group flex h-full flex-col gap-4 rounded-2xl p-7 transition hover:border-primary/40">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display text-xl font-light">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </div>
  );
}