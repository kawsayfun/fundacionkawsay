'use client';
import { motion } from 'framer-motion';

export default function PageHeader({ title, description }) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-blue-900">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-2xl mx-auto">{description}</p>
      </motion.div>
    </section>
  );
}