import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  const howItWorksSteps = [
    {
      id: '1',
      title: 'Seniors Gain Confidence',
      description: 'Learn essential digital skills in a supportive, patient environment with personalized one-on-one guidance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: '2',
      title: 'Youth Lead & Mentor',
      description: 'Develop leadership and communication skills while making a meaningful impact in their community.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: '3',
      title: 'Facilities Improve Engagement',
      description: 'Enhance resident satisfaction and family connections through improved digital literacy programs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Loopd Community - Bridging Generations Through Technology</title>
        <meta name="description" content="Connecting seniors with youth volunteers to build confidence, skills, and community connections through technology mentorship." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Bridging Generations, Building Connections"
        subtitle="Empowering seniors through technology with youth mentorship"
        description="Join our community where seniors gain digital confidence while youth develop leadership skills. Together, we're creating meaningful connections across generations."
        primaryCTA={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "/about"
        }}
      />

      {/* Quick Navigation */}
      <Section background="gray" padding="medium">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to learn, teach, or partner with us, we have a place for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="For Seniors"
            description="Learn technology skills in a supportive environment with patient, friendly guidance."
            hover={true}
            className="h-full text-center"
          >
            <CTAButton href="/seniors" variant="primary" className="mt-4">
              I Want to Learn
            </CTAButton>
          </Card>
          
          <Card
            title="For Youth"
            description="Volunteer your time to help seniors while gaining valuable leadership experience."
            hover={true}
            className="h-full text-center"
          >
            <CTAButton href="/youth" variant="primary" className="mt-4">
              I Want to Help
            </CTAButton>
          </Card>
          
          <Card
            title="For Facilities"
            description="Partner with us to improve resident engagement and digital connectivity."
            hover={true}
            className="h-full text-center"
          >
            <CTAButton href="/facilities" variant="primary" className="mt-4">
              Partner With Us
            </CTAButton>
          </Card>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section background="white" padding="medium">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We believe that technology should bring people together, not drive them apart. 
            Through our reciprocal mentorship model, we're creating a community where 
            seniors gain digital confidence while youth develop empathy, leadership, and 
            communication skills. Together, we're building bridges across generations.
          </p>
          <CTAButton href="/about" variant="outline" size="large">
            Read Our Story
          </CTAButton>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray" padding="large">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Loopd Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven three-step approach creates meaningful connections while building essential skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, index) => (
            <Card
              key={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
              className="text-center"
            >
              <div className="mt-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-700 rounded-full font-bold">
                  {index + 1}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials Placeholder */}
      <Section background="white" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stories and testimonials from our participants coming soon!
          </p>
          <div className="bg-gray-100 rounded-lg p-12">
            <p className="text-lg text-gray-500 italic">
              "Join our community and become part of the stories we'll share here."
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the Loopd community today and be part of something meaningful. 
            Whether you're here to learn or teach, your journey starts now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="large">
              Join Today
            </CTAButton>
            <CTAButton href="/programs" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-600">
              View Programs
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
