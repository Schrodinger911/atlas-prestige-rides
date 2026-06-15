import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:flex md:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 text-primary">
              <span className="font-display text-base">A</span>
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate font-display text-lg tracking-wide">
                {site.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Morocco
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
                className="text-sm tracking-wide text-foreground/80 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.contact.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-primary-foreground sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.contact.phone}
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <nav className="flex flex-col gap-1 pb-5">
              {site.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary border-primary/40" }}
                  activeOptions={{ exact: true }}
                  className="rounded-lg border border-transparent px-3 py-3 text-sm tracking-wide text-foreground/80 transition hover:border-border hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.contact.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
              >
                <Phone className="h-3.5 w-3.5" />
                {site.contact.phone}
              </a>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}