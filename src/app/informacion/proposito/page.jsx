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
            {/* Card con el texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-100 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fortaleciendo Comunidades</h2>
              <p className="text-gray-600 leading-relaxed">
                Fortalecer las organizaciones comunitarias, pueblos, nacionalidades dotando de conocimientos; mediante seminarios talleres de capacitación de manera conjunta entre comunidades, pueblos y nacionalidades sobre el contexto político nacional e internacional; mediante foros, encuentros de dirigentes, líderes y expositores que contribuyen al fortalecimiento de procesos organizativos comunitarios, políticos, sociales, económicos, potenciando el sistema comunitario territorial, gestión comunitario de agua, páramo, producción e identidad cultural, ejerciendo justicia indígena y los derechos de pueblos, nacionalidades indígenas garantizados en la Constitución Política, tratados, pactos y convenios internacionales.
              </p>
            </motion.div>

            {/* Imagen animada */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <img 
                src="/images/proposito.jpg" // Cambia esta ruta a tu imagen real
                alt="Propósito de la organización"
                className="w-full rounded-lg shadow-lg"
              />
              {/* Efecto de movimiento adicional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-lg animate-pulse"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
