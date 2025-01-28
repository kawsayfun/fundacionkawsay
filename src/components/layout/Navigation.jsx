'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/config/navigation';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center" aria-label="Navegación principal">
      <ul className="flex space-x-1">
        {navigationItems.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              href={item.href}
              aria-label={`Ir a ${item.name}`}
              className={`nav-link text-xs xl:text-sm font-medium px-1.5 ${
                pathname === item.href ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>

            {item.dropdownItems && hoveredItem === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute left-0 mt-1 w-36 bg-white rounded-lg shadow-xl py-1 z-50"
              >
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className="block px-2 py-1 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {dropdownItem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
