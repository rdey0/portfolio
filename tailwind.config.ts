import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
          light: "#D3D3D3",
          medium: "#9CA3AF",
          dawn: "#282828",
          dusk: "#232323",
          midnight: "#191919",
        },
        mint: {
          dark: "#153530",
          light: "#5EEAD4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
