const { withGTConfig } = require("gt-next/config");
const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");

initOpenNextCloudflareForDev();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withGTConfig(nextConfig);
