/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  extend: {
  colors: {
  primary: '#0ea5e9', // cyan-500
  dark: '#0b1220',
  ink: '#0f172a', // slate-900
  soft: '#94a3b8', // slate-400
  accent: '#22c55e', // green-500
  },
  boxShadow: {
  soft: '0 8px 30px rgba(2, 8, 23, 0.25)'
  }
  },
  },
  plugins: [],
  }