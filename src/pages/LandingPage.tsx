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
import featureImg1 from "./../assets/images/landing-page/feature_01.png";
import featureImg2 from "./../assets/images/landing-page/feature_02.png";
import featureImg3 from "./../assets/images/landing-page/feature_03.png";

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
        <Stat />
        <div className="px-24 bg-mediphix_card_background">
          <Feature
            isReverse={false}
            title="Easy appointment booking"
            description="Book your appointments with ease and convenience. Our system allows you to search for doctors and medical centers across the island, view their availability, and schedule your visits at a time that suits you best."
            img={featureImg1}
          />
          <Feature
            isReverse={true}
            title="Reduced risk of misdiagnosis"
            description="Ensure accurate diagnoses by providing doctors with your complete medical history. Our secure system stores your medical data, allowing doctors to access past records and make well-informed decisions about your health."
            img={featureImg2}
          />
          <Feature
            isReverse={false}
            title="Get Important Reminders"
            description="Never miss an appointment or important health update. Our notification system sends you timely reminders about your upcoming appointments, medication schedules, and other essential health alerts to keep you on track."
            img={featureImg3}
          />
        </div>
        <div className="bg-mediphix_card_background px-16 py-8">
          <WhyUs />
        </div>
        <div className="px-24 bg-red-200">
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
