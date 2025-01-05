import React from "react";

const SecondSection = () => {
  return (
    <section className="h-full md:h-[800px] flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 lg:p-20 gap-14">
      <div className="w-full md:w-1/2 flex flex-col  items-center mt-10 md:mt-0">
        <img src="/logo.png" alt="1" className="rounded-xl shadow-xl" />
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2">
        <h2 className="text-3xl md:text-5xl xl:text-7xl font-semibold mb-5">
          Empowering Lives: Our Commitment to Helping the Homeless and
          Vulnerable Communities
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10">
          At Samarth Sankalp Charitable Trust, we strive to uplift those in need
          through dedicated support and resources. Our key achievements include
          providing shelter, food, and education to hundreds of vulnerable
          individuals, making a tangible difference in their lives.
        </p>
        <div>
          <button className="py-3 px-6 border-2 border-black rounded-md text-base hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default SecondSection;
