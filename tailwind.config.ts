import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pembe: "#f96a9a",
          mor: "#56509f",
          turuncu: "#ff5f2e",
          mavi: "#439fdf",
          yesil: "#8DC63F",
          koyu: "#033b62",
          gri: "#666666",
          acik: "#e2eaf1",
          krem: "#FFFBF0",
        },
      },
      fontFamily: {
        sans: ["Source Sans 3", "Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
