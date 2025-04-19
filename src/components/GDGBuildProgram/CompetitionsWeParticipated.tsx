import Image from 'next/image';

const competitions = [
  {
    title: 'Benha Hackathon',
    description: 'Benha Hackathon is a hackathon that challenges participants to use Benha Universitys open data and APIs to create innovative solutions for real-world problems.',
    icon: '📄',
    image: '/images/gdg-build/competitions/benha-hackathon.jpg'
  },
  {
    title: 'NASA Space Apps Challenge',
    description: 'NASA Space Apps Challenge is a global hackathon that challenges participants to use NASAs open data and APIs to create innovative solutions for real-world problems.',
    icon: '📊',
    image: '/images/gdg-build/competitions/nasa-space-apps.png'
  },
  {
    title: 'AI Finance Hackathon',
    description: 'AI Finance Hackathon is a hackathon that challenges participants to use AI tools for finance.',
    icon: '🤝',
    image: '/images/gdg-build/competitions/gdg.jpg'
  },
  {
    title: 'ECPC',
    description: 'ECPC is a hackathon that challenges participants to use AI tools for finance.',
    icon: '🤝',
    image: '/images/gdg-build/competitions/ecpc.jpg'
  }
];

export default function CompetitionsWeParticipated() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Competitions We Participated In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {competitions.map((competition, index) => (
            <div key={index} className="group flex flex-col items-center justify-between">
              <div className="flex items-center justify-center mb-3 w-48 mx-auto">
                <Image
                  src={competition.image}
                  alt={competition.title}
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300"
                  quality={100}
                />
              </div>
              <h3 className="text-xl font-medium text-center text-google-gray">{competition.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 