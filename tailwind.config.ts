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
      container: { center: true, padding: "1.5rem" },
      maxWidth: { premium: "1440px" },
      colors: {
        cream: "#FDF4EC",
        midnight: "#0A0503",
        ember: "#FE7501",
        gold: "#FFE946",
        rust: "#CA4300",
        crimson: "#B4160B",
        glass: {
          DEFAULT: "rgba(255,255,255,0.10)",
          light: "rgba(255,255,255,0.14)",
          border: "rgba(255,255,255,0.14)",
        },
      },
      borderRadius: {
        capsule: "999px",
        card: "20px",
        frame: "28px",
      },
      boxShadow: {
        frame: "0 12px 48px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.06)",
        glass: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 0 40px rgba(254,117,1,0.2)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 100% at 50% 100%, #FE7501 0%, #CA4300 28%, #B4160B 48%, #2A0800 72%, #0A0503 100%)",
      },
      animation: {
        "gradient-drift": "gradient-drift 20s ease-in-out infinite",
        "float-1": "float-1 3.5s ease-in-out infinite",
        "float-2": "float-2 4s ease-in-out infinite",
        "float-3": "float-3 3s ease-in-out infinite",
        "waveform": "waveform 2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-drift": {
          "0%, 100%": { backgroundPosition: "50% 100%" },
          "50%": { backgroundPosition: "55% 100%" },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
