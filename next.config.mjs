/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🟢 ini yang bikin hasilnya jadi statis
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
