import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? "/nextbites" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  cacheComponents: false,
};

export default nextConfig;