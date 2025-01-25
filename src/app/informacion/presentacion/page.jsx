import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/common/PageHeader';

export default function Presentation() {
  return (
    <Layout>
      <PageHeader 
        title="Presentación" 
        description="Conoce más sobre nuestra organización"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenido principal */}
          <div className="prose prose-lg mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">La Escuela de Formación de Líderes “Sumak Kawsay”</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La Escuela de Formación de Líderes “Sumak Kawsay” es una estrategia política de concienciación organizativa, ideológica y política dirigida para los dirigentes y líderes de las organizaciones; la misma viene desarrollando desde el año 2013. Es un espacio de compartimiento de conocimientos desde la legitimidad social, ideológica y política. 
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Metodológicamente se realiza a través de seminarios y talleres de capacitación organizativa, política, económica, social, cultural y ambiental, enmarcado en los derechos de los pueblos indígenas. Lleva su nombre “Sumak Kawsay”, porque es un paradigma organizativo, político, plurinacional e intercultural para fortalecer el sistema de organización comunitaria. Este sistema dinamiza y armoniza las relaciones organizativas, sociales, políticas y económicas, guiado por los principios y valores de convivencia para una sociedad solidaria, recíproca y equitativa.
            </p>

            {/* Imagen representativa */}
            <div className="mb-8">
              <img 
                src="/images/educacion2.jpg" // Aquí debes poner la ruta correcta de la imagen
                alt="Escuela de Formación de Líderes Sumak Kawsay"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Más contenido, si es necesario */}
            <p className="text-gray-600 leading-relaxed">
              El proceso de formación continúa siendo un pilar fundamental en la consolidación de una comunidad más justa y equitativa. A lo largo de los años, más de cientos de líderes han sido capacitados, convirtiéndose en referentes para las futuras generaciones de líderes comunitarios.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
