import FormButtonSet from "./FormButtonSet"

function Verification() {
  return (
    <div className='w-full'>
      <p className='text-[var(--text-c)]'>Here is a preview of the details you have been entered.</p>
      <div className='flex flex-row gap-6 p-5 ml-3 mt-3 mb-5 border-2 rounded-[10px] gap-x-18 flex-shrink-0 gap-y-8  flex-wrap border-dotted-[var(--text-c)]'>
        <div className='w-[180px]'>
            <p className='text-[var(--text-c)]  text-sm'>First Name</p>
            <p>Data</p>
        </div>
        <div className='w-[180px]'>
            <p className='text-[var(--text-c)]  text-sm'>Last Name</p>
            <p>Data</p>
        </div>
        <div className='w-[180px]'>
            <p className='text-[var(--text-c)]  text-sm'>Mobile Number</p>
            <p>Data</p>
        </div>
        <div className='w-[180px]'>
            <p className='text-[var(--text-c)]  text-sm'>Email</p>
            <p>Data</p>
        </div>
        <div className='w-[180px]'>
            <p className='text-[var(--text-c)]  text-sm'>Date Of Birth</p>
            <p>Data</p>
        </div>
        <div className='w-[180px]'>
            <p className='text-[var(--text-c)]  text-sm'>Natianolity</p>
            <p>Data</p>
        </div>
      </div>

      <div>
            <p className='text-[var(--text-c)]'>Enter the OTP code sent to the <span className='font-semibold text-black'>0713072404</span></p> 
            {/* <div className='flex rounded-[20px] w-full border border-gray-300  p-2 transition-colors duration-300 hover:border-[var(--accent)] '>
                    <p className='text-[#868686]'>+94</p>
                    <input type="text" className='rounded-[20px] focus:outline-none pl-2' />
                   
                </div> */}
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
                <FormButtonSet nxt={"Complete"}/>
            
          </div>
    </div>
  )
}

export default Verification
