import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          turkuaz: "#4ABDBD",
          fusya: "#E91E8C",
          turuncu: "#F7941D",
          yesil: "#8DC63F",
          koyu: "#2D3748",
          gri: "#718096",
          acik: "#F7FAFC",
          krem: "#FFFBF0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
