function MCSDateTimeTitle() {
  const now = new Date();

  // Format the time as hh:mm AM/PM
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours >= 12 ? "PM" : "AM"}`;

  // Format the date as yyyy MMMM dd
  const year = now.getFullYear();
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.getDate();
  const formattedDate = `${year} ${month} ${day}`;

  return (
    <div>
      <p className="text-xl text-mediphix_text_a font-bold text-center">
        {formattedTime}
      </p>
      <p className="text-mediphix_text_b text-center">{formattedDate}</p>
    </div>
  );
}

export default MCSDateTimeTitle;
