import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function Seniors() {
  const benefits = [
    {
      title: 'Patient, Supportive Learning',
      description: 'Learn at your own pace with youth mentors who understand that everyone learns differently.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Stay Connected with Family',
      description: 'Learn to video call grandchildren, share photos, and keep in touch with loved ones.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Build Confidence',
      description: 'Gain the skills and confidence to use technology independently in daily life.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Learn Essential Skills',
      description: 'Master email, web browsing, online banking, telehealth, and more.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Safe Learning Environment',
      description: 'Learn about digital safety and how to protect yourself from online scams.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'New Friendships',
      description: 'Build meaningful relationships with young mentors and other participants.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const whatYoullLearn = [
    'Basic device navigation and touchscreen use',
    'Email setup and communication',
    'Video calling with family and friends',
    'Safe web browsing and internet search',
    'Online banking and digital payments',
    'Telehealth and medical technology',
    'Digital safety and scam awareness',
    'Smart home basics and voice assistants',
    'Photo sharing and digital memories',
    'Troubleshooting common tech issues',
  ];

  const accessibilityFeatures = [
    {
      title: 'Large Text & Clear Visuals',
      description: 'All our materials use large, easy-to-read fonts and high-contrast colors.',
    },
    {
      title: 'Multilingual Support',
      description: 'Materials and mentors available in multiple languages to serve our diverse community.',
    },
    {
      title: 'Ergonomic Setup',
      description: 'We help optimize device settings and physical setup for comfort and ease of use.',
    },
    {
      title: 'Flexible Pacing',
      description: 'Learn at your own speed with no pressure to keep up with others.',
    },
  ];

  return (
    <>
      <Head>
        <title>For Seniors - Loopd Community</title>
        <meta name="description" content="Join Loopd Community's technology programs designed specifically for seniors. Learn digital skills with patient youth mentors in a supportive environment." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Technology Learning for Seniors"
        subtitle="Learn with confidence, patience, and support"
        description="Join our community where experienced seniors learn technology skills from patient youth mentors. No judgment, no rushing—just supportive learning at your own pace."
        primaryCTA={{
          text: "Register Your Interest",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Programs",
          href: "/programs"
        }}
      />

      {/* Benefits Section */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join Loopd Community?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed specifically with seniors in mind, focusing on practical 
              skills that matter most in your daily life.
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

      {/* What You'll Learn */}
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive curriculum covers the technology skills that matter most in today's world.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatYoullLearn.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <CTAButton href="/programs" variant="outline" size="large">
              See Full Curriculum
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Accessibility Promise */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Accessibility Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe technology should be accessible to everyone. Our programs are designed 
              with accessibility and inclusivity at the forefront.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Success Stories Placeholder */}
      <Section background="gray" padding="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hear from seniors who have transformed their relationship with technology through our programs.
          </p>
          
          <div className="bg-white rounded-lg p-12 shadow-md">
            <p className="text-lg text-gray-500 italic mb-6">
              "Testimonials from our senior participants will be featured here soon."
            </p>
            <p className="text-gray-600">
              Join our community and become part of the success stories we'll share here!
            </p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Register</h3>
              <p className="text-gray-600">Contact us to express your interest and schedule an initial conversation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matched</h3>
              <p className="text-gray-600">We'll pair you with a trained youth mentor based on your goals and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Learning</h3>
              <p className="text-gray-600">Begin your 10-week journey with weekly one-on-one sessions at your own pace.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gain Confidence</h3>
              <p className="text-gray-600">Build lasting skills and confidence to use technology independently.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Technology Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of seniors who have already discovered the joy and independence 
            that comes with digital confidence. Your patient mentor is waiting to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="large">
              Register Your Interest
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
