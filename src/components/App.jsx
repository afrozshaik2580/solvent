import AnalysisSection from "./AnalysisSection";
import ContactSection from "./ContactSection";
import OnlineSales from "./OnlineSales";
import Header from "./Header";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import UsersSection from "./UsersSection";
import AvailableServices from "./AvailableServices";
import AttractiveFeatures from "./AtrractiveFeatures";


export default function App() {
  return (
    <div className="bg-[#160e33] text-white overflow-hidden">
         <Header />
      <GetStarted/>
      <OnlineSales />
      <UsersSection />
      <AvailableServices/>
      <AttractiveFeatures/>
      <hr className="w-3/5 mx-auto my-16 border border-[#ef443b]" />
      <AnalysisSection />
      <hr className="w-3/5 mx-auto my-16 border border-[#ef443b]" />
      <ContactSection />
      <hr className="w-3/5 mx-auto my-16 border border-[#ef443b]" />
      <Footer />
    </div>
  );
}
