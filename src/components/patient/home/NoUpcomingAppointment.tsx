import profilepic from "./../../../assets/images/patient/home/no_appointment.png";

const NoUpcomingAppointment = () => {
  return (
    <div className="bg-[#fff] rounded-[16px] h-1/2 p-4">
    <div className=" flex justify-between mb-4">
      <div>
        <h1 className="text-lg font-bold">
          Upcoming Appointment
        </h1>
      </div>

      <div className="mt-1">
        <p className="text-[#FF7300] text-sm font-semibold">
          View More
        </p>
      </div>
    </div>
    <div className='flex items-center justify-center bg-contain'>
        <img className='w-40 h-35 mb-2' 
        src={profilepic} 
        alt="No Appointment" 
        />
    </div>
    <div className='mb-2'>
        <p className='text-center'>
            You have no upcoming appointments at the <br/>
            moment.
        </p> 
    </div>
    <div className='flex justify-center'> 
    <div className='bg-[#FF7300] rounded-[8px] px-4 py-2 inline-flex'>
            <p className='font-Roboto text-[#FFFFFF] text-center'>
                Make an appointment
            </p>
    </div>
    </div>
    </div>
  )
}

export default NoUpcomingAppointment