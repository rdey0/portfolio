import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "white-glow": "0 0 10px 2px rgba(255, 255, 255, 0.15)",
        "project-graphic":
          "0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        ms: "0.25rem",
      },
      fontSize: {
        hero: ["36px", { lineHeight: "42px", fontWeight: "700" }],
        hero2: ["32px", { lineHeight: "38px", fontWeight: "700" }],
        title: ["20px", { lineHeight: "24px", fontWeight: "500" }],
        subheader: ["16px", { lineHeight: "19px", fontWeight: "600" }],
        sm: ["12px", { lineHeight: "15px", fontWeight: "400" }],
        base: ["14px", { lineHeight: "17px", fontWeight: "400" }],
        lg: ["16px", { lineHeight: "19px", fontWeight: "400" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "off-white": "#EEEEEE",
        "off-black": "#191919",
        charcoal: {
          active: "#4D4D4D",
          light: "#D3D3D3",
          medium: "#9CA3AF",
          dawn: "#282828",
          dusk: "#232323",
          duskActive: "#2B2B2B",
          midnight: "#191919",
        },
        mint: {
          active: "#1B3F3A",
          dark: "#153530",
          light: "#5EEAD4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
