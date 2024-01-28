import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUsPage from "../pages/AboutUsPage";
export default function App() {
  return (
    <BrowserRouter>
         <Routes>
      <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
      </Routes>
      </BrowserRouter>
  );
}
