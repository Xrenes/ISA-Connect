'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                {/* Headset outer ring */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6542C6" />
                    <stop offset="50%" stopColor="#9D38A5" />
                    <stop offset="100%" stopColor="#E02A7F" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="20" r="14" fill="none" stroke="url(#logoGradient)" strokeWidth="3" />
                {/* Ear pieces */}
                <rect x="6" y="16" width="6" height="12" rx="3" fill="url(#logoGradient)" />
                <rect x="36" y="16" width="6" height="12" rx="3" fill="url(#logoGradient)" />
                {/* Center gear/connection dots */}
                <circle cx="24" cy="12" r="3" fill="#6542C6" />
                <circle cx="16" cy="20" r="3" fill="#9D38A5" />
                <circle cx="32" cy="20" r="3" fill="#9D38A5" />
                <circle cx="24" cy="28" r="3" fill="#E02A7F" />
                {/* Microphone */}
                <path d="M28 28 Q32 32 30 38 Q29 42 24 44" stroke="url(#logoGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="24" cy="44" r="3" fill="#E02A7F" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-[#090818]">ISA</span>
              <span className="text-[#090818] font-normal">CONNECT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#4E4E58] hover:text-[#6542C6] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <CTAButton>Book a Call</CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#4E4E58] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#4E4E58] hover:text-[#6542C6] font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <CTAButton className="w-full text-center">Book a Call</CTAButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
