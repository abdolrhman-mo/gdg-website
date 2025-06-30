import Hero from '@/components/Hero';
import CompetitionsWeParticipated from '@/components/CompetitionsWeParticipated';
import WhyJoin from '@/components/WhyJoin';
import SocialLinks from '@/components/SocialLinks';
import Navbar from '@/components/Navbar';

export default function Home() {
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