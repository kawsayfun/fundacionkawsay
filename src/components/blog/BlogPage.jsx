'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function BlogGrid() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await getDocs(collection(db, "posts_publicos"));

      const postsData = snapshot.docs.map(doc => {
        const data = doc.data();

        let thumbnail = data.image || "/images/blog-default.jpg";

        // 🎯 Si es video → sacar thumbnail de YouTube
        if (data.mediaType === "video" && data.videoUrl) {
          const videoId = data.videoUrl.split("v=")[1]?.split("&")[0];
          if (videoId) {
            thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }
        }

        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          createdAt: data.createdAt?.toDate().toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          mediaType: data.mediaType || "image",
          thumbnail,
        };
      });

      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Blog Institucional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => router.push(`/blog/detalle?id=${post.id}`)}
            >
              <div className="bg-white rounded-xl shadow overflow-hidden">

                {/* 🖼️ Thumbnail */}
                <div className="relative">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* ▶ Ícono si es video */}
                  {post.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* 📄 Texto */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {post.createdAt}
                  </p>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {post.content.slice(0, 100)}...
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
