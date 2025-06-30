import Image from 'next/image';

const competitions = [
  {
    title: 'Benha Hackathon',
    description: 'Benha Hackathon is a hackathon that challenges participants to use Benha Universitys open data and APIs to create innovative solutions for real-world problems.',
    icon: '🏆',
    image: '/images/gdg-build/competitions/benha-hackathon.jpg'
  },
  {
    title: 'NASA Space Apps Challenge',
    description: 'NASA Space Apps Challenge is a global hackathon that challenges participants to use NASAs open data and APIs to create innovative solutions for real-world problems.',
    icon: '🚀',
    image: '/images/gdg-build/competitions/nasa-space-apps.png'
  },
  {
    title: 'AI Finance Hackathon',
    description: 'AI Finance Hackathon is a hackathon that challenges participants to use AI tools for finance.',
    icon: '🤖',
    image: '/images/gdg-build/competitions/gdg.jpg'
  }
];

export default function CompetitionsWeParticipated() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="competitions-participated">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-semibold text-google-gray mb-4">
            🏆 Competitions We Participated In
          </h2>
          <p className="text-lg text-google-gray-light max-w-2xl mx-auto">
            Our journey of building, competing, and winning with amazing teammates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {competitions.map((competition, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={competition.image}
                  alt={competition.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 text-2xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {competition.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-google-gray mb-3 group-hover:text-[#4285F4] transition-colors duration-300">
                  {competition.title}
                </h3>
                <p className="text-google-gray-light text-sm leading-relaxed">
                  {competition.description}
                </p>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4285F4] rounded-2xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}