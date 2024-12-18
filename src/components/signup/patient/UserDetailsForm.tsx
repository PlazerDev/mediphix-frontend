/* eslint-disable @typescript-eslint/no-explicit-any */

import { ConfigProvider, Select } from "antd";

// interface Props {
//   formData:
//   handleChange:
//   validationErrors : any
//   handleClick?:
// }

function UserDetailsForm({ formData, handleChange, validationErrors }: any) {
  return (
    <div>
      <div className="text-left w-full mt-5">
        <p className="text-[var(--text-c)]">
          Fill your information and press continue
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[20%] gap-y-4">
          <div className="w-[40%] mb-0">
            <p className="ml-2">
              First Name: <span className="text-red-600">*</span>
            </p>
            <p className="ml-2 text-xs text-red-500 w-full italic">
              {validationErrors.fname}
            </p>
            <input
              type="text"
              name="fname"
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
              placeholder="Enter Your First Name"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>
          <div className="w-[40%] mb-0">
            <p className="ml-2">
              Last Name: <span className="text-red-600">*</span>
            </p>
            <p className="ml-2 text-xs text-red-500 w-full italic">
              {validationErrors.lname}
            </p>
            <input
              type="text"
              name="lname"
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
              placeholder="Enter Your Last Name"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>
          <div className="w-[40%] mb-0">
            <p className="ml-2">
              Date Of Birth: <span className="text-red-600">*</span>
            </p>
            <p className="ml-2 text-xs text-red-500 w-full italic">
              {validationErrors.dob}
            </p>
            <input
              type="date"
              name="dob"
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="w-[40%] mb-0">
            <p className="ml-2">Nationality: </p>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
            >
              <option value="">Select Nationality</option>
              <option value="srilankan">Sri Lankan</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-[40%] mb-0">
            <p className="ml-2">NIC </p>
            <input
              type="text"
              name="nic"
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
              value={formData.nic}
              onChange={handleChange}
              placeholder="Enter Your NIC"
            />
          </div>

          <div className="w-[40%] mb-0">
            <p className="ml-2">Email </p>
            <input
              type="email"
              name="email"
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div className="w-[40%] mb-0">
            <p className="ml-2">Gender: </p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-[100%] mb-0">
            <p className="ml-2">Address </p>
            <input
              type="text"
              name="address"
              className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Your Address"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserDetailsForm;
