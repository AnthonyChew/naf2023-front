/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'NAFPurple' : '#8f55ff',
        'headerGray': '#DFE0E0',
        'NAFBlue' : '#0071C6',
        'NAFYellow': '#FCF43D',
        'NAFPink': '#F9346C'
      },
      fontFamily: {
        syne: ["Syne"],
        yerk: ["Yerk"],
      }
    }
    
  },
  plugins: [],
}
