/** @type {import('tailwindcss').Config} */
// import assets from './src/assets/images/patient/login/login-bg.png;'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background1":
          "url(./src/assets/images/patient/login/login-bg.png)  ",
        "login-background2":
          "url(./src/assets/images/patient/login/login2.jpg)",
      },
      fontFamily: {
        cookie: ["Cookie", "cursive"], // Adding Cookie font family
      },
      colors: {
        mediphix_background: "#E3E3E3",
        mediphix_card_background: "#FFFFFF",
        mediphix_accent: "#FF7300",
        mediphix_text_a: "#151515",
        mediphix_text_b: "#363636",
        mediphix_text_c: "#868686",
        mediphix_text_d: "#DCDCDC",
      },
    },
  },
  plugins: [],
};
