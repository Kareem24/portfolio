/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {

    extend: {
      colors: {
        "btn-bg": "#d9d9d9",
        "gray2": "#7e7e7e",
      },
      fontFamily: {
        gothic: ["League Gothic", "sans serif"],
        spartan: ["League Spartan", "sans serif"],
        roboto: ["Roboto", "sans serif"],
      },
    },
  },
  plugins: [],
};
