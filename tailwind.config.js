/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0c151d",
        primary: "#fbbf24",
        light: "#fafdff",
      },
    },
  },
  plugins: [],
};
