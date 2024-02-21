import React, { useState } from "react";
import Button from "@components/Common/ButtonAccordin";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiFileVideoLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";

interface propTypes {
  item: faqDataItems;
  index: number;
  onClick: () => void;
  clickHeading: boolean[];
  tutorLastIndex: number;
}
interface faqDataItems {
  name: string;
  videos: string[];
  totalWeeks: number;
  readings: string[];
}

const CourseContent = ({
  item,
  index,
  onClick,
  clickHeading,
  tutorLastIndex,
}: propTypes) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={onClick}
      className={`${
        index === tutorLastIndex ? "" : "border bg-white"
      }  flex flex-col cursor-pointer relative w-full rounded my-2`}
    >
      <div className="flex items-center justify-between border py-4 px-4 ">
        <div className="flex gap-4 items-center">
          <Button
            padding=""
            className="h-12 rounded-full bg-mainBlackColor text-mainColor flex items-center justify-center"
            text=""
            icon={
              clickHeading[index] ? (
                <IoIosArrowUp className="h-5 w-5" />
              ) : (
                <IoIosArrowDown className="h-5 w-5" />
              )
            }
            onClick={toggleExpand}
          />
          <span className="text-xl font-semibold  inline-block">
            {item?.name}
          </span>
        </div>
        <div>
          <p className="font-normal text-sm">
            {item?.videos.length} Videos - {item?.totalWeeks} Weeks{" "}
          </p>
        </div>
      </div>
      <p
        className={`text-xs md:text-sm text-mainLightBlackColor lg:text-base transition-all text-mainParaColor duration-300 ${
          clickHeading[index]
            ? "py-6 px-10 static visible"
            : "invisible absolute opacity-0 top-16 hidden"
        }`}
      >
        {item?.videos?.map((i: any) => {
          return (
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 items-center">
                <RiFileVideoLine />
                <span className="font-medium">{i.name}</span>
              </div>
              <span className="text-btnColor float-end">Preview</span>
            </div>
          );
        })}

        {item?.readings?.map((i: any) => {
          return (
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 items-center">
                <IoBookOutline />
                <span className="font-medium">{i.name}</span>
              </div>
              <span className="text-btnColor float-end">Preview</span>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default CourseContent;
