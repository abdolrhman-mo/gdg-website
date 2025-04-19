import Image from 'next/image';

const sections = [
  {
    title: 'Hackathon Prep',
    image: '/images/gdg-build/hackathon-prep.jpg',
    // image: '/images/gdg-build-program.png',
    items: [
      'Toolkit — Packed with everything about the coming competition, and info from former participants in these competitions.',
      'Bootcamp Workshop — Teach the toolkit, inviting past participants to share tips, and telling us their mistakes to avoid them.'
    ]
  },
  {
    title: 'Idea to Prototype Support',
    image: '/images/gdg-build/idea-to-demo.webp',
    items: [
      'Evaluate your idea.',
      'Learn how to launch quickly, gather feedback, and iterate effectively.',
      'Build your pitch deck (presentation):',
      '• Elevator pitch (1 min company description)',
      '• Problem & solution',
      '• Working prototype/demo',
      '• Business model',
      '• Market analysis or Why us?'
    ]
  },
  // {
  //   title: 'Smart Team Matching & AI Tools 🤝',
  //   image: '/images/gdg-build/team-matching.jpg',
  //   items: [
  //     'Get matched with talented, driven teammates.',
  //     'Learn and use Git & GitHub for collaboration.',
  //     'Use AI tools like Cursor AI to speed up development and build smarter.'
  //   ]
  // }
];

export default function DeepDive() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Why Join <span className="text-[#ff9501]">GDG Build Program?</span>
        </h2>
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-16`}>
            <div className="w-full md:w-1/2">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 list-none">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    {item.startsWith('•') ? (
                      <>
                        <span className="mr-2 text-[#ff9501]">•</span>
                        <span>{item.slice(1)}</span>
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 