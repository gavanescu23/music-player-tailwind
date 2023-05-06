/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#27272a',
        secondary: '#0e7490'
      }
    },
    fontFamily:{
      'open-sans': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}