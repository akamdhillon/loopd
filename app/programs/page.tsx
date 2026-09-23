import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import ServicesGrid from "@/sections/ServicesGrid";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";
import ProgramBenefitsSection from "./BenefitsSection";
import ComingSoonSection from "./ComingSoonSection";

export const metadata: Metadata = {
  title: "Programs - Loopd Community",
  description:
    "Explore Loopd Community's intergenerational programs: art, storytelling, Chai & Chat, games, music, cooking, gardening, and more for seniors and youth.",
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        title={content.programs.hero.title}
        subtitle={content.programs.hero.subtitle}
        description={content.programs.hero.description}
        primaryCTA={content.programs.hero.primaryCTA}
        secondaryCTA={content.programs.hero.secondaryCTA}
        compact
      />

      <FeatureCards
        title={content.programs.sessionFormats.title}
        subtitle={content.programs.sessionFormats.description}
        features={content.programs.sessionFormats.features}
      />

      <ServicesGrid
        title={content.programs.activities.title}
        subtitle={content.programs.activities.description}
        services={content.programs.activities.items}
      />

      <ProgramBenefitsSection />
      <ComingSoonSection />

      <CTASection
        title="Find an Activity You'll Love"
        description="Whether it's painting, storytelling, a game of cards, or a cup of chai, there's a place for you at Loopd. Reach out and we'll help you find the right fit."
        primaryCTA={{ text: "Join a Program", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "/seniors" }}
      />
    </>
  );
}
