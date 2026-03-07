import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import ServicesGrid from "@/sections/ServicesGrid";
import ChecklistSection from "@/sections/ChecklistSection";
import StepsSection from "@/sections/StepsSection";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";
import ProgramOptionsSection from "./ProgramOptionsSection";
import IncludedSection from "./IncludedSection";

export const metadata: Metadata = {
  title: "For Facilities - Loopd Community",
  description:
    "Partner with Loopd Community to enhance resident engagement through innovative technology mentorship programs in your facility.",
};

export default function FacilitiesPage() {
  return (
    <>
      <Hero
        title={content.facilities.hero.title}
        subtitle={content.facilities.hero.subtitle}
        description={content.facilities.hero.description}
        primaryCTA={content.facilities.hero.primaryCTA}
        secondaryCTA={content.facilities.hero.secondaryCTA}
        compact
      />

      <FeatureCards
        title="Why Partner with Loopd Community?"
        subtitle="Our technology mentorship programs deliver measurable improvements in resident engagement, family connections, and overall quality of life."
        features={content.facilities.benefits}
      />

      <ServicesGrid
        title="How Our Programs Work in Your Facility"
        subtitle="We work closely with your team to implement programs that fit seamlessly into your existing activities and resident care plans."
        services={content.facilities.programSetup}
      />

      <ProgramOptionsSection />

      <ChecklistSection
        title="Measurable Outcomes"
        subtitle="Our programs deliver tangible results that you can measure and report to families, administrators, and regulatory bodies."
        items={content.facilities.outcomes}
        dark
      />

      <ServicesGrid
        title="Who We Work With"
        subtitle="Our programs are designed to work with various types of facilities and organizations serving seniors in the community."
        services={content.facilities.facilityTypes}
      />

      <Testimonials
        title="Partner Success Stories"
        subtitle="Learn how other facilities have successfully implemented our programs."
        placeholder="Case studies and testimonials from our facility partners will be featured here soon."
      />

      <IncludedSection />

      <StepsSection title="How to Get Started" steps={content.facilities.steps} />

      <CTASection
        title="Ready to Transform Your Residents' Lives?"
        description="Join the growing number of facilities partnering with Loopd Community to provide innovative, meaningful programming that truly makes a difference."
        primaryCTA={{ text: "Partner With Us Today", href: "/contact" }}
        secondaryCTA={{ text: "Learn About Our Programs", href: "/programs" }}
      />
    </>
  );
}
