/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"

  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner" : "url('/image0.jpeg')"
      },
      colors: {
        "primary": "#00AAD1",
        "secondary": "#fb8b00",
        "third": "#f9c73a",
        "fourth": "#5b0000"
      }
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs")
  ],
}

