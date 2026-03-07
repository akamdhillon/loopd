import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import ServicesGrid from "@/sections/ServicesGrid";
import ChecklistSection from "@/sections/ChecklistSection";
import StepsSection from "@/sections/StepsSection";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";
import VolunteerHoursSection from "./VolunteerHoursSection";

export const metadata: Metadata = {
  title: "For Youth - Loopd Community",
  description:
    "Join Loopd Community as a youth volunteer mentor. Help seniors learn technology while developing leadership skills and earning volunteer hours.",
};

export default function YouthPage() {
  return (
    <>
      <Hero
        title={content.youth.hero.title}
        subtitle={content.youth.hero.subtitle}
        description={content.youth.hero.description}
        primaryCTA={content.youth.hero.primaryCTA}
        secondaryCTA={content.youth.hero.secondaryCTA}
        compact
      />

      <FeatureCards
        title="Why Join as a Youth Volunteer?"
        subtitle="Volunteering with Loopd Community isn't just about helping others—it's about growing as a person and gaining skills that will benefit you throughout your life."
        features={content.youth.reasons}
      />

      <ChecklistSection
        title="What You'll Do as a Mentor"
        subtitle={`As a youth mentor, you'll provide patient, one-on-one support. Time Commitment: ${content.youth.timeCommitment}`}
        items={content.youth.activities}
      />

      <ServicesGrid
        title="Skills You'll Develop"
        subtitle="Our volunteer program is designed to help you grow personally and professionally while making a meaningful impact in your community."
        services={content.youth.skillsGained}
      />

      <VolunteerHoursSection />

      <ChecklistSection
        title="Volunteer Requirements"
        subtitle="We're looking for enthusiastic young people who want to make a difference."
        items={content.youth.requirements}
      />

      <Testimonials
        title="Volunteer Spotlights"
        subtitle="Meet some of our amazing youth volunteers and learn about their experiences."
        placeholder="Stories from our youth volunteers will be featured here soon."
      />

      <StepsSection title="How to Get Started" steps={content.youth.steps} />

      <CTASection
        title="Ready to Make a Difference?"
        description="Join our community of youth volunteers and help build bridges between generations. Your patience, enthusiasm, and tech skills can truly change someone's life."
        primaryCTA={{ text: "Sign Up to Volunteer", href: "/contact" }}
        secondaryCTA={{
          text: "Learn More About Our Program",
          href: "/programs",
        }}
      />
    </>
  );
}
