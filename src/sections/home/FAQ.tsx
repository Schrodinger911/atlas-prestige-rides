import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/faq";

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="FAQ" title="Everything you might ask." />
        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.question} value={`q-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-lg font-light">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}