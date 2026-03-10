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
    ];
  },
};

export default nextConfig;
