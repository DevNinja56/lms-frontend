import React from "react";
import headerImg from "../../../public/images/header.png";
import curve from "../../../public/images/curve.png";

import whiteLogo from "../../../public/images/logo.svg";
const Hero = () => {

  return (
    <div
      className="heroSection bg-mainColor flex items-center justify-between px-24 text-white py-20 "
    
    >
      <div className="w-1/2">
        <div>
          <h1 className="font-semibold text-5xl leading-[67px] text-white mb-9">
            Learn New Skills Online with Top{" "}
            <span className="text-yellow relative">Educator</span>{" "}
            <img src={curve} className="absolute" />
          </h1>
        </div>
        <p className="font-normal text-lg leading-6 mb-7">
          Build skills with courses, certificates, and degrees online from
          world-class universities and companies.
        </p>
        <div className="flex items-center justify-start gap-4 mb-20">
          <button className="bg-mainColor text-white text-base leading-5 rounded-[5px] py-5 px-12">
            Join For Free
          </button>
          <button className="bg-transparent text-white border border-white leading-5 rounded-[5px] py-5 px-12">
            Find Course
          </button>
        </div>

        <ul className="flex items-center gap-5 font-normal text-[13px] leading-4 ">
          <li className="flex items-center gap-[6px]">
            <img src={whiteLogo} className="h-6 w-6"/>
            Over 12 million students
            </li>
            <li className="flex items-center gap-[6px]">
            <img src={whiteLogo} className="h-6 w-6"/>
            More than 60,000 courses
            </li>
            <li className="flex items-center gap-[6px]">
            <img src={whiteLogo} className="h-6 w-6"/>
            Learn anything online
            </li>
        </ul>
      </div>
      <div className="w-1/2">
        <img src={headerImg} alt="header-img" />
      </div>
    </div>
  );
};

export default Hero;
