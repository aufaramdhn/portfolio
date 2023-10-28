/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      zIndex: {
        '0' : '0',
        '10' : '10',
        '20' : '20',
        '30' : '30',
        '40' : '40',
        '50' : '50',
        '100' : '100',
      }
    },
    container: {
      // default breakpoints but with 40px removed
      center: true,
    },
  },
  plugins: [],
}