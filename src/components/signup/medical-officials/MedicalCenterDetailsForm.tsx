/* eslint-disable @typescript-eslint/no-explicit-any */


interface MedicalCenterDetailsFormProps {
    formData: any; 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    validationErrors: { [key: string]: string };
    titleName: string;
}

function MedicalCenterDetailsForm(props:MedicalCenterDetailsFormProps) {
    return (
        <div>
            <div className='text-left w-full mt-5'>
                <p className='text-[var(--text-c)]'>Fill your information and press continue</p>
            </div>

            <div className='text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[10%] gap-y-4'>
                <div className='w-[100%] mb-0'>
                    <p className='ml-2'>{props.titleName}: <span className='text-red-600'>*</span></p>
                    <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.name}</p>
                    <input
                        type="text"
                        name="name"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder={`Enter Your ${props.titleName}`}
                        value={props.formData.name}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='w-[100%] mb-0'>
                    <p className='ml-2'>Address: <span className='text-red-600'>*</span></p>
                    <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.address}</p>
                    <input
                        type="text"
                        name="address"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your  Address'
                        value={props.formData.address}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='w-[45%] mb-0'>
                    <p className='ml-2'>District: <span className='text-red-600'>*</span></p>
                    <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.district}</p>
                    <input
                        type="text"
                        name="district"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your  District'
                        value={props.formData.district}
                        onChange={props.handleChange}
                    />
                </div>
                <div className='w-[45%] mb-0'>
                    <p className='ml-2'>Mobile Number: <span className='text-red-600'>*</span></p>
                    <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.mobile}</p>
                    <input
                        type="text"
                        name="mobile"
                        className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                        placeholder='Enter Your  Mobile Number'
                        value={props.formData.mobile}
                        onChange={props.handleChange}
                    />
                </div>
            </div>


        </div>
    )
}

export default MedicalCenterDetailsForm
