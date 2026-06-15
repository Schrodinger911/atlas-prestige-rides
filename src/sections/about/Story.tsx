import { Container } from "@/components/layout/Container";
import { about } from "@/content/about";

export function Story() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-primary">{about.eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl font-light leading-[1.02] sm:text-6xl">
              {about.title}
            </h1>
          </div>
          <div className="space-y-5 text-base text-muted-foreground sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}