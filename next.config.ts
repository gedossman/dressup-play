import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
