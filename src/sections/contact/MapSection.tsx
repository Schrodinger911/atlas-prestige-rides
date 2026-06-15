import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";
import { ExternalLink } from "lucide-react";

export function MapSection() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-border/60">
          <iframe
            title="Atlas Prestige Cars location"
            src={site.contact.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full"
          />
        </div>
        <a
          href={site.contact.mapLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-primary transition hover:gap-3"
        >
          Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </Container>
    </section>
  );
}