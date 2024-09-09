

// Import environment variables or run env validation
// await import("./src/env.js");

// /** @type {import("next").NextConfig} */
// const config = {
//   // Image configuration
//   images: {
//     domains: ['cbcbfvvlzsalhunyonzv.supabase.co'], // Allow images from this domain
//   },typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true
//   // Optionally add other Next.js configurations
//   // e.g., ESLint configuration or any custom build config:
//   },eslint: {
//     // You can choose to ignore ESLint during builds if needed
//     ignoreDuringBuilds: true,
//   },
// };

// export default config;

/** @type {import("next").NextConfig} */
const config = {
  // Image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cbcbfvvlzsalhunyonzv.supabase.co',
        pathname: '/storage/v1/object/public/placePict/**',
      },
    ],
    // Allow external SVGs (use with caution)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Optional, adds security layer
  },

  // TypeScript configuration
  typescript: {
    // Allow production builds to complete even with type errors (use with caution)
    ignoreBuildErrors: true,
  },

  // ESLint configuration
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
};

export default config;
