/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ConfigProvider, Steps } from 'antd';

import LogoImg from "../../../assets/images/mediphix_withoutPadding.jpg"
import UserDetailsForm from './UserDetailsForm';
import MobileNumberForm from './MobileNumberForm';
import Verification from './Verification';
import FormButtonSet from './FormButtonSet';

import DoctorDetailsForm from '../doctor/DoctorDetailsForm';
import EmailandDocumetsFrom from '../EmailandDocumetsFrom';

import MedicalCenterDetailsForm from '../medical-officials/MedicalCenterDetailsForm';


const PatientNavigationSteps: React.FC<{ step: number; titlename: string; role: string }> = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const initialFormData = {
        fname: '',
        lname: '',
        mobile: '',
        dob: '',
        email: '',
        nationality: '',
        nic: '',
        address: '',
        name: '',
        slmc: '',
        education: '',
        specialization: '',
        password: '',
        idfront: '',
        idback: '',
        district: '',
        licenefront: '',
        liceneback: '',
    };
    const [formData, setFormData] = useState({ initialFormData });


    const addMobile = (e) => {
        setFormData((prevData) => ({ ...prevData, mobile: e.target.value }));
    }



    const handleBackClick = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleNextClick = () => {

        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);

            setFormData((prevData) => ({ ...prevData, ...formData }))

        }
    };

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSpecializationChange = (value:any) => {
        setFormData((prevData) => ({
            ...prevData,
            specialization: value,
        }));
    };

    const handleUploads=(e) => {
        const {name , value}=e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }
   

    const handleClick = () => {

    };

    // meken thami component handle wenne
    const renderComponent = () => {
        if (props.role == "patient") {
            const verificationTitles: string[] = ['First Name', 'Last Name', 'Mobile Number', 'Date of Birth', 'Email', 'Nationality', 'NIC', 'Address'];
            const verificationData: string[] = ['fname', 'lname', 'mobile', 'dob', 'email', 'nationality', 'nic', 'address']
            switch (currentStep) {
                case 1:
                    return <UserDetailsForm formData={formData} handleChange={handleChange} handleClick={handleClick()} />;
                case 2:
                    return <MobileNumberForm formData={formData} handleChange={addMobile} handleClick={handleClick} />;
                case 3:
                    return <Verification formData={formData} role='patient' handleChange={handleChange} handleClick={handleClick} Voptions={verificationTitles} Vdata={verificationData} />;
                default:
                    return null;
            }
        }
        else if (props.role == "doctor") {
            const verificationTitles: string[] = ['Name with Initials', 'SLMC Reg No', 'Education', 'Mobile Number', 'Email', 'NIC', 'Specialization']
            const verificationData: string[] = ['name', 'slmc', 'education', 'mobile', 'email', 'nic', 'specialization']
            switch (currentStep) {
                case 1:
                    return <DoctorDetailsForm formData={formData} handleChange={handleChange} handleClick={handleClick} handleSelectChange={handleSpecializationChange} />;
                case 2:
                    return <EmailandDocumetsFrom formData={formData} handleChange={handleChange} handleClick={handleClick} />;
                case 3:
                    return <Verification formData={formData} handleChange={handleChange} handleClick={handleClick} Voptions={verificationTitles} Vdata={verificationData} />;
                default:
                    return null;
            }
        }
        else if (props.role == "medicalcenter") {
            const verificationTitles: string[] = ['Name', 'Email', 'Mobile', 'District', 'Address']
            const verificationData: string[] = ['name', 'email', 'mobile', 'district', 'address']
            switch (currentStep) {
                case 1:
                    return <MedicalCenterDetailsForm formData={formData} handleChange={handleChange} handleClick={handleClick} firstinpunName={'Medical Center Name'} />;
                case 2:
                    return <EmailandDocumetsFrom formData={formData} handleChange={addMobile} handleClick={handleClick} />;
                case 3:
                    return <Verification formData={formData} handleChange={handleChange} handleClick={handleClick} Voptions={verificationTitles} Vdata={verificationData} />;
                default:
                    return null;
            }
        }
        else if (props.role == "lab") {
            const verificationTitles: string[] = ['Name', 'Email', 'Mobile', 'District', 'Address']
            const verificationData: string[] = ['name', 'email', 'mobile', 'district', 'address']
            switch (currentStep) {
                case 1:
                    return <MedicalCenterDetailsForm formData={formData} handleChange={handleChange} handleClick={handleClick} firstinpunName={'Laboratary Name'} />;
                case 2:
                    return <EmailandDocumetsFrom formData={formData} handleChange={addMobile} handleClick={handleClick} />;
                case 3:
                    return <Verification formData={formData} handleChange={handleChange} handleClick={handleClick} Voptions={verificationTitles} Vdata={verificationData} />;
                default:
                    return null;
            }
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

    const nxt = () => {
        if (currentStep == 3) {
            return "Submit"
        }
        else {
            return "Continue"
        }
    }

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

                        nxt={nxt()}
                        onBackClick={handleBackClick}
                        onNextClick={handleNextClick}
                    />
                </div>
            </div>
        </ConfigProvider>
    );
}

export default PatientNavigationSteps;
