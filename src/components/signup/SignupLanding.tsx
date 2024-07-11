import { useNavigate } from 'react-router-dom'
import LogoImg from '../../../src/assets/images/mediphix.jpg'
import LandingImg from "../../assets/images/signup/LandingImg.jpg"

function SignupLanding() {

  const navigate = useNavigate();
  return (
    <div>
      <div className=' flex justify-center items-center h-screen '>
        <div className='bg-[var(--card-background)] w-[50%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center'>
          <div className='flex justify-center w-full'>
            <img src={LogoImg} alt="Logo" className='w-[150px] h-[150px]' />
          </div>
          <div className=' text-center'>
            <p className='font-[Cookie] text-[30px]'>Hello there ✌ Welcome aboard</p>
          </div>
          <div className='w-[50%] h-[50%] mb-2'>
            <img src={LandingImg} alt="" />
          </div>
          <p>Which of the following best describes you?</p>
          <div className='flex flex-row gap-6 mt-5 w-full'>

            <button className='border-[2px]  p-3 font-semibold  w-[50%] hover:bg-[var(--accent)] hover:text-white rounded-[10px]'
              onClick={() => navigate('/signup/patient')} >Patient</button>
            <button className='border-[2px]  p-3 font-semibold  w-[50%] hover:bg-[var(--accent)] hover:text-white rounded-[10px]'
              onClick={() => navigate('/signup/medicalofficials')}>Medical Officials</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignupLanding
