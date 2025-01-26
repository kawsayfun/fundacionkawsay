"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig"; // Configuración de Firebase
import { collection, getDocs } from "firebase/firestore";

export default function BookGrid() {
  const router = useRouter();
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);

      const booksData = booksSnapshot.docs.map((doc) => ({
        id: doc.data().id, // Campo estático id en Firestore
        ...doc.data(),
      }));

      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookClick = (bookId) => {
    router.push(`/biblioteca/detalle/${bookId}`); // Navegación dinámica
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group relative cursor-pointer"
              onClick={() => handleBookClick(book.id)}
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                <img
                  src={book.cover || "/images/default.png"}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm">{book.author}</p>
                    <p className="text-xs">{book.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
