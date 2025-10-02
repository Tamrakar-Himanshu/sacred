import React from "react";
import threelines from "../assets/line-burst.svg";
import cicleline from "../assets/line-squiggle.svg";
import div2 from "../assets/divider-main-2.png"
const PhotoSection = () => {
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

              {/* Right Side: Single Therapist Photo */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Top Decorative Lines */}
                <div className="absolute -top-16 left-[-16px] lg:left-32">
                  <img src={threelines} />
                </div>

                {/* Bottom Decorative Curve */}
                <div className="absolute -bottom-12 -right-[10px] lg:-right-8">
                  <img src={cicleline} alt="" />
                </div>

                {/* Therapist Photo Card */}
                <div className="relative w-72 h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem]">
                  <div className="w-full h-full border-img overflow-hidden shadow-2xl bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=900&fit=crop&q=80"
                      alt="Professional therapist"
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={div2} alt="img" className="w-full  " />
        </div>
      </section>
    </>
  );
};

export default PhotoSection;
