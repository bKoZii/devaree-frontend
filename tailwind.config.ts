import type { Config } from 'tailwindcss'
import junlayout from 'tailwindcss-jun-layout'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        devaree: {
          DEFAULT: '#985a47',
          50: '#f9f5f1',
          100: '#ede3d8',
          200: '#dac3ad',
          300: '#c6a283',
          400: '#b98966',
          500: '#ad7153',
          600: '#985a47',
          700: '#7f463e',
          800: '#693b37',
          900: '#58322f',
          950: '#311817',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Bai Jamjuree'],
      },
    },
  },
  plugins: [junlayout],
} satisfies Config
