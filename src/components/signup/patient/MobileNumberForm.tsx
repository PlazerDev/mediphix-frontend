/* eslint-disable @typescript-eslint/no-explicit-any */
interface MobileNumberFormProps {
    formData: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addMobile: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validationErrors: any;
  }
  
function MobileNumberForm(props:MobileNumberFormProps) {
    return (
        <div className="">
            <p className='text-[var(--text-c)] mt-5'>
                Enter your mobile phone number. During the verification phase, you will receive an OTP code for this mobile number.
            </p>

            <div className='mt-10 flex flex-col flex-wrap'>
                <span>Mobile Number: <span className='text-red-500'>*</span></span>
                <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.mobile}</p>
                <form onSubmit={(e) => { e.preventDefault }}>
                    <div className='flex rounded-[20px] w-[40%] border bg-white border-gray-300 p-2 transition-colors duration-300 hover:border-[var(--accent)]'>
                        <p className='text-[#868686]'>+94</p>
                        <input
                            type="text"
                            name="mobileNumber"
                            className='rounded-[20px] focus:outline-none pl-2 w-full bg-white'
                            placeholder='Enter Your Number'
                            value={props.formData.mobile}
                            onChange={props.addMobile}

                        />
                    </div>

                    <div className='text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[10%] gap-y-4'>
                        <div className='w-[40%] mb-0'>
                            <p className='ml-2'>Password: <span className='text-red-600'>*</span></p>
                            <input
                                type="password"
                                name="password"
                                className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                                placeholder='Enter Your Password'
                                value={props.formData.password}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className='w-[40%] mb-0'>
                            <p className='ml-2'>Confirm Password: <span className='text-red-600'>*</span></p>
                            <input
                                type="password"
                                name="confirmpass"
                                className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                                placeholder='Enter Your Password again'
                                value={props.formData.confirmpass}
                                onChange={props.handleChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MobileNumberForm;
