/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io'],
      },
      webpack(config, { dev }) {
        if (dev) {
          config.devtool = "source-map"; 
        }
        return config;
      },
};

export default nextConfig;
