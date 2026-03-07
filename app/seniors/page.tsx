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
    "Join Loopd Community's technology programs designed specifically for seniors. Learn digital skills with patient youth mentors in a supportive environment.",
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
        subtitle="Our programs are designed specifically with seniors in mind, focusing on practical skills that matter most in your daily life."
        features={content.seniors.benefits}
      />

      <ChecklistSection
        title="What You'll Learn"
        subtitle="Our comprehensive curriculum covers the technology skills that matter most in today's world."
        items={content.seniors.skills}
      />

      <ServicesGrid
        title="Our Accessibility Promise"
        subtitle="We believe technology should be accessible to everyone. Our programs are designed with accessibility and inclusivity at the forefront."
        services={content.seniors.accessibility}
        columns={2}
      />

      <Testimonials
        title="Success Stories"
        subtitle="Hear from seniors who have transformed their relationship with technology through our programs."
        placeholder="Testimonials from our senior participants will be featured here soon."
      />

      <StepsSection title="How It Works" steps={content.seniors.steps} />

      <CTASection
        title="Ready to Start Your Technology Journey?"
        description="Join hundreds of seniors who have already discovered the joy and independence that comes with digital confidence. Your patient mentor is waiting to help you succeed."
        primaryCTA={{ text: "Register Your Interest", href: "/contact" }}
        secondaryCTA={{ text: "View Programs", href: "/programs" }}
      />
    </>
  );
}
