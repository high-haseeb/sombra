import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        gradientIn: {
          "0%": { transform: "translateX(-100vw)",width:'100%', opacity: '0' },
          "80%": { transform: "", width:'50%',opacity: '1' },
          "100%": { transform: "translateX(-40vw)",width:'10%', opacity: '0' },
        },
        gradientInRight: {
          "0%": { transform: "translateX(100vw)",width:'100%', opacity: '0' },
          "80%": { transform: "", width:'50%',opacity: '1' },
          "100%": { transform: "translateX(40vw)",width:'10%', opacity: '0' },
        },
      },
    },
    animation: {
      "gradient-in-left": "gradientIn 5s ease-in-out infinite",
      "gradient-in-right": "gradientInRight 5s ease-in-out infinite",
    },
  },
  plugins: [],
};
export default config;
