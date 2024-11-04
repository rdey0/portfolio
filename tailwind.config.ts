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
