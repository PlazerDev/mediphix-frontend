import React from "react";
import Assets from "./../../../assets/images/medicalcenterlogin/mediphix.png";
import { Button, Flex } from 'antd';



function MedicalLogin() {
  return (
    <div className=" bg-white flex ">
      <div className="bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)] w-1/2  h-screen  "></div>
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
      <div className="border-2 mt-[3%] rounded-full border-orange-500 max-w-2xl h-[8%] text-left p-5">
      <p className="justify-items-center pl-10 text-2xl ">Sajini</p>
      </div>
      <div className="mt-[5%]">
      <p className="text-3xl font-bold text-left">Password</p>  
      </div>
      <div className="border-2 mt-[3%] rounded-full border-orange-500 max-w-2xl h-[8%] text-left p-5">
      <p className="justify-items-center pl-10 text-2xl text-gray-500 " >Enter your password</p>
      <p className="justify-items-center pl-10 text-2xl font-bold text-orange-500 p-7 text-right ">Forget Password?</p>
      <div >  
      <Button style={{ backgroundColor: 'orange', borderColor: ' border-orange-500',borderRadius: '50px',fontSize: '24px',height: '80px' ,width:'110%',marginLeft: '-5%',marginTop: '20px',fontWeight: 'bold' ,color:"white"}} block>
      Login
    </Button>
     <div className="mt-[5%]">
      <p className="text-gray-500 pl-[25%]  h-[8%] text-2xl ">New to Mediphix ? {" "}
      <span className="text-orange-500 font-bold">Register Now</span>
      </p>
     </div>
     <div className="mt-[5%] text-center">
      <p className="text-gray-500">©2024 Mediphix All Right Reserved.</p>
     </div>
      </div>
      </div>
      </div>  
      </div>
      
    
  );
}

export default MedicalLogin;
