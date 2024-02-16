import SecondaryHeading from "@components/SecondaryHeading";
import SubHeading from "@components/SubHeading";
import TestimonialSlider from "@components/testimonialSlider";
import React from "react";

import {testimonialData} from "@components/data";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrowNextIcon from "../../../public/images/arrowNext.svg";
import arrowPrevIcon from "../../../public/images/arrowPrev.svg";
import {
  Navigation,
  Pagination,
} from "swiper/modules";

const StudentsFeedback = () => {
  return (
    <div className="testimonialContainer bg-footerBg flex md:flex-col-reverse sm:flex-col-reverse lg:flex-row items-center pt-16 px-24 pb-24 gap-12 lg:gap-16 md:mb-[20rem] xs:w-full xs:flex-col-reverse">
      <div className="lg:w-[60%] md:w-full sm:w-full xs:w-full">
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
          className="mySwiper">
          {testimonialData.map(
            (testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialSlider
                  data={testimonial}
                />
              </SwiperSlide>
            )
          )}
          {/* Add Navigation */}
          <div className="swiper-button-next ">
            <img src={arrowNextIcon} alt="" />
          </div>
          <div className="swiper-button-prev ">
            <img src={arrowPrevIcon} alt="" />
          </div>
        </Swiper>
      </div>
      <div className="flex flex-col gap-12 lg:gap-[60px]  lg:w-[40%] md:w-full xs:w-full">
        <div className="flex flex-col items-start">
          <SubHeading text="TESTIMONIALS" />
          <SecondaryHeading text="Students Feedback" />
          <p className="text-base text-mainParaColor">
            We are committed to continuous
            improvement and strive to provide a
            learning environment.
          </p>
        </div>
        <p className="text-xl font-semibold">
          People Love To Learn With Us
        </p>
        <div className="flex items-center lg:justify-between md:gap-4">
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-semibold text-mainColor">
              90%
            </span>
            <span className="lg:w-full md:w-3/5 text-sm lg:text-base text-mainParaColor">
              Students Complete Course
              Successfully
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[32px] font-semibold text-mainColor">
              9/10
            </span>
            <span className="lg:w-full md:w-3/5 text-sm lg:text-base text-mainParaColor">
              Users reported better learning
              outcomes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsFeedback;
