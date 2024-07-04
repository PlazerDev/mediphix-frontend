
import Footer from '../Footer'
import wdgetBG from './../../assets/images/signup/widgetsBg.png'




import React from 'react';

function SignupBg({Component}: {Component: React.ComponentType}) {
  return (
    <div className=' w-screen h-screen p-10 pl-28 pr-28 bg-contain bg-right '
    style={{
      backgroundImage:`url(${wdgetBG})`,
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "luminosity",
    }}>
      <Component/>
   
      <Footer/>
    </div>
    


  )
}

export default SignupBg
