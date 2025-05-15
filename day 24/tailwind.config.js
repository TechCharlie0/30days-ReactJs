/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#ec4899",
          purple: "#8b5cf6",
        },
      },
    },
  },
  plugins: [],
};
