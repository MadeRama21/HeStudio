/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        Primary: ["DM Serif Display"],
        Secondary: ["Montserrat"],
      },
      colors: {
        primary: {
          DEFAULT: "#35414f",
          hover: "#292f36",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
        putih: "#d9c8ae",
      },
    },
  },
  plugins: [],
};
