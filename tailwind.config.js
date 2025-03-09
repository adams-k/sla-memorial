/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'serif'],
      },
      colors: {
        "primary": "#0080A7",
        "secondary": "#fb8b00",
        "third": "#f9c73a",
        "fourth": "#5b0000",
        "fifth": "#FDFEFF"
      }
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs")
  ],
}

