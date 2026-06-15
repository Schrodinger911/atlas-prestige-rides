import { Container } from "@/components/layout/Container";
import { StatCard } from "@/components/cards/StatCard";
import { about } from "@/content/about";

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-20">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}