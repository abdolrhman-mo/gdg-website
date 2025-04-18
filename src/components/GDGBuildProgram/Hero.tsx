import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/ui/heading';

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Heading 
              title="Welcome to the"
              highlightedText="GDG Build Program"
              highlightColor="#ff9501"
            />
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              <strong>GDG Build</strong> is a new initiative by <em>GDG on Campus <span className="text-[#D2232A]">ECU</span></em> for students who want to build real-world projects, win hackathons, or launch startups — all with smart teammates and strong support.
            </p>
            <Link
              href="/recruitment"
              className="inline-block bg-[#4285F4] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base sm:text-lg"
            >
              Join the Program →
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/images/gdg-build/hero.jpg"
              alt="GDG Build Program Hero"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 