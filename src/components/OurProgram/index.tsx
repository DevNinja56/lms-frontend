import React from "react";
import ProgramCard from "@components/ProgramCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubHeading from "@components/SubHeading";
import SecondaryHeading from "@components/SecondaryHeading";
import arrowNextIcon from "../../../public/images/arrowNext.svg";
import arrowPrevIcon from "../../../public/images/arrowPrev.svg";
import ReactSlider from "@components/ReactSlider";

interface CarousalProps {
  programCards: any[];
}

const OurPrograms: React.FC<CarousalProps> = ({ programCards }) => {
  return (
    <div className="ourProgramSection xs:p-0 lg:pt-[20px] lg:px-24 lg:pb-[50px]">
      <SubHeading text="COURSE CATEGORIES" />
      <SecondaryHeading text="Our Programs" />
      <ReactSlider />
      <div className="flex items-center justify-center gap-8 pt-10  ">
        <Swiper
          slidesPerView={6}
          spaceBetween={8}
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            1280: { slidesPerView: 6 },
            1024: { slidesPerView: 5 },
            800: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            640: { slidesPerView: 3 },
            428: { slidesPerView: 2 },
          }}
        >
          {programCards.map((program, index) => (
            <SwiperSlide key={index + 1}>
              <ProgramCard data={program} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev">
            <img src={arrowPrevIcon} alt="" />
          </div>
          <div className="swiper-button-next">
            <img src={arrowNextIcon} alt="" />
          </div>

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurPrograms;
