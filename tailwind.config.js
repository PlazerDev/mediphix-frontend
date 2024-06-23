/** @type {import('tailwindcss').Config} */
// import assets from './src/assets/images/patient/login/login-bg.png;'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'login-background1':"url(./src/assets/images/patient/login/login-bg.png)  ",
        'login-background2':"url(./src/assets/images/patient/login/login2.jpg)"
      },
      fontFamily: {
        'cookie': ['Cookie', 'cursive'], // Adding Cookie font family
        
      },
          
    },
  },
  plugins: [],
};
