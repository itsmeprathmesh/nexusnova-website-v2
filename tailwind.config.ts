import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: "#0A0D14",
          surface: "#111827",
          card: "#1A1F2E",
          line: "rgba(255,255,255,0.08)",
          blue: "#0D6EFD",
          purple: "#7B2CF5",
          magenta: "#D946EF",
          lavender: "#A78BFA",
          muted: "#94A3B8",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(123,44,245,.22)",
        blueGlow: "0 18px 50px rgba(13,110,253,.22)",
      },
      backgroundImage: {
        "nova-gradient":
          "linear-gradient(135deg,#0D6EFD 0%,#7B2CF5 55%,#D946EF 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
