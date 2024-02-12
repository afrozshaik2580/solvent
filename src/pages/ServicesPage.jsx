import React from "react";
import OurProcess from "../components/OurProcess";
import ServicesWeOffer from "../components/ServicesWeOffer";
// import ServicesOne from "../components/ServicesOne";
import KeepInTouch from "../components/KeepInTouch";
import ServicesSeeMore from "../components/ServicesSeeMore";
import Header from "../components/Header";
import MarketingSection from "../components/MarketingSection";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className="main-bg" style={{ backgroundColor: "#160E33" }}>
       <Header />
   <ServicesSeeMore />
<ServicesWeOffer />
      <MarketingSection />
      <OurProcess />
      <KeepInTouch />
<Footer/>
    </div>
  );
}
