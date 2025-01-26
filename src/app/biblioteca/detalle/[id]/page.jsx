"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaBookOpen, FaDownload } from "react-icons/fa";

export default function BookDetail() {
  const { id } = useParams(); // Obtener el ID de la URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookId = parseInt(id, 10);

        if (isNaN(bookId)) {
          console.error("El ID proporcionado no es un número válido:", id);
          setLoading(false);
          return;
        }

        const booksCollection = collection(db, "books");
        const q = query(booksCollection, where("id", "==", bookId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const bookData = querySnapshot.docs[0].data();
          setBook(bookData);
        } else {
          console.log("Libro no encontrado con el ID:", bookId);
        }
      } catch (error) {
        console.error("Error al obtener los detalles del libro: ", error);
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

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FaDownload className="mr-2" />
                  Leer Ahora
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
