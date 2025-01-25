'use client';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fomentamos talentos humanos con corresponsabilidad, compromiso y equidad 
            entre hombres y mujeres en base a principios comunitarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Educación',
              description: 'Formación con metodología que viabilice el Sumak Kawsay de nacionalidades y pueblos indígenas.'
            },
            {
              title: 'Cultura',
              description: 'Preservación y fortalecimiento de la identidad cultural en la sociedad.'
            },
            {
              title: 'Desarrollo',
              description: 'Desarrollo integral de conocimientos, sabiduría, ciencia, tecnología y espiritualidad.'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}