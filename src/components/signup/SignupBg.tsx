
import Footer from '../Footer'
import wdgetBG from './../../assets/images/signup/widgetsBg.png'
import PatientNavigationSteps from './patient/PatientNavigationSteps';
function SignupBg(props: { stepnumber: number; titlename: string; role:string }) {
 

  return (
    <div className=' w-screen h-screen p-10 pl-28 pr-28 bg-contain bg-right '
    style={{
      backgroundImage:`url(${wdgetBG})`,
      backgroundRepeat: "no-repeat",
      backgroundBlendMode: "luminosity",
    }}>
      <PatientNavigationSteps step={props.stepnumber} titlename={props.titlename} role={props.role} />
   
      <Footer/>
    </div>
    


  )
}

export default SignupBg
