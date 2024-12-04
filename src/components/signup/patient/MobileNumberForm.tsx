import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

/* eslint-disable @typescript-eslint/no-explicit-any */
interface MobileNumberFormProps {
  formData: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addMobile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validationErrors: any;
}

function MobileNumberForm({
  formData,
  handleChange,
  addMobile,
  handleClick,
  validationErrors,
}: MobileNumberFormProps) {
  const email = formData.email;
  // handle profile photo uploading
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://justExample/" + { email },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="">
      <p className="text-[var(--text-c)] mt-5">
        Enter your mobile phone number, Passwords and a Profile Photo.
      </p>

      <div className="mt-10 flex flex-col flex-wrap">
        <span>
          Mobile Number: <span className="text-red-500">*</span>
        </span>
        <p className="ml-2 text-xs text-red-500 w-full italic">
          {validationErrors.mobile}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
        >
          <div className="flex rounded-[20px] w-[40%] border bg-white border-gray-300 p-2 transition-colors duration-300 hover:border-[var(--accent)]">
            <p className="text-[#868686]">+94</p>
            <input
              type="text"
              name="mobile"
              className="rounded-[20px] focus:outline-none pl-2 w-full bg-white"
              placeholder="Enter Your Number"
              value={formData.mobile}
              onChange={addMobile}
            />
          </div>

          <div className="text-left w-[100%] mt-5 flex flex-row flex-wrap gap-x-[10%] gap-y-4">
            <div className="w-[40%] mb-0">
              <p className="ml-2">
                Password: <span className="text-red-600">*</span>
              </p>
              <input
                type="password"
                name="password"
                className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
              />
              <p className="ml-2 text-xs text-red-500 w-full italic">
                {validationErrors.password}
              </p>
            </div>
            <div className="w-[40%] mb-0">
              <p className="ml-2">
                Confirm Password: <span className="text-red-600">*</span>
              </p>
              <input
                type="password"
                name="confirmPassword"
                className="border-2 w-full h-12 rounded-[25px] p-2 focus:outline-[var(--accent)]"
                placeholder="Enter Your Password again"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="mt-4">
          <p>Upload a Profile Photo</p>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">Upload a photo of youself</p>
          </Dragger>
        </div>
      </div>
    </div>
  );
}

export default MobileNumberForm;
