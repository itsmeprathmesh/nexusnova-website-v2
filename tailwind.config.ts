import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { nova: { bg: '#0A0A0F', card: 'rgba(255,255,255,0.06)', line: 'rgba(255,255,255,0.12)', blue: '#4F8CFF', purple: '#9B5CFF' } },
      boxShadow: { glow: '0 0 80px rgba(79,140,255,.22)' },
      backgroundImage: { 'nova-gradient': 'linear-gradient(135deg,#4F8CFF 0%,#9B5CFF 50%,#00D4FF 100%)' }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
