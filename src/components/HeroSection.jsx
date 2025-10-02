import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logo from "../assets/IMG_9437.PNG";
import divider from "../assets/divider-main-1.png";
// Import your card images
import individualImg from "../assets/individual.png";
import couplesImg from "../assets/couple.png";
import teenImg from "../assets/teen.png";
import familyImg from "../assets/teen.png";

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [headerBgColor, setHeaderBgColor] = useState("bg-[#732C02]");
  const [headerTextColor, setHeaderTextColor] = useState("text-[#ffffff]");
  const cardsRef = useRef(null);

  const cards = useMemo(
    () => [
      {
        id: 0,
        title: "Individual",
        subtitle: "For myself",
        word: "happy",
        bgColor: "bg-emerald-700",
        bottomBg: "bg-yellow-300",
        image: individualImg,
        fillColor: "fill-emerald-700",
      },
      {
        id: 1,
        title: "Couples",
        subtitle: "For me and my partner",
        word: "loved",
        bgColor: "bg-teal-600",
        bottomBg: "bg-teal-500",
        image: couplesImg,
        fillColor: "fill-teal-600",
      },
      {
        id: 2,
        title: "Teen",
        subtitle: "For my child",
        word: "supported",
        bgColor: "bg-amber-700",
        bottomBg: "bg-yellow-300",
        image: teenImg,
        fillColor: "fill-amber-700",
      },
      {
        id: 3,
        title: "Family",
        subtitle: "For my family",
        word: "connected",
        bgColor: "bg-purple-700",
        bottomBg: "bg-purple-400",
        image: familyImg,
        fillColor: "fill-purple-700",
      },
    ],
    []
  );

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  // Scroll listener to change header color
  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const cardsTop = cardsRef.current.getBoundingClientRect().top;

        // When cards section reaches top (within 100px threshold)
        if (cardsTop <= 50) {
          setHeaderBgColor("bg-[#ffffff]");
          setHeaderTextColor("text-[#732C02]");
        } else {
          setHeaderBgColor("bg-[#732C02]");
          setHeaderTextColor("text-[#ffffff]");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCard, cards]);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <>
      {/* Header */}
      <div
        className={`${headerBgColor} sticky top-0 z-50 transition-colors duration-500`}
      >
        <nav className="flex items-center justify-between px-8 py-1">
          <div className="flex items-center gap-2">
            <div className="text-white text-2xl font-semibold">
              <img src={logo} alt="logo" className="w-20 h-20" />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className={`${headerTextColor} hover:opacity-80`}>
              Business
            </a>
            <a href="#" className={`${headerTextColor} hover:opacity-80`}>
              About
            </a>
            <a href="#" className={`${headerTextColor} hover:opacity-80`}>
              Advice
            </a>
            <a href="#" className={`${headerTextColor} hover:opacity-80`}>
              FAQ
            </a>
            <a href="#" className={`${headerTextColor} hover:opacity-80`}>
              Therapist jobs
            </a>
            <a href="#" className={`${headerTextColor} hover:opacity-80`}>
              Contact
            </a>
            <button
              className={`${headerTextColor} border border-white rounded-full px-6 py-2 hover:bg-[#732C02] hover:text-[#fff] transition-colors`}
            >
              Login
            </button>
            <button
              className={`bg-white text-[#732C02] rounded-full px-6 py-2 font-semibold hover:bg-gray-100 transition-colors`}
            >
              Get started
            </button>
          </div>
        </nav>
      </div>

      <div className="bg-gradient-to-b from-[#712D13] to-[#BF5F0B] ">
        {/* Hero Content - Two Column Layout */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 pt-10 pb-32 items-center max-w-7xl mx-auto container max-h-[80vh]"
        >
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center">
            <h1 className="text-white text-6xl lg:text-7xl font-light mb-8">
              You deserve to be{" "}
              <span className="inline-block min-w-[200px] transition-all duration-500">
                {cards[activeCard].word}.
              </span>
            </h1>
            <p className="text-white text-xl lg:text-2xl">
              What type of therapy are you looking for?
            </p>
          </div>

          {/* Right Side - Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeCard * 100}%)` }}
              >
                {cards.map((card) => (
                  <div key={card.id} className="min-w-full px-4">
                    <div
                      className={`${card.bgColor} rounded-3xl overflow-hidden shadow-2xl`}
                    >
                      <div className="p-8 pb-30">
                        <h2 className="text-white text-4xl font-light mb-4">
                          {card.title}
                        </h2>
                        <div className="flex items-center gap-2 text-white mb-8">
                          <span className="text-lg">{card.subtitle}</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                      <div
                        className={`${card.bottomBg} h-64 relative overflow-hidden`}
                      >
                        {/* Curvy separator */}
                        <svg
                          className="absolute top-0 left-0 w-full"
                          style={{ transform: "translateY(-1px)" }}
                          viewBox="0 0 1200 80"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0,40 C300,80 600,0 900,40 C1050,60 1150,40 1200,40 L1200,0 L0,0 Z"
                            className={card.fillColor}
                          />
                        </svg>
                        {/* Image container */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 ">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full  object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevCard}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6 text-teal-800" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6 text-teal-800" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {cards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeCard
                      ? "w-8 bg-white"
                      : "w-2 bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  aria-label={`Go to ${card.title} card`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" ">
          <img src={divider} alt="btm" className="w-full" />
        </div>
        {/* Scroll Indicator */}
      </div>
    </>
  );
};

export default HeroSection;
