import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ImpactSection from '@/components/home/ImpactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
    </Layout>
  );
}