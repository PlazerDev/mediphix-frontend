import React from 'react';
import { ConfigProvider, Steps } from 'antd';
import "../../../assets/css/signup/ant.css"; // Make sure this path is correct
import LogoImg from "../../../assets/images/mediphix_withoutPadding.jpg"
import UserDetailsForm from './UserDetailsForm';
import MobileNumberForm from './MobileNumberForm';
import Verification from './Verification';

function PatientNavigationSteps() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#ff7300",
                    colorInfo: "#ff7300",
                    borderRadius: 16,
                },
            }}
        >

            <div className=' flex justify-center items-center mt-0'>
                <div className='bg-[var(--card-background)] w-[62%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center'>
                    <div className='flex justify-center w-full m-0'>
                        <img src={LogoImg} alt="Logo" className='w-[120px] h-[60px] ' />
                    </div>

                    <div className='w-full'>
                        <Steps
                            type="navigation"
                            // current={current}
                            // onChange={onChange}
                            className="site-navigation-steps"
                            items={[
                                {
                                    status: 'finish',
                                    title: 'User details',
                                },
                                {
                                    status: 'process',
                                    title: 'Mobile Number',
                                },
                                {
                                    status: 'wait',
                                    title: 'Verification',
                                },
                            ]}
                        />
                    </div>

                    {/* <UserDetailsForm/> */}
                    {/* <MobileNumberForm/> */}
                    <Verification/>

                </div>

            </div>


        </ConfigProvider>
    );
}

export default PatientNavigationSteps;
