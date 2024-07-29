import Navigation from "../components/landing-page-components/Navigation";
import FirstSectionImg from "../components/landing-page-components/FirstSectionImg";
import FirstSectionTitle from "../components/landing-page-components/FirstSectionTitle";
import Stat from "../components/landing-page-components/Stat";
import Feature from "../components/landing-page-components/Feature";
import WhyUs from "../components/landing-page-components/WhyUs";
import Feedback from "../components/landing-page-components/Feedback";
import FAQ from "../components/landing-page-components/FAQ";
import JoinWithUs from "../components/landing-page-components/JoinWithUs";
import Footer from "../components/landing-page-components/Footer";
import { ConfigProvider } from "antd";

function LandingPage() {
  return (
    // ConfigProvider wrapper shouold have move to the app.tsx later
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7300",
          colorInfo: "#ff7300",
          borderRadius: 8,
        },
        components: {
          Pagination: {
            itemActiveBg: "", // remove the default active bg color
          },
        },
      }}
    >
      <div className="min-h-screen w-screen bg-green-300">
        <Navigation />
        {/* First Section  */}
        <div className="px-24 bg-mediphix_accent">
          <FirstSectionTitle />
          <FirstSectionImg />
        </div>
        {/* Second Section */}
        <div className="px-24 bg-red-200">
          <Stat />
          <Feature />
          <Feature />
          <Feature />
          <WhyUs />
          <Feedback />
          <FAQ />
          <JoinWithUs />
          <Footer />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default LandingPage;
