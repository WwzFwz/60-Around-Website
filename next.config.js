// // /**
// //  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
// //  * for Docker builds.
// //  */
// // await import("./src/env.js");

// // /** @type {import("next").NextConfig} */
// // const config = {};

// // export default config;


// // next.config.js

// await import("./src/env.js");

// /** @type {import("next").NextConfig} */
// const config = {
//   images: {
//     domains: ['cbcbfvvlzsalhunyonzv.supabase.co'], 
//   },
// };

// export default config;


// next.config.js

// Import environment variables or run env validation
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  // Image configuration
  images: {
    domains: ['cbcbfvvlzsalhunyonzv.supabase.co'], // Allow images from this domain
  },typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  // Optionally add other Next.js configurations
  // e.g., ESLint configuration or any custom build config:
  },eslint: {
    // You can choose to ignore ESLint during builds if needed
    ignoreDuringBuilds: true,
  },
};

export default config;
