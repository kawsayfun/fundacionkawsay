'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { db } from '@/firebaseConfig';
import Layout from '@/components/layout/Layout';
import { doc, getDoc } from 'firebase/firestore';

export default function PostDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!postId) {
      setError('ID de post no válido');
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        setLoading(true);

        const postRef = doc(db, 'posts_publicos', postId);
        const postSnap = await getDoc(postRef);

        if (!postSnap.exists()) {
          throw new Error('El post no existe');
        }

        const data = postSnap.data();

        const formattedDate = data.createdAt?.toDate
          ? data.createdAt.toDate().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'Fecha no disponible';

        setPost({
          id: postSnap.id,
          title: data.title || 'Sin título',
          content: data.content || '',
          author: data.author || 'Autor desconocido',
          coverImage: data.image || '',
          mediaType: data.mediaType || 'image', // image | video
          videoUrl: data.videoUrl || '',
          category: 'General',
          date: formattedDate,
        });
      } catch (err) {
        console.error('Error al obtener el post:', err);
        setError(err.message || 'Ocurrió un error');
        setTimeout(() => router.push('/blog'), 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, router]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Cargando post...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <p className="text-red-600">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!post) return null;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 px-4">

        {/* IMAGEN */}
        {post.mediaType === 'image' && post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-80 object-cover rounded-xl mb-8"
          />
        )}

        {/* VIDEO YOUTUBE */}
        {post.mediaType === 'video' && post.videoUrl && (
          <div className="relative w-full pb-[56.25%] mb-8 rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${getYoutubeId(post.videoUrl)}`}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="mb-6">
          <span className="text-sm text-blue-600 font-medium">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 ml-4">{post.date}</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div
          className="prose lg:prose-xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, '<br/>'),
          }}
        />

        <p className="mt-12 text-sm text-gray-500 text-right">
          Escrito por <span className="font-semibold">{post.author}</span>
        </p>
      </div>
    </Layout>
  );
}

/* =========================
   UTILIDAD YOUTUBE
========================= */
function getYoutubeId(url) {
  if (!url) return '';
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : '';
}
