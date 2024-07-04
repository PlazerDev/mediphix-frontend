import React, { useState } from 'react';
import { ConfigProvider, Steps } from 'antd';

import LogoImg from "../../../assets/images/mediphix_withoutPadding.jpg"
import UserDetailsForm from './UserDetailsForm';
import MobileNumberForm from './MobileNumberForm';
import Verification from './Verification';
import FormButtonSet from './FormButtonSet';

const PatientNavigationSteps: React.FC<{ step: number; titlename: string; }> = (props) => {

    const [currentStep, setCurrentStep] = useState(props.step);

    const handleBackClick = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleNextClick = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    let status1: "process" | "finish" | "wait" | "error" | undefined, status2: "process" | "finish" | "wait" | "error" | undefined, status3: "process" | "finish" | "wait" | "error" | undefined;

    switch (currentStep) {
        case 1:
            status1 = "process";
            status2 = status3 = "wait";
            break;
        case 2:
            status1 = "finish";
            status2 = "process";
            status3 = "wait";
            break;
        case 3:
            status1 = status2 = "finish";
            status3 = "process";
            break;
        default:
            status1 = status2 = status3 = "wait";
    }

    // Render component based on the current step
    const renderComponent = () => {
        switch (currentStep) {
            case 1:
                return <UserDetailsForm />;
            case 2:
                return <MobileNumberForm />;
            case 3:
                return <Verification />;
            default:
                return null;
        }
    };

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
                        <img src={LogoImg} alt="Logo" className='w-[120px] h-[60px]' />
                    </div>

                    <div className='w-full'>
                        <Steps
                            type="navigation"
                            current={currentStep - 1} // 0-based index
                            className="site-navigation-steps"
                            items={[
                                {
                                    status: status1,
                                    title: 'User details',
                                },
                                {
                                    status: status2,
                                    title: props.titlename,
                                },
                                {
                                    status: status3,
                                    title: 'Verification',
                                },
                            ]}
                        />
                    </div>

                    <div className='w-full mt-4'>
                        {renderComponent()}
                    </div>

                    <FormButtonSet
                        nxt="Continue"
                        onBackClick={handleBackClick}
                        onNextClick={handleNextClick}
                    />
                </div>
            </div>
        </ConfigProvider>
    );
}

export default PatientNavigationSteps;
