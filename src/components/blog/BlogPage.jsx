'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function BlogGrid() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const q = query(
        collection(db, "posts"),
        where("status", "==", "published")
      );
      
      const postsSnapshot = await getDocs(q);
      const postsData = postsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    router.push(`/blog/detalle?id=${postId}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog Institucional</h2>
        {posts.length === 0 ? (
          <div className="text-center text-gray-500">
            No hay artículos publicados aún
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.coverImage || '/images/blog-default.jpg'}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-600 font-medium">
                        {post.category || "General"}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date?.toDate().toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt || "Descripción del artículo..."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}