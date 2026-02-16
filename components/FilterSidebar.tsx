'use client';

import { Check } from 'lucide-react';

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const categories = ['Templates', 'Typography', 'Presets', 'Social'];
const tags = ['Layout', 'Web Design', 'Premium', 'Fonts', 'Editorial', 'Modern', 'Color Grading', 'Film', 'Professional', 'Instagram', 'TikTok', 'Video', 'UI Kit', 'Components', 'React', 'Effects', 'Cyberpunk', 'Streetwear', 'Bold', 'Fashion', 'Stories', 'Animated'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: 100 },
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 - $35', min: 25, max: 35 },
  { label: '$35 - $50', min: 35, max: 50 },
  { label: 'Over $50', min: 50, max: 100 },
];

export default function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  selectedTags,
  setSelectedTags,
}: FilterSidebarProps) {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-black text-neon-pink uppercase mb-4 glow-pink border-b-2 border-neon-pink pb-2">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-neon-pink border-neon-pink'
                    : 'border-acid-green group-hover:border-neon-pink'
                }`}
              >
                {selectedCategories.includes(category) && (
                  <Check className="w-4 h-4 text-black" />
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span className="text-white font-bold uppercase text-sm group-hover:text-neon-pink transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black text-acid-green uppercase mb-4 glow-green border-b-2 border-acid-green pb-2">
          Price Range
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  priceRange[0] === range.min && priceRange[1] === range.max
                    ? 'border-acid-green'
                    : 'border-gray-600 group-hover:border-acid-green'
                }`}
              >
                {priceRange[0] === range.min && priceRange[1] === range.max && (
                  <div className="w-2.5 h-2.5 rounded-full bg-acid-green"></div>
                )}
              </div>
              <input
                type="radio"
                className="sr-only"
                checked={priceRange[0] === range.min && priceRange[1] === range.max}
                onChange={() => setPriceRange([range.min, range.max])}
              />
              <span className="text-white font-bold text-sm group-hover:text-acid-green transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black text-neon-pink uppercase mb-4 glow-pink border-b-2 border-neon-pink pb-2">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-xs font-bold uppercase border-2 transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-acid-green text-black border-acid-green'
                  : 'text-white border-acid-green/30 hover:border-neon-pink hover:text-neon-pink'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {(selectedCategories.length > 0 || selectedTags.length > 0 || priceRange[0] !== 0 || priceRange[1] !== 100) && (
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedTags([]);
            setPriceRange([0, 100]);
          }}
          className="w-full bg-neon-pink/10 border-2 border-neon-pink text-neon-pink font-black py-3 uppercase text-sm hover:bg-neon-pink hover:text-black transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
