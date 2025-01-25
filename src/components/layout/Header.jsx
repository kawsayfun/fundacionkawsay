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
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logoyoutube.png"
                alt="Kawsay Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Kawsay</span>
            </Link>
          </div>
          
          <Navigation />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}