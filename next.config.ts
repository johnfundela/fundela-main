import type { NextConfig } from "next";
import  dotenv  from "dotenv";
dotenv.config();
const nextConfig: NextConfig = {
  env: {
    GOOGLE_MAP_API: process.env.GOOGLE_MAP_API
  },
};

export default nextConfig;
