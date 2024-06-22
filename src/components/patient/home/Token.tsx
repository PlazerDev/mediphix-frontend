import qr from "./../../../assets/images/patient/home/qr_code.png";
import bgimage from "./../../../assets/images/patient/home/token_image.png";
import "./Token.css";

import { IoDownloadOutline } from "react-icons/io5";

const Token = () => {
  return (
    <>
      <div className="flex flex-col  max-h-[230px]  min-w-[550px]">
        <div className="max-w-[650px] bg-gradient-to-r from-[#DF640B] to-[#FF7300] rounded-[16px]">
          <div
            className="flex bgimage  max-h-[230px] bg-contain bg-no-repeat bg-right"
            style={{ backgroundImage: `url(${bgimage})` }}
          >
            <div className="flex  justify-between py-3 pl-8 ">
              <div className="flex flex-col ">
                <h2 className="text-[#FFFFFF] text-center  mt-2 mb-4 text-xl font-semibold">
                  Scan Me
                </h2>

                <img
                  className="w-32 h-32 rounded-[16px] p-1 bg-[#FFFFFF]"
                  src={qr}
                />
              </div>
              <div className="flex items-center">
                <div className="border-l-2 border-[#FFFFFF] mx-8  h-16"></div>
              </div>
              <div className="text-white min-w-[250px]">
                <div className="mb-1">
                  <h4 className="text-[#151515] text-[14px] font-semibold ">
                    2024/06/17 | 06.00PM - 07.00PM
                  </h4>
                </div>
                <div className="mb-1 ">
                  <p className="text-[12px]">Name</p>
                  <h4 className="font-semibold text-[14px]">
                    Vishwa Sandaruwan
                  </h4>
                </div>
                <div className="mb-1">
                  <p className="text-[12px]">Doctor Name</p>
                  <h4 className="font-semibold text-[14px]">
                    Dr. B.KARUNARATNE
                  </h4>
                </div>
                <div className="mb-1">
                  <p className="text-[12px]">Medical Center</p>
                  <h4 className="font-semibold text-[14px]">
                    Aloka Clinic & Laboratory
                  </h4>
                </div>
                <div className="">
                  <p className="text-[14px]">Queue Number</p>
                  <div className="flex justify-center items-center mt-1 w-6 h-6 bg-[#FFFFFF] rounded-[8px]">
                    <h4 className="font-bold text-[14px] text-[#151515]">07</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex text-[#FFFFFF] items-end">
              <p className="bg-[#363636] px-8 py-2 [border-radius:16px_0_16px_0] ml-4">
                REF_8056
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-[#FF7300]">
          <IoDownloadOutline className="font-extrabold text-lg mt-1 mr-1" />

          <p className=" text-center pt-1 font-bold text-[14px]">
            Download Token Now
          </p>
        </div>
      </div>
    </>
  );
};

export default Token;
