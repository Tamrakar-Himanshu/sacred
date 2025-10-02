"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import girl from "../assets/divider-main-4.png";

const HowItWorks = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Get matched to the best therapist for you",
      description:
        "Answer a few questions to find a qualified therapist who fits your needs and preferences. Tap into the largest online network of credentialed providers.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      title: "Communicate your way",
      description:
        "Talk to your therapist however you feel comfortable — text, chat, audio, or video. You can expect the same professionalism as an in-office therapist.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      title: "Therapy when you need it",
      description:
        "You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=450&fit=crop",
    },
  ];

  return (
    <div className=" bg-[#F5F7F5] pt-20 ">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-slate-900 tracking-tight">
          How it works
        </h2>

        {/* Sections */}
        <div className="space-y-12 sm:space-y-32 px-8 sm:px-20   ">
          {sections.map((section, index) => (
            <div key={section.id}>
              <div
                className={`grid md:grid-cols-2 gap-16 items-center${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Video Side */}
                <div
                  className={`relative flex items-center justify-center ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-md"
                    onMouseEnter={() => setHoveredVideo(section.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      {/* Thumbnail Image */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          hoveredVideo === section.id
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                      >
                        <img
                          src={section.thumbnail}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Play button overlay on thumbnail */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 transition-transform duration-300 group-hover:scale-110">
                            <Play
                              className="w-8 h-8 text-white ml-1"
                              fill="white"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Video (shows on hover) */}
                      <video
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                          hoveredVideo === section.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={section.videoUrl} type="video/mp4" />
                      </video>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Decorative circles */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-0 left-0 w-24 h-24 bg-[#F4C9A0] rounded-full -translate-x-8 -translate-y-8 opacity-70" />
                      <div className="absolute bottom-16 left-8 w-20 h-20 bg-[#7EC4A8] rounded-full opacity-60" />
                      <div className="absolute top-1/3 right-0 w-16 h-16 bg-[#9DC88D] rounded-full translate-x-8 opacity-70" />
                      <div className="absolute bottom-8 right-16 w-24 h-24 bg-[#B8D4A8] rounded-full opacity-60" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-8 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#F4D35E] rounded-full translate-x-8 sm:translate-x-12 opacity-60" />
                      <div className="absolute bottom-20 right-8 w-10 h-10 sm:w-20 sm:h-20 bg-[#A8DADC] rounded-full opacity-70" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F1FAEE] rounded-full -translate-x-8 translate-y-8 opacity-80" />
                    </>
                  )}  
                  {index === 2 && (
                    <>
                      <div className="absolute top-0 left-8 w-28 h-28 bg-[#90E0A8] rounded-full -translate-y-10 opacity-60" />
                      <div className="absolute bottom-12 left-0 w-16 h-16 bg-[#FFD166] rounded-full -translate-x-8 opacity-70" />
                      <div className="absolute top-1/3 right-0 w-20 h-20 bg-[#EF8354] rounded-full  translate-x-6 sm:translate-x-10 opacity-60" />
                      <div className="absolute bottom-0 right-12 w-24 h-24 bg-[#A8DADC] rounded-full translate-y-8 opacity-70" />
                    </>
                  )}
                </div>

                {/* Text Side */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 mb-6 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-light">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Arrow Indicator - only show on first two sections */}
              {index < 2 && (
                <div className="flex justify-around pt-8 ">
                  <svg
                    className="w-12 h-16 text-[#D97F11]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 36"
                  >
                    <path
                      d="M12 4 L12 28 M12 28 L6 22 M12 28 L18 22"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <img src={girl} alt="img" className=" container " />
    </div>
  );
};

export default HowItWorks;
