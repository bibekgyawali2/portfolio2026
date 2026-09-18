import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Fully static site: `next build` emits plain HTML/CSS into out/.
  output: "export",
};

export default config;
