'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { db } from '@/firebaseConfig';
import Layout from "@/components/layout/Layout";
import { doc, getDoc } from 'firebase/firestore';

export default function PostDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        
        if (!postId) throw new Error('ID de post inválido');
        
        const postRef = doc(db, 'posts', postId);
        const postSnap = await getDoc(postRef);

        if (!postSnap.exists()) throw new Error('El post no existe');
        
        const postData = postSnap.data();
        
        // Validación crítica del status
        if (postData.status !== "published") {
          throw new Error('Este post no está disponible públicamente');
        }

        // Conversión segura de fecha
        const date = postData.date?.toDate 
          ? postData.date.toDate().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : 'Fecha no disponible';

        setPost({ 
          id: postSnap.id,
          title: postData.title || 'Sin título',
          content: postData.content || '',
          author: postData.author || 'Autor desconocido',
          coverImage: postData.coverImage || '/images/default-blog.jpg',
          date
        });

      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error.message);
        setTimeout(() => router.push('/blog'), 5000);
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando post...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-8 max-w-2xl">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso restringido</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={() => router.push('/blog')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Volver al Blog
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {post.date}
            </span>
            <span>•</span>
            <span className="font-medium">{post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl mb-12 shadow-xl"
            loading="lazy"
          />
        )}

        <div 
          className="prose lg:prose-xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </Layout>
  );
}