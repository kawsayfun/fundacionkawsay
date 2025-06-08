"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaCalendarAlt, FaBookOpen, FaDownload, FaWhatsapp } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

// Imágenes de ejemplo para la vista previa
const previewPages = [
  '/preview/page1.jpg',
  '/preview/page2.jpg',
  '/preview/page3.jpg',
  '/preview/page4.jpg'
];

export default function BookDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookId = parseInt(id, 10);
        if (isNaN(bookId)) {
          console.error("ID inválido:", id);
          setLoading(false);
          return;
        }

        const booksCollection = collection(db, "books");
        const q = query(booksCollection, where("id", "==", bookId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setBook(querySnapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error obteniendo libro:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-gray-600">Cargando libro...</p>
        </div>
      </Layout>
    );
  }

  if (!book) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl text-gray-600">Libro no encontrado</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Imagen del libro */}
              <div className="relative h-[400px] md:h-[600px]">
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  src={book.cover || "/images/default.png"}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {book.title}
                  </h1>

                  <div className="space-y-4 mb-8 text-gray-600">
                    <div className="flex items-center">
                      <FaUser className="w-5 h-5 mr-3" />
                      <span>{book.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="w-5 h-5 mr-3" />
                      <span>{book.year}</span>
                    </div>
                    {book.pages && (
                      <div className="flex items-center">
                        <FaBookOpen className="w-5 h-5 mr-3" />
                        <span>{book.pages} páginas</span>
                      </div>
                    )}
                  </div>

                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>{book.description}</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleReadNow}
                      className="flex items-center justify-center w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <FaBookOpen className="mr-2" />
                      Leer primeras páginas
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleWhatsappClick}
                      className="flex items-center justify-center w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      <FaWhatsapp className="mr-2" />
                      Comprar Ahora
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal de vista previa */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            >
              <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <IoChevronBack className="mr-2" />
                    Volver al libro
                  </button>
                  <span className="text-gray-600">
                    Página {currentPage + 1} de {previewPages.length}
                  </span>
                </div>

                <div className="relative h-[500px] flex items-center justify-center">
                  <button
                    onClick={handlePrevPage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/40"
                  >
                    <IoChevronBack size={24} />
                  </button>

                  <motion.img
                    key={currentPage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={previewPages[currentPage]}
                    alt={`Vista previa página ${currentPage + 1}`}
                    className="max-w-full max-h-full object-contain p-4"
                  />

                  <button
                    onClick={handleNextPage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/40"
                  >
                    <IoChevronBack className="rotate-180" size={24} />
                  </button>
                </div>

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}