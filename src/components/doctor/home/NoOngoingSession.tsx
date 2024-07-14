import profilepic from "./../../../assets/images/patient/home/no_appointment.png";

const NoOngoingSession = () => {
  return (
    <div className="bg-[#fff] rounded-[16px] h-1/2 p-4">
    <div className='flex items-center justify-center bg-contain'>
        <img className='w-40 h-35 mb-2' 
        src={profilepic} 
        alt="No Appointment" 
        />
    </div>
    <div className='mb-2'>
        <p className='text-center'>
            You have no ongoing session at the <br/>
            moment.
        </p> 
    </div>
    </div> 
  )
}

export default NoOngoingSession