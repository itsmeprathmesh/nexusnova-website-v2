import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        neuro: {
          bg: "#030307",
          surface: "#0A0A14",
          card: "#111122",
          border: "rgba(255,255,255,0.06)",
          blue: "#4A8FE7",
          teal: "#5BC0BE",
          purple: "#8B5CF6",
          muted: "#6B7280",
          lavender: "#A78BFA",
          glow: "rgba(74,143,231,0.15)",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        glow: "0 0 60px rgba(74,143,231,0.15)",
        "glow-teal": "0 0 60px rgba(91,192,190,0.12)",
      },
      backgroundImage: {
        "neuro-gradient":
          "linear-gradient(135deg, #4A8FE7 0%, #8B5CF6 50%, #5BC0BE 100%)",
        "subtle-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(74,143,231,0.08) 0%, transparent 60%)",
      },
      animation: {
        "fade-in": "fade-in 0.5s cubic-bezier(0.21, 0.8, 0.35, 1) both",
        float: "float 6s ease-in-out infinite",
        "glass-shine": "glass-shine 4s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "glass-shine": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
