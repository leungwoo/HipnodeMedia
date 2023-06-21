/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'example.com', 'res.cloudinary.com'] },
  async rewrites() {
    return [
      {
        source: '/api/post',
        // destination: 'http://localhost:3000/api/post',
        destination: 'https://hipnode-ten.vercel.app/api/post',
      },
    ];
  },
};

module.exports = nextConfig;
