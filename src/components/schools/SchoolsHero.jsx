"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const schoolImages = [
  "/images/Escuelaagroecologia/Capacitacionsobremanejoyconservaciondesuelos1.png",
  "/images/Escuelaagroecologia/cms2.png",
  "/images/Escuelaagroecologia/cms3.png",
  "/images/Escuelaagroecologia/Capturademicrorganismos1.JPG",
  "/images/Escuelaagroecologia/Capturademicrorganismos2.JPG",
];

export default function SchoolsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Navegación automática
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % schoolImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (newIndex) => {
    const diff = newIndex - currentIndex;
    setDirection(diff > 0 ? 1 : -1);
    setCurrentIndex(newIndex);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative min-h-[60vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 h-[120%] -translate-y-[10%]">
            <img
              src={schoolImages[currentIndex]}
              alt={`Escuela ${currentIndex + 1}`}
              className="object-cover w-full h-full"
              style={{
                objectPosition: "center 30%", // Ajusta el enfoque vertical
              }}
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-50" />

          <div className="relative flex items-center justify-center min-h-[60vh] text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nuestras Escuelas
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Descubre los centros educativos donde transformamos vidas a
                través de la educación y el desarrollo comunitario.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {schoolImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Flechas de navegación */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 p-2"
        onClick={() =>
          goToSlide(
            (currentIndex - 1 + schoolImages.length) % schoolImages.length
          )
        }
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 p-2"
        onClick={() => goToSlide((currentIndex + 1) % schoolImages.length)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}
