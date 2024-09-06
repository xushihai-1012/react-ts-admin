import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      padding: {
        // '1': '10px',
      },
    },
  },
  plugins: [],
} satisfies Config
