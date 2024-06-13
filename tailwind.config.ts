import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        merge: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "80%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(10%)", opacity: "0" },
        },
        mergeRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "80%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-10%)", opacity: "0" },
        },
      },
      animation: {
        "merge-left": "merge 2s ease-in-out forwards",
        "merge-right": "mergeRight 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
