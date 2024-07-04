import LogoImg from '../../../src/assets/images/mediphix.jpg'
import LandingImg from "../../assets/images/signup/LandingImg.jpg"

function SignupLanding() {
  return (
    <div>
      <div className=' flex justify-center items-center'>
        <div className='bg-[var(--card-background)] w-[50%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center'>
          <div className='flex justify-center w-full'>
            <img src={LogoImg} alt="Logo" className='w-[150px] h-[150px]' />
          </div>
          <div className=' text-center'>
            <p className='font-[Cookie] text-[30px]'>Hello there ✌ Welcome aboard</p>
          </div>
          <div className='w-[350px] h-[250px] mb-2'>
            <img src={LandingImg} alt="" />
          </div>
          <p>Which of the following best describes you?</p>
          <div  className='flex flex-row gap-6 mt-5'>
      
            <button className='border-[2px]  p-3 font-semibold  w-[200px] hover:bg-[var(--accent)] hover:text-white rounded-[10px]'>Patient</button>
            <button className='border-[2px]  p-3 font-semibold  w-[200px] hover:bg-[var(--accent)] hover:text-white rounded-[10px]'>Medical Officials</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SignupLanding
