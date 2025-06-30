'use client';

import Link from 'next/link';
import Image from 'next/image';
import JoinForm from '@/components/JoinForm';
import { useState, useEffect } from 'react';

export default function RecruitmentFormPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#4285F4]/10 via-white to-[#34A853]/10 flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-[#4285F4]/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#4285F4] rounded-full border-t-transparent animate-spin"></div>
            <Image
              src="/images/logo.png"
              alt="GDG Logo"
              fill
              className="object-contain p-2"
            />
          </div>
          <h2 className="text-2xl font-semibold text-google-gray mb-2">Loading Application</h2>
          <p className="text-google-gray-light">Preparing your journey to join GDG Build...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4285F4]/5 via-white to-[#34A853]/5 font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logo.png"
                  alt="GDG Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-medium text-google-gray group-hover:text-[#4285F4] transition-colors duration-300">
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
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-[#EA4335] to-[#D2232A] text-white text-sm font-medium rounded-full animate-pulse">
                  🚀 Applications Open
                </span>
              </div>
              <h1 className="text-4xl font-bold text-google-gray">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#34A853]">GDG Build</span> Program
              </h1>
              <p className="text-lg text-google-gray-light">
                Build real projects. Win competitions. Launch startups.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#4285F4] to-[#34A853] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-google-gray">
                  About the Program
                </h2>
              </div>
              <p className="text-google-gray-light text-lg leading-relaxed">
                Join ECU students working on <strong className="text-[#4285F4]">real projects</strong> with <strong className="text-[#34A853]">smart teammates</strong> — to <strong className="text-[#EA4335]">win competitions</strong> or <strong className="text-[#FBBC04]">start a real startup</strong>.
                <br />
                We&apos;ve been part of things like <strong>NASA Space Apps Cairo</strong>, and <strong>Benha Hackathon</strong> — and we&apos;re building a squad that wants more.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#FBBC04] to-[#EA4335] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-google-gray">
                  Qualifications
                </h2>
              </div>
              <p className="text-google-gray-light text-lg leading-relaxed">
                You need to have worked with a specific technology or have worked on some kind of website, or application before. Whether alone or on a team.
              </p>
            </div>

            {/* Learn More Section */}
            <div className="flex items-center justify-center space-x-2 text-google-gray-light bg-white/50 rounded-xl p-4 backdrop-blur-sm">
              <p>Want to learn more about our achievements?</p>
              <Link 
                href="/"
                className="text-[#4285F4] hover:text-[#34A853] font-semibold inline-flex items-center group transition-colors duration-300"
              >
                Visit our homepage
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:sticky lg:top-24 animate-fade-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC04] rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-google-gray">
                  Application Form
                </h2>
              </div>
              <JoinForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}