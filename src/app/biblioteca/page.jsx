import Layout from '@/components/layout/Layout';
import LibraryHero from '@/components/library/LibraryHero';
import BookGrid from '@/components/library/BookGrid';

export default function Library() {
  return (
    <Layout>
      <LibraryHero />
      <BookGrid />
    </Layout>
  );
}