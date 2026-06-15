import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import experienceImage from "@/assets/experience.jpg";

const bullets = [
  "Door-to-door delivery to any riad, hotel or airport",
  "Vehicle inspection, refuelling and detailing between every rental",
  "Optional professional chauffeur, fluent in EN / FR",
  "Bespoke itineraries for the Atlas, the coast and the desert",
];

export function LuxuryExperience() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={experienceImage}
              alt="Atlas Prestige concierge delivering a luxury SUV at a Marrakech riad"
              loading="lazy"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-primary">The experience</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-5xl">
              More than a rental.
              <br />
              <span className="gold-text italic">A private journey.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              From the moment you book, a dedicated concierge is yours. We deliver where you are,
              when you want, and stay one message away for the whole trip.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-primary/40 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-xs font-medium uppercase tracking-[0.24em] text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Speak with concierge
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}