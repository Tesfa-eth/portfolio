/** @type {import('tailwindcss').Config} */
module.exports = {
  // based on chrome preference
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}