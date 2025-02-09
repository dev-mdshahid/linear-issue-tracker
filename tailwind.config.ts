import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          from: "#465EB7",
          to: "#6D40D2",
        },
        dark: {
          100: "#27272A",
          200: "#1C1D1F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
