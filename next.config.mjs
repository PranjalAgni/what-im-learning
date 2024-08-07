/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
