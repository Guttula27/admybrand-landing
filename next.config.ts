/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ FIX: Pass empty object instead of true
  },
};

export default nextConfig;
