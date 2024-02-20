import React from "react";
import headerImg from "../../../public/images/header.png";
import curve from "../../../public/images/curve.png";
import whiteLogo from "../../../public/images/logo.svg";

const Hero = () => {
  return (
    <div className="heroSection bg-mainColor flex items-center justify-between lg:px-24 text-white lg:py-20 sm:flex-col md:flex-col lg:flex-row xs:flex-col sm:px-12 sm:text-center  xs:px-6 xs:text-center">
      <div className="lg:w-1/2 md:w-full sm:w-full">
        <div>
          <h1 className="font-semibold text-5xl leading-[67px] text-white lg:mb-16 lg:text-left md:text-center md:py-8 sm:py-8 xs:py-8 sm:text-center xs:text-center">
            Learn New Skills Online with Top
            <span className="relative">
              {" "}
              <span className="text-yellow relative">Educator</span>{" "}
              <img
                src={curve}
                className="xl:absolute xl:right-0 md:left-0 md:absolute  sm:absolute xs:absolute"
              />
            </span>
          </h1>
        </div>
        <p className="font-normal text-lg leading-6 mb-8 lg:my-4 lg:text-left md:text-center sm:text-center xs:text-center">
          Build skills with courses, certificates, and degrees online from
          world-class universities and companies.
        </p>
        <div className="flex items-center gap-4 lg:mb-24 lg:mt-16 md:mb-1 lg:text-left xs:flex-col md:flex-row xs:pb-8">
          <button className="text-white bg-mainColor text-base leading-5 rounded-[5px] py-4 px-8 lg:py-5  xs:px-28 lg:px-12 border border-mainColor transition-all duration-300 hover:border-white hover:text-white hover:bg-opacity-10">
            Join For Free
          </button>

          <button className="bg-transparent text-white border border-white leading-5 rounded-[5px] py-4 px-8 xs:px-28 lg:py-5 lg:px-12 hover:bg-mainColor hover:border-mainColor  transition-all duration-300">
            Find Course
          </button>
        </div>

        <ul className="flex items-center gap-3 lg:gap-5 font-normal lg:text-[13px] leading-4 xs:flex-wrap xs:justify-center sm:justify-center lg:text-left lg:w-[110%] ">
          <li className="flex items-center gap-[6px] font-normal text-sm">
            <img src={whiteLogo} className="h-6 w-6" />
            Over 12 million students
          </li>
          <li className="flex items-center gap-[6px] font-normal text-sm">
            <img src={whiteLogo} className="h-6 w-6" />
            More than 60,000 courses
          </li>
          <li className="flex items-center gap-[6px] font-normal text-sm">
            <img src={whiteLogo} className="h-6 w-6" />
            Learn anything online
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2 md:w-full flex justify-end lg:mt-4 md:mt-12 xs:my-8">
        <img src={headerImg} alt="header-img" />
      </div>
    </div>
  );
};

export default Hero;
