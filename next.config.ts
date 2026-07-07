import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/direction-e",           destination: "/",           permanent: true },
      { source: "/direction-e/about",      destination: "/about",      permanent: true },
      { source: "/direction-e/work/:slug", destination: "/work/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
