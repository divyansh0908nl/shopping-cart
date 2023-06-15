module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@jadoo/design-system', '@jadoo/services', '@jadoo/apis'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.31.44',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
  },
};
