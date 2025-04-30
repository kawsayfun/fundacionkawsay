'use client';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
<section className="relative min-h-[60vh] flex items-center justify-center bg-banner-custom">
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative text-center text-white px-4"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Nuestra Institución
    </h1>
    <p className="text-xl max-w-2xl mx-auto">
      Conoce más sobre nuestra misión, visión y el equipo que hace posible 
      nuestro trabajo en la comunidad.
    </p>
  </motion.div>
</section>

  
  );
}