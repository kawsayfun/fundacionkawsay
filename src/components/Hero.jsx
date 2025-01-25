/* 'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center" 
         style={{ background: 'var(--primary-gradient)' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Fundación Kawsay GT
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Organización no Gubernamental sin fines de Lucro
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          CONOCE MÁS
        </motion.button>
      </motion.div>
    </div>
  );
} */