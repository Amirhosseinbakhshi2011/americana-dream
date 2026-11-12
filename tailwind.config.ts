import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        retro: ["var(--font-display)", "Impact", "sans-serif"],
      },
      colors: {
        cream: "#f5f0e6",
        aged: "#e8dcc8",
        rust: "#8B1E1E",
        navy: "#1a2a4a",
        stripe: "#c41e3a",
      },
    },
  },
  plugins: [],
};

export default config;
