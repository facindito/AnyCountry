/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow: '#F6AA1C',
        'blue-light': '#EFF7FD',
        'blue-dark': '#FBFDFE',
        gray: '#1A252E',
        'gray-light': '#273744',
        'gray-dark': '#1F2A33',
      },
    },
  },
  plugins: [],
}
