import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiUserCommunityLine } from "react-icons/ri";

const FourthSection = () => {
  return (
    <section className="h-full md:h-[800px] flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 lg:p-24 gap-14 bg-[#D9DFE5]">

      <div className="mt-8 md:mt-0 md:w-1/2">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold mb-5">
          Transform Lives Through Your Generosity
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10">
          Supporting our organization means making a tangible difference in your community. 
          Join us in creating lasting change for those in need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Community Support */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 min-w-14 bg-black text-white flex items-center justify-center rounded-full">
              <RiUserCommunityLine className="h-full w-full"/>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Your contributions directly enhance the lives of vulnerable individuals in our community.
              </p>
            </div>
          </div>
          {/* Personal Growth */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 min-w-14 bg-black text-white flex items-center justify-center rounded-full">
            <BsGraphUpArrow className="h-full w-full p-3" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Personal Growth</h3>
              <p className="text-gray-600 text-sm">
                Experience the fulfillment that comes from helping others and making a difference.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="py-3 px-6 border-2 border-black rounded-md text-base hover:bg-black hover:text-white transition">
            Donate
          </button>
          <button className="py-3 px-6 border-2 border-black text-black rounded-md text-base hover:bg-gray-200 transition">
            Learn More &rarr;
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
        <img src="/community-support.png" alt="Community Support" className="rounded-xl shadow-xl" />
      </div>
    </section>
  );
};

export default FourthSection;
