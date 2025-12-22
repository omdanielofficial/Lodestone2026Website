/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./my-loader.ts",
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  async redirects() {
    return [
      {
        source: "/terms-of-service",
        destination: "https://cdn.intranex.org/filestore/public/legal-policies/lodestone-terms-of-service.pdf", // change this
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "https://cdn.intranex.org/filestore/public/legal-policies/lodestone-privacy-policy.pdf", // change this
        permanent: true,
      },
      {
        source: "/service-level-agreement",
        destination: "https://cdn.intranex.org/filestore/public/legal-policies/lodestone-service-level-agreement.pdf", // change this
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
