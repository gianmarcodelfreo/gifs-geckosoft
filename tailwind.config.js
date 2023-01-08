/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "4%",
      screens: {
        lg: "1170px",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
