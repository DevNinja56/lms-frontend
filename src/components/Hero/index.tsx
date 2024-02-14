import React from "react";
import headerImg from "../../../public/images/header.png";
import curve from "../../../public/images/curve.png";
import whiteLogo from "../../../public/images/logo.svg";

const Hero = () => {
  return (
    <div className="heroSection bg-mainColor flex items-center justify-between px-24 text-white py-20  md:flex-col lg:flex-row">
      <div className="lg:w-1/2 md:w-full">
        <div>
          <h1 className="font-semibold text-5xl leading-[67px] text-white mb-16">
            Learn New Skills Online with Top
            <span className="relative">
              {" "}
              <span className="text-yellow relative">
                Educator
              </span>{" "}
              <img
                src={curve}
                className="xl:absolute xl:right-0 md:left-0"
              />
            </span>
          </h1>
        </div>
        <p className="font-normal text-lg leading-6 mb-7">
          Build skills with courses, certificates,
          and degrees online from world-class
          universities and companies.
        </p>
        <div className="flex items-center justify-start gap-4 lg:mb-20 md:mb-12">
          <button className="text-mainColor bg-white text-base leading-5 rounded-[5px] py-4 px-8 lg:py-5 lg:px-12 border border-mainColor transition-all duration-300 hover:border-white hover:text-white hover:bg-opacity-10">
            Join For Free
          </button>

          <button className="bg-transparent text-white border border-white leading-5 rounded-[5px] py-4 px-8  lg:py-5 lg:px-12 hover:bg-mainColor hover:border-mainColor transition-all duration-300">
            Find Course
          </button>
        </div>

        <ul className="flex items-center gap-3 lg:gap-5 font-normal text-xs lg:text-[13px] leading-4 ">
          <li className="flex items-center gap-[6px]">
            <img
              src={whiteLogo}
              className="h-6 w-6"
            />
            Over 12 million students
          </li>
          <li className="flex items-center gap-[6px]">
            <img
              src={whiteLogo}
              className="h-6 w-6"
            />
            More than 60,000 courses
          </li>
          <li className="flex items-center gap-[6px]">
            <img
              src={whiteLogo}
              className="h-6 w-6"
            />
            Learn anything online
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2 md:w-full flex justify-end md:mt-12">
        <img src={headerImg} alt="header-img" />
      </div>
    </div>
  );
};

export default Hero;
