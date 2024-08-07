/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/learning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
