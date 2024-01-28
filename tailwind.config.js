/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/App.jsx",
    "./src/components/UsersSection.jsx",
    "./src/components/AnalysisSection.jsx",
    "./src/components/ContactSection.jsx",
    "./src/components/Footer.jsx",
"./src/components/BrandingSection.jsx",
    "./src/components/ThingsWeValue.jsx",
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
things: {
          to: { transform: "translateX(-1790px)" },
        },
spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
