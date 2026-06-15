import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary">
                <span className="font-display text-lg">A</span>
              </span>
              <span className="font-display text-2xl">{site.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{site.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition hover:border-primary/40 hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.28em] text-primary">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.28em] text-primary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                <a href={site.contact.phoneHref} className="hover:text-foreground">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-foreground">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                <span>{site.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hairline mt-12" />
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}