'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-2 border-neon-pink">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-black text-neon-pink glow-pink uppercase hover:text-acid-green transition-colors">
            INKGOOD.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white font-bold uppercase text-sm tracking-wider hover:text-neon-pink transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white font-bold uppercase text-sm tracking-wider hover:text-acid-green transition-colors">
              About
            </Link>
            <button className="bg-neon-pink text-black font-black px-6 py-3 uppercase text-sm hover:bg-acid-green transition-colors">
              Shop
            </button>
          </div>

          <button
            className="md:hidden text-neon-pink"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link
              href="/"
              className="block text-white font-bold uppercase text-sm tracking-wider hover:text-neon-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white font-bold uppercase text-sm tracking-wider hover:text-acid-green transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <button className="w-full bg-neon-pink text-black font-black px-6 py-3 uppercase text-sm hover:bg-acid-green transition-colors">
              Shop
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
