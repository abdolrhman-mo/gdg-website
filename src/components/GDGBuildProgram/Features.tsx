import Image from 'next/image';

const features = [
  {
    title: 'Hackathon Prep',
    description: 'Comprehensive preparation for hackathons with expert guidance and resources.',
    icon: '📄',
    image: '/svgs/laptop.svg'
  },
  {
    title: 'Pitch & Startup Support',
    description: 'Learn how to pitch your ideas effectively and get support for your startup journey.',
    icon: '📊',
    image: '/svgs/growth.svg'
  },
  {
    title: 'Smart Team Matching',
    description: 'Get matched with talented teammates and learn to use AI tools for development.',
    icon: '🤝',
    image: '/svgs/shake-hands.svg'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">
          GDG Build Program Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              {/* <h3 className="text-xl font-semibold mb-2 text-center">{feature.icon} {feature.title}</h3> */}
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 