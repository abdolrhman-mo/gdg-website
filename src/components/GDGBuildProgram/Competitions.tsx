import Link from 'next/link';
import Image from 'next/image';

const competitions = [
  {
    name: 'Build with AI Hackathon',
    date: 'May 3 – July 19, 2025',
    link: 'https://gdg.community.dev/events/details/google-gdg-alexandria-presents-build-with-ai-series-workshops-amp-hackathon-2025-05-03/',
    description: 'Join us for an exciting hackathon focused on building innovative solutions with AI.',
    logo: '/images/gdg-build/competitions/gdg.jpg'
  },
  {
    name: 'NASA Space Apps Cairo',
    date: 'This summer',
    link: 'https://www.spaceappscairo.com/',
    description: 'Participate in the global NASA Space Apps Challenge and solve real-world problems.',
    logo: '/images/gdg-build/competitions/nasa-space-apps.png'
  },
  {
    name: 'Benha Hackathon',
    date: 'Next year',
    link: 'https://hackathon.bu.edu.eg/',
    description: 'A local hackathon focused on solving community challenges with technology.',
    logo: '/images/gdg-build/competitions/benha-hackathon.jpg'
  }
];

export default function Competitions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          🏆 Competitions We&apos;ll Be Participating In
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col">
                <div className="relative h-[200px]">
                  <Image
                    src={competition.logo}
                    alt={`${competition.name} logo`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{competition.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{competition.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-gray-500">{competition.date}</span>
                    <Link
                      href={competition.link}
                      className="inline-flex items-center text-[#4285F4] hover:text-blue-600 font-semibold group text-sm"
                      target="_blank"
                    >
                      Learn More
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 