export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full">
        <div className="h-2 bg-gradient-to-r from-red-600 via-orange-500 via-yellow-400 via-green-500 via-blue-600 via-purple-600 to-pink-600" />
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fundación Kawsay</h3>
              <p className="text-gray-400">
                Trabajando por un futuro mejor para nuestra comunidad.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="text-gray-400">
                <li>Email: info@kawsay.org</li>
                <li>Teléfono: (123) 456-7890</li>
                <li>Dirección: Calle Principal #123</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="/institucion" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/escuelas" className="hover:text-white transition-colors">
                    Nuestras Escuelas
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contactos" className="hover:text-white transition-colors">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fundación Kawsay. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}