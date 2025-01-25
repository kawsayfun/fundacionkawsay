'use client';
import { motion } from 'framer-motion';

export default function SchoolsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-green-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Nuestras Escuelas
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Descubre los centros educativos donde transformamos vidas a través 
          de la educación y el desarrollo comunitario.
        </p>
      </motion.div>
    </section>
  );
}