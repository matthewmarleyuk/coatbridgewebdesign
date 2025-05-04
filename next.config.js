/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    config.cache = { type: 'memory' };
    return config;
  },
};

module.exports = nextConfig;