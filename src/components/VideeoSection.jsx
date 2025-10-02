import React, { useState } from "react";
import { Play } from "lucide-react";
import threelines from "../assets/line-burst.svg";
import cicleline from "../assets/line-squiggle.svg";
import div2 from "../assets/divider-main-2.png";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#f7f0e6] to-[#fffcf6] z-0">
        <div className="curved-top"></div>

        {/* Main content */}
        <div className="pt-2 sm:pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                  Professional and qualified therapists who you can trust
                </h2>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Tap into the world's largest network of qualified and
                  experienced therapists who can help you with a range of issues
                  including depression, anxiety, relationships, trauma, grief,
                  and more. With our therapists, you get the same
                  professionalism and quality you would expect from an in-office
                  therapist, but with the ability to communicate when and how
                  you want.
                </p>

                <div className="pt-4">
                  <button className="px-8 py-4 bg-[#D97F11] hover:bg-[#BF5F0B] text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                    Get matched to a therapist
                  </button>
                </div>
              </div>

              {/* Right Side: Video Container */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Top Decorative Lines */}
                <div className="absolute -top-16 left-[-14px] lg:left-44">
                  <img src={threelines} alt="decorative lines" />
                </div>

                {/* Bottom Decorative Curve */}
                <div className="absolute -bottom-10 -right-4 lg:-right-8">
                  <img src={cicleline} alt="decorative curve" />
                </div>

                {/* Video Container - Mobile 16:9 Aspect Ratio */}
                <div 
                  className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[350px] aspect-[9/16]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full h-full border-img">
                    <div className="relative w-full h-full overflow-hidden">
                      {/* Thumbnail Image */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isHovered ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=900&fit=crop&q=80"
                          alt="Professional therapist"
                          className="w-full h-full object-cover"
                        />
                        {/* Play button overlay on thumbnail */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                            <Play
                              className="w-8 h-8 sm:w-10 sm:h-10 text-[#D97F11] ml-1"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Video (shows on hover) */}
                      <video
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source
                          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      {/* Hover Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={div2} alt="img" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default VideoSection;