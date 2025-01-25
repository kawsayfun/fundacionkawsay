'use client';
import { motion } from 'framer-motion';

export default function ImpactSection() {
  const impactStats = [
    {
      number: '1000+',
      label: 'Estudiantes',
      description: 'Beneficiados por nuestros programas educativos'
    },
    {
      number: '20+',
      label: 'Comunidades',
      description: 'Trabajando juntos por un futuro mejor'
    },
    {
      number: '15',
      label: 'Años',
      description: 'De experiencia en educación intercultural'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Nuestro Impacto</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transformando vidas a través de la educación y el desarrollo comunitario
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-blue-100">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}