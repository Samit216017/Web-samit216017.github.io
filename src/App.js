import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Page2 from "./components/services/Page2";
import DigitalMarketing from "./components/servicesPages/DigitalMarketing";
import SocialMediaMarketing from "./components/servicesPages/SocialMediaMarketing";
import ECommerceWebsite from "./components/servicesPages/ECommerceWebsite";
import WebDevelopment from "./components/servicesPages/WebDevelopment";
import SEO from "./components/servicesPages/SEO";
import LeadGenerationService from "./components/servicesPages/LeadGenerationService";
import PayPerClick from "./components/servicesPages/PayPerClick";
import StrategicBranding from "./components/servicesPages/StrategicBranding";
import MobileAppDevelopement from "./components/servicesPages/MobileAppDevelopement";
import DigitalMarketingCourse from "./components/servicesPages/DigitalMarketingCourse";

function App() {
  return (
    <div className="max-w-screen min-h-screen flex flex-col font-inter">

      <Routes>

        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="/about-us"
          element={<AboutUs/>}
        />

        <Route
          path="/portfolio"
          element={<Portfolio/>}
        />

        <Route
          path="/contact"
          element={<ContactUs/>}
        />

        <Route
          path="/services"
          element={<Services/>}
        />

        <Route
          path="/services/page/2"
          element={<Page2/>}
        />

        <Route
          path="/digital-marketing"
          element={<DigitalMarketing/>}
        />

        <Route
          path="/social-media-marketing-company"
          element={<SocialMediaMarketing/>}
        />

        <Route
          path="/ecommerce-website-development-company"
          element={<ECommerceWebsite/>}
        />

        <Route
          path="/web-development-company"
          element={<WebDevelopment/>}
        />

        <Route
          path="/seo-company"
          element={<SEO/>}
        />

        <Route
          path="/lead-generation-services"
          element={<LeadGenerationService/>}
        />

        <Route
          path="/pay-per-click"
          element={<PayPerClick/>}
        />

        <Route
          path="/strategic-branding"
          element={<StrategicBranding/>}
        />

        <Route
          path="/mobile-app-development-company"
          element={<MobileAppDevelopement/>}
        />

        <Route
          path="/digital-marketing-course"
          element={<DigitalMarketingCourse/>}
        />
      </Routes>
    </div>
  );
}

export default App;
