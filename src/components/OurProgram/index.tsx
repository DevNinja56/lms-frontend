import React from "react";
import ProgramCard from "@components/ProgramCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubHeading from "@components/SubHeading";
import SecondaryHeading from "@components/SecondaryHeading";
import arrowNextIcon from "../../../public/images/arrowNext.svg";
import arrowPrevIcon from "../../../public/images/arrowPrev.svg";

interface CarousalProps {
  programCards: any[];
}

const OurPrograms: React.FC<CarousalProps> = ({
  programCards,
}) => {
  return (
    <div className="ourProgramSection">
      <SubHeading text="COURSE CATEGORIES" />
      <SecondaryHeading text="Our Programs" />
      <div className="flex items-center justify-center gap-8 pt-10">
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
          className="mySwiper">
          {programCards.map((program, index) => (
            <SwiperSlide key={index}>
              <ProgramCard data={program} />
            </SwiperSlide>
          ))}
          {/* Add Navigation */}
          <div className="swiper-button-next ">
            <img src={arrowPrevIcon} alt="" />
          </div>
          <div className="swiper-button-prev ">
            <img src={arrowNextIcon} alt="" />
          </div>

          {/* Add Pagination */}
          <div className="swiper-pagination "></div>
        </Swiper>
      </div>
    </div>
  );
};
export default OurPrograms;
