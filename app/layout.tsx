import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'AI Tools Hub - Find the Best AI Tools',
  description: '1000+ AI tools for writing, coding, design, marketing, video and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="0RU9hPsGz2fca_R-EREqHVXU6QHqak-TpnEYEXCANFU" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6109405882868590"
          crossOrigin="anonymous"
        ></script>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V6VK2MRD8M"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V6VK2MRD8M');
            `,
          }}
        />
      </head>

      <body
        suppressHydrationWarning
        className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col"
      >
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}