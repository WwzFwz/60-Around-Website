import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
// const lineClamp = require('@tailwindcss/line-clamp');
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins","sans-serif"],
        // sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [ ],
} satisfies Config;
