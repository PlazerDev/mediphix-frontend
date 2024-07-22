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