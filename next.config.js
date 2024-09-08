

// // Import environment variables or run env validation
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

// next.config.js

// Import environment variables or run environment validation
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  // Image configuration
  images: {
    // Use the new `remotePatterns` instead of `domains` as recommended by Next.js
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cbcbfvvlzsalhunyonzv.supabase.co',
        pathname: '/**', // Allow all images from this domain
      },
    ],
  },

  // TypeScript configuration
  typescript: {
    // Allow production builds to complete even with type errors (use with caution)
    ignoreBuildErrors: true,
  },

  // ESLint configuration
  eslint: {
    // Ignore ESLint errors during builds if necessary
    ignoreDuringBuilds: true,
  },

  // You can add more Next.js configurations here as needed
};

export default config;

