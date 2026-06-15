import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

interface Props {
  defaultVehicle?: string;
}

export function ContactFormSection({ defaultVehicle }: Props) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-primary">Contact</p>
            <h1 className="mt-4 font-display text-5xl font-light leading-[1.02] sm:text-6xl">
              Tell us where to deliver.
            </h1>
            <p className="mt-5 text-muted-foreground">
              Our concierge responds within minutes, 24 hours a day. Share a few details and we'll
              tailor the perfect car and itinerary.
            </p>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href={site.contact.phoneHref} className="hover:text-primary">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-primary">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{site.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{site.contact.hours}</span>
              </li>
            </ul>
          </div>
          <ContactForm defaultVehicle={defaultVehicle} />
        </div>
      </Container>
    </section>
  );
}