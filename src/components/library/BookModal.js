// components/BookModal.js (nuevo componente completo)

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function BookModal({ book, previewImages, isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentPage(0);
  }, [isOpen]);

  const handleWhatsappClick = () => {
    window.open('https://wa.me/593982679993', '_blank');
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % previewImages.length);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + previewImages.length) % previewImages.length);
  };

  if (!previewImages || previewImages.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <button onClick={onClose} className="flex items-center text-gray-700 hover:text-black">
                  <IoClose className="mr-2" /> Cerrar
                </button>
                <span>
                  Página {currentPage + 1} de {previewImages.length}
                </span>
              </div>

              <div className="relative h-[500px] flex items-center justify-center">
                <button
                  onClick={handlePrevPage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                >
                  <IoChevronBack size={24} />
                </button>

                <motion.img
                  key={currentPage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={previewImages[currentPage]}
                  alt={`Página ${currentPage + 1}`}
                  className="max-h-full max-w-full object-contain p-4"
                />

                <button
                  onClick={handleNextPage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full"
                >
                  <IoChevronBack className="rotate-180" size={24} />
                </button>
              </div>

              <div className="p-4 border-t">
                <button
                  onClick={handleWhatsappClick}
                  className="w-full bg-green-600 text-white py-3 rounded-lg"
                >
                  <FaWhatsapp className="inline mr-2" />
                  Comprar libro completo
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
