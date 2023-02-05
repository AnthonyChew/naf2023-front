/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'NAFPurple' : '#8f55ff',
        'headerGray': '#DFE0E0',
        'NAFBlue' : '#0071C6',
        'NAFYellow': '#FCF43D',
        'NAFPink': '#F9346C',
        'NAFOrange': '#FF8B13',
        'NAFRed' : '#BB2751',
      },
      fontFamily: {
        syne: ["Syne"],
        syneBold: ["SyneBold"],
        syneExtraBold: ["SyneExtraBold"],
        yerk: ["Yerk"],
        yerkItalic: ["YerkItalic"]
      },
      borderWidth: {
        '3': '3px'
      },
      fontSize:{
        header: '1.8rem',
        subheader: '1.5rem',
        paragraph_Desktop: '1.25rem',
        paragraph_Mobile: '1.0rem',
        buttonText_Desktop: '1.125rem',
        buttonText_Desktop: '0.875rem',
      }
    }
    
  },
  plugins: [],
}