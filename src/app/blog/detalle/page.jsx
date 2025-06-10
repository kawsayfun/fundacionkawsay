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
        const postRef = doc(db, 'posts_publicos', postId); // colección correcta
        const postSnap = await getDoc(postRef);

        if (!postSnap.exists()) {
          throw new Error('El post no existe');
        }

        const data = postSnap.data();

        let formattedDate = 'Fecha no disponible';
        if (data.createdAt?.toDate) {
          formattedDate = data.createdAt.toDate().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        }

        setPost({
          id: postSnap.id,
          title: data.title || 'Sin título',
          content: data.content || '',
          author: data.author || 'Autor desconocido',
          coverImage: data.image || '/images/default-blog.jpg', // campo correcto
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
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto" />
            <p className="mt-4 text-gray-600">Cargando post...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-8 max-w-2xl">
            <svg
              className="w-16 h-16 text-red-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso restringido</h1>
            <p className="text-red-500">{error}</p>
            <p className="text-sm text-gray-500 mt-4">
              Serás redirigido al blog institucional automáticamente...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) return null;

 return (
  <Layout>
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-80 object-cover rounded-xl mb-8"
      />
      <div className="mb-6">
        <span className="text-sm text-blue-600 font-medium">{post.category}</span>
        <span className="text-sm text-gray-500 ml-4">{post.date}</span>
      </div>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {/* ✅ Justificado y con saltos de línea */}
      <div
        className="prose max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <p className="mt-12 text-sm text-gray-500 text-right">
        Escrito por <span className="font-semibold">{post.author}</span>
      </p>
    </div>
  </Layout>
);

}

