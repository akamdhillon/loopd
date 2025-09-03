import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function Facilities() {
  const benefits = [
    {
      title: 'Improved Resident Engagement',
      description: 'Residents gain new skills and confidence, leading to increased participation in activities and social interactions.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Enhanced Family Connections',
      description: 'Residents learn video calling and digital communication, strengthening relationships with family members.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Reduced Social Isolation',
      description: 'Digital literacy programs help residents stay connected with the outside world and build new relationships.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Increased Independence',
      description: 'Residents develop skills to handle their own technology needs, reducing staff burden and increasing autonomy.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Positive Community Impact',
      description: 'Partner with local youth and demonstrate your commitment to innovative, community-focused care.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 9c1.657 0 3-4.03 3-9s-1.343 9-3 9" />
        </svg>
      ),
    },
    {
      title: 'Staff Development',
      description: 'Your staff can learn alongside residents, improving their own digital skills and understanding of technology needs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const programSetup = [
    {
      title: 'Flexible Implementation',
      description: 'Programs can be run as 1-on-1 sessions, small groups, or larger workshops based on your facility\'s needs and preferences.',
    },
    {
      title: 'Custom Curriculum',
      description: 'We adapt our content to match your residents\' interests and your facility\'s specific technology setup and goals.',
    },
    {
      title: 'Trained Volunteers',
      description: 'All youth mentors receive specialized training in working with seniors and understanding the unique needs of facility residents.',
    },
    {
      title: 'Minimal Staff Burden',
      description: 'Our volunteers handle the technology instruction while your staff provides facility knowledge and resident support.',
    },
    {
      title: 'Progress Tracking',
      description: 'Regular progress reports help you demonstrate program value to families, administrators, and regulatory bodies.',
    },
    {
      title: 'Ongoing Support',
      description: 'Our program coordinators provide continuous support to ensure smooth implementation and address any challenges.',
    },
  ];

  const outcomes = [
    'Increased resident satisfaction scores',
    'Improved family communication and visit frequency',
    'Higher engagement in facility activities and programs',
    'Reduced feelings of isolation and depression',
    'Enhanced resident independence and autonomy',
    'Positive community recognition and partnerships',
    'Staff development and technology skill improvement',
    'Demonstration of innovative, person-centered care',
  ];

  const facilityTypes = [
    {
      title: 'Senior Living Communities',
      description: 'Independent and assisted living facilities looking to enhance resident technology skills and community engagement.',
    },
    {
      title: 'Memory Care Facilities',
      description: 'Specialized programs adapted for residents with cognitive challenges, focusing on family connection and engagement.',
    },
    {
      title: 'Nursing Homes',
      description: 'Long-term care facilities wanting to improve quality of life and family communication for residents.',
    },
    {
      title: 'Adult Day Centers',
      description: 'Day programs seeking engaging activities that provide practical life skills and social interaction.',
    },
    {
      title: 'Community Centers',
      description: 'Local community centers offering programming for seniors in their neighborhoods.',
    },
    {
      title: 'Libraries & Nonprofits',
      description: 'Public institutions wanting to provide technology education services to their senior community members.',
    },
  ];

  return (
    <>
      <Head>
        <title>For Facilities - Loopd Community</title>
        <meta name="description" content="Partner with Loopd Community to enhance resident engagement through innovative technology mentorship programs in your facility." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Partner with Loopd Community"
        subtitle="Enhance resident wellbeing through technology mentorship"
        description="Bring our proven intergenerational programs to your facility. Help your residents gain digital confidence while building meaningful connections with youth volunteers."
        primaryCTA={{
          text: "Partner With Us",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Programs",
          href: "/programs"
        }}
      />

      {/* Benefits for Facilities */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Partner with Loopd Community?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology mentorship programs deliver measurable improvements in resident 
              engagement, family connections, and overall quality of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className="text-center h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Program Setup */}
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our Programs Work in Your Facility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work closely with your team to implement programs that fit seamlessly 
              into your existing activities and resident care plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programSetup.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Options */}
      <Section background="white" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Program Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the implementation model that works best for your facility and residents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="1-on-1 Mentoring"
              description="Individual sessions between youth mentors and residents for personalized attention and customized learning."
              className="text-center h-full"
            >
              <div className="mt-4">
                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            </Card>
            
            <Card
              title="Small Group Sessions"
              description="Groups of 3-4 residents with 1-2 mentors for collaborative learning and social interaction."
              className="text-center h-full"
            />
            
            <Card
              title="Workshop Format"
              description="Larger group sessions for specific topics like video calling workshops or digital safety presentations."
              className="text-center h-full"
            />
          </div>
        </div>
      </Section>

      {/* Measurable Outcomes */}
      <Section background="primary" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Measurable Outcomes
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our programs deliver tangible results that you can measure and report to families, 
              administrators, and regulatory bodies.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg text-blue-100">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Facility Types */}
      <Section background="gray" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to work with various types of facilities and 
              organizations serving seniors in the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityTypes.map((type) => (
              <Card
                key={type.title}
                title={type.title}
                description={type.description}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Success Stories Placeholder */}
      <Section background="white" padding="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner Success Stories
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn how other facilities have successfully implemented our programs.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-12 shadow-md">
            <p className="text-lg text-gray-500 italic mb-6">
              "Case studies and testimonials from our facility partners will be featured here soon."
            </p>
            <p className="text-gray-600">
              Partner with us and become part of the success stories we'll share here!
            </p>
          </div>
        </div>
      </Section>

      {/* Getting Started */}
      <Section background="gray" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Get Started
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Contact us to discuss your facility's needs and goals for the program.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Design</h3>
              <p className="text-gray-600">We work with your team to customize the program for your residents and facility.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer Training</h3>
              <p className="text-gray-600">Our youth volunteers receive specialized training for your facility environment.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Program Launch</h3>
              <p className="text-gray-600">Begin implementation with ongoing support and progress monitoring.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cost & Investment */}
      <Section background="white" padding="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Investment & Support
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our programs are designed to be cost-effective and provide excellent return 
            on investment through improved resident outcomes.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Trained youth volunteers</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Customized curriculum</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Program coordination</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Progress tracking & reporting</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ongoing support</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Staff training opportunities</span>
              </div>
            </div>
          </div>
          
          <CTAButton href="/contact" variant="primary" size="large">
            Schedule a Consultation
          </CTAButton>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Residents' Lives?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing number of facilities partnering with Loopd Community to 
            provide innovative, meaningful programming that truly makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="large">
              Partner With Us Today
            </CTAButton>
            <CTAButton href="/programs" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-600">
              Learn About Our Programs
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
