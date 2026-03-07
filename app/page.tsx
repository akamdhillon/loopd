import Hero from "@/sections/Hero";
import FeatureCards from "@/sections/FeatureCards";
import CTASection from "@/sections/CTASection";
import Testimonials from "@/sections/Testimonials";
import content from "@/content/content.json";
import MissionSection from "./MissionSection";
import HowItWorksSection from "./HowItWorksSection";

export default function HomePage() {
  return (
    <>
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        primaryCTA={content.hero.primaryCTA}
        secondaryCTA={content.hero.secondaryCTA}
      />

      <FeatureCards
        title="Choose Your Path"
        subtitle="Whether you're looking to learn, teach, or partner with us, we have a place for you."
        features={content.paths}
      />

      <MissionSection />

      <HowItWorksSection />

      <Testimonials
        title="What Our Community Says"
        subtitle="Stories and testimonials from our participants coming soon!"
        placeholder="Join our community and become part of the stories we'll share here."
      />

      <CTASection
        title="Ready to Get Started?"
        description="Join the Loopd community today and be part of something meaningful. Whether you're here to learn or teach, your journey starts now."
        primaryCTA={{ text: "Join Today", href: "/contact" }}
        secondaryCTA={{ text: "View Programs", href: "/programs" }}
      />
    </>
  );
}
