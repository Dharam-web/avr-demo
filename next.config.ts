import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "eazotel-clients-images.s3.ap-south-1.amazonaws.com",
    //   },

    //   {
    //     protocol: "https",
    //     hostname: "cdn.builder.io",
    //   },
    // ]
    unoptimized: true,
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
