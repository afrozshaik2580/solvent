/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/App.jsx",
    "./src/components/UsersSection.jsx",
    "./src/components/AnalysisSection.jsx",
    "./src/components/ContactSection.jsx",
    "./src/components/Footer.jsx",
  ],
  theme: {
    screens: {
      sm: "400px",

      md: "760px",

      lg: "1100px",
    },
    extend: {
      keyframes: {
        t: {
          to: { transform: "translateX(-1000px)" },
        },
spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
