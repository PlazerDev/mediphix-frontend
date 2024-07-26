/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SelectProps } from 'antd';
import { Select } from 'antd';

interface FormData {
    name: string;
    slmc: string;
    nic: string;
    education: string;
    mobile: string;
    specialization: any ;
}


interface EmailandDocumetsFromProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleSelectChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validationErrors: { [key: string]: string };
}

function DoctorDetailsForm(props:EmailandDocumetsFromProps) {


    const options: SelectProps['options'] = [];

    for (let i = 0; i < 100000; i++) {
        const value = `${i.toString(36)}${i}`;
        options.push({
            label: value,
            value
            
        });
    }
    

    return (
        <div>
            <div className='text-left w-full mt-5'>
                <p className='text-[var(--text-c)]'>Fill your information and press continue</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className='text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[10%] gap-y-4'>
                    <div className='w-[100%] mb-0'>
                        <p className='ml-2'>Name with Initials: <span className='text-red-600'>*</span></p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.name}</p>
                        <input
                            type="text"
                            name="name"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            placeholder='Enter Your  Name'
                            value={props.formData.name}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>SLMC Registration Number: <span className='text-red-600'>*</span></p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.slmc}</p>
                        <input
                            type="text"
                            name="slmc"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            placeholder='Enter Your SLMC Number'
                            value={props.formData.slmc}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>NIC: <span className='text-red-600'>*</span></p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.nic}</p>
                        <input
                            type="text"
                            name="nic"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            value={props.formData.nic}
                            onChange={props.handleChange}
                            placeholder='Enter Your NIC Number'
                        />
                    </div>

                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>Education : <span className='text-red-600'>*</span> </p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.education}</p>
                        <input
                            type="text"
                            name="education"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            value={props.formData.education}
                            onChange={props.handleChange}
                            placeholder='Enter Your Education Qualifications'
                        />
                    </div>

                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>Mobile Number : <span className='text-red-600'>*</span> </p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.mobile}</p>
                        <input
                            type="text"
                            name="mobile"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            value={props.formData.mobile}
                            onChange={props.handleChange}
                            placeholder='Enter Your Mobile No'
                        />
                    </div>
                    <div className='w-[100%] mb-0'>
                        <p className='ml-2'>Specialization : <span className='text-red-600'>*</span> </p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{props.validationErrors.specialization}</p>
                        <Select
                            mode="multiple"
                            style={{ width: '100%', height:"48px", fontSize:'17px', color:'black', }}
                            placeholder="Please select Specialization"
                            // defaultValue={['a10', 'c12']}
                            value={props.formData.specialization}
                            onChange={props.handleSelectChange}
                            options={options}
                        />
                    </div>

                   

                </div>
            </form>
        </div>
    )
}

export default DoctorDetailsForm
