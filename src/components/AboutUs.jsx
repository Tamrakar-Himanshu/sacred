import React, { useRef } from "react";
import upperimg from "../assets/line-burst-green.svg";
import { ChevronDown } from "lucide-react";

const AboutUs = () => {
  const sectionRef = useRef(null);

  const handleScrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = [
    "5+ Years Experience",
    "200+ Projects Completed",
    "social media management",
    "Video editing short form content",
    "Shoots",
    "Script writing",
    "Voice over",
    "UGC creators",
  ];

  return (
    <section ref={sectionRef} className="bg-[#FFFCF6] px-6 sm:px-32 pb-3">
      <div className="relative flex justify-center">
        <ChevronDown
          onClick={handleScrollToTop}
          className="absolute w-8 h-8 text-black cursor-pointer top-[-44px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 sm:py-40">
        {/* Left: Headline */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Mobile Image */}
          <div className="absolute top-[20px] left-[-10px] lg:static -translate-x-0 lg:-translate-x-14 -translate-y-0 lg:-translate-y-8">
            <img
              src={upperimg}
              alt="img"
              className="w-15 h-18 sm:w-24 sm:h-24"
            />
          </div>

          <h2 className="text-[28px] sm:text-[28px] lg:text-6xl font-light text-gray-900 leading-tight mt-20 lg:mt-0">
            The world's largest
            <br />
            therapy service.
            <br />
            <span className="text-[#D97F11] font-normal">100% online.</span>
          </h2>
        </div>

        {/* Right: Skills */}
        <div className="flex justify-center lg:justify-start">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-[#D97F11]/90 to-[#BF5F0B]/90 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap hover:opacity-90 transition-all duration-300 mb-2 sm:mb-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
