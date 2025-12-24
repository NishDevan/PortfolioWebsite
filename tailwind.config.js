/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        darker:  '#0f0f0f',
      },
    },
  },
  plugins:  [],
}