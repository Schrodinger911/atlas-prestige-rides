import { createFileRoute } from "@tanstack/react-router";
import { Story } from "@/sections/about/Story";
import { Stats } from "@/sections/about/Stats";
import { Advantages } from "@/sections/about/Advantages";
import { ContactCTA } from "@/sections/home/ContactCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Atlas Prestige Cars" },
      {
        name: "description",
        content:
          "Founded in Marrakech in 2012, Atlas Prestige Cars is Morocco's leading luxury rental — hand-picked fleet, concierge service, six cities.",
      },
      { property: "og:title", content: "About — Atlas Prestige Cars" },
      {
        property: "og:description",
        content: "Morocco's luxury rental, in the cars it deserves.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Story />
      <Stats />
      <Advantages />
      <ContactCTA />
    </>
  );
}