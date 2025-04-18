import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">
          🚀 Ready to Build?
        </h2>
        <p className="text-xl mb-8">
          Apply now and start your journey to becoming a successful builder and innovator.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/recruitment"
            className="bg-[#007bff] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Fill out the recruitment form
          </Link>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Follow us on our socials or reach out via our website:
          </p>
          <Link
            href="/"
            className="text-[#007bff] hover:text-blue-600 font-semibold"
            rel="noopener noreferrer"
          >
            GDG on Campus ECU Website →
          </Link>
        </div>
      </div>
    </section>
  );
} 