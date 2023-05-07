/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6EE7B7',
          dark: '#3B8070',
        },
        secondary: {
          light: '#F9A8D4',
          dark: '#D53F8C',
        },
      },
    },
    darkMode: 'media',
  },
  plugins: [],
}
