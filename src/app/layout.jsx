import './globals.css'

export const metadata = {
  title: 'Fundación Kawsay',
  description: 'Organización no Gubernamental sin fines de Lucro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}