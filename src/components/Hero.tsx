'use client';

import Image from 'next/image';
import Heading from '@/components/ui/heading';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section - Text content */}
          <div className="space-y-12 animate-fade-in-up">
            {/* Main heading */}
            <div className="space-y-4">
              <Heading 
                title="GDG on Campus at"
                highlightedText="Egyptian Chinese University"
                highlightColor="#D2232A"
                className="text-google-gray animate-slide-in-left"
              />
            </div>

            {/* Description */}
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-lg text-google-gray-light leading-relaxed mb-8">
                A student-led community where we help each other win competitions and start real startups by connecting you with ambitious, smart teammates like you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/recruitment" 
                  className="group px-6 py-3 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    Join Us
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="#competitions-participated" 
                  className="px-6 py-3 border-2 border-gray-300 text-google-gray font-medium rounded-lg hover:bg-gray-50 hover:border-[#FBBC04] transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  Our Achievements
                </a>
              </div>
            </div>
          </div>

          {/* Right section - Hero image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl animate-fade-in-right">
            <Image
              src="/images/hero.png"
              alt="GDG on Campus ECU community"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-[#4285F4] rounded-full animate-bounce opacity-80" />
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#EA4335] rounded-full animate-pulse opacity-80" />
            <div className="absolute top-1/2 left-4 w-6 h-6 bg-[#FBBC04] rounded-full animate-ping opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}