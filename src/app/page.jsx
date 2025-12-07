import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ImpactSection from '@/components/home/ImpactSection';
import HomeServicesSection from "@/components/home/HomeServicesSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
        <HomeServicesSection />
      <MissionSection />
      <ImpactSection />
    </Layout>
  );
}