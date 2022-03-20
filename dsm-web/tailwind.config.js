module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik'],
        dosis: ['Dosis'],
        sans: ['Work Sans']
      }
    },
    container: {
      center: true,
      padding: "1rem"
    },
  },
  plugins: [],
}