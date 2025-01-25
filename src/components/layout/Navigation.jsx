'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/config/navigation';
import { usePathname } from 'next/navigation'; // <-- Importar el hook para Next.js 13 (App Router)

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Para obtener la ruta actual
  const pathname = usePathname();

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 }
  };

  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex space-x-1">
        {navigationItems.map((item) => {
          // Verifica si el ítem actual coincide con la ruta actual
          const isActive = pathname === item.href;

          return (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Aplica estilos condicionales si está activo
                  className={`nav-link text-xs xl:text-sm font-medium tracking-wide px-1.5 ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } ${
                    item.isHighlighted
                      ? 'bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700 hover:text-white whitespace-nowrap'
                      : ''
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  // Aplica clases condicionales si está activo
                  className={`nav-link text-xs xl:text-sm font-medium tracking-wide px-1.5 ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } ${
                    item.isHighlighted
                      ? 'bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700 hover:text-white whitespace-nowrap'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdownItems && hoveredItem === item.name && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-36 bg-white rounded-lg shadow-xl py-1 z-50"
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className={`block px-2 py-1 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap ${
                          dropdownItem.isHighlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : ''
                        }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
