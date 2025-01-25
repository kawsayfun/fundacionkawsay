'use client';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { motion } from 'framer-motion';

export default function Methodology() {
  return (
    <Layout>
      <PageHeader 
        title="Metodología" 
        description="Nuestro enfoque de trabajo"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenedor principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card de Modalidad Presencial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/30 p-6 rounded-lg shadow-md border border-gray-200 backdrop-blur-sm"
            >
              {/* Imagen con efecto hover */}
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src="/images/educacion.jpg"  /* Cambia esta ruta a tu imagen de modalidad presencial */
                  alt="Modalidad Presencial"
                  className="w-full h-auto cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                Modalidad Presencial
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Los seminarios talleres se desarrollan de manera presencial los días sábados en la ciudad de Cayambe para los Kayambis, 
                y para los Karankis será en la ciudad de Ibarra. La asistencia es obligatoria a clases presenciales; 
                se llevará un registro de asistencia y será contabilizado el tiempo para otorgar el certificado 
                como constancia de haber finalizado el curso. Además, como parte de la recuperación de la identidad cultural, 
                se comparten alimentos (<em>pampa mesa</em>).
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Los temas tratados en el curso serán enriquecidos permanentemente con 
                materiales de apoyo que los expositores faciliten para todos los participantes de la Escuela de Formación.
              </p>
            </motion.div>

            {/* Card de Modalidad Virtual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/30 p-6 rounded-lg shadow-md border border-gray-200 backdrop-blur-sm"
            >
             
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src="/images/estudioonline.jpg"  /* Cambia esta ruta a tu imagen de modalidad virtual */
                  alt="Modalidad Virtual"
                  className="w-full h-auto cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                Modalidad Virtual
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Los seminarios talleres de capacitación se realizarán de manera virtual, 
                mediante la plataforma institucional. Los participantes de esta modalidad deben cumplir 
                al menos con el 80% de horas académicas, mismas que serán evaluadas en cada eje desarrollado. 
                Una vez finalizado el curso, el participante que haya cumplido con los requisitos solicitados 
                recibirá una certificación de participación y aprobación del curso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
