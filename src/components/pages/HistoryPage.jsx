'use client';
import { motion } from 'framer-motion';
import PageHeader from '@/components/common/PageHeader';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animaciones mejoradas
  const imageHover = {
    scale: 1.05,
    filter: 'grayscale(0%)',
    transition: { duration: 0.3 }
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const galleryAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleNavigation = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={galleryAnimation}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={imageHover}
              className="relative aspect-square cursor-pointer group"
              onClick={() => {
                setSelectedImage(img);
                setCurrentIndex(index);
                setIsModalOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="rounded-lg object-cover shadow-xl filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>

        {isModalOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh]">
              <motion.div
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-50"
                whileHover={{ scale: 1.1 }}
              >
                <button
                  className="text-white text-4xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(-1);
                  }}
                >
                  ←
                </button>
              </motion.div>

              <Image
                src={selectedImage}
                alt="Selected image"
                width={1920}
                height={1080}
                className="rounded-xl object-contain h-full w-full"
              />

              <motion.div
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-50"
                whileHover={{ scale: 1.1 }}
              >
                <button
                  className="text-white text-4xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(1);
                  }}
                >
                  →
                </button>
              </motion.div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {currentIndex + 1} / {images.length}
              </div>

              <button 
                className="absolute top-8 right-8 text-white text-4xl"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default function HistoryPage() {
  const images = [
    '/images/historia/Imagen1.jpg',
    '/images/historia/Imagen2.jpg',
    '/images/historia/Imagen3.jpg',
    '/images/historia/Imagen4.jpg',
    '/images/historia/Imagen5.jpg',
    '/images/historia/Imagen6.jpg',
    '/images/historia/Imagen7.jpg',
    '/images/historia/Imagen8.jpg',
    '/images/historia/Imagen9.jpg',
    '/images/historia/Imagen10.jpg',
    '/images/historia/Imagen11.jpg',
    '/images/historia/Imagen12.jpg',
    '/images/historia/Imagen13.jpg',
    '/images/historia/Imagen14.jpg',
    '/images/historia/Imagen15.jpg',
    '/images/historia/Imagen16.jpg',
    '/images/historia/Imagen17.jpg',
    '/images/historia/Imagen18.jpg',
    '/images/historia/Imagen19.jpg',
    '/images/historia/Imagen20.jpg',
    '/images/historia/Imagen21.jpg',
    '/images/historia/Imagen22.jpg',
    '/images/historia/Imagen23.jpg',
    '/images/historia/Imagen24.jpg',
    '/images/historia/Imagen25.jpg',
    '/images/historia/Imagen26.jpg',
    '/images/historia/Imagen27.jpg',
    '/images/historia/Imagen28.jpg',
    '/images/historia/Imagen29.jpg',
    '/images/historia/Imagen30.jpg',
    '/images/historia/Imagen31.jpg',
    '/images/historia/Imagen32.jpg',
    '/images/historia/Imagen33.jpg',
    '/images/historia/Imagen34.jpg',
    '/images/historia/Imagen35.jpg',
    '/images/historia/Imagen36.jpg',
    '/images/historia/Imagen37.jpg',
    '/images/historia/Imagen38.jpg',
    '/images/historia/Imagen39.jpg',
    '/images/historia/Imagen40.jpg',
    '/images/historia/Imagen41.jpg',
    '/images/historia/Imagen42.jpg',
    '/images/historia/Imagen43.jpg',
    '/images/historia/Imagen44.jpg',
    '/images/historia/Imagen45.jpg',
    '/images/historia/Imagen46.jpg',
    '/images/historia/Imagen47.jpg',
    '/images/historia/Imagen48.jpg',
    '/images/historia/Imagen49.jpg',
    '/images/historia/Imagen50.jpg',
    '/images/historia/Imagen51.jpg',
    '/images/historia/Imagen52.jpg',
    '/images/historia/Imagen53.jpg',
    '/images/historia/Imagen54.jpg',
    '/images/historia/Imagen55.jpg',
    '/images/historia/Imagen56.jpg',
    '/images/historia/Imagen57.jpg',
    '/images/historia/Imagen58.jpg',
    '/images/historia/Imagen59.jpg',
    '/images/historia/Imagen60.jpg',
    '/images/historia/Imagen61.jpg',
    '/images/historia/Imagen62.jpg',
    '/images/historia/Imagen63.jpg',
    '/images/historia/Imagen64.jpg',
    '/images/historia/Imagen65.jpg',
    '/images/historia/Imagen66.jpg',
    '/images/historia/Imagen67.jpg',
    '/images/historia/Imagen68.jpg',
    '/images/historia/Imagen69.jpg',
    '/images/historia/Imagen70.jpg',
    '/images/historia/Imagen71.jpg',
    '/images/historia/Imagen72.jpg',
    '/images/historia/Imagen73.jpg',
    '/images/historia/Imagen74.jpg',
    '/images/historia/Imagen75.jpg',
    '/images/historia/Imagen76.jpg',
    '/images/historia/Imagen77.jpg',
    '/images/historia/Imagen78.jpg',
    '/images/historia/Imagen79.jpg'
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-white"
    >
      <PageHeader 
        title="Nuestra Historia" 
        description="Conoce el camino que nos ha traído hasta aquí"
      />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Gallery images={images} />
        </div>
      </section>
    </motion.div>
  );
}