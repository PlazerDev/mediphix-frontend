import React, { useState } from 'react';
import { Segmented } from 'antd';
import Login from './patient/Login';
import MedicalLogin from './medical-center/MedicalLogin';
import image1 from '../../assets/images/patient/login/login2.jpg';

function LoginAuth() {
  const [selectedValue, setSelectedValue] = useState<string>('Patient');
  const [showComponent, setShowComponent] = useState<JSX.Element | null>(<Login/>);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (value === 'Patient') {
      setShowComponent(<Login />);
    } 
    else if (value === 'Medical Center') {
      setShowComponent(<MedicalLogin />);
    }
  };

  return (
    <div className='bg-[linear-gradient(211deg,_#FF8D30_0%,_#A74C00_100%)] w-screen h-screen flex'>
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
                onChange={handleChange}
                defaultValue={selectedValue}
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
  
        {(showComponent)}
      
    </div>
  )
}

export default LoginAuth;
