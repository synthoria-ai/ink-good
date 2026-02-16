'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-pink-950 opacity-50"></div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-tighter mb-6 glow-pink text-neon-pink uppercase animate-pulse">
          INKGOOD.
        </h1>

        <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold text-acid-green glow-green mb-12 tracking-wide uppercase">
          Culture. Fashion. Chaos.
        </p>

        <button className="group relative bg-neon-pink text-black font-black text-2xl px-12 py-6 uppercase tracking-wider hover:bg-acid-green transition-all duration-300 box-glow-pink hover:box-glow-green">
          <span className="flex items-center gap-3">
            Enter
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </span>
        </button>
      </div>

      <div className="absolute bottom-10 left-10 text-acid-green font-bold text-sm tracking-widest opacity-50">
        EST. 2026
      </div>

      <div className="absolute top-10 right-10 text-neon-pink font-bold text-sm tracking-widest opacity-50">
        DIGITAL GRUNGE
      </div>
    </section>
  );
}
