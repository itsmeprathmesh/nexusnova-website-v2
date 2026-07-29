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
        night: "#0a0a0a",
        charcoal: "#121212",
        stone: "#1a1a1a",
        ash: "#2a2a2a",
        steel: "#888888",
        mist: "#aaaaaa",
        ivory: "#f0f0f0",
        white: "#ffffff",
        accent: {
          DEFAULT: "#ffffff",
          dim: "rgba(255,255,255,0.08)",
          faint: "rgba(255,255,255,0.04)",
        },
        ember: "#FE7501",
        gold: "#FFE946",
        rust: "#CA4300",
        crimson: "#B4160B",
        midnight: "#0A0503",
        cream: "#FDF4EC",
      },
      backdropBlur: {
        xs: "2px",
        sm: "12px",
        glass: "16px",
        strong: "24px",
        xl: "32px",
      },
      borderRadius: {
        sm: "12px",
        card: "20px",
        pill: "9999px",
        "4xl": "1.5rem",
        "5xl": "2rem",
      },
      boxShadow: {
        navbar: "0 8px 32px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        out: "var(--ease-out)",
      },
      fontSize: {
        "hero-lg": ["clamp(4rem, 10vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.03em", fontWeight: "700" }],
        "hero-sm": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "700" }],
        "section-lg": ["clamp(3rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "section-md": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "stat": ["clamp(2.5rem, 4vw, 3.75rem)", { lineHeight: "1", fontWeight: "700" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "500" }],
        "nav": ["0.8125rem", { lineHeight: "1", fontWeight: "500" }],
      },
      animation: {
        "preloader-progress": "preloader-progress 2.5s ease-out forwards",
        "fade-in": "fade-in 0.6s var(--ease-out) both",
        "reveal-up": "reveal-up 0.8s var(--ease-out) both",
        "navbar-enter": "navbar-enter 0.4s var(--ease-out) both",
        "navbar-leave": "navbar-leave 0.3s var(--ease-out) both",
      },
      keyframes: {
        "preloader-progress": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "navbar-enter": {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "navbar-leave": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-120%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
