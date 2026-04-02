/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f1-black': '#0a0a0a',
        'f1-surface': '#111111',
        'f1-surface-light': '#1a1a1a',
        'f1-cyan': '#00ffcc',
        'f1-red': '#e10600',
        'f1-white': '#e5e7eb',
      },
      fontFamily: {
        technical: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(0, 255, 204, 0.2)' },
          '100%': { 'box-shadow': '0 0 15px rgba(0, 255, 204, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
