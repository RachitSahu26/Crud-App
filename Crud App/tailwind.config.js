/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {


      color: {
        gray: "#5A5959",
        yellow: "#FFEAAF",
        orange: "#F6820C",
        "dark-yellow": "#FCCA3F",


      }
    },
  },
  plugins: [],
}