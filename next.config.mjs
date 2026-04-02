/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/waitlist",
        destination: "/#waitlist",
        permanent: true,
      },
      {
        source: "/waitlist/",
        destination: "/#waitlist",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.getgroomgrid.com",
          },
        ],
        destination: "https://getgroomgrid.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
