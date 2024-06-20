/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      'FFFFFF': '#FFFFFF',
      'E7ECE7': '#E7ECE7',
      '183E6C': '#183E6C',
      '8495A8': '#8495A8',
      'ECCC66': '#ECCC66',
      'B7D38D': '#B7D38D',
      'B7D38D': '#B7D38D',
      '726B6B': '#726B6B',
      'B0C9DA': '#B0C9DA',
      '2B7FBC': '#2B7FBC',
      '3DB57B': '#3DB57B',
      'A4A1A1': '#A4A1A1'
    }
  },
  plugins: [],
}

