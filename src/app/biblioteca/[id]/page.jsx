'use client';
import { useParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCalendarAlt, FaUser, FaDownload } from 'react-icons/fa';

const books = [
  {
    id: 1,
    title: 'La Realidad Escondida de la Agroecología',
    cover: '/images/book1.jpg',
    author: 'Varios Autores',
    year: '2023',
    pages: 196,
    description: 'La agroecología es una ciencia que diverge de la ciencia tradicional "moderna", que se ocupa del diseño y manejo de agroecosistemas sostenibles. Este libro explora las prácticas ancestrales y su aplicación en la agricultura moderna.'
  },
  {
    id: 2,
    title: 'Ochbre: El despertar de los pueblos',
    cover: '/images/book2.jpg',
    author: 'Colectivo Kawsay',
    year: '2022',
    pages: 168,
    description: 'Un análisis profundo del movimiento indígena y su impacto en la transformación social y política de la región. Este libro documenta las luchas y logros de los pueblos originarios.'
  },
  {
    id: 3,
    title: 'Música Andina',
    cover: '/images/book3.jpg',
    author: 'Fundación Kawsay',
    year: '2023',
    pages: 145,
    description: 'Una exploración de las tradiciones musicales andinas, sus instrumentos, ritmos y significado cultural. Este libro es una ventana a la riqueza musical de los Andes.'
  },
  {
    id: 4,
    title: 'Saberes Ancestrales',
    cover: '/images/book4.jpg',
    author: 'Comunidad Kawsay',
    year: '2023',
    pages: 210,
    description: 'Una recopilación de conocimientos tradicionales transmitidos de generación en generación. Este libro preserva y comparte la sabiduría ancestral de nuestros pueblos.'
  }
];

export default function BookDetail() {
  const params = useParams();
  const book = books.find(b => b.id === parseInt(params.id));

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
                  src={book.cover}
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
                      <span>{book.pages} páginas</span>
                    </div>
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
                    Descargar PDF
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