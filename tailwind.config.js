/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'LandingPurple' : '#8f55ff',
        'headerGray': '#DFE0E0'
      }
    }
    
  },
  plugins: [],
}
