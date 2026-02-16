'use client';

import { ArrowRight, Sparkles, Zap, Users, Heart } from 'lucide-react';
import Link from 'next/link';

function AboutHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-green-950 opacity-50"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tighter mb-8 glow-green text-acid-green uppercase">
          Creative Tools You Can Make Your Own
        </h1>

        <p className="text-[clamp(1.2rem,3vw,2rem)] font-bold text-neon-pink mb-6 leading-relaxed max-w-3xl mx-auto">
          We believe great work starts with great templates—then gets better when you add your touch
        </p>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-24 px-4 bg-black border-t-4 border-neon-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-neon-pink glow-pink uppercase mb-6">
            The Golden Rule
          </h2>
          <div className="w-32 h-1 bg-acid-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-acid-green pl-6">
              <h3 className="text-3xl font-black text-white uppercase mb-4">Remix Culture for Creators</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                We're living in the golden age of creation. The best ideas aren't born in a vacuum—they're built on what came before, twisted, remixed, and made personal.
              </p>
            </div>

            <div className="border-l-4 border-neon-pink pl-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                That's why we create high-quality starting points. Not cookie-cutter templates, but foundations you can truly own. Take our work, break it, rebuild it, make it yours.
              </p>
            </div>

            <div className="border-l-4 border-acid-green pl-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="text-neon-pink font-bold">The Golden Rule:</span> Start with excellence, end with your signature. That's how culture moves forward.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative overflow-hidden border-4 border-acid-green">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-acid-green font-black text-2xl uppercase glow-green">
                  Your Vision, Our Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-acid-green glow-green uppercase mb-6">
            Our Story
          </h2>
          <div className="w-32 h-1 bg-neon-pink mx-auto"></div>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-r from-neon-pink/10 to-transparent border-l-4 border-neon-pink p-8">
            <div className="flex items-start gap-4 mb-4">
              <Sparkles className="w-8 h-8 text-neon-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-3xl font-black text-white uppercase mb-4">How We Started</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  InkGood was born from frustration. We were tired of bland, soulless templates that all looked the same. Tired of starting from scratch every time. We wanted something different—something with personality, edge, and energy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-acid-green/10 to-transparent border-l-4 border-acid-green p-8">
            <div className="flex items-start gap-4 mb-4">
              <Zap className="w-8 h-8 text-acid-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-3xl font-black text-white uppercase mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Empower creators with high-quality starting points that don't box them in. Every product we make is designed to be a launchpad, not a cage. We want you to take our work and make it unrecognizable—that's success.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-neon-pink/10 to-transparent border-l-4 border-neon-pink p-8">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="w-8 h-8 text-neon-pink flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-3xl font-black text-white uppercase mb-4">Our Values</h3>
                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    <span className="text-neon-pink font-bold">Quality:</span> Every pixel, every line, every detail matters.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    <span className="text-acid-green font-bold">Flexibility:</span> Our products adapt to your vision, not the other way around.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    <span className="text-neon-pink font-bold">Community:</span> We're building with creators, not just for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-24 px-4 bg-black border-t-4 border-acid-green">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-neon-pink glow-pink uppercase mb-6">
            Who We Are
          </h2>
          <div className="w-32 h-1 bg-acid-green mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-4 border-neon-pink p-12 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-6">
              <Users className="w-16 h-16 text-acid-green" />
            </div>

            <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
              We're a distributed team of designers, developers, and creators
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Scattered across time zones, united by a shared obsession: making tools that creators actually want to use. We're hypebeast enthusiasts, gaming addicts, fashion lovers, and digital natives who believe the internet should be more interesting.
            </p>

            <p className="text-acid-green font-black text-xl uppercase tracking-wider">
              Remote. Restless. Ready to Build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-pink-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black text-neon-pink glow-pink uppercase mb-8">
          Ready to Create?
        </h2>

        <p className="text-2xl text-acid-green font-bold mb-12 uppercase tracking-wide">
          Start with our templates. End with your masterpiece.
        </p>

        <Link href="/#smart-grid">
          <button className="group relative bg-acid-green text-black font-black text-2xl px-12 py-6 uppercase tracking-wider hover:bg-neon-pink transition-all duration-300 box-glow-green hover:box-glow-pink">
            <span className="flex items-center gap-3">
              Browse Our Products
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <AboutHero />
      <Philosophy />
      <Story />
      <Team />
      <CTA />

      <footer className="bg-black border-t-2 border-acid-green py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neon-pink font-black text-3xl uppercase mb-4 glow-pink">INKGOOD.</p>
          <p className="text-white uppercase tracking-widest text-sm mb-2">Digital Grunge Culture</p>
          <p className="text-acid-green text-xs uppercase tracking-wider">Est. 2026 - All Chaos Reserved</p>
        </div>
      </footer>
    </main>
  );
}
