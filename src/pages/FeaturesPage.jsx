import React from "react";
import SalesOptimization from "../components/SalesOptimization";
import DigitalMarketing from "../components/DigitalMarketing";
import AboutUsCard from "../components/ClientSayingAboutUs";
import MainFeatures from "../components/MainFeatures";
import Header from "../components/Header";

export default function FeaturesPage() {
  return (
    <div  style={{backgroundColor: "#160E33"}}>
         <Header />
      <SalesOptimization />
      <DigitalMarketing />
      <MainFeatures/>
      {/* <AboutUsCard /> */}
    </div>
  );
}
