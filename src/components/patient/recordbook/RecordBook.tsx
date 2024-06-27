import RecordBookDetails from "./RecordBookDetails";
import Navigation from "./../navigation/PatientNavigation";
import Footer from "./../../Footer";
const recordbook = () => {
  return (
    <>
      <Navigation />
      <div className="h-screen flex flex-col m-4">
        <div className="mt-2">
          <p className="  text-xl font-bold">Record - 2024 June 13 at 03.27 PM</p>
          <p className="text-sm mb-2">Record Book / REC_2024_06_13_15_27 </p>
        </div>
        <RecordBookDetails />
        <Footer />
      </div>
    </>
  );
};

export default recordbook;
