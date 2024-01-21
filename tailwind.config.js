/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "500px",

      md: "760px",

      lg: "1100px",
    },
    extend: {
      keyframes: {
        t: {
          to: { transform: "translateX(-1000px)" },
        },
      },
    },
  },
  plugins: [],
};
