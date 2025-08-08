/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0071f2",
        accent: "#ffb800",
        dark: "#0e0e1b",
        light: "#ffffff"
      },
    },
  },
  plugins: [],
}