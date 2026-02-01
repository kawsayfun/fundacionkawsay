"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
//import { collection, getDocs } from "firebase/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function BlogGrid() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(
        collection(db, "posts_publicos"),
        orderBy("createdAt", "desc"), // ⬅️ más recientes primero
      );

      const snapshot = await getDocs(q);

      const postsData = snapshot.docs.map((doc) => {
        const data = doc.data();

        const thumbnail = getVideoThumbnail(
          data.mediaType,
          data.videoUrl,
          data.image,
        );

        const createdAtDate = data.createdAt?.toDate
  ? data.createdAt.toDate()
  : null;

return {
  id: doc.id,
  title: data.title || "Sin título",
  content: data.content || "",
  createdAtRaw: createdAtDate,
  createdAt: createdAtDate
    ? createdAtDate.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Fecha no disponible",
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
          {posts.map((post) => (
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
                  <p className="text-sm text-gray-500 mb-2">{post.createdAt}</p>
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

/* =========================
   UTILIDAD THUMBNAIL VIDEO
========================= */
function getVideoThumbnail(mediaType, videoUrl, image) {
  // Imagen normal
  if (mediaType !== "video") {
    return image || "/images/blog-default.jpg";
  }

  if (!videoUrl) {
    return "/images/video-placeholder.jpg";
  }

  // YouTube Shorts
  if (videoUrl.includes("youtube.com/shorts")) {
    const id = videoUrl.split("shorts/")[1]?.split("?")[0];
    return id
      ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
      : "/images/video-placeholder.jpg";
  }

  // YouTube normal / youtu.be
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);
    const id = match && match[2].length === 11 ? match[2] : null;

    return id
      ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
      : "/images/video-placeholder.jpg";
  }

  // Facebook u otros
  return "/images/FacebookCayambe.jpg";
}
