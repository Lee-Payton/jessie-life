/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'jessie.life' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/disclaimer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
