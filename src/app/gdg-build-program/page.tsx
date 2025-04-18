import React from "react";
import Hero from '@/components/GDGBuildProgram/Hero';
// import Features from '@/components/GDGBuildProgram/Features';
import DeepDive from '@/components/GDGBuildProgram/DeepDive';
import WinningStrategies from '@/components/GDGBuildProgram/WinningStrategies';
import Competitions from '@/components/GDGBuildProgram/Competitions';
import CallToAction from '@/components/GDGBuildProgram/CallToAction';
import Navbar from '@/components/Navbar';
export default function GDGBuildProgram() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Features /> */}
      <DeepDive />
      <WinningStrategies />
      <Competitions />
      <CallToAction />
    </main>
  );
} 