'use client';
import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-900">MISIÓN</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fomenta talentos humanos con corresponsabilidad, compromiso y equidad entre hombres y mujeres en base a principios comunitarios; a través, de formación con metodología que viabilice el Sumak Kawsay de nacionalidades y pueblos indígenas; e, identificados culturalmente en la sociedad con presencia y participación plena políticamente en diferentes ámbitos de la vida cultural, social, económico y ambiental, desarrollando integralmente sus conocimientos, sabiduría, ciencia, tecnología y espiritualidad para la armonía de la Pachamama.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-900">VISIÓN</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nacionalidades y pueblos indígenas; identificados y orgullosos culturalmente con presencia y participación plena en la sociedad en diferentes ámbitos de la vida cultural, social, económico y político, desarrollan plenamente y comparten sus conocimientos, sabidurías, ciencia, tecnología y espiritualidad en armonía con la Pachamama.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}