'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = {
  mission: {
    title: 'MISIÓN',
    text: 'Fomenta talentos humanos con corresponsabilidad, compromiso y equidad entre hombres y mujeres en base a principios comunitarios; a través, de formación con metodología que viabilice el Sumak Kawsay de nacionalidades y pueblos indígenas; e, identificados culturalmente en la sociedad con presencia y participación plena políticamente en diferentes ámbitos de la vida cultural, social, económico y ambiental, desarrollando integralmente sus conocimientos, sabiduría, ciencia, tecnología y espiritualidad para la armonía de la Pachamama.'
  },
  vision: {
    title: 'VISIÓN',
    text: 'Nacionalidades y pueblos indígenas; identificados y orgullosos culturalmente con presencia y participación plena en la sociedad en diferentes ámbitos de la vida cultural, social, económico y político, desarrollan plenamente y comparten sus conocimientos, sabidurías, ciencia, tecnología y espiritualidad en armonía con la Pachamama.'
  }
};

export default function MissionVisionTabs() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          {['mission', 'vision'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-bold px-6 py-3 rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[tab].title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'mission' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'mission' ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              {content[activeTab].title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {content[activeTab].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}