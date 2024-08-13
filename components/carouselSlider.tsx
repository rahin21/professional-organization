"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import { sliderType } from "@/types/types";

function CarouselSlider({ slider }: { slider: sliderType[] }) {
  const swiperRef = React.useRef<any>(null);

  return (
    <div className="relative flex md:items-center items-end my-20">
      <button
        className="bg-black/70 absolute z-30 p-4 rounded-full text-white text-xl mx-16 mb-10 lg:mb-0"
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev();
          }
        }}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className="bg-black/70 absolute z-30 right-0 p-4 rounded-full text-white text-xl mx-16 mb-10 lg:mb-0"
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        }}
      >
        <FaArrowRightLong />
      </button>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="mySwiper mx-16 bg-secondary flex items-center md:h-[20rem] h-[30rem] z-20"
      >
        {slider.map((item, i) => (
          <SwiperSlide key={i} className="text-center ">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center md:h-[20rem] h-[30rem] lg:w-[40rem] md:w-[25rem] w-full gap-10 md:px-0 px-16">
                <p>{item.comments}</p>
                <p>{item.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSlider;
