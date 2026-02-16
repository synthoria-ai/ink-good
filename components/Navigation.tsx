'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartSidebar from './CartSidebar';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <>
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
              <Link href="/shop" className="bg-neon-pink text-black font-black px-6 py-3 uppercase text-sm hover:bg-acid-green transition-colors">
                Shop
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-acid-green hover:text-neon-pink transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-neon-pink text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-acid-green"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-neon-pink text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="text-neon-pink"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
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
              <Link
                href="/shop"
                className="block w-full bg-neon-pink text-black font-black px-6 py-3 uppercase text-sm hover:bg-acid-green transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </div>
          )}
        </div>
      </nav>
      <CartSidebar />
    </>
  );
}
