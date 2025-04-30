'use client';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { motion } from 'framer-motion';

export default function ThematicAxes() {
  // Datos de ejemplo (puedes ajustarlos o moverlos a un archivo separado si lo prefieres)
  const cardsData = [
    {
      title: 'Ejes Temáticos',
      image: '/images/areasaccion/ejestematicos.jpeg', // Imagen más pequeña
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
      image: '/images/areasaccion/ejes2.jpg',
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
        'Se realizan seminarios, talleres todos los sábados de 8:00 am – 13:00 pm.',
        'Se realiza mediante la plataforma virtual de fundación Kawsay, 2 sábados al mes en el horario de 8:00 am a 15pm, vía www.kawsyakayambiecuador.org',
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
        whileHover={{ y: -10 }}
        className={`
          flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg
          bg-white transition-transform
          ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
        `}
      >
        {/* Imagen más grande */}
        <div className="flex-shrink-0 w-full md:w-[389px] h-[300px] overflow-hidden rounded-xl shadow-md mx-auto md:mx-0">
          <motion.img
            src={card.image}
            alt={card.title}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            {card.title}
          </h2>
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
