/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#CFD8D7',
        'medium-green': '#557669',
        'dark-green': '#074A41',
        'dark-gray': '#3D3D3D',
        'blue': '#4298DF',
      },
      fontFamily: {
        'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'lexend': ['Lexend', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}

