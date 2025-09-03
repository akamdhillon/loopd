import Head from 'next/head';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Card from '@/components/Card';

export default function Contact() {
  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us a message and we\'ll get back to you within 24 hours.',
      details: 'hello@loopd.community',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Call Us',
      description: 'Speak with our team directly during business hours.',
      details: '(555) 123-4567',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Office Hours',
      description: 'We\'re available to help during these times.',
      details: 'Mon-Fri: 9:00 AM - 5:00 PM PST',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const faqItems = [
    {
      question: 'How much does the program cost?',
      answer: 'Our programs are designed to be accessible and affordable. Costs vary based on the type of program and participant needs. Contact us for specific pricing information.',
    },
    {
      question: 'What technology do I need to participate?',
      answer: 'We work with whatever technology you have or help you identify appropriate devices. Common options include smartphones, tablets, or basic computers.',
    },
    {
      question: 'How long are the programs?',
      answer: 'Our flagship program "Digital Life Made Easy" runs for 10 weeks with weekly sessions. We also offer shorter workshops and ongoing support.',
    },
    {
      question: 'Do I need any prior technology experience?',
      answer: 'No prior experience is required! Our programs are designed for complete beginners and we meet you where you are.',
    },
    {
      question: 'Are sessions in-person or virtual?',
      answer: 'We offer both in-person and virtual options depending on your preference and location. Many participants enjoy a combination of both.',
    },
    {
      question: 'How are youth volunteers trained?',
      answer: 'All youth volunteers complete comprehensive training on communication, patience, and working with seniors before being matched with participants.',
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Loopd Community</title>
        <meta name="description" content="Get in touch with Loopd Community to learn more about our technology mentorship programs or to register your interest." />
      </Head>

      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="We're here to help you get started"
        description="Whether you're a senior looking to learn, a youth wanting to volunteer, or a facility interested in partnering with us, we'd love to hear from you."
        centered={true}
      />

      {/* Contact Methods */}
      <Section background="white" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              We're here to answer your questions and help you get started with Loopd Community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                title={method.title}
                description={method.description}
                icon={method.icon}
                className="text-center h-full"
              >
                <p className="text-lg font-semibold text-primary-600 mt-4">
                  {method.details}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Here are answers to some common questions about our programs.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Don't see your question answered here?
            </p>
            <p className="text-gray-600">
              Feel free to reach out directly and we'll be happy to help!
            </p>
          </div>
        </div>
      </Section>

      {/* Location & Social Media Placeholder */}
      <Section background="gray" padding="medium">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connect with Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Our Location"
              description="We serve communities throughout the greater metropolitan area. Contact us to learn about programs in your specific location."
              className="h-full"
            >
              <p className="text-gray-600 mt-4">
                <strong>Service Area:</strong> Greater Metro Area<br/>
                <strong>Main Office:</strong> Contact us for address
              </p>
            </Card>
            
            <Card
              title="Follow Our Journey"
              description="Stay updated with our latest programs, success stories, and community events."
              className="h-full"
            >
              <div className="mt-4">
                <p className="text-gray-600 mb-4">Social media links coming soon!</p>
                <div className="space-y-2 text-gray-500">
                  <p>📘 Facebook - @LoopCommunity</p>
                  <p>📷 Instagram - @LoopCommunity</p>
                  <p>💼 LinkedIn - Loopd Community</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="primary" padding="medium">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait to start your journey with technology or begin making a difference 
            in your community. Reach out today and let's get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@loopd.community"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Email Us Now
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 text-lg"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
