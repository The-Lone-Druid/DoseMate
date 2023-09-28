/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#901EFF",
        },
        secondary: {
          main: "#DB4437",
        },
      },
    },
  },
  plugins: [],
};
