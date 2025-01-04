"use client";
import React, { useState, useEffect } from "react";

const MiainSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundPosition = `center ${scrollY * 0.5}px`;

  return (
    <div
      className="relative bg-cover bg-center w-full" 
      style={{
        backgroundImage: "url('bg_7.jpg')",
        height: "calc(100vh - 100px)",
        backgroundPosition: backgroundPosition,
      }}
    >
      
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 top-0 bottom-0 left-0 right-0"></div> */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="md:w-7/12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Doing Nothing is Not An Option of Our Life
            </h1>
            <p className="text-white text-lg mb-5">
              Created by{" "}
              <a href="#" className="underline">
                Colorlib.com
              </a>
            </p>
            <p>
              <a
                href="https://vimeo.com/45830194"
                className="inline-block bg-white text-black border border-white hover:bg-opacity-90 px-6 py-3 rounded-lg transition duration-300"
              >
                <span className="icon-play mr-2"></span> Watch Video
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiainSection;