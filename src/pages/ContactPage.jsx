import React from "react";
import GetInTouch from "../components/GetInTouch";
import MarketingSection from "../components/MarketingSection";
import ContactUs from "../components/ContactUs";
import SeeOurServices from "../components/SeeOurServices";
import Header from "../components/Header";

export default function ContactPage() {
  return (
    <div  style={{backgroundColor: "#160E33"}}>
         <Header />
      <GetInTouch />
      <SeeOurServices/>
      <MarketingSection />
      <ContactUs/>
    </div>
  );
}
