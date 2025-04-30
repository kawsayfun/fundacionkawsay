'use client';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import NextImage from 'next/image'; // Importación renombrada

const mediaItems = [
  {
    type: 'image',
    src:'/images/historia/Imagen59.jpg',
    alt: 'Foto 1',
  },
  {
    type: 'image',
    src: '/images/Acompa.jpg',
    alt: 'Foto 2',
  },
  {
    type: 'video',
    src: '/videos/Kawsayv2.mp4',
    alt: 'Video 1',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen60.jpg',
    alt: 'Foto 3',
  },
  {
    type: 'video',
    src: '/videos/objetivosChakana.mp4',
    alt: 'Video 2',
  },
  {
    type: 'image',
    src: '/images/capacitacion.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen61.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen62.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen63.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen64.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen65.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen66.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen67.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen68.jpg',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen69.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen70.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen71.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen72.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen73.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen74.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen75.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen76.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen77.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen78.jpg',
    alt: 'Foto 4',
  },
  {
    type: 'image',
    src: '/images/historia/Imagen79.jpg',
    alt: 'Foto 4',
  },
  // Agrega más elementos según tu preferencia...
];

export default function Multimedia() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <Layout>
      <PageHeader 
        title="Multimedia" 
        description="Galería de fotos y videos"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mediaItems.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleOpenLightbox(index)}
                className="relative group cursor-pointer overflow-hidden rounded-md shadow-md bg-gray-100 hover:scale-105 transition-transform"
              >
                {item.type === 'image' ? (
                  <NextImage
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <video className="object-cover w-full h-full" muted>
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full mx-4">
              {mediaItems[selectedIndex].type === 'image' ? (
                <NextImage
                  src={mediaItems[selectedIndex].src}
                  alt={mediaItems[selectedIndex].alt}
                  width={1920}
                  height={1080}
                  className="object-contain w-full max-h-[90vh] rounded-lg"
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full max-h-[90vh] rounded-lg"
                >
                  <source src={mediaItems[selectedIndex].src} type="video/mp4" />
                </video>
              )}

              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                  onClick={handlePrev}
                >
                  ‹
                </button>
                <button
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                  onClick={handleNext}
                >
                  ›
                </button>
                <button
                  className="text-white text-2xl hover:text-gray-300 transition-colors ml-4"
                  onClick={handleCloseLightbox}
                >
                  ×
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}