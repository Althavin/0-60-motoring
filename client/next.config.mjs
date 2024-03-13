/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
      
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: '',
      },
      {
        protocol:"https",
        hostname: "res.cloudinary.com",
        port:""
      }
    ],
  },
};

export default nextConfig;
