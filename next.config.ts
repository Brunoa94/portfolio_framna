import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-3eeb9c20c85d47c180ad36b8be441e05.r2.dev",
      },
    ],
  },
};

export default nextConfig;
