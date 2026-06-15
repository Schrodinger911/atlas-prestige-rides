import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";
import { buildWhatsAppLink } from "@/utils/format";

export function WhatsAppCTA() {
  return (
    <section className="pb-10">
      <Container>
        <a
          href={buildWhatsAppLink(site.contact.whatsapp, "Hi Atlas Prestige, I'd like to book a vehicle.")}
          target="_blank"
          rel="noreferrer"
          className="glass flex items-center justify-between gap-6 rounded-2xl px-6 py-5 transition hover:border-primary/40 sm:px-10"
        >
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg sm:text-xl">Prefer WhatsApp? Tap to chat.</p>
              <p className="truncate text-xs text-muted-foreground">
                Average reply time: under 3 minutes.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs uppercase tracking-[0.24em] text-primary">Open chat</span>
        </a>
      </Container>
    </section>
  );
}