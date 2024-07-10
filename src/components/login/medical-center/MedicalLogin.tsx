
import 'typeface-cookie';

import './../../../assets/css/login/custome__segment.css'
import Logo from './../../../assets/images/mediphix.jpg'
import { Link } from 'react-router-dom';


function Login() {
  return (

      


      <div className='bg-white w-1/2 h-screen '>

      <div className='w-auto mt-[10%] h-[15%]   items-center justify-center flex '>
            <img src={Logo} alt="" className='w-[40%] justify-items-ce'/>
        </div>

        <div className='flex flex-col w-[60%] ml-[20%] mt-8 '>
            <div className='text-4xl mb-4'>Login</div>
            <div className='mb-4 ' >Welcome back to MediPhix! Please enter your credentials to continue.</div>

            <div>
                <span className='font-semibold'>Email</span> <br />
                <div className='mb-2 flex rounded-[20px] w-full border border-gray-300  p-2 transition-colors duration-300 hover:border-[var(--accent)] '>
                    
                  <input type="text" placeholder='Enter Your Email' className='rounded-[20px] focus:outline-none pl-2  w-full placeholder:text-[var(--text-c)]' />
                   
                </div>

                <span className='font-semibold'>Password</span> <br />
                <div className='flex rounded-[20px] w-full border border-gray-300  p-2 transition-colors duration-300 hover:border-[var(--accent)] '>
                    
                    <input type="password" placeholder='Enter Your Password' className='rounded-[20px] focus:outline-none pl-2  w-full placeholder:text-[var(--text-c)]' />
                   
                </div>

                <div className='text-[12px] text-[#868686] flex justify-end mt-2'>
                  <p>
                    {' '}
                    <span className='text-[var(--accent)] font-semibold'>
                      <Link to='/Login' className='text-[var(--accent)]'>
                        Forget Password ?
                      </Link>
                    </span>
                  </p>
                </div>

                <div className='flex  mt-4'>
                    
                    <button className=' cursor-pointer text-[#fff] text-center  rounded-[20px] w-full border  p-2 transition-colors duration-300 bg-[var(--accent)]  border-[var(--accent)]' >Login</button>
                   
                </div>
            </div>
             
            {/* <div className='text-[12px] text-[#868686] flex justify-center mt-2'>
              <p>
                New to Mediphix?{' '}
                <span className='text-[var(--accent)] font-semibold'>
                  <Link to='/Login' className='text-[var(--accent)]'>
                    Register Now
                  </Link>
                </span>
              </p>
            </div> */}

           
        </div>

        <div className=' absolute bottom-3 flex justify-center w-1/2 text-[10px] text-[#868686]' >
              <p className=' '>©2024 Mediphix All Right Reserved.</p>
        </div>


      </div>

  );
}

export default Login;
