import { blogs } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogs.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogs.find(b => b.id === resolvedParams.id);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>
      
      <header className="mb-10 text-center">
        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
      </header>

      <div className="mx-auto text-gray-700 max-w-none text-lg leading-relaxed">
        <p className="text-xl text-gray-600 mb-8 font-medium">
          {post.excerpt}
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Introduction</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros ut justo pulvinar 
          sollicitudin. Nunc in interdum tellus. Vivamus at facilisis justo. Praesent at congue mi.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Understand the Basics</h2>
        <p className="mb-6">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Leverage AI for Productivity</h2>
        <p className="mb-6">
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id 
          dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8 italic text-center">
          &quot;AI won&apos;t replace you, but someone using AI will.&quot; - Anonymous
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
        <p className="mb-6">
          Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque 
          nec, egestas non nisi. Proin eget tortor risus.
        </p>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 mb-4">Share this article</p>
        <div className="flex justify-center gap-4">
          <button suppressHydrationWarning className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">Twitter</button>
          <button suppressHydrationWarning className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">LinkedIn</button>
          <button suppressHydrationWarning className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">Facebook</button>
        </div>
      </div>
    </article>
  );
}
