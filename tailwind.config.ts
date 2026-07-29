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
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
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
          teal: "#14B8A6",
          warm: "#F8FAFC",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(123,44,245,.22)",
        blueGlow: "0 18px 50px rgba(13,110,253,.22)",
        tealGlow: "0 0 60px rgba(20,184,166,.18)",
        card: "0 24px 72px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "nova-gradient":
          "linear-gradient(135deg,#0D6EFD 0%,#7B2CF5 55%,#D946EF 100%)",
        "health-gradient":
          "linear-gradient(135deg,#0D6EFD 0%,#14B8A6 50%,#7B2CF5 100%)",
      },
      animation: {
        "fade-in": "content-fade-in 0.5s cubic-bezier(0.21, 0.8, 0.35, 1) both",
        float: "floating 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
