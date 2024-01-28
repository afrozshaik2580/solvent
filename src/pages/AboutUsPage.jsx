 import Header from "../components/Header";
 import WeSection from "../components/WeSection";
 import CardsSection from "../components/CardsSection";
 import Testimonial from "../components/Testimonial";
 import BrandingSection from "../components/BrandingSection";
import ThingsWeValue from "../components/ThingsWeValue";

export default function AboutUsPage() {
  return (
    <div className="bg-[#160e33] text-white overflow-hidden">
      <Header></Header>
      <WeSection></WeSection>
      <CardsSection></CardsSection>
      <BrandingSection />
      <ThingsWeValue />
      <Testimonial/>
    </div>
  );
}
