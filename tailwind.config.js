/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        secondary: "#101010",
      }
    },
  },
  plugins: [],
}

