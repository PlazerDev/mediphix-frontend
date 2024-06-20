import qr from "./../../../assets/images/patient/home/qr_code.png";
import bgimage from "./../../../assets/images/patient/home/token_image.png";
import "./Token.css";

const Token = () => {
  return (
    <>
      <div className="max-w-[650px] bg-gradient-to-r from-[#DF640B] to-[#FF7300] rounded-[16px]">
        <div
          className="flex bgimage bg-contain bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="flex  justify-between p-5 ">
            <div className="flex flex-col ml-3">
              <h2 className="text-[#FFFFFF] text-center  mt-2 mb-4 text-[24px]">
                Scan Me
              </h2>

              <img
                className="w-36 h-36 rounded-[16px] p-1 bg-[#FFFFFF]"
                src={qr}
              />
            </div>
            <div className="flex items-center">
              <div className="border-l-2 border-[#FFFFFF] ml-8 mr-4 h-24"></div>
            </div>
            <div className="text-white flex-1 ml-4 min-w-[235px]">
              <div className="mb-2">
              <h4 className="text-[#151515] text-base">
                  <b>2024/06/17 |</b>
                </h4>
                <h4 className="text-[#151515] text-base">
                  <b> 06.00PM - 07.00PM</b>
                </h4>
              </div>
              <div className="mb-1 ">
                <p className="text-sm">Name</p>
                <h4 className="font-bold text-base">Vishwa Sandaruwan</h4>
              </div>
              <div className="mb-1">
                <p className="text-sm">Doctor Name</p>
                <h4 className="font-bold text-base">Dr. B.KARUNARATNE</h4>
              </div>
              <div className="mb-1">
                <p className="text-sm">Medical Center</p>
                <h4 className="font-bold text-base">
                  Aloka Clinic & Laboratory
                </h4>
              </div>
              <div className="mb-1">
                <p className="text-sm">Queue Number</p>
                <div className="flex justify-center items-center mt-1 w-8 h-8 bg-[#FFFFFF] rounded-[8px]">
                  <h4 className="font-bold text-base text-[#151515]">07</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex text-[#FFFFFF] items-end">
            <p className="bg-[#363636] px-11 py-2 [border-radius:16px_0_16px_0] ">
              REF_8576
            </p>
          </div>
        </div>

        {/* <div>
          <img className="bgimage w-36 h-56 object-cover" src={bgimage} />
        </div> */}
      </div>
    </>
  );
};

export default Token;
