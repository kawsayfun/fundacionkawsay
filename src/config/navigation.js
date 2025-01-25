export const navigationItems = [
  { 
    name: 'INICIO', 
    href: '/' 
  },
  {
    name: 'INSTITUCIÓN',
    href: '/institucion',
    dropdownItems: [
      { name: 'Historia', href: '/institucion/historia' },
      { name: 'Misión y Visión', href: '/institucion/mision-vision' },
      { name: 'Objetivos', href: '/institucion/objetivos' },
      { name: 'Área de Acción', href: '/institucion/area-accion' }
    ]
  },
  {
    name: 'INFORMACIÓN',
    href: '/informacion',
    dropdownItems: [
      { name: 'Presentación', href: '/informacion/presentacion' },
      { name: 'Propósito', href: '/informacion/proposito' },
      { name: 'Metodología', href: '/informacion/metodologia' },
      { name: 'Ejes Temáticos', href: '/informacion/ejes-tematicos' },
      { name: 'Multimedia', href: '/multimedia' }
    ]
  },
  { 
    name: 'ESCUELAS', 
    href: '/escuelas' 
  },
  { 
    name: 'BIBLIOTECA', 
    href: '/biblioteca' 
  },
  { 
    name: 'PLATAFORMA', 
    href: 'https://moodle.kawsay.org',
    isExternal: true,
    isHighlighted: true
  },
  { 
    name: 'CONTACTOS', 
    href: '/contactos' 
  }
];