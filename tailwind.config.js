/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          500: '#7c3aed',
          600: '#8b5cf6',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#121212',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-violet-sm': '0 0 10px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
}



