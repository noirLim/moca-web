/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        transparan: "#afa592",
        grey:"#9f9fa0"
      },
      fontFamily: {
        body: "Poppins,sans-serif",
        title: "Raleway, sans-serif",
      },

      backgroundColor: {
        coffee: "#d39128",
      }
    },
  },
  plugins: [],
};
