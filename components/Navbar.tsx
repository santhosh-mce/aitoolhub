'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="border-b bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <Search className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">AI Tools Hub</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/tools" className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">AI Tools</Link>
            <Link href="/free" className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Free Tools</Link>
            <Link href="/prompts" className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Prompts</Link>
            <Link href="/compare" className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Comparisons</Link>
            /* <Link href="/blog" className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Blog</Link> */
            <a href="#" className="whitespace-nowrap bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Submit Tool</a>
          </div>

          <div className="flex lg:hidden items-center">
            <button 
              suppressHydrationWarning 
              className="text-gray-600 hover:text-gray-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Floating Glass Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          <div className="absolute top-2 right-2 bottom-2 w-[85%] max-w-sm bg-white/75 backdrop-blur-xl border border-white/50 shadow-2xl flex flex-col rounded-3xl overflow-hidden animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-900/5 bg-white/30">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
                  <Search className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">AI Tools Hub</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-900/5 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Links */}
            <div className="flex flex-col gap-2 p-6 overflow-y-auto">
              <Link href="/tools" className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-white/60 px-4 py-3 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>AI Tools</Link>
              <Link href="/free" className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-white/60 px-4 py-3 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Free Tools</Link>
              <Link href="/prompts" className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-white/60 px-4 py-3 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Prompts</Link>
              <Link href="/compare" className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-white/60 px-4 py-3 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Comparisons</Link>
              <Link href="/blog" className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-white/60 px-4 py-3 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              
              <div className="mt-4 pt-4 border-t border-gray-900/5">
                <a href="#" className="flex px-4 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Submit Tool</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
