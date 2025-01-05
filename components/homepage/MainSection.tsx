import React from "react";
import PhotoGallery from "./PhotoGallery";

const MiainSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(270deg, #FFFFFF 10%, rgba(208, 221, 234, 0.7) 94%)",
      }}
      className="h-full md:h-[900px] flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 lg:p-24 mt-16 gap-14"
    >
      {/* Left Content */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-5">
          Join Us in Making a Difference Today
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10">
          At Samarth Sankalp Charitable Trust, we believe in empowering the
          homeless and vulnerable through compassion and support. Together, we
          can create a brighter future for those in need.
        </p>
        <div>
          <button className="mr-5 py-3 px-6 bg-black text-white rounded-md text-base hover:bg-gray-800 transition">
            Donate
          </button>
          <button className="py-3 px-6 border-2 border-black rounded-md text-base hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0">
        <PhotoGallery />
      </div>
    </section>
  );
};

export default MiainSection;
