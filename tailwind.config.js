/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#435FB5",
        mainTextColor: "#87A1C8",
        mainParaColor: "#495057",
        mainBackgroundColor:"#F7F9FA",
        lightBlackColor: "#333333",
        iconsColor: "#A5BAFD",
        grayBg: "#EEF5FA",
        greenMain: "#00D094",
      },
    },
  },
  plugins: [],
};
