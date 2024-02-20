import React, { useState } from "react";
import { Content_DATA } from "@components/Courses/CourseContent/data/index";
import CourseContent from "@components/Courses/CourseContent/index";
import SubHeading from "@components/Common/SubHeading";

const ContentAccordion = () => {
  const [clickHeading, setClickHeading] = useState<boolean[]>([]);

  const onToggle = (index: number) => {
    const updatedClickHeading = [...clickHeading];
    updatedClickHeading[index] = !clickHeading[index];
    setClickHeading(updatedClickHeading);
  };

  const handleExpandClick = () => {
    const allExpanded = clickHeading.every((item) => item === true);
    if (allExpanded) {
      setClickHeading(Array(Content_DATA.length).fill(false));
    } else {
      setClickHeading(Array(Content_DATA.length).fill(true));
    }
  };

  return (
    <div className="w-10/12 ml-24 mr-2">
      <SubHeading heading="Course Content" />
      <div className="flex justify-between">
        <span className="text-base font-normal text-mainParaColor">
          27 sections • 95 lectures
        </span>
        <span
          className="text-base font-normal text-btnColor cursor-pointer"
          onClick={handleExpandClick}
        >
          Expand All Sections
        </span>
      </div>
      {Content_DATA.map((item, index) => {
        return (
          <CourseContent
            key={"faqs" + index}
            clickHeading={clickHeading}
            item={item}
            index={index}
            onClick={() => onToggle(index)}
            tutorLastIndex={Content_DATA.length}
          />
        );
      })}
    </div>
  );
};

export default ContentAccordion;
