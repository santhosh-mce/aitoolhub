'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { tools, ToolCategory } from '@/lib/data';
import { ToolCard } from '@/components/ToolCard';

const categories: ToolCategory[] = [
  "AI Assistant Tools", "AI Assistant", "AI Image Generator", "AI Video Generator", 
  "AI Coding", "AI Marketing Tools", "AI Productivity Tools", 
  "AI Education Tools", "AI Voice Tools"
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? tool.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 font-sans">
            Find the Best AI Tools for Your Work
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl font-sans">
            1000+ AI tools for writing, coding, design, marketing, video and more. Discover what AI can do for you today.
          </p>
          
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              suppressHydrationWarning
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-blue-500 bg-white shadow-lg text-lg focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              placeholder="Search AI tools (e.g., 'image generator', 'coding')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button 
            suppressHydrationWarning
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === null ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button 
              suppressHydrationWarning
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
               {category}
            </button>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {selectedCategory ? `${selectedCategory} Tools` : 'Popular AI Tools'}
          </h2>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-500">We couldn&apos;t find any tools matching your search criteria.</p>
          </div>
        )}
      </section>
      
      {/* Featured Banner (AdSense Mockup) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-4 right-6 bg-white/20 px-3 py-1 rounded text-xs font-semibold tracking-wider">SPONSORED</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Want to Feature Your AI Tool?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Reach thousands of creators, developers, and marketers by listing your product on AI Tools Hub.
          </p>
          <a href="#" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
            Get Featured Today <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
