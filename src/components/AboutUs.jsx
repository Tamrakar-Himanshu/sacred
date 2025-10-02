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
    
    <section ref={sectionRef} className="bg-[#FFFCF6] px-6 sm:px-32 pb-3" id="aboutus">
      <div className="relative flex justify-center ">
        <ChevronDown
          onClick={handleScrollToTop}
          className="absolute w-8 h-8 text-black cursor-pointer top-[-44px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 sm:py-40">
        {/* Left: Headline */}
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Mobile Image */}
          <div className="absolute top-[20px] left-[10px] lg:static -translate-x-6 lg:-translate-x-16 -translate-y-0 lg:-translate-y-[-3rem]">
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

        {/* Right: Skills Container */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group w-full max-w-lg">
            {/* Styled Container with rounded corner */}
            <div className="relative bg-gradient-to-br from-white to-[#FFF8F0] rounded-3xl shadow-xl p-8 sm:p-10 overflow-hidden border border-[#D97F11]/10 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D97F11]/20 to-transparent rounded-bl-[100px]"></div>
              
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-[#D97F11] rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-[#BF5F0B] rounded-full"></div>
              </div>

              {/* Skills Tags */}
              <div className="relative flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-[#D97F11] to-[#BF5F0B] text-white px-5 py-3 rounded-full text-sm lg:text-base font-medium whitespace-nowrap hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D97F11]/30 to-transparent"></div>
            </div>

            {/* External decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#7EC4A8] rounded-full opacity-60 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#F4C9A0] rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;