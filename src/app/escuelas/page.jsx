import SchoolsHero from '@/components/schools/SchoolsHero';
import SchoolsList from '@/components/schools/SchoolsList';
import Layout from '@/components/layout/Layout';

export default function Schools() {
  return (
    <Layout>
      <SchoolsHero />
      <SchoolsList />
    </Layout>
  );
}