/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
      "2xl":"1750px",
      "3xl":"2265px"
    },
    extend: {
      colors: {
        primaryColor: "#11998E",
        secondary: "#EC6A4B",
        bgColor: "#CCEEFB",
        lightText: "#BDBDBD",
        textColor: "#000000",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar-hide"),
    // require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
