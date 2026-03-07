import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import ProgramAccordion from "@/sections/ProgramAccordion";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";
import ProgramBenefitsSection from "./BenefitsSection";
import ComingSoonSection from "./ComingSoonSection";

export const metadata: Metadata = {
  title: "Programs - Loopd Community",
  description:
    "Explore Loopd Community's structured digital literacy programs designed to empower seniors through technology mentorship.",
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
        title={content.programs.mentorshipModel.title}
        subtitle={content.programs.mentorshipModel.description}
        features={content.programs.mentorshipModel.features}
      />

      <ProgramAccordion
        title={content.programs.curriculum.title}
        description={content.programs.curriculum.description}
        items={content.programs.curriculum.weeks}
      />

      <ProgramBenefitsSection />
      <ComingSoonSection />

      <CTASection
        title="Ready to Start Learning?"
        description="Join our Digital Life Made Easy program and start building confidence with technology today. Our patient mentors are here to support you every step of the way."
        primaryCTA={{ text: "Enroll Now", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "/seniors" }}
      />
    </>
  );
}
