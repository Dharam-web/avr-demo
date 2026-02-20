import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideNext: {
          '0%': { transform: 'translateX(100%)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "1" },
        },
        slidePrev: {
          '0%': { transform: 'translateX(-100%)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "1" },
        },
      },
      animation: {
        'slide-next': 'slideNext 0.3s ease-in-out',
        'slide-prev': 'slidePrev 0.3s ease-in-out',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#183F62",
        secondary: "#FFA500",
        tertiary: "#F2B203",
        light1: "#606060",
        light2: "#6D6D6D",
        normal: "#393939",
        dark: "#363636",
        light: "#CECECE",
        bg1: "#F1F7ED",
        clr: "#2F4B26",
        clr1: "#FF6913",
        // clr1: "#FF8A47",
        clr2:"#F9F9F1",
        extraLight: "#9A9A9A",
        Light: "#686767",
        Light1: "#E4E4E4",
        Light2: "#B2B2B2",
        strokeLight: "#F3F3F3",
      },
    },
  },
  plugins: [],
} satisfies Config;
