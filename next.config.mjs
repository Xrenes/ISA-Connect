/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ISA-Connect',
  assetPrefix: '/ISA-Connect/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
