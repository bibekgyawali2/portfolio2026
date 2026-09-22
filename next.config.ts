import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Fully static site: `next build` emits plain HTML/CSS into out/.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default config;
