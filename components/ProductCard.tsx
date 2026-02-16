'use client';

import { ShoppingCart, Tag } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  view: 'grid' | 'list';
}

export default function ProductCard({ product, view }: ProductCardProps) {
  const { addToCart } = useCart();

  if (view === 'list') {
    return (
      <div className="border-2 border-acid-green/30 hover:border-neon-pink transition-all duration-300 p-4 flex gap-6">
        <div className="w-48 h-36 flex-shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-acid-green font-bold uppercase text-xs border border-acid-green px-2 py-1">
                {product.category}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase mb-2">{product.name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.tags.map((tag) => (
                <span key={tag} className="text-gray-400 text-xs uppercase">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-neon-pink font-black text-3xl glow-pink">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-neon-pink text-black font-black px-8 py-3 uppercase text-sm hover:bg-acid-green transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group border-2 border-acid-green/30 hover:border-neon-pink transition-all duration-300 overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-black border-2 border-acid-green px-3 py-1 flex items-center gap-1">
            <Tag className="w-3 h-3 text-acid-green" />
            <span className="text-acid-green font-bold uppercase text-xs">{product.category}</span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-black">
        <h3 className="text-xl font-black text-white uppercase mb-2 leading-tight">{product.name}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag) => (
            <span key={tag} className="text-gray-400 text-xs uppercase">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-neon-pink font-black text-2xl glow-pink">${product.price}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-neon-pink text-black font-black py-3 uppercase text-sm hover:bg-acid-green transition-colors flex items-center justify-center gap-2 box-glow-pink hover:box-glow-green"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
