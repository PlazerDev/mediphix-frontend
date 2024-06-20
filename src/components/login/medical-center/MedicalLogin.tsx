import React from "react";
import Assets from "./../../../assets/images/medicalcenterlogin/mediphix.png";
import image1 from "./../../../assets/images/medicalcenterlogin/staff.png"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Flex } from 'antd';
import { Segmented } from 'antd';
import './../../../assets/css/login/custome__segment.css'



function MedicalLogin() {
  return (
    
    <div className=" bg-white flex ">
      <div className="bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)] w-1/2  h-screen flex ">
      {/* <div className="bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)] w-1/2 h-screen bg-cover bg-no-repeat"> */}
      <div className="bg-login-background1 w-1/2 h-screen bg-cover bg-no-repeat  ">
         <div className='bg-[#FFE7D3] border-solid  rounded-[16px] w-[130%] h-[85%] left-[35%] top-[10%] bottom-[10%] relative flex flex-col ' >
           <div className='h-[50%] flex flex-col text-center '>
             <div className="flex-1 h-1/4 sm:h-auto  text-[48px] font-cookie mt-4">
                    Hello there ✌
                </div>
                <div className="flex-1 h-1/2 sm:h-auto  text-[31px]">
                    Which of the following <br /> describes you ?
                </div>
                <div className="flex-1 h-1/14 sm:h-auto mt-[20px] p-10  ">
                    <Segmented options={['Patient', 'Medical Center']}
                    style={{ backgroundColor:'#E3E3E3' ,fontSize:'20px', color: '(var(--Text-C))' }}     
                     className=' custom-segmented ' />
                </div>
            </div>
            <div className='w-full h-[60%] '>
                <img src={image1} className='w-[100%] h-full object-fill rounded-b-[20px]'  />
            </div>
         
           
      </div>
      </div>
      </div>
      

      <div className="absolute ml-[70%] p-35 ">
      <img src={Assets} className="" />
      </div> 
      <div className="relative mt-[10%] pl-16">   
      <p className="text-6xl font-bold text-left ">Login</p>
      <div className="mt-[5%]">
      <p className="text-4xl">Welcome back to MediPhix! Please enter your credentials to continue.</p>
      </div>

      <div className="mt-[5%] ">
      <p className="text-3xl font-bold text-left">Email</p>     
      </div>
      <input type="text" className="justify-items-center pl-10 text-2xl border-2 mt-[3%] rounded-full border-orange-500 max-w-2xl h-[8%] text-left p-5 focus:ring-orange-500 focus:outline-none focus:ring-2" placeholder="Sajini" style={{ width:'100%'}}  />


      <div className="mt-[5%]">
      <p className="text-3xl font-bold text-left">Password</p>  
      </div>
      <input type="password" className="justify-items-center pl-10 text-2xl border-2 mt-[3%] rounded-full border-orange-500 max-w-2xl h-[8%] text-left p-5 focus:ring-orange-500 focus:outline-none focus:ring-2" placeholder="Enter your password" style={{ width:'100%'}} />
      <p className="justify-items-center text-2xl font-bold text-orange-500 p-7 text-right pr-[40%] ">Forget Password?</p>
      <Button style={{ backgroundColor: 'orange', borderColor: ' border-orange-500',borderRadius: '50px',fontSize: '24px',height: '80px' ,width:'63%',marginLeft: '-1%',marginTop: '20px',fontWeight: 'bold' ,color:"white"}} block>
       Login
      </Button>
     <div className="mt-[5%]">
      <p className="text-gray-500 pl-[15%]  h-[8%] text-2xl ">New to Mediphix ? {" "}
      <span className="text-orange-500 font-bold">Register Now</span>
      </p>
      <p className="text-gray-500 pl-[18%] mt-[5%]">©2024 Mediphix All Right Reserved.</p>
     </div>
     </div>
    </div>
    
        
      
      
      
    
  );
}

export default MedicalLogin;
