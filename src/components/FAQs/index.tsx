import React from "react";
import { faqDataItems } from "@components/FAQs/data/index";
import Button from "@components/Common/ButtonAccordin";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

interface propTypes {
  item: faqDataItems;
  index: number;
  onClick: () => void;
  clickHeading: boolean[];
  tutorLastIndex: number;
}

const FAQs = ({
  item,
  index,
  onClick,
  clickHeading,
  tutorLastIndex,
}: propTypes) => {
  return (
    <div
      onClick={onClick}
      className={`${
        index === tutorLastIndex
          ? ""
          : "border border-gray-300 text-mainParaColor"
      } flex flex-col cursor-pointer relative w-full rounded-xl my-4`}
    >
      <div className="flex items-center justify-between border rounded-xl py-4 px-8">
        <h1 className="text-xl font-semibold text-mainParaColor">
          {item.question}
        </h1>
        <Button
          padding=""
          className="h-12 w-12 rounded-full bg-mainBlackColor text-mainColor flex items-center justify-center"
          text=""
          icon={
            clickHeading[index] ? (
              <FiMinus className="h-5 w-5" />
            ) : (
              <BsPlus className="h-8 w-8" />
            )
          }
        />
      </div>
      <p
        className={`text-xs md:text-sm text-mainLightBlackColor lg:text-base transition-all duration-300 ${
          clickHeading[index]
            ? "text-mainParaColor py-6 px-6 static visible"
            : "invisible absolute opacity-0"
        }`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default FAQs;
