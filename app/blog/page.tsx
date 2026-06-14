import { blogs } from '@/lib/data';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Blog & Guides</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Learn how to use AI tools effectively, discover new workflows, and stay up to date with the latest features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(post => (
          <div key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col h-full group">
            <div className="h-48 bg-blue-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100">
               <div className="text-blue-500 opacity-20">
                 <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
               </div>
               <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md">
                 {post.category}
               </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.id}`} className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
