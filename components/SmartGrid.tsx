'use client';

import { BookOpen, ShoppingBag, Headphones, ArrowRight, Tag } from 'lucide-react';

type ContentType = 'text' | 'offer' | 'audio';

interface ContentItem {
  id: number;
  type: ContentType;
  title: string;
  description: string;
  image: string;
  price?: number;
}

const mockContent: ContentItem[] = [
  {
    id: 1,
    type: 'text',
    title: 'K-Pop Culture Shift',
    description: 'Inside the new wave of Korean pop dominating global charts',
    image: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    type: 'offer',
    title: 'Goth Fashion Drop',
    description: 'Limited edition dark aesthetic collection',
    image: 'https://images.pexels.com/photos/7148440/pexels-photo-7148440.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 89.99,
  },
  {
    id: 3,
    type: 'audio',
    title: 'Gaming Setup Sounds',
    description: 'Ultimate mechanical keyboard ASMR playlist',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    type: 'offer',
    title: 'Cyber Streetwear',
    description: 'Y2K meets future tech aesthetics',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 129.99,
  },
  {
    id: 5,
    type: 'text',
    title: 'Alternative Music Revival',
    description: 'Underground artists breaking into mainstream',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    type: 'audio',
    title: 'Occult Ambient Mix',
    description: 'Dark ethereal soundscapes for late nights',
    image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ContentCard({ item }: { item: ContentItem }) {
  const renderCardContent = () => {
    switch (item.type) {
      case 'text':
        return (
          <div className="relative h-full group cursor-pointer overflow-hidden border-2 border-acid-green hover:border-neon-pink transition-all duration-300">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-acid-green" />
                <span className="text-acid-green font-bold text-sm uppercase tracking-wider">Read</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase leading-tight">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <div className="flex items-center text-neon-pink font-bold uppercase text-sm group-hover:gap-3 gap-2 transition-all">
                Dive In <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        );

      case 'offer':
        return (
          <div className="relative h-full group cursor-pointer overflow-hidden border-2 border-neon-pink hover:border-acid-green transition-all duration-300">
            <div className="absolute top-4 right-4 z-20 bg-acid-green text-black px-4 py-2 font-black text-sm uppercase tracking-wider rotate-3 shadow-lg">
              <Tag className="w-4 h-4 inline mr-1" />
              ${item.price}
            </div>
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="w-5 h-5 text-neon-pink" />
                <span className="text-neon-pink font-bold text-sm uppercase tracking-wider">Shop Drop</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase leading-tight">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <button className="bg-neon-pink text-black font-black py-3 px-6 uppercase text-sm hover:bg-acid-green transition-colors w-full">
                Cop Now
              </button>
            </div>
          </div>
        );

      case 'audio':
        return (
          <div className="relative h-full group cursor-pointer overflow-hidden border-2 border-white hover:border-neon-pink transition-all duration-300">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/70 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">Stream</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase leading-tight">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-1 h-8 bg-neon-pink animate-pulse"></div>
                  <div className="w-1 h-6 bg-acid-green animate-pulse delay-75"></div>
                  <div className="w-1 h-10 bg-white animate-pulse delay-150"></div>
                  <div className="w-1 h-7 bg-neon-pink animate-pulse delay-200"></div>
                  <div className="w-1 h-9 bg-acid-green animate-pulse"></div>
                </div>
                <div className="text-white font-bold uppercase text-xs">Play Now</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderCardContent();
}

export default function SmartGrid() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-neon-pink glow-pink uppercase mb-4">
            The Router
          </h2>
          <p className="text-acid-green text-xl uppercase tracking-wider">Your Gateway To Everything</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockContent.map((item) => (
            <div key={item.id} className="min-h-[400px]">
              <ContentCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
