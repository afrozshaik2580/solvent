import AnalysisSection from "../components/AnalysisSection";
import ContactSection from "../components/ContactSection";
import OnlineSales from "../components/OnlineSales";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import UsersSection from "../components/UsersSection";
import AvailableServices from "../components/AvailableServices";
import AttractiveFeatures from "../components/AtrractiveFeatures";

export default function LandingPage() {
  return (
    <div className="bg-[#160e33] text-white overflow-hidden">
      <Header />
      <GetStarted />
      <OnlineSales />
      <AvailableServices />
      <AttractiveFeatures />
      <UsersSection />
      <hr className="w-3/5 mx-auto my-16 border border-[#ef443b]" />
      <AnalysisSection />
      {/* <hr className="w-3/5 mx-auto my-16 border border-[#ef443b]" />
      <ContactSection /> */}
      {/* <hr className="w-3/5 mx-auto my-16 border border-[#ef443b]" /> */}
      <Footer />
    </div>
  );
}
