"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";

export default function PhotoGallery() {
  return (
    <div className="w-full border-2 border-gray-300 rounded-xl p-4 shadow-xl bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        autoplay={{
          delay: 2000, // Slide transition every 2.5 seconds
          disableOnInteraction: false, // Keep autoplay running after user interaction
        }}
        speed={1500}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper"
        spaceBetween={10} // Space between slides
        slidesPerView={1} // Display one slide at a time
      >    
        <SwiperSlide className="rounded-xl" style={{ width: "100%", height: "fit-content" }}>
        <div className="flex justify-center items-center h-[250px] md:h-[30rem]">
          <img src="/1.jpeg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl" style={{ width: "100%", height: "fit-content" }}>
            <div className="flex justify-center items-center h-[250px] md:h-[30rem]">
          <img src="/2.jpeg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl" style={{ width: "100%", height: "fit-content" }}>
            <div className="flex justify-center items-center h-[250px] md:h-[30rem]">
          <img src="/3.jpeg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl" style={{ width: "100%", height: "fit-content" }}>
        <div className="flex justify-center items-center h-[250px] md:h-[30rem]">
          <img src="/4.jpeg" alt="1" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl" style={{ width: "100%", height: "fit-content" }}>
        <div className="flex justify-center items-center h-[250px] md:h-[30rem]">
          <img src="/5.jpeg" alt="1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
