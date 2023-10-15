/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 12%, 13%)",
        clearChill: "#1e90ff",
        unitedNationBlue: "#3993DD",
        unitedNationBlueLight: "#65b6f7",
        unitedNationBlueMoreLight: "#b9ddfa",
      },
    },
  },
  plugins: [],
};
