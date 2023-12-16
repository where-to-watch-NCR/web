const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      slate: colors.slate,
      'primary': {
        900: '#125A50',
        800: '#1F7165',
        700: '#31887B',
        600: '#4CA195',
        500: '#68B9AD',
        400: '#90D3CA',
        300: '#C2F2EB',

      }
    }
  },
  plugins: [],
}

