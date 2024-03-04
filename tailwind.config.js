/** @type {import('tailwindcss').Config} */

// import {badgeColoursMap} from "./src/models/WidgetProductsModel"
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
    colors: {
      blue: { DEFAULT: '#2E3A8C' },
      green: {
        light: '#AFC6BD',
        DEFAULT: '#3B755F'
      },
      beige: { DEFAULT: '#F2EBDB' },
      grey: {
        DEFAULT: '#B0B0B0',
        dark: '#333333',
        darker: '#212121'
      },
      white: {
        DEFAULT: '#FFFFFF',
        dark: '#F9F9F9'
      }
    }
    // safelist: Object.values(badgeColoursMap)
  },
  plugins: []
}
