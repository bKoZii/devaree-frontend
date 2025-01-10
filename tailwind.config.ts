import type { Config } from 'tailwindcss'
import junlayout from 'tailwindcss-jun-layout'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        devaree: {
          DEFAULT: '#A31D1D',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#a31d1d',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Bai Jamjuree'],
      },
    },
  },
  plugins: [junlayout],
} satisfies Config
