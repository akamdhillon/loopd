import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff6ed",
          100: "#ffead5",
          200: "#fed3aa",
          300: "#fcb141",
          400: "#f7954a",
          500: "#ee7b40",
          600: "#df553a",
          700: "#b9432c",
          800: "#933627",
          900: "#772f24",
        },
        secondary: {
          50: "#f4f0ff",
          100: "#ebe3ff",
          200: "#d9cbff",
          300: "#bea4fe",
          400: "#9c72fa",
          500: "#7c45f2",
          600: "#5d18e7",
          700: "#4e12c4",
          800: "#410f9f",
          900: "#360d80",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.375rem",
        "2xl": "1.625rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
