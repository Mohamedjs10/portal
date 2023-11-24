import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./my-swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MySwiper() {
  return (
    <>
      <Swiper
        dir="rtl"
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="https://rb.gy/2abi58" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rb.gy/wm4ekj" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rb.gy/1hqmmd" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
