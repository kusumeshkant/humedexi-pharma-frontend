/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:       '#1a4f8a',
          'blue-dark':'#133b6e',
          'blue-light':'#e8f1fb',
          teal:       '#0d9488',
          'teal-dark':'#0a7a6e',
          'teal-light':'#e0f7f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
