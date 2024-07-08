/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#254D4D',
      'secondary': '#EEF9F1',
      'background': '#FFFFFF',
      'transparent': 'transparent',
      'primary-opacity': '#4B9595',
      'tetiary': '#E2B93B'
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'montserrat']
    }
  },
  plugins: [],
}

