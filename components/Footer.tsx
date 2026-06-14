import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-bold text-xl tracking-tight text-gray-900">AI Tools Hub</span>
            <p className="mt-4 text-sm text-gray-500">
              The internet&apos;s best directory for discovering AI tools, prompts, and comparisons.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Directory</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/tools" className="text-sm text-gray-600 hover:text-blue-600">All AI Tools</Link></li>
              <li><Link href="/free" className="text-sm text-gray-600 hover:text-blue-600">Free AI Tools</Link></li>
              <li><Link href="/tools?category=Writing" className="text-sm text-gray-600 hover:text-blue-600">AI Writing</Link></li>
              <li><Link href="/tools?category=Image" className="text-sm text-gray-600 hover:text-blue-600">AI Image Generator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/prompts" className="text-sm text-gray-600 hover:text-blue-600">Prompt Library</Link></li>
              <li><Link href="/compare" className="text-sm text-gray-600 hover:text-blue-600">Tool Comparisons</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AI Tools Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
