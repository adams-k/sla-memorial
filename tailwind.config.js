/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}

