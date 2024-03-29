/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#435FB5",
        mainTextColor: "#87A1C8",
        mainParaColor: "#495057",
        mainBackgroundColor: "#F7F9FA",
        lightBlackColor: "#333333",
        iconsColor: "#A5BAFD",
        grayBg: "#EEF5FA",
        greenMain: "#00D094",
        yellow: "#F4C01E",
        cardBg: "#EEF2F6",
        footerBg: "#f7f9fa",
        btnColor: "#435FB5",
        blueColor: "#243E8E",
      },
      boxShadow: {
        courseShadow:
          " 0px 2px 30px 0px rgba(0, 0, 0, 0.05);",
      },
      screens: {
        'xs': '428px',
      },
    },
  },
  plugins: [],
};
