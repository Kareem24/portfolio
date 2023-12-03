/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      gothic: ["League Gothic", "sans serif"],
      spartan: ["League Spartan", "sans serif"],
      roboto: ["Roboto", "sans serif"],
    },
    extend: {
      colors: {
        "btn-bg": "#d9d9d9",
        gray2: "7e7e7e",
      },
    },
  },
  plugins: [],
};
