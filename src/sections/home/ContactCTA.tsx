import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";
import { buildWhatsAppLink } from "@/utils/format";

export function ContactCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute inset-x-0 -top-px hairline" />
          <p className="text-xs uppercase tracking-[0.34em] text-primary">Ready when you are</p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] sm:text-6xl">
            The keys are waiting.
            <br />
            <span className="gold-text italic">Where shall we deliver?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Reach our concierge by phone, WhatsApp or contact form. We answer within minutes, 24/7.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> {site.contact.phone}
            </a>
            <a
              href={buildWhatsAppLink(site.contact.whatsapp, "Hi, I'd like to inquire about a luxury rental.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Send a message
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}