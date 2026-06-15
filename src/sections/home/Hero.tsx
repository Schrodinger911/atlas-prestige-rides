import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { hero } from "@/content/hero";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </div>

      <Container className="relative pb-24 pt-24 sm:pt-32 lg:pb-40 lg:pt-40">
        <p className="text-xs uppercase tracking-[0.34em] text-primary">{hero.eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-light leading-[1.02] text-foreground sm:text-7xl lg:text-8xl">
          {hero.title[0]}{" "}
          <span className="gold-text italic">{hero.title[1]}</span>
          <br className="hidden sm:block" /> {hero.title[2]}
        </h1>
        <p className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to={hero.ctaPrimary.to}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground transition hover:opacity-90"
          >
            {hero.ctaPrimary.label}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to={hero.ctaSecondary.to}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-foreground backdrop-blur transition hover:border-primary/40 hover:text-primary"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl text-primary sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}