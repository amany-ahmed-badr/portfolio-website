/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#030c12',
        'deep-teal': '#1D546D',
        'muted-sage': '#00E5E5',
        'light-gray': '#F3F4F4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional sans-serif
      },
      animation: {
        'typewriter': 'typewriter 4s steps(40) infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '40%': { width: '100%' },
          '60%': { width: '100%' },
          '100%': { width: '0%' }, // Simple loop implementation, handled better in JS for complex logic
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
