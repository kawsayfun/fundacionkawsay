'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  null, // Video en el primer slide
  '/images/scaled.png',
  '/images/scaled2.png',
  'text' // Texto en el cuarto slide
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDuration, setSlideDuration] = useState(5000);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Verificar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 845;
      setIsSmallScreen(smallScreen);

      // Si la pantalla es pequeña y el índice actual es 0 (video), pasa al siguiente slide inmediatamente
      if (smallScreen && currentIndex === 0) {
        setCurrentIndex(1);
      }
    };

    handleResize(); // Ejecuta la verificación inicial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slideDuration]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setSlideDuration(10000);
    } else {
      setSlideDuration(5000);
    }
  }, [currentIndex]);

  return (
    <section className="relative h-screen overflow-hidden bg-gray-600">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 1 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {!isSmallScreen && currentIndex === 0 ? (
            // Video en el primer slide (se oculta si pantalla es menor a 845px)
            <div className="relative w-full h-full">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/Kawsayv2.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          ) : currentIndex === 3 ? (
            // Texto en el cuarto slide
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-4 w-full"
            >
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Fundación de Culturas Indigenas Kawsay</h1>
                <p className="text-xl md:text-2xl mb-8">Organización no Gubernamental sin fines de Lucro</p>
                <Link href="/informacion">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  CONOCE MÁS
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ) : (
            // Imagen en los demás slides
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
