import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/home/Hero";
import { FeaturedFleet } from "@/sections/home/FeaturedFleet";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { LuxuryExperience } from "@/sections/home/LuxuryExperience";
import { Testimonials } from "@/sections/home/Testimonials";
import { FAQ } from "@/sections/home/FAQ";
import { ContactCTA } from "@/sections/home/ContactCTA";
import { site } from "@/content/site";
import { faqs } from "@/content/faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Luxury Car Rental Morocco` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Luxury Car Rental Morocco` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedFleet />
      <WhyChooseUs />
      <LuxuryExperience />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
