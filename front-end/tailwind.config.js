/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        gray: {
          1: "rgb(23,23,23)",
          2: "rgb(63,63,70)",
          3: "rgb(63,63,63)",
        },
        btnBlue : "#579FFF",
      },
      boxShadow : {
        container : "0px 0px 40px 0px rgb(60,60,60)",
      }
    },
  },
  plugins: [],
};
