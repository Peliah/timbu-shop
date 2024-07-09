/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollPadding: {
        'left-4': '1rem', // Adjust the value as needed
      },
      screens: {
        'xs': {'min': '320px', 'max': '639px'},
       
      },
    },
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

