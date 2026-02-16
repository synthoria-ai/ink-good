'use client';

import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function CartSidebar() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-black border-l-4 border-neon-pink z-50 flex flex-col">
        <div className="p-6 border-b-2 border-neon-pink flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-acid-green" />
            <h2 className="text-2xl font-black text-neon-pink uppercase glow-pink">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-acid-green hover:text-neon-pink transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg font-bold uppercase">Your cart is empty</p>
              <p className="text-gray-500 text-sm mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border-2 border-acid-green/30 p-4 hover:border-neon-pink transition-colors">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover border-2 border-neon-pink"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-black uppercase text-sm mb-1">{item.name}</h3>
                      <p className="text-acid-green text-xs uppercase mb-2">{item.category}</p>
                      <p className="text-neon-pink font-black text-lg">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-neon-pink transition-colors h-fit"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-acid-green text-black w-8 h-8 flex items-center justify-center font-black hover:bg-neon-pink transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-black text-lg w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-acid-green text-black w-8 h-8 flex items-center justify-center font-black hover:bg-neon-pink transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-white font-black text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t-2 border-neon-pink p-6 bg-black">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-black text-xl uppercase">Total:</span>
              <span className="text-acid-green font-black text-3xl glow-green">${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-neon-pink text-black font-black py-4 uppercase text-lg hover:bg-acid-green transition-colors box-glow-pink hover:box-glow-green">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
