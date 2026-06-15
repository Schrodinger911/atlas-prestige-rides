import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Clients"
          title="Trusted by travellers and locals alike."
          subtitle="What our clients say after returning the keys."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}