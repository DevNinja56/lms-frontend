
import React from "react";
import ProgramCard from "@components/ProgramCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubHeading from "@components/SubHeading";
import SecondaryHeading from "@components/SecondaryHeading";



interface CarousalProps {
    programCards: any[]; 
  }
  
  const OurPrograms: React.FC<CarousalProps> = ({ programCards }) => {
  return (
    <div className="ourProgramSection">
  
        <SubHeading text="COURSE CATEGORIES" />
        <SecondaryHeading text="Our Programs" />
        <div className='flex items-center justify-center gap-8 pt-10'>
  
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
      >
        {programCards.map((program, index) => (
          <SwiperSlide key={index}>
            <ProgramCard data={program} />
          </SwiperSlide>
        ))}
      {/* Add Navigation */}
        <div className="swiper-button-next ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#495057"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="swiper-button-prev ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L12 19M19 12L12 5"
              stroke="#495057"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
         
        </div>

        {/* Add Pagination */}
        <div className="swiper-pagination "></div>
      </Swiper>
      </div>
   
    </div>
  );
};
export default OurPrograms;

