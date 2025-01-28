import './globals.css';

export const metadata = {
  title: 'Fundación Kawsay',
  description:
  'Fundación Kawsay, una organización no gubernamental dedicada al desarrollo integral de las comunidades indígenas, promoviendo la educación, la cultura y el bienestar social.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />

        {/* Metadatos básicos */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Metadatos de redes sociales */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/logoyoutube.png" /> {/* Cambia a la URL real del logo */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacionkawsay.org" />

        {/* Metadatos para Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/logoyoutube.png" />

        {/* Diseño responsivo */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Etiquetas adicionales para SEO */}
        <link rel="canonical" href="https://www.fundacionkawsay.org" />
      </head>
      <body>{children}</body>
    </html>
  );
}
