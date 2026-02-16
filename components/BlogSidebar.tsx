'use client';

import { useState } from 'react';
import { Tag, Clock, Mail, ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Tutorials', count: 12 },
  { name: 'Process', count: 8 },
  { name: 'Community', count: 15 },
  { name: 'Trends', count: 10 },
  { name: 'Marketing', count: 7 },
  { name: 'Philosophy', count: 5 },
];

const recentPosts = [
  {
    id: 1,
    title: '5 Ways to Customize Editorial Templates',
    date: '2026-02-10',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Behind the Scenes: Creating Cinematic Presets',
    date: '2026-02-08',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Community Spotlight: How Sarah Remixed The Edit Kit',
    date: '2026-02-05',
    readTime: '6 min',
  },
];

export default function BlogSidebar() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <div className="border-2 border-neon-pink p-6 bg-black">
        <div className="flex items-center gap-2 mb-6">
          <Tag className="w-5 h-5 text-neon-pink" />
          <h3 className="text-xl font-black text-neon-pink uppercase glow-pink">Categories</h3>
        </div>
        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="w-full flex items-center justify-between p-3 border border-acid-green/30 hover:border-neon-pink hover:bg-neon-pink/5 transition-all group"
            >
              <span className="text-white font-bold uppercase text-sm group-hover:text-neon-pink transition-colors">
                {category.name}
              </span>
              <span className="text-acid-green font-black text-sm group-hover:text-neon-pink transition-colors">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-2 border-acid-green p-6 bg-black">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-acid-green" />
          <h3 className="text-xl font-black text-acid-green uppercase glow-green">Recent Posts</h3>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="pb-4 border-b border-acid-green/20 last:border-0 last:pb-0 group cursor-pointer"
            >
              <h4 className="text-white font-bold text-sm leading-tight mb-2 group-hover:text-acid-green transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-400 uppercase">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-neon-pink p-6 bg-gradient-to-b from-pink-950/20 to-black">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-neon-pink" />
          <h3 className="text-xl font-black text-neon-pink uppercase glow-pink">Newsletter</h3>
        </div>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          Get the latest tutorials, inspiration, and product drops straight to your inbox.
        </p>

        {isSubmitted ? (
          <div className="bg-acid-green/10 border-2 border-acid-green p-4 text-center">
            <p className="text-acid-green font-black uppercase text-sm">
              ✓ Subscribed!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL"
              required
              className="w-full bg-black border-2 border-acid-green text-white font-bold px-4 py-3 uppercase text-sm placeholder:text-gray-600 focus:border-neon-pink focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-neon-pink text-black font-black py-3 uppercase text-sm hover:bg-acid-green transition-colors flex items-center justify-center gap-2 box-glow-pink hover:box-glow-green"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-gray-500 text-xs mt-3 text-center uppercase">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
