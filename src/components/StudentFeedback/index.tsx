import SecondaryHeading from "@components/SecondaryHeading";
import SubHeading from "@components/SubHeading";
import TestimonialSlider from "@components/testimonialSlider";
import React from "react";

import { testimonialData } from "@components/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const StudentsFeedback = () => {

  return (
    <div className="testimonialContainer bg-footerBg flex items-center pt-16 px-24 pb-24 gap-16">
    <div className="w-[60%]">
    <Swiper
        slidesPerView={1}
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
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialSlider data={testimonial} />
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
              d="M5 12H19M19 12L12 19M19 12L12 5"
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
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#495057"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

      </Swiper>
    </div>
      <div className="flex flex-col gap-[60px] w-[40%]">
        <div className="flex flex-col items-start">
          <SubHeading text="TESTIMONIALS" />
          <SecondaryHeading text="Students Feedback" />
          <p className="text-base text-mainParaColor">
            We are committed to continuous improvement and strive to provide a
            learning environment.
          </p>
        </div>
        <p className="text-xl font-semibold">People Love To Learn With Us</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-semibold text-mainColor">
              90%
            </span>
            <span className="text-base text-mainParaColor">
              Students Complete Course Successfully
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-semibold text-mainColor">
              9/10
            </span>
            <span className="text-base text-mainParaColor">
              Users reported better learning outcomes.
            </span>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsFeedback;
