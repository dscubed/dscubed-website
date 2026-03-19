import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://tmaxtrnskngkgqliahig.supabase.co/**")],
  },
};

export default nextConfig;
