import { useState } from 'react';
import CTAButton from './CTAButton';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual Formspree endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', role: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-large"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-large"
            placeholder="Enter your email address"
          />
        </div>

        {/* Role Field */}
        <div>
          <label htmlFor="role" className="block text-lg font-semibold text-gray-900 mb-2">
            I am a... *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-large bg-white"
          >
            <option value="">Please select your role</option>
            <option value="senior">Senior looking to learn technology</option>
            <option value="youth">Youth volunteer interested in helping</option>
            <option value="facility">Facility administrator or staff</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-large resize-vertical"
            placeholder="Tell us more about your interest in Loopd Community..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <CTAButton
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </CTAButton>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-large">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-large">
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
