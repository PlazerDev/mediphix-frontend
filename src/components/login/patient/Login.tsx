
// import loginBg from './../../../assets/images/patient/login/login-bg.png';
import image1 from './../../../assets/images/patient/login/login2.jpg'
import 'typeface-cookie';
import { Segmented } from 'antd';
import './../../../assets/css/login/custome__segment.css'
import Logo from './../../../assets/images/mediphix.jpg'


function Login() {
  return (
    <div className='bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)]   w-screen h-screen flex'>
      {/* <div className="bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)] w-1/2 h-screen bg-cover bg-no-repeat"> */}
      <div className="bg-login-background1 w-1/2 h-screen bg-cover bg-no-repeat  ">
        <div className='bg-[#FFE7D3] border-solid  rounded-[16px] w-[70%] h-[80%] left-[13%] top-[10%] bottom-[10%] relative flex flex-col ' >
            <div className='h-[50%] flex flex-col text-center '>

                <div className="flex-1 h-1/4 sm:h-auto  text-[24px] font-cookie mt-4">
                    Hello there ✌
                </div>
                <div className="flex-1 h-1/2 sm:h-auto  text-[16px]">
                    Which of the following <br /> describes you ?
                </div>
                <div className="flex-1 h-1/4 sm:h-auto mt-[10px] p-3 ">
                    <Segmented options={['Patient', 'Medical Center']}
                    style={{ backgroundColor:'#E3E3E3' , color: ''}}
                    
                     className=' custom-segmented ' />
                </div>
            </div>
        
            <div className='w-full h-[60%] '>
                <img src={image1} className='w-[100%] h-full object-fill rounded-b-[16px]'  />
            </div>
        </div>
      </div>


      <div className='bg-white w-1/2 h-screen '>

        <div className='w-auto mt-[15%] h-[20%] items-center justify-center flex '>
            <img src={Logo} alt="" className='w-[40%] justify-items-ce'/>
        </div>

        <div className='flex flex-col w-[60%] ml-[10%]'>
            <div className='text-4xl'>Login</div>
            <div>Welcome back to MediPhix! Please enter your credentials to continue.</div>

            <div>
                Mobile Number <br />
                <div className='flex rounded-[20px] w-full border border-gray-300  p-2 transition-colors duration-300 hover:border-[#FF7300] '>
                    <p className='text-[#868686]'>+94 </p>
                    <input type="text" className='rounded-[20px] focus:outline-none ' />
                   
                </div>
            </div>
        </div>


      </div>
    </div>
  );
}

export default Login;
