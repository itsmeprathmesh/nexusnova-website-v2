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
        midnight: "#090506",
        ember: "#FE7501",
        gold: "#FFE946",
        rust: "#CA4300",
        crimson: "#B4160B",
        glass: {
          DEFAULT: "rgba(255,255,255,0.08)",
          light: "rgba(255,255,255,0.12)",
          border: "rgba(255,255,255,0.15)",
        },
      },
      borderRadius: {
        capsule: "999px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "40px",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,0.6)",
        glass: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        glow: "0 0 60px rgba(254,117,1,0.15)",
        "glow-intense": "0 0 120px rgba(254,117,1,0.25)",
      },
      backgroundImage: {
        noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "ember-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(254,117,1,0.15) 0%, transparent 60%)",
        "lava-gradient":
          "linear-gradient(180deg, #090506 0%, #B4160B 20%, #CA4300 40%, #FE7501 60%, #FFE946 80%, transparent 100%)",
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slower": "float-slower 12s ease-in-out infinite",
        "float-slowest": "float-slowest 16s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "glow-drift": "glow-drift 10s ease-in-out infinite",
        "glass-shimmer": "glass-shimmer 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.25,0.4,0.25,1) both",
        "scale-in": "scale-in 0.6s cubic-bezier(0.25,0.4,0.25,1) both",
        "count-up": "count-up 2s ease-out forwards",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(1deg)" },
          "66%": { transform: "translateY(-16px) rotate(-0.5deg)" },
        },
        "float-slowest": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-10px) translateX(5px)" },
          "50%": { transform: "translateY(-20px) translateX(-5px)" },
          "75%": { transform: "translateY(-8px) translateX(8px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        "glow-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(5%, -5%)" },
          "50%": { transform: "translate(-5%, -10%)" },
          "75%": { transform: "translate(3%, -3%)" },
        },
        "glass-shimmer": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
