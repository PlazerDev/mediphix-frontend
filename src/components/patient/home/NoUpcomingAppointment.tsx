import React from 'react'
import profilepic from "./../../../assets/images/patient/home/no_appointment.png";

const NoUpcomingAppointment = () => {
  return (
    <div className="bg-[#fff] rounded-[16px] h-1/2 p-8">
    <div className=" flex justify-between mb-4">
      <div>
        <h1 className="font-Roboto font-[700] text-1xl text-[#151515]">
          Upcoming Appointment
        </h1>
      </div>

      <div className="mt-1">
        <p className="font-Roboto font-[700] text-1xl text-[#FF7300] text-right">
          View More
        </p>
      </div>
    </div>
    <div className='flex items-center justify-center bg-contain'>
        <img className='w-40 h-35 mb-4' 
        src={profilepic} 
        alt="No Appointment" 
        />
    </div>
    <div className='mb-4'>
        <p className='font-Roboto font-[400] text-center'>
            You have no upcoming appointments at the </p>
        <p className='font-Roboto font-[400] text-center'>
            moment.
        </p> 
    </div>
    <div className='flex justify-center'> 
    <div className='bg-[#FF7300] rounded-[16px] px-4 py-2 inline-flex'>
            <p className='font-Roboto text-[#FFFFFF] font-[400] text-center'>
                Make an appointment
            </p>
    </div>
    </div>
    </div>
  )
}

export default NoUpcomingAppointment