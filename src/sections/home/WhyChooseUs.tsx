import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { whyChooseUs } from "@/content/whyChooseUs";

export function WhyChooseUs() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Why Atlas Prestige"
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </Container>
    </section>
  );
}