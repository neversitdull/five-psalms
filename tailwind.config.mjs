/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono", "mono"],
      },
      fontSize: {
        sm: "clamp(0.9rem, 0.3vi + 0.8rem, 1rem)",
        base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
        md: "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
        lg: "clamp(2.0rem, 2.0vi + 1.85rem, 2.75rem)",
        xl: "clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)",
      },
    },
  },
  plugins: [],
};
