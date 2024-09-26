/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7a00",
        secondary: "#2e2e2e"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem"
        }
      }
    },
  },
  plugins: [],
}

