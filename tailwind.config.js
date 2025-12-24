/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*. {js,jsx,ts,tsx,mdx}',
    './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:  {
        dark: '#1a1a1a',
        darker: '#0f0f0f',
      },
      fontFamily: {
        mono: ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}