/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "body-dark": "#00040F",
        "primary-blue": "#5CE1E6",
        "secondary-dark-1": "#272727",
        "secondary-dark-2": "#11101D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        discount: "url('../../public/discount-border.svg')",
      },
    },
  },
  plugins: [],
};
