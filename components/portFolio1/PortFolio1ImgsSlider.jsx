import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Image from "next/image";

function PortFolio1ImgsSlider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="mySwiper"
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
      >
        <SwiperSlide>
          <Image
            src="/Images/ProjectImage2.png"
            width="392"
            height="351"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/Images/ProjectImage1.png"
            width="392"
            height="351"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/Images/ProjectImage0.png"
            width="392"
            height="351"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PortFolio1ImgsSlider;
