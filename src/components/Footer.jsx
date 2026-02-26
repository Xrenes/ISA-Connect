import Link from 'next/link';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Services', href: '/services' },
      { name: 'Blog', href: '/blog' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Outbound Prospecting', href: '/services#prospecting' },
      { name: 'Appointment Setting', href: '/services#appointments' },
      { name: 'Lead Qualification', href: '/services#qualification' },
      { name: '24/7 Coverage', href: '/services#coverage' },
    ],
  };

  return (
    <footer className="bg-[#090818] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6542C6" />
                      <stop offset="50%" stopColor="#9D38A5" />
                      <stop offset="100%" stopColor="#E02A7F" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="20" r="14" fill="none" stroke="url(#footerLogoGradient)" strokeWidth="3" />
                  <rect x="6" y="16" width="6" height="12" rx="3" fill="url(#footerLogoGradient)" />
                  <rect x="36" y="16" width="6" height="12" rx="3" fill="url(#footerLogoGradient)" />
                  <circle cx="24" cy="12" r="3" fill="#6542C6" />
                  <circle cx="16" cy="20" r="3" fill="#9D38A5" />
                  <circle cx="32" cy="20" r="3" fill="#9D38A5" />
                  <circle cx="24" cy="28" r="3" fill="#E02A7F" />
                  <path d="M28 28 Q32 32 30 38 Q29 42 24 44" stroke="url(#footerLogoGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="24" cy="44" r="3" fill="#E02A7F" />
                </svg>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">ISA</span>
                <span className="text-white font-normal">CONNECT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Turn your real estate leads into booked appointments with our 24/7 ISA team built specifically for U.S. agents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#9D38A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@isaconnect.com" className="hover:text-white transition-colors">
                  hello@isaconnect.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#9D38A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13235777064" className="hover:text-white transition-colors">
                  +1 (323) 577-7064
                </a>
              </li>
              <li className="flex items-start space-x-2 pt-2">
                <svg className="w-5 h-5 text-[#9D38A5] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Lead Response Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ISA Connect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
