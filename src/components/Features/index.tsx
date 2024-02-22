import React from "react";
import featureImg from "../../../public/images/feaureImg.png";
import tickIcon from "../../../public/images/tick.svg";
import SubHeading from "@components/SubHeading";
const featureList = [
  "Hand-picked authors",
  "Easy to follow curriculum",
  "Free courses",
  "Money-back guarantee",
];
const Features = () => {
  return (
    <div className=" flex items-center justify-between lg:px-24 xs:px-8 sm:px-8 text-white lg:py-12 xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse  lg:flex-row  sm:my-8 xs:my-8 md:my-8 lg:my-4">
      <div className="lg:w-1/2 md:w-full sm:w-full ">
        <div className="flex items-start flex-col lg-mt-0 md:mt-4 sm:mt-4 xs:mt-4">
          <SubHeading text="Feature" />
          <h1 className="md:w-full font-bold text-[40px] leading-[48px] text-lightBlackColor mb-9 mt-2">
            Learn new skills when and where you
            like.
          </h1>
        </div>
        <p className="font-normal text-lg leading-6 mb-7 text-mainParaColor">
          Use the list below to bring attention to
          your product’s key differentiator.
        </p>
        <div className="flex flex-col gap-5">
          {featureList.map((list, index) => (
            <ul
              key={index}
              className="flex items-start flex-col gap-5 font-normal text-[13px] leading-4 text-mainParaColor">
              <li className="flex items-center gap-[6px] text-base font-normal">
                <span className="bg-mainColor rounded-full py-[10px] px-[10px] md:w-[32px] md:h-[32px] gap-3">
                  <img src={tickIcon} alt="" />
                </span>
                {list}
              </li>
            </ul>
          ))}
        </div>
        <button className=" mt-8 bg-mainColor text-white border border-mainColor leading-5 rounded-[5px] py-4 px-8 lg:py-5 lg:px-12 hover:bg-white hover:text-mainColor transition-all duration-300 sm:mb-4 xs:mb-4">
          Join Free
        </button>
      </div>
      <div className="lg:w-1/2 md:w-full lg:flex lg:justify-end md:justify-center md:mb-12 sm:mb-8 xs:mb-8 ">
        <img src={featureImg} alt="header-img" className="md:w-full" />
      </div>
    </div>
  );
};

export default Features;
