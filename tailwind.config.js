/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navy:'#002E5D'
      },
      fontFamily: {
        'sans': ['Avenir', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '576px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}