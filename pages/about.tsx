import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function About() {
  const values = [
    {
      title: 'Inclusion',
      description: 'Technology should be accessible to everyone, regardless of age or experience level.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 9c1.657 0 3-4.03 3-9s-1.343 9-3 9" />
        </svg>
      ),
    },
    {
      title: 'Community',
      description: 'Building meaningful relationships across generations strengthens our entire community.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Empowerment',
      description: 'Every interaction should leave both participants feeling more confident and capable.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - Loopd Community</title>
        <meta name="description" content="Learn about Loopd Community's mission to bridge generations through technology mentorship and digital literacy programs." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="Building bridges across generations through technology"
        description="Discover how Loopd Community is creating meaningful connections while empowering seniors and youth alike."
        centered={true}
      />

      {/* The Problem */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Challenge We're Addressing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Senior Isolation & Digital Divide
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Many seniors feel left behind by rapidly advancing technology. This digital divide 
                contributes to social isolation, limiting their ability to connect with family, 
                access essential services, and participate fully in modern society.
              </p>
              <p className="text-lg text-gray-600">
                Meanwhile, traditional tech support often lacks the patience and understanding 
                that seniors need to feel comfortable learning new skills.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Youth Seeking Purpose
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Young people today want to make a meaningful impact in their communities. 
                They possess natural tech skills and energy, but often lack opportunities 
                to apply these abilities in service of others.
              </p>
              <p className="text-lg text-gray-600">
                Many youth also miss out on the wisdom and life experience that comes 
                from meaningful intergenerational relationships.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Solution: Reciprocal Mentorship
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We've created a unique model where both participants are teachers and learners. 
            Seniors gain digital confidence while youth develop empathy, patience, and leadership skills.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why This Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Patient Learning Environment</h4>
                <p className="text-gray-600">Youth mentors understand that learning takes time and create supportive, judgment-free spaces.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mutual Respect</h4>
                <p className="text-gray-600">Both participants bring valuable knowledge and experience to the relationship.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Lasting Impact</h4>
                <p className="text-gray-600">Skills and relationships developed through our programs continue long after formal sessions end.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Values */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We envision a world where technology brings generations together rather than 
              driving them apart, where everyone has the confidence to participate in our 
              digital society.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                className="text-center h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Competitive Advantage */}
      <Section background="primary" padding="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p className="text-blue-100">
                One-on-one mentoring ensures each senior learns at their own pace with content 
                tailored to their specific needs and interests.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Accessibility First</h3>
              <p className="text-blue-100">
                Our programs are designed with accessibility in mind, featuring large text, 
                clear instructions, and multilingual support.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
              <p className="text-blue-100">
                We partner with local facilities and organizations to create lasting 
                community connections beyond individual sessions.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-blue-100">
                Our structured 10-week curriculum has been tested and refined to deliver 
                measurable improvements in digital confidence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a senior looking to learn, a young person wanting to help, 
            or a facility interested in partnering with us, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="large">
              Get Involved Today
            </CTAButton>
            <CTAButton href="/programs" variant="outline" size="large">
              See Our Programs
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
