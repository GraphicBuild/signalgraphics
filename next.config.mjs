/** @type {import('next').NextConfig} */
const isGhPages = process.env.GH_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGhPages
    ? {
        basePath: '/signalgraphics',
        assetPrefix: '/signalgraphics/',
      }
    : {}),
};

export default nextConfig;
