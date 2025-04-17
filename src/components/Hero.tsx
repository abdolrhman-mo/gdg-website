'use client';

import Image from 'next/image';

export default function Hero() {
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
    }
  };

  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section - Text content */}
          <div className="space-y-12">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-medium text-google-gray">
                GDG on Campus at <span className="text-[#D2232A]">Egyptian Chinese University</span>
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg text-google-gray-light leading-relaxed mb-8">
                A student-led community where aspiring developers come together to learn, share, and grow.
                Join us in exploring the latest technologies and building innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#social-links" 
                  onClick={(e) => scrollToSection(e, 'social-links')}
                  className="px-6 py-3 bg-[#4285F4] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  Follow Us
                </a>
                <a 
                  href="#gdg-build-program" 
                  onClick={(e) => scrollToSection(e, 'gdg-build-program')}
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