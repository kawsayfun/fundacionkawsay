'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y Nombre */}
          <div className="flex items-center space-x-3">
            <Link href="/" aria-label="Ir al inicio" className="flex items-center space-x-2">
              <Image
                src="/images/logoyoutube.png"
                alt="Logo Fundación Kawsay"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Kawsay</span>
            </Link>
          </div>

          {/* Menú de Navegación */}
          <Navigation />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}
