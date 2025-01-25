import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';

export default function Information() {
  return (
    <Layout>
      <PageHeader 
        title="Información" 
        description="Conoce más sobre nuestra organización y trabajo"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Presentación</h2>
              <p className="text-gray-700">
                Conoce más sobre nuestra organización y su impacto en la comunidad.
              </p>
              <a href="/informacion/presentacion" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Leer más →
              </a>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Propósito</h2>
              <p className="text-gray-700">
                Descubre nuestra razón de ser y los objetivos que perseguimos.
              </p>
              <a href="/informacion/proposito" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Leer más →
              </a>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Metodología</h2>
              <p className="text-gray-700">
                Explora nuestro enfoque y métodos de trabajo.
              </p>
              <a href="/informacion/metodologia" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Leer más →
              </a>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Ejes Temáticos</h2>
              <p className="text-gray-700">
                Conoce las áreas principales en las que enfocamos nuestro trabajo.
              </p>
              <a href="/informacion/ejes-tematicos" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
                Leer más →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}