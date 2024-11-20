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


    const options = [
        { label: 'Allergy and Immunology', value: 'allergy_and_immunology' },
        { label: 'Anesthesiology', value: 'anesthesiology' },
        { label: 'Cardiology', value: 'cardiology' },
        { label: 'Dermatology', value: 'dermatology' },
        { label: 'Emergency Medicine', value: 'emergency_medicine' },
        { label: 'Endocrinology', value: 'endocrinology' },
        { label: 'Family Medicine', value: 'family_medicine' },
        { label: 'Gastroenterology', value: 'gastroenterology' },
        { label: 'Geriatrics', value: 'geriatrics' },
        { label: 'Hematology', value: 'hematology' },
        { label: 'Infectious Disease', value: 'infectious_disease' },
        { label: 'Internal Medicine', value: 'internal_medicine' },
        { label: 'Nephrology', value: 'nephrology' },
        { label: 'Neurology', value: 'neurology' },
        { label: 'Obstetrics and Gynecology', value: 'obstetrics_and_gynecology' },
        { label: 'Oncology', value: 'oncology' },
        { label: 'Ophthalmology', value: 'ophthalmology' },
        { label: 'Orthopedics', value: 'orthopedics' },
        { label: 'Otolaryngology', value: 'otolaryngology' },
        { label: 'Pediatrics', value: 'pediatrics' },
        { label: 'Physical Medicine and Rehabilitation', value: 'physical_medicine_and_rehabilitation' },
        { label: 'Plastic Surgery', value: 'plastic_surgery' },
        { label: 'Podiatry', value: 'podiatry' },
        { label: 'Psychiatry', value: 'psychiatry' },
        { label: 'Pulmonology', value: 'pulmonology' },
        { label: 'Radiology', value: 'radiology' },
        { label: 'Rheumatology', value: 'rheumatology' },
        { label: 'Surgery', value: 'surgery' },
        { label: 'Thoracic Surgery', value: 'thoracic_surgery' },
        { label: 'Urology', value: 'urology' },
        { label: 'Vascular Surgery', value: 'vascular_surgery' },
        { label: 'Pathology', value: 'pathology' },
        { label: 'Public Health', value: 'public_health' },
        { label: 'Radiation Oncology', value: 'radiation_oncology' },
        { label: 'Sports Medicine', value: 'sports_medicine' },
        { label: 'Occupational Medicine', value: 'occupational_medicine' },
        { label: 'Preventive Medicine', value: 'preventive_medicine' },
        { label: 'Medical Genetics', value: 'medical_genetics' },
        { label: 'Neurosurgery', value: 'neurosurgery' },
        { label: 'Nuclear Medicine', value: 'nuclear_medicine' },
        { label: 'Pain Medicine', value: 'pain_medicine' }
    ];
    

    // for (let i = 0; i < 100000; i++) {
    //     const value = `${i.toString(36)}${i}`;
    //     options.push({
    //         label: value,
    //         value
            
    //     });
    // }
    

    return (
        <div>
            <div className='text-left w-full mt-5'>
                <p className='text-[var(--text-c)]'>Fill your information and press continue</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className='text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[10%] gap-y-4'>
                    <div className='w-[100%] mb-0'>
                        <p className='ml-2'>Name with Initials: <span className='text-red-600'>*</span></p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{validationErrors.name}</p>
                        <input
                            type="text"
                            name="name"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            placeholder='Enter Your  Name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>SLMC Registration Number: <span className='text-red-600'>*</span></p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{validationErrors.slmc}</p>
                        <input
                            type="text"
                            name="slmc"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            placeholder='Enter Your SLMC Number'
                            value={formData.slmc}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>NIC: <span className='text-red-600'>*</span></p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{validationErrors.nic}</p>
                        <input
                            type="text"
                            name="nic"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            value={formData.nic}
                            onChange={handleChange}
                            placeholder='Enter Your NIC Number'
                        />
                    </div>

                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>Education : <span className='text-red-600'>*</span> </p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{validationErrors.education}</p>
                        <input
                            type="text"
                            name="education"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            value={formData.education}
                            onChange={handleChange}
                            placeholder='Enter Your Education Qualifications'
                        />
                    </div>

                    <div className='w-[45%] mb-0'>
                        <p className='ml-2'>Mobile Number : <span className='text-red-600'>*</span> </p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{validationErrors.mobile}</p>
                        <input
                            type="text"
                            name="mobile"
                            className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]'
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder='Enter Your Mobile No'
                        />
                    </div>
                    <div className='w-[100%] mb-0'>
                        <p className='ml-2'>Specialization : <span className='text-red-600'>*</span> </p>
                        <p className="ml-2 text-xs text-red-500 w-full italic" >{validationErrors.specialization}</p>
                        <Select
                            mode="multiple"
                            style={{ width: '100%', height:"48px", fontSize:'17px', color:'black', }}
                            placeholder="Please select Specialization"
                            // defaultValue={['a10', 'c12']}
                            value={formData.specialization}
                            onChange={handleSelectChange}
                            options={options}
                        />
                    </div>

                   

                </div>
            </form>
        </div>
    )
}

export default DoctorDetailsForm
