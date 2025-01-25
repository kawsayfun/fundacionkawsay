'use client';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const mediaItems = [
  {
    type: 'image',
    src: '/images/Agricultura.jpg',
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
    src: '/images/proposito.jpg',
    alt: 'Foto 3',
  },
  {
    type: 'video',
    src: '/videos/objectives-video.mp4',
    alt: 'Video 2',
  },
  {
    type: 'image',
    src: '/images/capacitacion.jpg',
    alt: 'Foto 4',
  },
  // Agrega más elementos según tu preferencia...
];

export default function Multimedia() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenLightbox = (item) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <Layout>
      <PageHeader 
        title="Multimedia" 
        description="Galería de fotos y videos"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg mx-auto mb-8">
            <p className="text-gray-600 leading-relaxed">
              Disfruta de nuestra galería de imágenes y videos, 
              pensada para brindarte la mejor experiencia visual en cualquier dispositivo.
            </p>
          </div>
          
          {/* Galería responsive tipo “Netflix” */}
          <div
            className="
              grid 
              grid-cols-2 
              sm:grid-cols-3 
              md:grid-cols-4 
              lg:grid-cols-5 
              xl:grid-cols-6 
              gap-4
            "
          >
            {mediaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => handleOpenLightbox(item)}
                className="
                  relative group cursor-pointer overflow-hidden rounded-md shadow-md 
                  bg-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl
                "
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="object-cover w-full h-full"
                    muted
                  />
                )}
                {/* Overlay opcional con texto */}
                <div
                  className="
                    absolute bottom-0 left-0 w-full p-2 bg-black/50 text-white text-sm 
                    opacity-0 group-hover:opacity-100 transition-opacity
                  "
                >
                  {item.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <motion.div
              className="relative max-w-3xl mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Evita que el click dentro cierre el modal
            >
              {/* Botón de cierre */}
              <button
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                onClick={handleCloseLightbox}
              >
                ✕
              </button>

              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="object-contain w-full max-h-[80vh] rounded-md shadow-lg"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="object-contain w-full max-h-[80vh] rounded-md shadow-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
