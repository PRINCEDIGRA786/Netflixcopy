/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'min': '300px', 'max': '640px' },

      },
    },
  },
  plugins: [],
}