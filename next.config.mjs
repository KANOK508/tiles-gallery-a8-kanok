/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Covers your tile hosting domain links safely
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Safe structural declaration for Google Avatar accounts
      },
    ],
  },
};

export default nextConfig;