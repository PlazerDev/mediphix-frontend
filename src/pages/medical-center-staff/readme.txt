  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div */}
        
      </div>
    </div>
  );


    swal({
    title: "Alert",
    text: "You have 2 ongoing clinic sessions",
    icon: "info",
    buttons: {
      confirm: {
        text: "OK",
      },
    },
  });



  <p className="font-bold">Clinic Session Details</p>
      <div className="my-2 flex md:flex-row flex-col">
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Time Frame</p>
            <p>sdf</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Date</p>
            <p>sdf</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Hall Number</p>
            <p>sdf</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Status</p>
            <p className="text-mediphix_accent">sdf</p>
          </div>
        </div>
      </div>




       const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    const markedDates = ["2024-07-05", "2024-07-10"];
    const formattedDate = current.format("YYYY-MM-DD");
    const isMarked = markedDates.includes(formattedDate);

    if (isMarked) {
      return (
        <div
          style={{
            backgroundColor: "#ff0000",
            color: "white",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          {current.date()}
        </div>
      );
    }
    return <div>{info.originNode}</div>;
  };