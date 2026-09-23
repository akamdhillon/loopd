import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import ServicesGrid from "@/sections/ServicesGrid";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";
import AboutChallengeSection from "./ChallengeSection";
import AboutSolutionSection from "./SolutionSection";

export const metadata: Metadata = {
  title: "About Us - Loopd Community",
  description:
    "Learn about Loopd Community's mission to bring generations together through art, stories, games, music, and shared experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title={content.about.hero.title}
        subtitle={content.about.hero.subtitle}
        description={content.about.hero.description}
        compact
      />

      <AboutChallengeSection />
      <AboutSolutionSection />

      <FeatureCards
        title="Our Vision & Values"
        subtitle="We envision a world where every generation feels seen, valued, and connected to one another."
        features={content.about.values}
      />

      <ServicesGrid
        title="What Makes Us Different"
        services={content.about.differentiators}
        columns={2}
        dark
      />

      <CTASection
        title="Join Our Mission"
        description="Whether you're a senior looking for connection, a young person wanting to help, or a facility interested in partnering with us, there's a place for you in our community."
        primaryCTA={{ text: "Get Involved Today", href: "/contact" }}
        secondaryCTA={{ text: "See Our Programs", href: "/programs" }}
        variant="light"
      />
    </>
  );
}
