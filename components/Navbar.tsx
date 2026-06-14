import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
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
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/tools" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">AI Tools</Link>
            <Link href="/free" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Free Tools</Link>
            <Link href="/prompts" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Prompts</Link>
            <Link href="/compare" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Comparisons</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Submit Tool</a>
          </div>

          <div className="flex md:hidden items-center">
            <button suppressHydrationWarning className="text-gray-600 hover:text-gray-900 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
