import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { luxuryTestimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by discerning clients worldwide."
          subtitle="What our most valued clients say about their Atlas Prestige experience."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {luxuryTestimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
