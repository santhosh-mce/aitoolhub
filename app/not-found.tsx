import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">404 - Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">Could not find the requested resource</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
