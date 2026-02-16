'use client';

import { Calendar, Clock, User } from 'lucide-react';
import BlogSidebar from '@/components/BlogSidebar';

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
}

const articles: BlogArticle[] = [
  {
    id: 1,
    title: '5 Ways to Customize Editorial Templates',
    excerpt: 'Learn how to take our Editorial Type Set and make it uniquely yours. From font pairing to layout tweaks, discover the secrets to standing out.',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2026-02-10',
    readTime: '5 min',
    author: 'Luna Maher',
    category: 'Tutorials',
  },
  {
    id: 2,
    title: 'Behind the Scenes: Creating Cinematic Presets',
    excerpt: 'A deep dive into our creative process. See how we develop color grades that transform ordinary footage into cinematic masterpieces.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2026-02-08',
    readTime: '8 min',
    author: 'Aria Lee',
    category: 'Process',
  },
  {
    id: 3,
    title: 'Community Spotlight: How Sarah Remixed The Edit Kit',
    excerpt: "Sarah took our Edit Layout Kit and created something completely unexpected. Here's her story and the lessons she learned along the way.",
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2026-02-05',
    readTime: '6 min',
    author: 'Kaia Schmidt',
    category: 'Community',
  },
  {
    id: 4,
    title: 'Typography Trends: Bold & Unapologetic',
    excerpt: 'Why 2026 is the year of experimental typography. Explore the rebellious fonts and layouts dominating digital design right now.',
    image: 'https://images.pexels.com/photos/7375/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
    date: '2026-02-03',
    readTime: '7 min',
    author: 'Hanna Sop-Choi',
    category: 'Trends',
  },
  {
    id: 5,
    title: 'Social Templates That Actually Convert',
    excerpt: 'Not all templates are created equal. Learn which design elements drive engagement and how to optimize your social content.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2026-01-30',
    readTime: '5 min',
    author: 'Zara Rodriguez',
    category: 'Marketing',
  },
  {
    id: 6,
    title: 'The Art of Digital Remixing',
    excerpt: 'Remixing is more than copying—it\'s about transformation. Discover the mindset and techniques that separate good remixes from great ones.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2026-01-28',
    readTime: '10 min',
    author: 'Sekuri Moon',
    category: 'Philosophy',
  },
];

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <article className="group border-2 border-acid-green/30 hover:border-neon-pink transition-all duration-300 overflow-hidden bg-black">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-neon-pink text-black px-3 py-1 font-black uppercase text-xs">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-xs uppercase text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <time>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
        </div>

        <h2 className="text-2xl font-black text-white uppercase mb-3 leading-tight group-hover:text-neon-pink transition-colors">
          {article.title}
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>

        <button className="text-acid-green font-black uppercase text-sm hover:text-neon-pink transition-colors flex items-center gap-2 group-hover:gap-3">
          Read More →
        </button>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-pink-950/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-neon-pink glow-pink uppercase mb-4">
            Stories & Inspiration
          </h1>
          <p className="text-acid-green text-xl uppercase tracking-wider">
            Ideas, Tutorials & Community Highlights
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          <aside className="lg:w-80 flex-shrink-0">
            <BlogSidebar />
          </aside>
        </div>
      </div>

      <footer className="bg-black border-t-2 border-acid-green py-12 px-4 mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neon-pink font-black text-3xl uppercase mb-4 glow-pink">INKGOOD.</p>
          <p className="text-white uppercase tracking-widest text-sm mb-2">Digital Grunge Culture</p>
          <p className="text-acid-green text-xs uppercase tracking-wider">Est. 2026 - All Chaos Reserved</p>
        </div>
      </footer>
    </main>
  );
}
