

function UserDetailsForm() {
    return (
        <div>
            <div className='text-left w-full mt-5'>
                <p className='text-[var(--text-c)] '>Fill your information and press continue</p>
            </div>

            <form action="">
                <div className='text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[20%] gap-y-4'>
                    <div className='w-[40%] mb-0 '>
                        <p className='ml-2'>First Name: <span className='text-red-600'>*</span></p>
                        <input type="text" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Enter Your First Name' />
                    </div>
                    <div className='w-[40%] mb-0 '>
                        <p className='ml-2'>Last Name: <span className='text-red-600'>*</span></p>
                        <input type="text" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Enter Your Last Name' />
                    </div>
                    <div className='w-[40%] mb-0 '>
                        <p className='ml-2'>Date Of Birth: <span className='text-red-600'>*</span></p>
                        <input type="date" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Select Date' />
                    </div>

                    <div className='w-[40%] mb-0 '>
                        <p className='ml-2'>Nationolity:  </p>
                        {/* <input type="select" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Enter Your Name' /> */}
                        <select name="nationality" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' id="">
                            <option value="sinhala">Sinhala</option>
                            <option value="tamil">Tamil</option>
                        </select>
                    </div>

                    <div className='w-[40%] mb-0 '>
                        <p className='ml-2'>NIC </p>
                        <input type="text" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Enter Your NIC' />
                    </div>

                    <div className='w-[40%] mb-0 '>
                        <p className='ml-2'>Email </p>
                        <input type="text" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Enter Your Email' />
                    </div>
                    <div className='w-[100%] mb-0 '>
                        <p className='ml-2'>Email </p>
                        <input type="text" className='border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]' placeholder='Enter Your Email' />
                    </div>
                    <div className='mt-2 text-right w-full'>
                        <button className='p-2 border-2 w-[200px] bg-[var(--accent)] rounded-[20px]'>Continue</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserDetailsForm
