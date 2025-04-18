import Link from 'next/link';
import Image from 'next/image';

export default function GDGBuildProgram() {
  return (
    <section className="relative bg-gray-50" id="gdg-build-program">
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section - Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl order-1 lg:order-1">
            <Image
              src="/images/gdg-build-program.png"
              alt="GDG Build Program"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </div>

          {/* Right section - Text content */}
          <div className="space-y-8 order-2 lg:order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* <p className="text-lg font-medium text-google-gray">WHAT&apos;S NEW IN GDG on Campus ECU</p> */}
                <span className="px-2 py-0.5 bg-[#D2232A]/90 text-white text-xs font-medium rounded-md">
                  New
                </span>
              </div>
              <h2 className="text-4xl font-medium text-google-gray">
                Introducing <span className="text-[#ff9501]">GDG Build</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-google-gray-light leading-relaxed">
                This program is for ECU students who want to work on real projects with smart teammates — to win competitions or start a real startup.
              </p>
              <p className="text-lg text-google-gray-light leading-relaxed">
                We&apos;ve been part of things like NASA Space Apps Cairo, ECPC, and Benha Hackathon — and we&apos;re building a squad that wants more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/recruitment"
                  className="inline-block bg-[#4285F4] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Join Now
                </Link>
                <a href="/gdg-build-program" className="px-6 py-3 border border-gray-300 text-google-gray font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}