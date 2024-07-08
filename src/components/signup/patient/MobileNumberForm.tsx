import React from 'react';

function MobileNumberForm(props) {
    return (
        <div className="">
            <p className='text-[var(--text-c)] mt-5'>
                Enter your mobile phone number. During the verification phase, you will receive an OTP code for this mobile number.
            </p>

            <div className='mt-10'>
                <span>Mobile Number: <span className='text-red-500'>*</span></span>
                <form onSubmit={(e)=>{e.preventDefault}}>
                    <div className='flex rounded-[20px] w-[50%] border border-gray-300 p-2 transition-colors duration-300 hover:border-[var(--accent)]'>
                        <p className='text-[#868686]'>+94</p>
                        <input
                            type="text"
                            name="mobileNumber"
                            className='rounded-[20px] focus:outline-none pl-2'
                            placeholder='Enter Your Number'
                            value={props.formData.mobile}
                            onChange={props.handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MobileNumberForm;
