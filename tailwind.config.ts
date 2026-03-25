import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0F",
          card: "#12121A",
        },
        border: {
          DEFAULT: "#1A1A2E",
        },
        cyan: {
          DEFAULT: "#00E5FF",
          50: "rgba(0, 229, 255, 0.05)",
          10: "rgba(0, 229, 255, 0.10)",
        },
        violet: {
          DEFAULT: "#7C3AED",
        },
        success: {
          DEFAULT: "#00C853",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
