import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/React-Website-Template',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
