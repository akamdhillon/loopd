import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Programs', href: '/programs' },
      { name: 'Contact', href: '/contact' },
    ],
    'For Participants': [
      { name: 'For Seniors', href: '/seniors' },
      { name: 'For Youth', href: '/youth' },
      { name: 'For Facilities', href: '/facilities' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold">Loopd</span>
            </Link>
            <p className="text-gray-300 text-large max-w-md mb-6">
              Bridging generations through technology. Connecting seniors with youth volunteers 
              to build confidence, skills, and community connections.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span> hello@loopd.community
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-large"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-large">
            © {currentYear} Loopd Community. All rights reserved.
          </p>
          
          {/* Social Media Placeholder */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="text-gray-400 text-large">
              Follow us: 
              <span className="ml-2 text-gray-500">Social links coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
