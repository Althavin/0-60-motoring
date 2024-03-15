/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/googleaed096beea148fc0.html",
        destination: "/google-verification/googleaed096beea148fc0.html",
      },
    ];
  },
};

export default nextConfig;
