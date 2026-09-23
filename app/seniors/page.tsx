import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import ServicesGrid from "@/sections/ServicesGrid";
import ChecklistSection from "@/sections/ChecklistSection";
import StepsSection from "@/sections/StepsSection";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";

export const metadata: Metadata = {
  title: "For Seniors - Loopd Community",
  description:
    "Join Loopd Community's intergenerational activities for seniors. Enjoy art, stories, games, music, and conversation with friendly youth volunteers.",
};

export default function SeniorsPage() {
  return (
    <>
      <Hero
        title={content.seniors.hero.title}
        subtitle={content.seniors.hero.subtitle}
        description={content.seniors.hero.description}
        primaryCTA={content.seniors.hero.primaryCTA}
        secondaryCTA={content.seniors.hero.secondaryCTA}
        compact
      />

      <FeatureCards
        title="Why Join Loopd Community?"
        subtitle="Our programs are designed with seniors in mind, centered on connection, creativity, and time well spent together."
        features={content.seniors.benefits}
      />

      <ChecklistSection
        title="Activities You Can Enjoy"
        subtitle="Try as many as you like. There's something for every interest and ability."
        items={content.seniors.activities}
      />

      <ServicesGrid
        title="Our Accessibility Promise"
        subtitle="Everyone deserves a seat at the table. Our activities are designed with accessibility and inclusivity at the forefront."
        services={content.seniors.accessibility}
        columns={2}
      />

      <Testimonials
        title="Success Stories"
        subtitle="Hear from seniors who have found new friendships and joy through our programs."
        placeholder="Testimonials from our senior participants will be featured here soon."
      />

      <StepsSection title="How It Works" steps={content.seniors.steps} />

      <CTASection
        title="Ready to Join the Fun?"
        description="Join seniors who have already discovered the joy of sharing stories, laughter, and creativity with the next generation. A friendly face is waiting to meet you."
        primaryCTA={{ text: "Register Your Interest", href: "/contact" }}
        secondaryCTA={{ text: "View Programs", href: "/programs" }}
      />
    </>
  );
}
