import React from "react";
import upperimg from "../assets/line-burst-green.svg";
import { ChevronDown } from "lucide-react";

const AboutUs = () => {
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
    <section className="bg-[#FFFCF6] px-32 ">
      <div className="flex justify-center">
        <ChevronDown className="w-8 h-8 text-black  " />
      </div>{" "}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center  py-40">
        {/* Left: keep same-style headline */}
        <div className="relative">
          {/* SVG decoration - positioned absolutely */}
          <div className="absolute -left-14  -top-8">
            <img src={upperimg} alt="img" />
          </div>

          <h2 className="text-[48px] md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight my-5">
            The world's largest
            <br />
            therapy service.
            <br />
            <span className="text-[#D97F11] font-normal">100% online.</span>
          </h2>
        </div>

        {/* Right: Skills/Expertise tags */}
        <div>
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-3 lg:px-6 lg:py-3.5 border-2 border-teal-600/30 text-white bg-[#D97F11] rounded-full text-sm lg:text-base font-medium hover:bg-[#BF5F0B] transition-all duration-300 shadow-sm hover:shadow-md"
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
