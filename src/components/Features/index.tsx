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
    <div className=" flex items-center justify-between px-24 text-white py-20 ">
      <div className="w-1/2">
        <div className="flex items-start flex-col">
          <SubHeading text="Feature" />
          <h1 className="font-semibold text-5xl leading-[48px] text-black mb-9">
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
              <li className="flex items-center gap-[6px]">
                <span className="bg-mainColor rounded-full py-[7px] px-[5px] gap-3">
                  <img src={tickIcon} alt="" />
                </span>
                {list}
              </li>
            </ul>
          ))}
        </div>
        <button className=" mt-[66px] bg-transparent text-mainColor border border-mainColor leading-5 rounded-[5px] py-5 px-12">
          Join Free
        </button>
      </div>
      <div className="w-1/2">
        <img src={featureImg} alt="header-img" />
      </div>
    </div>
  );
};

export default Features;
