'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CompetitionsWeParticipated from '@/components/CompetitionsWeParticipated';
import WhyJoin from '@/components/WhyJoin';
import SocialLinks from '@/components/SocialLinks';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#4285F4]/10 via-white to-[#34A853]/10 flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          {/* Animated logo */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-[#4285F4]/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-[#4285F4] rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 border-4 border-[#34A853]/30 rounded-full animate-ping"></div>
            <Image
              src="/images/logo.png"
              alt="GDG Logo"
              fill
              className="object-contain p-3"
            />
          </div>
          
          {/* Loading text */}
          <h2 className="text-3xl font-bold text-google-gray mb-4">
            <span className="text-[#4285F4]">GDG</span> on Campus <span className="text-[#D2232A]">ECU</span>
          </h2>
          <p className="text-google-gray-light text-lg mb-6">Building the future together...</p>
          
          {/* Progress dots */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 bg-[#EA4335] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 bg-[#FBBC04] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 bg-[#34A853] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            <div className="w-3 h-3 bg-[#4285F4] rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="font-poppins pt-16">
        <Hero />
        <CompetitionsWeParticipated />
        <WhyJoin />
        <SocialLinks />
      </main>
    </>
  );
}