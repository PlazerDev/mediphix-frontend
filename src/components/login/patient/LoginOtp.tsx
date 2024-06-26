

import image1 from '../../../assets/images/patient/login/login2.jpg';
import 'typeface-cookie';
import { Segmented } from 'antd';
import './../../../assets/css/login/custome__segment.css'
import Logo from './../../../assets/images/mediphix.jpg'
import { Link } from 'react-router-dom';


function LoginOtp() {
  return (
    <div className='bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)]   w-screen h-screen flex'>
      
      <div className="bg-login-background1 w-1/2 h-screen bg-cover bg-no-repeat">
        <div className='bg-[#FFE7D3] border-solid rounded-[16px] w-[70%] h-[80%] left-[13%] top-[10%] bottom-[10%] relative flex flex-col'>
          <div className='h-[50%] flex flex-col text-center'>
            <div className="flex-1 h-1/4 sm:h-auto text-[24px] font-cookie mt-4">
              Hello there ✌
            </div>
            <div className="flex-1 h-1/2 sm:h-auto text-[16px]">
              Which of the following <br /> describes you ?
            </div>
            <div className="flex-1 h-1/4 sm:h-auto mt-[10px] p-3 ">
              <Segmented
                options={['Patient', 'Medical Center']}
                // onChange=
                defaultValue="Patient"
                disabled
                style={{ backgroundColor: '#E3E3E3', color: 'var(--Text-C)' }}
                className='custom-segmented'
              />
            </div>
          </div>
          <div className='w-full h-[60%]'>
            <img src={image1} className='w-[100%] h-full object-fill rounded-b-[16px]' />
          </div>
        </div>
      </div>



      <div className='bg-white w-1/2 h-screen '>

        <div className='w-auto mt-[10%] h-[15%]   items-center justify-center flex '>
          <img src={Logo} alt="" className='w-[40%] justify-items-center ' />
        </div>

        <div className='flex flex-col w-[60%] ml-[20%] mt-8 '>
          <div className='text-4xl mb-4'>Login</div>
          <div className='mb-5  ' >
            Enter the OTP code sent to the <span className='font-semibold'>0713072404</span>
            <p className='mt-1 text-[var(--accent)] text-[12px] font-medium'>
             {''}
                  <Link to='/Login' className='text-[var(--accent)]'>
                    Change Number
                  </Link>
            </p>
          </div>

          <div>
            <span className='font-semibold'>Mobile Number</span> <br />
            {/* <div className='flex rounded-[20px] w-full border border-gray-300  p-2 transition-colors duration-300 hover:border-[var(--accent)] '>
                    <p className='text-[#868686]'>+94</p>
                    <input type="text" className='rounded-[20px] focus:outline-none pl-2' />
                   
                </div> */}
            <div className='flex flex-row mt-1' >
              <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
              <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
              <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
              <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
              <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
            </div>

            <div className='text-xsm '>
              <p>Didn’t receive the code ? <span className='text-[var(--accent)] font-medium cursor-pointer'>Resend</span></p>
            </div>

            <div className='flex  mt-6'>

              <button className=' cursor-pointer text-[#fff] text-center  rounded-[20px] w-full border  p-2  hover:bg-orange-600  bg-[var(--accent)]  border-[var(--accent)] duration-400' >
                Login
              </button>

            </div>
          </div>

          <div className='text-[12px]  text-[#868686] flex justify-center mt-2 '>
            <p>
              New to Mediphix ?{' '}
              <span className='text-[var(--accent)] font-semibold ' >
                <Link to='/Login'>Register Now</Link>
              </span>
            </p>
          </div>


        </div>

        <div className=' absolute bottom-3 flex justify-center w-1/2 text-[10px] text-[#868686]' >
          <p className=' '>©2024 Mediphix All Right Reserved.</p>
        </div>


      </div>
    </div>
  );
}

export default LoginOtp;
