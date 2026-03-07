import type { Metadata } from "next";
import Hero from "@/sections/Hero";
import ContactForm from "@/sections/ContactForm";
import CTASection from "@/sections/CTASection";
import content from "@/content/content.json";
import ContactMethodsSection from "./ContactMethodsSection";
import FAQSection from "./FAQSection";
import ConnectSection from "./ConnectSection";

export const metadata: Metadata = {
  title: "Contact Us - Loopd Community",
  description:
    "Get in touch with Loopd Community to learn more about our technology mentorship programs or to register your interest.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title={content.contact.hero.title}
        subtitle={content.contact.hero.subtitle}
        description={content.contact.hero.description}
        compact
      />

      <ContactMethodsSection />
      <ContactForm />
      <FAQSection />
      <ConnectSection />

      <CTASection
        title="Ready to Join Our Community?"
        description="Don't wait to start your journey with technology or begin making a difference in your community. Reach out today and let's get started!"
        primaryCTA={{ text: "Email Us Now", href: `mailto:${content.brand.email}` }}
        secondaryCTA={{ text: "Call Us Today", href: `tel:${content.brand.phone.replace(/[^\d+]/g, "")}` }}
      />
    </>
  );
}
