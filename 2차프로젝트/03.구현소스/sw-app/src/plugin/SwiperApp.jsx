// 스와이퍼 플러그인 컴포넌트

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// CSS
import "./css/swiper.scss";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션,네비게이션,자동넘김)
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function SwiperApp() {
  // 불러올 이미지 리스트
  const imgArr = [
    "MAIN_SLIDE_PC_SUMMER",
    "MAIN_SLIDE_pc_bathduck_LOW",
    "MAIN_SLIDE_pc_3",
    "MAIN_SLIDE_pc_4",
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {imgArr.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={"./images/promotion/" + v + ".jpg"} alt="list image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////
