import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { about } from "@/content/about";

export function Advantages() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="Our advantage" title="Three things we never outsource." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {about.advantages.map((a, i) => (
            <div key={a.title} className="glass rounded-2xl p-8">
              <p className="font-display text-5xl text-primary/40">0{i + 1}</p>
              <h3 className="mt-4 font-display text-xl font-light">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}