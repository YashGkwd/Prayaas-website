import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ExpCard from "./ExpCard";

export default function ExpSlider() {
  return (
    <>
      <Swiper
      style={ {width: "90vw",
        height: "100%"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
        <SwiperSlide><ExpCard/></SwiperSlide>
      </Swiper>
    </>
  );
}
