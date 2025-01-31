'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 462);
    };

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Establece el valor inicial
    handleResize();

    // Limpia el evento al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="relative w-full h-screen bg-gray-600">
        {isSmallScreen ? (
          // Contenido para pantallas pequeñas
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 h-full flex items-center justify-center text-white px-4"
          >
            <div className="text-center max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestros Objetivos
              </h2>
              <p className="text-xl md:text-2xl">
                Trabajamos por el desarrollo integral de las comunidades
                indígenas, preservando su cultura y promoviendo su educación.
              </p>
            </div>
          </motion.div>
        ) : (
          // Video para pantallas grandes
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/objectives-video.mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </>
        )}
      </div>
    </div>
  );
}
