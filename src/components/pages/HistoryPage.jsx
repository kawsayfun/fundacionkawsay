'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/common/PageHeader';

export default function HistoryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader 
        title="Nuestra Historia" 
        description="Conoce el camino que nos ha traído hasta aquí"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg"
          >
            <p className="text-gray-700 leading-relaxed">
              La Fundación Kawsay ha estado comprometida con el desarrollo y la educación 
              de las comunidades indígenas desde su fundación. Nuestra historia es un 
              testimonio de dedicación y servicio a la comunidad.
            </p>
            {/* Add more history content here */}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}