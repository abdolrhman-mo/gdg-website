'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and text */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="GDG Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-medium text-google-gray">
                GDG on Campus <span className="text-[#D2232A]">ECU</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/gdg-build-program" 
              className="text-google-gray-light hover:text-google-gray transition-colors cursor-pointer text-[#ff9501]"
            >
              Build Program
            </a>
            <a 
              href="#social-links" 
              onClick={(e) => scrollToSection(e, 'social-links')}
              className="text-google-gray-light hover:text-google-gray transition-colors cursor-pointer"
            >
              Follow Us
            </a>
            <Link
              href="/recruitment"
              className="px-4 py-2 bg-[#4285F4] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6 text-google-gray transition-transform duration-300"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 border-t border-gray-100 transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            <div className="flex flex-col gap-4">
              <a 
                href="#gdg-build-program" 
                onClick={(e) => scrollToSection(e, 'gdg-build-program')}
                className="text-google-gray-light hover:text-google-gray transition-colors px-4 py-2 cursor-pointer text-[#ff9501]"
              >
                Build Program
              </a>
              <a 
                href="#social-links" 
                onClick={(e) => scrollToSection(e, 'social-links')}
                className="text-google-gray-light hover:text-google-gray transition-colors px-4 py-2 cursor-pointer"
              >
                Follow Us
              </a>
              <Link
                href="/recruitment"
                className="text-google-gray-light hover:text-google-gray transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 