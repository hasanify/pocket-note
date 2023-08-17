/** @type {import('next').NextConfig} */

// https://little-grass-213.fly.dev/

let API_BASE_PATH = "https://quiet-water-9258.fly.dev/api";

const nextConfig = {
  publicRuntimeConfig: {
    API_BASE_PATH: API_BASE_PATH,
  },
};

module.exports = nextConfig;
