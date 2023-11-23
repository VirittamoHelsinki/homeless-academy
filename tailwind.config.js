/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': '1024px',
      },
      colors: {
        'light-green': '#CFD8D7',
        'medium-green': '#557669',
        'dark-green': '#074A41',
        'dark-gray': '#3D3D3D',
        'blue': '#4298DF',
        'light-gray': '#505050',
        'base': '#393939'
      },
      fontFamily: {
        'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'lexend': ['Lexend', 'sans-serif'],
        'MPlus': ['M PLUS 1', 'sans-serif']
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}

