import React, { useState } from 'react';
import LogoImg from './../../assets/images/mediphix_withoutPadding.jpg'; // Update the path to your logo
import wdgetBG from './../../assets/images/patient/appoinment/widgetsBg.png'; // Update the path to your background image
import FormButtonSet from './patient/FormButtonSet'; // Update the path to your FormButtonSet component
import {  useNavigate } from 'react-router-dom';

const YourComponent = () => {
    const [clickedButton, setClickedButton] = useState('');

    const handleClick = (buttonName: React.SetStateAction<string>) => {
        setClickedButton(buttonName);
    };

    const navigate=useNavigate();
    const handleNextClick =(clickedButton: string) =>{
        if(clickedButton=='Doctor'){
            navigate('/signup/doctor')
        }
        else if(clickedButton=="Medical Center"){
            navigate('/signup/medicalcenter')
        }
        else if(clickedButton=='Laboratory'){
            navigate('/signup/laboratary')
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-[var(--card-background)] w-[62%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center'>
                <div className='flex justify-center w-full m-0'>
                    <img src={LogoImg} alt="Logo" className='w-[120px] h-[60px]' />
                </div>
                <p className="text-[var(--text-c)] w-full">
                    Which of the following best describes you?
                </p>
                <div className="flex flex-row gap-x-10 pt-10 mb-10">
                    {['Doctor', 'Medical Center', 'Laboratory'].map((name) => (
                        <button
                            key={name}
                            className="bg-contain text-left pl-6 text-[var(--text-b)] font-semibold bg-right w-[200px] h-[80px] border-2 rounded-[10px] bg-[var(--text-d)]"
                            style={{
                                backgroundImage: `url(${wdgetBG})`,
                                backgroundRepeat: "no-repeat",
                                backgroundBlendMode: "luminosity",
                                backgroundColor: clickedButton === name ? 'var(--accent)' : 'var(--text-c)',
                            }}
                            onClick={() => handleClick(name)}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <FormButtonSet nxt={"Continue"} backDisplay={true} onNextClick={()=>handleNextClick(clickedButton)} />
            </div>
        </div>
    );
};

export default YourComponent;
