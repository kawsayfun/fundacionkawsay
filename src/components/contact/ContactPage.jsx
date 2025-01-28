'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/common/PageHeader';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contactos" 
        description="Estamos aquí para ayudarte"
      />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Sección de Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-semibold w-24">Email:</span>
                <span>fundacionkawsay.2016@gmail.com</span>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-semibold w-24">Teléfono:</span>
                <span>(02)2-110-924 </span>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-semibold w-24">Dirección:</span>
                <span>Cayambe, calle Bolivar y Restauración</span>
              </p>
            </div>
          </motion.div>

          {/* Sección con Mapa y Formulario */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mapa de Google */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
                  <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817249875203!2d-78.14676542596122!3d0.04197086438526251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a09b8504eebd9%3A0x14ec61c603cb97a7!2sFundaci%C3%B3n%20Kawsay!5e0!3m2!1ses!2sec!4v1737044194909!5m2!1ses!2sec"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
            </motion.div>

            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Déjanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                               focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                               focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Tu correo electrónico"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                               focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Escribe tu mensaje..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow 
                             hover:bg-blue-700 focus:outline-none 
                             focus:ring focus:ring-blue-300"
                >
                  Enviar
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
