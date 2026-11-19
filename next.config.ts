import type { NextConfig } from "next";

// LAUNCH SWITCH (2026-11-19): the v2 site is served at "/" through the rewrite below.
// To show the "under construction" landing again, delete the rewrite and the /v2 redirect:
// "/" then renders src/app/page.tsx (the landing) as before. The landing as it was live
// before launch is also kept on the branch "under-construction".
const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/v2" }],
    };
  },
  async redirects() {
    return [
      { source: "/v2",                    destination: "/",           permanent: false },
      { source: "/direction-e",           destination: "/",           permanent: true },
      { source: "/direction-e/about",      destination: "/about",      permanent: true },
      { source: "/direction-e/work/:slug", destination: "/work/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
