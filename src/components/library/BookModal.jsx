'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack } from 'react-icons/io5';
import { FaBookOpen, FaCalendarAlt, FaUser, FaDownload, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

// Imágenes de ejemplo para la vista previa
const previewPages = [
  '/libros/preview/page1.jpg',
  '/libros/preview/page2.jpg',
  '/libros/preview/page3.jpg',
  '/libros/preview/page4.jpg'
];

export default function BookModal({ book, isOpen, onClose }) {
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleWhatsappClick = () => {
    window.open('https://wa.me/593982679993', '_blank');
  };

  const handleReadNow = () => {
    setShowPreview(true);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => (prev + 1) % previewPages.length);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev - 1 + previewPages.length) % previewPages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[90vh] overflow-hidden">
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <IoClose size={24} />
                </button>

                {showPreview ? (
                  /* Vista previa del libro */
                  <div className="h-[500px] flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b">
                      <button
                        onClick={() => setShowPreview(false)}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <IoChevronBack className="mr-1" />
                        Volver al libro
                      </button>
                      <span className="text-gray-600">
                        Página {currentPage + 1} de {previewPages.length}
                      </span>
                    </div>

                    <div className="relative flex-1">
                      <motion.img
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        src={previewPages[currentPage]}
                        alt={`Vista previa página ${currentPage + 1}`}
                        className="w-full h-full object-contain p-4"
                      />

                      {/* Controles de navegación */}
                      <button
                        onClick={handlePrevPage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/40"
                      >
                        <IoChevronBack size={24} />
                      </button>
                      <button
                        onClick={handleNextPage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/40"
                      >
                        <IoChevronBack className="rotate-180" size={24} />
                      </button>
                    </div>

                    {/* Botón de compra en vista previa */}
                    <div className="p-4 border-t">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleWhatsappClick}
                        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        <FaWhatsapp className="inline mr-2" />
                        Comprar libro completo
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  /* Vista normal del libro */
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative h-[300px] md:h-[500px] bg-gray-100 flex-shrink-0">
                      <motion.img
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col p-6 md:p-8 h-full overflow-y-auto">
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h2 className="text-3xl font-bold text-gray-900 mb-4">{book.title}</h2>

                          <div className="space-y-4 mb-8">
                            <div className="flex items-center text-gray-600">
                              <FaUser className="w-5 h-5 mr-3" />
                              <span>{book.author}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <FaCalendarAlt className="w-5 h-5 mr-3" />
                              <span>{book.year}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <FaBookOpen className="w-5 h-5 mr-3" />
                              <span>196 páginas</span>
                            </div>
                          </div>

                          <div className="prose prose-lg text-gray-600 mb-8">
                            <p>{book.description || 'Descripción no disponible.'}</p>
                          </div>
                        </motion.div>
                      </div>

                      <div className="space-y-4 mt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleReadNow}
                          className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          <FaBookOpen className="mr-2" />
                          Leer primeras páginas
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleWhatsappClick}
                          className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                          <FaWhatsapp className="mr-2" />
                          Comprar Ahora
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}