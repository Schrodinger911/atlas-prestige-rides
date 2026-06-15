import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/content/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="glass flex h-full flex-col gap-4 rounded-2xl p-7">
      <Quote className="h-6 w-6 text-primary/80" />
      <blockquote className="font-display text-lg leading-snug text-foreground">
        “{t.quote}”
      </blockquote>
      <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
        <figcaption>
          <p className="text-sm text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </figcaption>
        <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </figure>
  );
}