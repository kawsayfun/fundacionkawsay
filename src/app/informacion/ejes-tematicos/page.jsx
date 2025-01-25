'use client';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { motion } from 'framer-motion';

export default function ThematicAxes() {
  // Datos de ejemplo (puedes ajustarlos o moverlos a un archivo separado si lo prefieres)
  const cardsData = [
    {
      title: 'Ejes Temáticos',
      image: '/images/culturasecuador.jpg', // Imagen más pequeña
      content: [
        'Contexto Histórico de pueblos y nacionalidades indígenas',
        'Derechos de Pueblos y nacionalidades indígenas',
        'Plurinacionalidad e Interculturalidad',
        'Proceso agrario y ambiental',
        'Contexto político nacional y mundial',
      ],
    },
    {
      title: '¿Quiénes Participan?',
      image: '/images/capacitacion.jpg',
      content: [
        'Líderes, dirigentes, hombres, mujeres y jóvenes de comunidades',
        'Personas vinculadas a procesos organizativos y educativos',
        'Quienes requieran potenciar sus conocimientos sobre gestión de organizaciones comunitarias'
      ],
    },
    {
      title: 'Horarios',
      image: '/images/tics_educacion.jpg',
      content: [
        'Escuela presencial de Formación de Líderes: Sábados 8:30 am – 11:30 pm en Cayambe.',
        'Escuela Virtual de Formación de Líderes: Sábados 10 am – 11 am vía www.kawsyakayambiecuador.org',
      ],
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Ejes Temáticos" 
        description="Áreas principales de nuestro trabajo"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // Efecto de "flotar" al pasar el mouse
              whileHover={{ y: -10 }}
              className={`
                flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg
                bg-white transition-transform
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
              `}
            >
              {/* Contenedor de la imagen */}
              <div className="flex-shrink-0 w-48 h-48 overflow-hidden rounded-md shadow-sm mx-auto md:mx-0">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full"
                  // Efecto hover en la imagen
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                />
              </div>

              {/* Contenedor del texto */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h2>
                {/* Si 'content' es un array de párrafos o puntos */}
                {Array.isArray(card.content) ? (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {card.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {card.content}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
