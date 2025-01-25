'use client';
import { motion } from 'framer-motion';

export default function LibraryHero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/digital-libraries.jpg')",
          filter: "brightness(0.6)"
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Biblioteca Digital
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Explora nuestra colección de recursos educativos y culturales
        </p>
      </motion.div>
    </section>
  );
}