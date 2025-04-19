import React from "react";
import Hero from '@/components/GDGBuildProgram/Hero';
import DeepDive from '@/components/GDGBuildProgram/DeepDive';
// import WinningStrategies from '@/components/GDGBuildProgram/WinningStrategies';
// import Competitions from '@/components/GDGBuildProgram/Competitions';
import CallToAction from '@/components/GDGBuildProgram/CallToAction';
import Navbar from '@/components/Navbar';
import CompetitionsWeParticipated from '@/components/GDGBuildProgram/CompetitionsWeParticipated';
// import Features from "@/components/GDGBuildProgram/Features";
import Gallery from "@/components/GDGBuildProgram/Gallery";

export default function GDGBuildProgram() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompetitionsWeParticipated />
      {/* <Gallery /> */}
      {/* <Features />  */}
      <DeepDive />
      {/* <WinningStrategies /> */}
      {/* <Competitions /> */}
      <CallToAction />
    </main>
  );
} 