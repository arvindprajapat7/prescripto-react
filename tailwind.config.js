/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#5F6FFF'
      },
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(180deg, #AFC1DC 0%, #E2E5ED 100%)',
      },
    },
  },
  plugins: [],
}