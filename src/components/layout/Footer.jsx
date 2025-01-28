import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Línea superior de colores */}
      <div className="w-full">
        <div className="h-2 bg-gradient-to-r from-red-600 via-orange-500 via-yellow-400 via-green-500 via-blue-600 via-purple-600 to-pink-600" />
      </div>
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información sobre Fundación */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fundación Kawsay</h3>
            <p className="text-gray-400">Trabajando por un futuro mejor para nuestra comunidad.</p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Email: <a href="mailto:info@kawsay.org" className="hover:text-white">fundacionkawsay.2016@gmail.com</a></li>
              <li>Teléfono: <a href="tel:+1234567890" className="hover:text-white">(02)2-110-924 </a></li>
              <li>Dirección: Cayambe, Bolivar y Restauración</li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/institucion" className="hover:text-white">Sobre Nosotros</Link></li>
              <li><Link href="/escuelas" className="hover:text-white">Nuestras Escuelas</Link></li>
              <li><Link href="/contactos" className="hover:text-white">Contáctanos</Link></li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Fundación Kawsay. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
