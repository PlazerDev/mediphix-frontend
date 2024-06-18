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
      colors:{
        'accent':'#FF7300',
        'Text-A':"#151515",
        'Text-B':'#363636',
        'Text-C':'#868686',
        'Text-D':'#DCDCDC',
        'Background':'#E3E3E3',
        "Card-Background":'#E3E3E3'
      }
      
      
    },
  },
  plugins: [],
};
