import Hero from '@/components/Hero';
import GDGBuildProgram from '@/components/GDGBuildProgram';
import SocialLinks from '@/components/SocialLinks';
// import TechnicalCourses from '@/components/TechnicalCourses';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-poppins pt-16">
        <Hero />
        <GDGBuildProgram />
        {/* <TechnicalCourses /> */}
        <SocialLinks />
      </main>
    </>
  );
}
