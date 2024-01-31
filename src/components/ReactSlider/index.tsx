// ReactSlider.js

import React from "react";
import {Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrowNextIcon from "../../../public/images/arrowNext.svg";
import arrowPrevIcon from "../../../public/images/arrowPrev.svg";
import {
  Navigation,
  Pagination,
} from "swiper/modules";

const ReactSlider = ({children}: any) => {
  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={6}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper">
        {children}
        <div className="swiper-button-prev">
          <img src={arrowPrevIcon} alt="prev" />
        </div>
        <div className="swiper-button-next">
          <img src={arrowNextIcon} alt="next" />
        </div>
      </Swiper>
    </div>
  );
};

export default ReactSlider;
