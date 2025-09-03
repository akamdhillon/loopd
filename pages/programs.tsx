import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ProgramAccordion from '@/components/ProgramAccordion';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function Programs() {
  const digitalLifeCurriculum = [
    {
      id: 'week-1',
      week: 1,
      title: 'Getting Started with Technology',
      content: 'Introduction to basic technology concepts, understanding different devices (smartphones, tablets, computers), and building confidence with turning devices on/off and basic navigation.',
    },
    {
      id: 'week-2',
      week: 2,
      title: 'Device Navigation & Touch Basics',
      content: 'Learning how to use touchscreens, understanding gestures (tap, swipe, pinch), basic menu navigation, and adjusting display settings for better visibility.',
    },
    {
      id: 'week-3',
      week: 3,
      title: 'Internet Basics & Web Browsing',
      content: 'Understanding what the internet is, how to open a web browser, basic search techniques, and navigating websites safely and effectively.',
    },
    {
      id: 'week-4',
      week: 4,
      title: 'Email & Digital Communication',
      content: 'Setting up and using email, composing and sending messages, understanding attachments, and basic email organization and safety practices.',
    },
    {
      id: 'week-5',
      week: 5,
      title: 'Video Calling & Staying Connected',
      content: 'Introduction to video calling platforms (Zoom, FaceTime, WhatsApp), making and receiving calls, and using these tools to connect with family and friends.',
    },
    {
      id: 'week-6',
      week: 6,
      title: 'Telehealth & Medical Technology',
      content: 'Using technology for healthcare needs, scheduling online appointments, understanding patient portals, and accessing telehealth services safely.',
    },
    {
      id: 'week-7',
      week: 7,
      title: 'Smart Home Basics',
      content: 'Introduction to smart home devices, voice assistants, smart thermostats, and other home automation tools that can improve daily life.',
    },
    {
      id: 'week-8',
      week: 8,
      title: 'Online Banking & Financial Safety',
      content: 'Safely accessing online banking, understanding digital payments, recognizing secure websites, and protecting personal financial information.',
    },
    {
      id: 'week-9',
      week: 9,
      title: 'Scam Awareness & Digital Safety',
      content: 'Identifying common online scams, understanding phishing attempts, creating strong passwords, and general digital safety best practices.',
    },
    {
      id: 'week-10',
      week: 10,
      title: 'Putting It All Together',
      content: 'Review of all learned skills, troubleshooting common issues, resources for continued learning, and celebrating achievements.',
    },
  ];

  const futureProgramIdeas = [
    {
      title: 'Social Media for Seniors',
      description: 'Learn to safely use social media platforms to connect with family and friends.',
    },
    {
      title: 'Digital Photography & Sharing',
      description: 'Capture, organize, and share precious memories using digital photography tools.',
    },
    {
      title: 'Online Shopping & E-commerce',
      description: 'Navigate online shopping safely and confidently, from groceries to gifts.',
    },
    {
      title: 'Digital Entertainment',
      description: 'Discover streaming services, digital books, podcasts, and online entertainment options.',
    },
  ];

  return (
    <>
      <Head>
        <title>Programs - Loopd Community</title>
        <meta name="description" content="Explore Loopd Community's structured digital literacy programs designed to empower seniors through technology mentorship." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Our Programs"
        subtitle="Structured learning for lasting results"
        description="Discover our carefully designed curriculum that builds digital confidence step by step, supported by patient youth mentors."
        primaryCTA={{
          text: "Join a Program",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "For Seniors",
          href: "/seniors"
        }}
      />

      {/* Program Overview */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mentorship Model
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Every program pairs seniors with trained youth volunteers for personalized, 
            patient learning experiences. Our approach recognizes that everyone learns 
            differently and at their own pace.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="1-on-1 Support"
              description="Each senior is paired with a dedicated youth mentor for personalized attention and customized learning."
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              className="text-center"
            />
            <Card
              title="Flexible Scheduling"
              description="Sessions are scheduled around both participants' availability, with options for in-person or virtual meetings."
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              className="text-center"
            />
            <Card
              title="Progress Tracking"
              description="We monitor progress and adjust the curriculum based on individual needs and learning styles."
              icon={
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              className="text-center"
            />
          </div>
        </div>
      </Section>

      {/* Digital Life Made Easy Program */}
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Digital Life Made Easy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship 10-week program covers essential digital skills that matter most 
              in daily life. Each week builds on the previous, ensuring solid foundations 
              for lasting confidence.
            </p>
          </div>
          
          <ProgramAccordion
            title="10-Week Curriculum Overview"
            items={digitalLifeCurriculum}
          />
          
          <div className="text-center mt-12">
            <CTAButton href="/contact" variant="primary" size="large">
              Enroll in Digital Life Made Easy
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Program Benefits */}
      <Section background="white" padding="medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Program Benefits
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Increased Confidence</h3>
              <p className="text-gray-600">Build self-assurance with technology through patient, supportive guidance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Better Connections</h3>
              <p className="text-gray-600">Stay closer to family and friends through digital communication tools.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enhanced Safety</h3>
              <p className="text-gray-600">Learn to identify scams and navigate the digital world safely.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Independence</h3>
              <p className="text-gray-600">Gain the skills needed to handle technology independently and confidently.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Future Programs */}
      <Section background="gray" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600">
              We're always expanding our program offerings based on community feedback and needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureProgramIdeas.map((program, index) => (
              <Card
                key={index}
                title={program.title}
                description={program.description}
                className="h-full"
              >
                <div className="mt-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Have an idea for a program? We'd love to hear from you!
            </p>
            <CTAButton href="/contact" variant="outline" size="large">
              Suggest a Program
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our Digital Life Made Easy program and start building confidence 
            with technology today. Our patient mentors are here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="large">
              Enroll Now
            </CTAButton>
            <CTAButton href="/seniors" variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-primary-600">
              Learn More
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
