import React from "react";

// components
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import QuickView from "./Components/QuickView";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Clients from "./Components/Clients";
import DownloadApp from "./Components/DownloadApp";
import Blogs from "./Components/Blogs";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <div className=" relative w-full max-w-[1400px] mx-auto">
      <MobileNav />
      <Navbar />
      <Hero />
      <Clients />
      <AboutUs />
      <Services />
      <QuickView />
      <Testimonials />
      <DownloadApp />
      <Blogs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
