/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        domains: ['cdn.sanity.io'],
      },
     
  /* webpack(config, { dev, isServer }) {
              if (dev || !isServer) {
                config.devtool = "cheap-module-source-map";
              }
  
        return config;
            }, */
      
}; 

export default nextConfig;
