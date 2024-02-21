/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "375px",
        thousand: "1000px",
        lg: "1060px",
      },
    },
  },
  plugins: [],
};
