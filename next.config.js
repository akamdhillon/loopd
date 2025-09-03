/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow builds to succeed even with ESLint errors during development
    ignoreDuringBuilds: false,
  },
  images: {
    domains: [], // Add external image domains here if needed
  },
  experimental: {
    // Enable any experimental features if needed
  }
}

module.exports = nextConfig
