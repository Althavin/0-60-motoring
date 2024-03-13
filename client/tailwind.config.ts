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
        primary: "#FA0F0F",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        green:  "#0A9B44",
        darkRed: "#FA0F0F",
        red: "#f38d8d",
        dark: "#111111",
        light: "#f4f4f4",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
