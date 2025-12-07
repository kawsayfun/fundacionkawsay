"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function HomeServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const colRef = collection(db, "home_publicidad");
        const snapshot = await getDocs(colRef);

        const data = snapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            title: d.title || "Sin título",
            description: d.description || "",
            image: d.image || "/images/blog-default.jpg",
            ctaText: d.ctaText || "",
            ctaLink: d.ctaLink || "",
            order: d.order || 999,
            active: d.active !== false,
          };
        });

        const ordered = data
          .filter((item) => item.active)
          .sort((a, b) => a.order - b.order);

        setServices(ordered);
      } catch (err) {
        console.error("Error cargando servicios del home:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">Cargando información de servicios...</p>
        </div>
      </section>
    );
  }

  if (!services.length) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios y Programas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce algunas de las iniciativas, campañas y servicios que ofrecemos
            para apoyar a las comunidades y fortalecer la identidad cultural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {service.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* 👇 AQUÍ EL CAMBIO IMPORTANTE */}
                <p className="text-gray-600 mb-4 flex-1 whitespace-pre-line">
                  {service.description}
                </p>

                {service.ctaLink && service.ctaText && (
                  <a
                    href={service.ctaLink}
                    className="inline-flex items-center justify-center mt-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    {service.ctaText}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
