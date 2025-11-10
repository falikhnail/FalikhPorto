import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
  },
  
  // Development settings (will be overridden in production)
  ...(process.env.NODE_ENV === 'development' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          ignored: ['**/*'],
        };
      }
      return config;
    },
  }),
};

export default nextConfig;