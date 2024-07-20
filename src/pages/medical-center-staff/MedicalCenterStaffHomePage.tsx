import { ConfigProvider } from "antd";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";

function MedicalCenterStaffHomePage() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7300",
          colorInfo: "#ff7300",
          borderRadius: 16,
        },
      }}
    >
      <div>
        {/* Navigation Bar  */}
        <MCSNavBar />
        {/* Body */}
      </div>
    </ConfigProvider>
  );
}

export default MedicalCenterStaffHomePage;
