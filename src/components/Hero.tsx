'use client';

import Image from 'next/image';
import Heading from '@/components/ui/heading';

export default function Hero() {

  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section - Text content */}
          <div className="space-y-12">
            {/* Main heading */}
            <div className="space-y-4">
              <Heading 
                title="GDG on Campus at"
                highlightedText="Egyptian Chinese University"
                highlightColor="#D2232A"
                className="text-google-gray"
              />
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-google-gray-light leading-relaxed mb-8">
                A student-led community where aspiring developers come together to learn, share, and grow.
                Join us in exploring the latest technologies and building innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/recruitment" 
                  className="px-6 py-3 bg-[#4285F4] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Join Us
                </a>
                <a 
                  href="/gdg-build-program" 
                  className="px-6 py-3 border border-gray-300 text-google-gray font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  GDG Build Program
                </a>
              </div>
            </div>
          </div>

          {/* Right section - Hero image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.png"
              alt="GDG on Campus ECU community"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}