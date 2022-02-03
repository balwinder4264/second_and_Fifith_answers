module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Lato": "'Lato', 'sans-serif'"
      }

    },
  },
  plugins: [require('flowbite/plugin')],
}