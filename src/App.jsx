import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import PhotoSection from "./components/PhotoSection";
import HowItWorks from "./components/HiwItWorks";
import VideoSection from "./components/VideeoSection"
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  // Lenis is initialized globally in main.jsx

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <PhotoSection />
      <VideoSection />

      <HowItWorks />
      <Faq />
      <Footer />
    </div>
  );
}
