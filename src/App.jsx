import { useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import LocomotiveScroll from "locomotive-scroll";
import AboutUs from "./components/AboutUs";
import PhotoSection from "./components/PhotoSection";
import HowItWorks from "./components/HiwItWorks";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const locomotive = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    const onResize = () => {
      locomotive.update();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      locomotive.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollContainerRef}>
      <div>
        <HeroSection />
        <AboutUs />
        <PhotoSection />
        <HowItWorks />
        <Faq />
        <Footer />
      </div>{" "}
    </div>
  );
}
