import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'AI Tools Hub - Find the Best AI Tools',
  description: '1000+ AI tools for writing, coding, design, marketing, video and more.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
