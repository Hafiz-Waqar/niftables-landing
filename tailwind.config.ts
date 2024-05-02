import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // From Small to big
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi_regular: ["Satoshi-Regular", "Satoshi", "sans-serif"],
        satoshi_medium: ["Satoshi-Medium", "Satoshi", "sans-serif"],
        satoshi_bold: ["Satoshi-Bold", "Satoshi", "sans-serif"],
        monument_extended: [
          "MonumentExtended-Regular",
          "Monument Extended",
          "sans-serif",
        ],
      },
      colors: {
        "purple-shade": {
          1: "#AB23FF",
        },
        "black-shade": {
          1: "#13171D",
        },
      },
    },
  },
  plugins: [],
};
export default config;
