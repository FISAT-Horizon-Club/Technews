import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Supabase Storage hosts article and video thumbnails.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
