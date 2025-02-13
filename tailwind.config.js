/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'neon-purple': 'var(--neon-purple)',
        'dark-bg': 'var(--dark-bg)',
        'dark-card': 'var(--dark-card)',
        'dark-card-hover': 'var(--dark-card-hover)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px var(--neon-blue)' },
          '50%': { boxShadow: '0 0 40px var(--neon-purple)' },
        },
      },
    },
  },
  plugins: [],
};