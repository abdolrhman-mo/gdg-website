import Image from 'next/image';
import Link from 'next/link';

export default function TechnicalCourses() {
  const courses = [
    {
      title: 'Cyber Security Course',
      description: 'Grow your knowledge through online and in-person developer events.',
      image: '/images/cyber-security-course.jpg',
      link: '/courses/cyber-security'
    },
    {
      title: 'AI & ML Course',
      description: 'Keep up with Google technology. Sharpen skills and master new ones.',
      image: '/images/ai-ml-course.jpg',
      link: '/courses/ai-ml'
    }
  ];

  return (
    <section className="py-16 px-8" id="technical-courses">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-google-gray mb-12 text-center">
          GDG Technical Courses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#4285F4] mb-2">
                  {course.title}
                </h3>
                <p className="text-google-gray-light mb-4">
                  {course.description}
                </p>
                <Link
                  href={course.link}
                  className="inline-block bg-[#4285F4] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Enroll
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 