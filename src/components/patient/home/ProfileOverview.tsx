import React from 'react'
import profilepic from "./../../../assets/images/patient/home/profile_pic.jpg"

const ProfileOverview = () => {
  return (
    <>
    <div>
    <div className='p-8 flex justify-between w-[32rem]'>
    <div>
        <h1 className='text-[#151515]'>ProfileOverview</h1>
    </div>

    <div>
        <p className='text-[#FF7300]'>Edit</p>
    </div>
    </div>

    <div className='p-8 flex justify-between w-[32rem]'>
        <div>
        <img className='rounded-full' src={profilepic} alt="Profile Pic"/>
        </div>
        <div>
        <p className='text-[#868686]'>Name</p>
        <p>Vishwa Sandaruwan</p>
        <p className='text-[#868686]'>Age</p>
        <p>23</p>
        <p className='text-[#868686]'>Sex</p>
        <p>Male</p>
        <p className='text-[#868686]'>NIC</p>
        <p>20010*****82</p>
        <p className='text-[#868686]'>Address</p>
        <p>N/A</p>
        </div>
        <div>
        <p className='text-[#868686]'>Mobile Number</p>
        <p>0713072404</p>
        <p className='text-[#868686]'>Email</p>
        <p>N/A</p>
        <p className='text-[#868686]'>Nationality</p>
        <p>LK</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProfileOverview