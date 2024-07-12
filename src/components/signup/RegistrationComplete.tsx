import { useNavigate } from 'react-router-dom'
import LogoImg from './../../assets/images/mediphix_withoutPadding.jpg'
import LandingImg from './../../assets/images/signup/registrationComplete.png'
import FormButtonSet from './patient/FormButtonSet'



function RegistrationComplete() {
    const navigate=useNavigate();
    const clickNext=()=>{
        navigate('/Login');
    }
    return (
        <div>
            <div className=' flex justify-center items-center h-screen '>
                <div className='bg-[var(--card-background)] w-[50%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center'>
                    <div className='flex justify-center w-full'>
                        <img src={LogoImg} alt="Logo" className='w-[150px] h-[100px]' />
                    </div>
                    <div className='w-[40%] h-[40%] mb-2'>
                        <img src={LandingImg} alt="" />
                    </div>
                    <div className=' flex flex-col text-[var(--text-b)] gap-y-3 text-[14px]'>
                        <p>Thank you for submitting your registration form to Mediphix. We've
                            received your details, and our team will review your application
                            within the <span className='font-semibold'>next 2-5 business days</span>
                        </p>
                        <p>
                            You will be notified of the result via email. In the meantime, if you have any questions
                            or need further clarifications, please don't hesitate to contact us at <span className='font-semibold'>mediphix@gmail.com</span>.
                        </p>
                        <p>
                            We appreciate your interest in Mediphix and look forward to potentially working with you.
                        </p>
                    </div>

                    <div className='flex flex-row gap-6 mt-5 w-full'>

                        <FormButtonSet nxt={'Continue'} backDisplay={true}  onNextClick={clickNext} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegistrationComplete
