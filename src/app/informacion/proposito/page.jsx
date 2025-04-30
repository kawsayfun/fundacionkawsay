'use client';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { motion } from 'framer-motion';

export default function Purpose() {
  return (
    <Layout>
    <PageHeader 
      title="Propósito" 
      description="Nuestra razón de ser"
    />
  
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto animado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-100 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fortaleciendo Comunidades</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Fortalecer las organizaciones comunitarias, pueblos, nacionalidades dotando de conocimientos;
              mediante seminarios talleres de capacitación de manera conjunta entre comunidades, pueblos y
              nacionalidades sobre el contexto político nacional e internacional; mediante foros, encuentros
              de dirigentes, líderes y expositores que contribuyen al fortalecimiento de procesos organizativos
              comunitarios, políticos, sociales, económicos, potenciando el sistema comunitario territorial,
              gestión comunitario de agua, páramo, producción e identidad cultural, ejerciendo justicia indígena
              y los derechos de pueblos, nacionalidades indígenas garantizados en la Constitución Política,
              tratados, pactos y convenios internacionales.
            </p>
          </motion.div>
  
          {/* Mini carrusel con animación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex space-x-4 overflow-x-auto hide-scrollbar"
          >
            {['/images/areasaccion/proposito1.jpg', '/images/areasaccion/proposito2.png'].map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] md:min-w-0 md:w-1/2 flex-shrink-0 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Imagen propósito ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
  
  );
}
