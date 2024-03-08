import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { badgeColoursMap } from './src/models/WidgetProductsModel'
const bgBadgeColours = Object.values(badgeColoursMap).map((c) => `bg-${c.bg}`)
const textBadgeColours = Object.values(badgeColoursMap).map((c) => `text-${c.text}`)
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['"Cabin"', ...defaultTheme.fontFamily.sans]
      }
    },
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
  },
  safelist: [...bgBadgeColours, ...new Set(textBadgeColours)],
  plugins: []
} satisfies Config
