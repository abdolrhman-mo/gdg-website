import Link from 'next/link';
import Image from 'next/image';
import JoinForm from '@/components/JoinForm';

export default function RecruitmentFormPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="GDG Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-medium text-google-gray">
                GDG on Campus <span className="text-[#D2232A]">ECU</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Program Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p>
                <span className="px-2 py-0.5 bg-[#D2232A]/90 text-white text-xs font-medium rounded-md">
                  Applications Open
                </span>
              </p>
              <h1 className="text-4xl font-medium text-google-gray">
                Join the <Link href="/gdg-build-program" className="hover:underline text-[#ff9501]"><span className="text-[#ff9501]">GDG Build</span></Link> Program
              </h1>
              <p className="text-lg text-google-gray-light">
                Build real projects. Win competitions. Launch startups.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-medium text-google-gray mb-4">
                About the Program
              </h2>
              <p className="text-google-gray-light text-lg leading-relaxed">
                Join ECU students working on <strong>real projects</strong> with <strong>smart teammates</strong> — to <strong>win competitions</strong> or <strong>start a real startup</strong>.
                <br />
                We&apos;ve been part of things like <strong>NASA Space Apps Cairo</strong>, <strong>ECPC</strong>, and <strong>Benha Hackathon</strong> — and we&apos;re building a squad that wants more.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-medium text-google-gray mb-4">
                Qualifications
              </h2>
              <div className="space-y-4">
                <p className="text-google-gray-light text-lg leading-relaxed">
                  You need to have worked with a specific technology or have worked on some kind of website, or application before. Whether alone or on a team.
                </p>
              </div>
            </div>

            {/* Learn More Section - More Subtle */}
            <div className="block md:flex items-center justify-center space-x-2 text-google-gray-light">
              <p>Want to learn more about the program?</p>
              <Link 
                href="/gdg-build-program"
                className="text-[#ff9501] hover:text-[#ff9501]/80 font-medium inline-flex items-center"
              >
                Click here
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-medium text-google-gray mb-6">
                Application Form
              </h2>
              <JoinForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}