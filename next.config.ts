import type {Metadata} from 'next';

const nextConfig: Metadata = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // we had an issue before
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
};

export default nextConfig;
