import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to
// use bindings during local development (when running the application with
// `next dev`). This function is only necessary during development and
// has no impact outside of that. For more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
setupDevPlatform().catch(console.error);

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
            source: '/home',
            destination: '/',
            permanent: true, // 恒久的なリダイレクト（308）
        },
        {
            source: '/downloads',
            destination: '/download',
            permanent: true, // 308
        },
        {
            source: '/contacts',
            destination: '/contact',
            permanent: true, // 308
        },
      ];
    },
  };

export default nextConfig;