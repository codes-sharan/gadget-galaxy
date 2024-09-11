/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
      },
    },
  },
  darkMode: "class", // Enable dark mode using class strategy
  plugins: [],
};
