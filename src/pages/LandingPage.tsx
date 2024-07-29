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

function LandingPage() {
  return (
    <div className="min-h-screen w-screen bg-red-200 px-24">
      <Navigation />
      <FirstSectionTitle />
      <FirstSectionImg />
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
  );
}

export default LandingPage;
