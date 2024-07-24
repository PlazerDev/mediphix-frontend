/* eslint-disable @typescript-eslint/no-explicit-any */


function Verification(props) {
  return (
    <div className='w-full'>
      <p className='text-[var(--text-c)]'>Here is a preview of the details you have been entered.</p>
      <div className='flex flex-row gap-6 p-5 ml-3 mt-3 mb-5 border-2 rounded-[10px] gap-x-18 flex-shrink-0 gap-y-5  flex-wrap border-dotted-[var(--text-c)]'>
        {props.Vdata.map((option:any, index:any) => (
          <div className='w-[180px]' key={index}>
            <p className='text-[var(--text-c)] text-sm'>{props.Voptions[index]}</p>
            <p>{props.formData[option]}</p>
          </div>
        ))}
        
      </div>

      <div>
      
        <p className='text-[var(--text-c)]'>Enter the OTP code sent to the <span className='font-semibold text-black'> {props.role ==='patient' ? props.formData.mobile : props.formData.email}</span></p>
        
        <div className='flex flex-row mt-1' >
          <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
          <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
          <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
          <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
          <input type="text" placeholder='-' className='w-[40px] h-[40px] text-center mr-6  border-[var(--text-c)] border rounded-[20%] border-solid focus:outline-[var(--accent)]' />
        </div>

        <div className='text-xsm '>
          <p className='text-[var(--text-c)]  text-[15px] mt-2'>Didn’t receive the code ? <span className='text-[var(--accent)] font-medium cursor-pointer'>Resend</span></p>
        </div>


      </div>
    </div>
  )
}

export default Verification
