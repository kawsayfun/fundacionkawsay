import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import TeamSection from '@/components/about/TeamSection';
import Layout from '@/components/layout/Layout';

export default function Institution() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <TeamSection />
    </Layout>
  );
}