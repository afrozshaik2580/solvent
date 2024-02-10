import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUsPage from "../pages/AboutUsPage";
import ServicesPage from "../pages/ServicesPage";
import FeaturesPage from "../pages/FeaturesPage";
import ContactPage from "../pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
         <Routes>
      <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
<Route path="/service" element={<ServicesPage />}></Route>
        <Route path="/features" element={<FeaturesPage />}></Route>
        <Route path="/contactUs" element={<ContactPage />}></Route>
      </Routes>
      </BrowserRouter>
  );
}
