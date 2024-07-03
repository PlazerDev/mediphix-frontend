import ongoingAppointment from "./../../../assets/images/patient/home/ongoing_appointment.png";

const NoAppointment = () => {
  return (
    <>
      <div className="flex flex-col gap-14 w-full">
        <h3 className="text-[#151515] text-lg font-bold">
          Ongoing Appointment
        </h3>

        <div className="flex flex-col justify-center items-center">
          <img
            className="w-60 h-56 mb-2"
            src={ongoingAppointment}
            alt="Ongoing-appointment-image"
          />
          <div className=" flex text-center justify-center">
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
      </div>
    </>
  );
};

export default NoAppointment;
