'use client';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import Image from 'next/image';

export default function ActionArea() {
  const actionAreas = [
    {
      title: "Formación y capacitación",
      description: "Identidad cultural, sistemas de organización comunitaria, derechos de pueblos indígenas y producción agroecológica.",
      image: "/images/educacion.jpg",
      activities: [
        "Talleres de identidad cultural",
        "Capacitación en sistemas organizativos",
        "Formación en derechos indígenas",
        "Prácticas agroecológicas"
      ]
    },
    {
      title: "Investigación y publicación",
      description: "Desarrollo de investigaciones y publicaciones sobre cultura, educación y desarrollo comunitario.",
      image: "/images/escuela.jpg",
      activities: [
        "Estudios culturales",
        "Documentación de saberes ancestrales",
        "Publicaciones educativas",
        "Materiales didácticos"
      ]
    },
    {
      title: "Acompañamiento organizativo",
      description: "Acompañamiento organizativo, pedagógico y cultural a las comunidades.",
      image: "/images/Acompa.jpg",
      activities: [
        "Asesoría organizacional",
        "Apoyo pedagógico",
        "Gestión cultural",
        "Desarrollo comunitario"
      ]
    }
  ];

  const regions = [
    {
      name: "Región Sierra",
      communities: ["Cayambe", "Otavalo", "Cotopaxi"],
      description: "Trabajamos con comunidades indígenas en las provincias de la Sierra ecuatoriana."
    },
    {
      name: "Región Amazónica",
      communities: ["Napo", "Pastaza", "Morona Santiago"],
      description: "Desarrollamos proyectos educativos adaptados a las necesidades específicas de las comunidades amazónicas."
    },
    {
      name: "Región Costa",
      communities: ["Manabí", "Esmeraldas", "Santa Elena"],
      description: "Colaboramos con comunidades costeras en proyectos de desarrollo sostenible."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Área de Acción" 
        description="Áreas principales de nuestro trabajo y regiones de impacto"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Áreas de Acción */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Nuestras Áreas de Acción
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {actionAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regiones */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Regiones de Impacto
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{region.name}</h3>
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Comunidades:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {region.communities.map((community) => (
                        <li key={community}>{community}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}