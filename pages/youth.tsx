import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function Youth() {
  const whyJoinReasons = [
    {
      title: 'Make a Real Impact',
      description: 'Help seniors gain confidence and independence with technology while building meaningful relationships.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Earn Volunteer Hours',
      description: 'Perfect for high school students needing community service hours for graduation or college applications.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Develop Leadership Skills',
      description: 'Practice patience, communication, and teaching skills that will benefit you throughout life.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Gain Life Experience',
      description: 'Learn from the wisdom and life experiences of seniors while sharing your own knowledge.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Build Your Resume',
      description: 'Add meaningful volunteer experience that shows empathy, leadership, and community engagement.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose times that work with your school schedule and other commitments.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const whatYoullDo = [
    'Provide one-on-one technology mentoring to seniors',
    'Help with basic device navigation and setup',
    'Teach email, video calling, and digital communication',
    'Guide seniors through online safety and scam awareness',
    'Assist with telehealth and online banking basics',
    'Support seniors in connecting with family and friends',
    'Share your patience and enthusiasm for technology',
    'Learn from seniors\' wisdom and life experiences',
  ];

  const skillsGained = [
    {
      title: 'Communication Skills',
      description: 'Learn to explain complex concepts in simple, understandable terms.',
    },
    {
      title: 'Patience & Empathy',
      description: 'Develop patience and understanding when working with different learning styles.',
    },
    {
      title: 'Teaching Ability',
      description: 'Gain experience in breaking down complex topics into manageable steps.',
    },
    {
      title: 'Problem-Solving',
      description: 'Practice creative problem-solving when technology doesn\'t work as expected.',
    },
    {
      title: 'Cultural Awareness',
      description: 'Learn from seniors\' diverse backgrounds and life experiences.',
    },
    {
      title: 'Professional Skills',
      description: 'Develop reliability, time management, and professional communication skills.',
    },
  ];

  const requirements = [
    'Ages 14-25 (with parental consent for under 18)',
    'Basic comfort with smartphones, tablets, or computers',
    'Patience and enthusiasm for helping others',
    'Ability to commit to weekly sessions for 10 weeks',
    'Strong communication skills and reliability',
    'Complete our brief training program',
  ];

  return (
    <>
      <Head>
        <title>For Youth - Loopd Community</title>
        <meta name="description" content="Join Loopd Community as a youth volunteer mentor. Help seniors learn technology while developing leadership skills and earning volunteer hours." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Youth Volunteers: Be the Bridge"
        subtitle="Help seniors navigate technology while building your own skills"
        description="Join our community of young mentors making a real difference. Share your tech knowledge, gain valuable experience, and build meaningful relationships across generations."
        primaryCTA={{
          text: "Sign Up to Volunteer",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Learn About Our Program",
          href: "/programs"
        }}
      />

      {/* Why Join */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join as a Youth Volunteer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteering with Loopd Community isn't just about helping others—it's about 
              growing as a person and gaining skills that will benefit you throughout your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason) => (
              <Card
                key={reason.title}
                title={reason.title}
                description={reason.description}
                icon={reason.icon}
                className="text-center h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* What You'll Do */}
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Do as a Mentor
            </h2>
            <p className="text-xl text-gray-600">
              As a youth mentor, you'll provide patient, one-on-one support to help seniors 
              build confidence with technology.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatYoullDo.map((task, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Time Commitment:</strong> 1-2 hours per week for 10 weeks per senior mentee
            </p>
            <CTAButton href="/contact" variant="primary" size="large">
              Apply to Become a Mentor
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Skills You'll Gain */}
      <Section background="white" padding="large">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Skills You'll Develop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our volunteer program is designed to help you grow personally and professionally 
              while making a meaningful impact in your community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsGained.map((skill) => (
              <Card
                key={skill.title}
                title={skill.title}
                description={skill.description}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* High School Volunteer Hours */}
      <Section background="primary" padding="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perfect for High School Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">20+ Hours</h3>
              <p className="text-blue-100">
                Earn meaningful volunteer hours that colleges and scholarship committees value.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Documented</h3>
              <p className="text-blue-100">
                Receive official documentation of your volunteer hours and achievements.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Impactful</h3>
              <p className="text-blue-100">
                Stand out with volunteer work that demonstrates real community impact.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section background="gray" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Volunteer Requirements
            </h2>
            <p className="text-xl text-gray-600">
              We're looking for enthusiastic young people who want to make a difference.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Support</h3>
              <p className="text-gray-700 mb-4">
                Don't worry if you've never taught before! We provide comprehensive training including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Communication techniques for different learning styles</li>
                <li>Understanding common technology challenges seniors face</li>
                <li>Patience-building exercises and empathy training</li>
                <li>Technical troubleshooting basics</li>
                <li>Ongoing support from our program coordinators</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Success Stories Placeholder */}
      <Section background="white" padding="medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Volunteer Spotlights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Meet some of our amazing youth volunteers and learn about their experiences.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-12 shadow-md">
            <p className="text-lg text-gray-500 italic mb-6">
              "Stories from our youth volunteers will be featured here soon."
            </p>
            <p className="text-gray-600">
              Join our volunteer program and become part of the success stories we'll share here!
            </p>
          </div>
        </div>
      </Section>

      {/* How to Get Started */}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your volunteer application and tell us about your interests.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Train</h3>
              <p className="text-gray-600">Complete our training program to prepare for mentoring seniors.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matched</h3>
              <p className="text-gray-600">We'll pair you with a senior participant based on schedules and preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Mentoring</h3>
              <p className="text-gray-600">Begin your rewarding journey as a technology mentor!</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of youth volunteers and help build bridges between generations. 
            Your patience, enthusiasm, and tech skills can truly change someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="large">
              Sign Up to Volunteer
            </CTAButton>
            <CTAButton href="/programs" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-600">
              Learn More About Our Program
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
