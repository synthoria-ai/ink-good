'use client';

import { useState } from 'react';
import { Grid, List, SlidersHorizontal, X } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';

const products: Product[] = [
  {
    id: 1,
    name: 'The Edit Layout Kit',
    price: 49,
    category: 'Templates',
    tags: ['Layout', 'Web Design', 'Premium'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Editorial Type Set',
    price: 24,
    category: 'Typography',
    tags: ['Fonts', 'Editorial', 'Modern'],
    image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Cinematic Grade Pack',
    price: 28,
    category: 'Presets',
    tags: ['Color Grading', 'Film', 'Professional'],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Social Cut Templates',
    price: 22,
    category: 'Social',
    tags: ['Instagram', 'TikTok', 'Video'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Neon UI Components',
    price: 39,
    category: 'Templates',
    tags: ['UI Kit', 'Components', 'React'],
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Glitch Effect Bundle',
    price: 32,
    category: 'Presets',
    tags: ['Effects', 'Cyberpunk', 'Video'],
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 7,
    name: 'Hypebeast Font Pack',
    price: 29,
    category: 'Typography',
    tags: ['Streetwear', 'Bold', 'Fashion'],
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    name: 'Story Templates Pro',
    price: 27,
    category: 'Social',
    tags: ['Stories', 'Instagram', 'Animated'],
    image: 'https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ShopPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => product.tags.includes(tag));
    return matchesCategory && matchesPrice && matchesTags;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <main className="bg-black min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-neon-pink glow-pink uppercase mb-4">
            Shop
          </h1>
          <p className="text-acid-green text-xl uppercase tracking-wider">
            Premium Tools for Creators
          </p>
        </div>

        <div className="flex gap-8">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-neon-pink pb-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-neon-pink text-black font-black px-4 py-2 uppercase text-sm hover:bg-acid-green transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <p className="text-white font-bold">
                  <span className="text-acid-green">{sortedProducts.length}</span> Products
                </p>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black border-2 border-acid-green text-white font-bold px-4 py-2 uppercase text-sm focus:border-neon-pink focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>

                <div className="flex gap-2 border-2 border-acid-green p-1">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 ${view === 'grid' ? 'bg-neon-pink text-black' : 'text-white hover:text-neon-pink'} transition-colors`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 ${view === 'list' ? 'bg-neon-pink text-black' : 'text-white hover:text-neon-pink'} transition-colors`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12 border-2 border-acid-green/30">
                <p className="text-gray-400 text-lg font-bold uppercase">No products found</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className={
                view === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'flex flex-col gap-4'
              }>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} view={view} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-full sm:w-80 bg-black border-r-4 border-neon-pink z-50 lg:hidden overflow-y-auto">
            <div className="p-6 border-b-2 border-neon-pink flex items-center justify-between">
              <h2 className="text-2xl font-black text-neon-pink uppercase glow-pink">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-acid-green hover:text-neon-pink transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="p-6">
              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            </div>
          </div>
        </>
      )}

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
