'use client';
import { motion } from 'framer-motion';

// Array principal de escuelas


// Nuevo array con las presentaciones que solicitaste
const presentations = [
  {
    id: 'lideres',
    title: 'Presentación Escuela de Formación de Líderes',
    content: `La Escuela de Formación de Líderes “Sumak Kawsay” es una estrategia política de concienciación organizativa, ideológico y político dirigido para los dirigentes y líderes de las organizaciones; la misma viene desarrollando desde el año 2013. Es un espacio de compartimiento de conocimientos desde la legitimidad social ideológico y político; metodológicamente se realiza a través de seminarios talleres de capacitación organizativo, político, económico, social, cultural y ambiental, enmarcado en los derechos de los pueblos indígenas. Lleva su nombre Sumak Kawsay, porque es un paradigma organizativo, político, plurinacionalidad e interculturalidad para fortalecer el sistema de organización comunitaria, que dinamiza y armoniza las relaciones organizativas, sociales, políticos, económicos, guiado por los principios y valores de convivencia para una sociedad solidaria, reciproca y equitativa.`
  },
  {
    id: 'agroecologia',
    title: 'Presentación Escuela de Agroecología',
    content: `El curso de Agroecología “kawsaymanta” es una estrategia ambiental, organizativa y productiva que trabaja en el territorio del Pueblo Kayambi; es un espacio de fortalecimiento organizativo, recuperación e intercambio de conocimientos y técnicas ancestrales, mediante: talleres de capacitación teórico – práctico, dirigidos a :hombres, mujeres, jóvenes y niños; en Centro de Capacitación de la Fundación ubicado en : Asc. “El Prado“ - Cayambe.`
  },
  {
    id: 'vision',
    title: 'Visión Productiva',
    content: `Fundación Kawsay trabaja en Producción Agroecológica comunitaria, comprometida con principios de reciprocidad, solidaridad, equidad, organización, distribución e identidad, cuestionando la exclusión económica, discriminación, racismo. El capitalismo, el neoliberalismo y el libre mercado explota los recursos naturales y los gobiernos de turno priorizan la agroexportación afectando el ambiente, la seguridad y soberanía alimentaria.`
  }
];

export default function SchoolsList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sección 1: Presentaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {presentations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
