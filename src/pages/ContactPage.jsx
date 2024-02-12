import React from "react";
import GetInTouch from "../components/GetInTouch";
import ContactUs from "../components/ContactUs";
import SeeOurServices from "../components/SeeOurServices";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div  style={{backgroundColor: "#160E33"}}>
         <Header />
      <GetInTouch />
      <SeeOurServices/>
      <ContactUs/>
<Footer/>
    </div>
  );
}
