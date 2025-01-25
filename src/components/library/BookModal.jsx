'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaBookOpen, FaCalendarAlt, FaUser, FaDownload } from 'react-icons/fa';

export default function BookModal({ book, isOpen, onClose }) {
  if (!book) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay con efecto de desenfoque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden">
              <div className="relative">
                {/* Botón de cerrar */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <IoClose size={24} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Imagen del libro */}
                  <div className="relative h-[300px] md:h-[500px] bg-gray-100">
                    <motion.img
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6 md:p-8">
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
                        <p>{book.description || 'La agroecología es una ciencia que diverge de la ciencia tradicional "moderna", que se ocupa del diseño y manejo de agroecosistemas sostenibles...'}</p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <FaDownload className="mr-2" />
                        Descargar PDF
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}