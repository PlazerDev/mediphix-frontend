import ongoingAppointment from "./../../../assets/images/patient/home/ongoing_appointment.png";

const NoAppointment = () => {
  return (
    <>
      <div className="flex flex-col justify-between  min-h-[550px]">
        <h3 className="text-[#151515]">
          <b>Ongoing Appointment</b>
        </h3>

        <div className="flex justify-center">
          <img
            className="w-60 h-56"
            src={ongoingAppointment}
            alt="Ongoing-appointment-image"
          />
        </div>

        <div className=" flex text-center  w-full justify-center">
          <div className="w-96 ">
            <p className="text-[#151515] mb-6">
              You have no ongoing appointments at the moment
            </p>
            <p className="text-[#868686]">
              Once the receptionist accepts and confirms your payment, the
              appointment details will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoAppointment;
