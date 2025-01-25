"use client";

import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig"; // Ajusta la ruta a tu firebaseConfig
import { collection, query, onSnapshot } from "firebase/firestore";

/**
 * Hook para traer la lista completa de libros desde Firestore.
 */
export default function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "books"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const booksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(booksData);
    });

    // Cleanup al desmontar
    return () => unsubscribe();
  }, []);

  return books;
}
