import React, { useState } from "react";
import { Content_DATA } from "@components/Courses/CourseContent/data/index";
import CourseContent from "@components/Courses/CourseContent/index";

const ContentAccordion = () => {
  const [clickHeading, setClickHeading] = useState<boolean[]>([]);
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const onToggleAll = () => {
    setExpandAll(!expandAll);
  };

  const onToggle = (index: number) => {
    const updatedClickHeading = [...clickHeading];
    updatedClickHeading[index] = !clickHeading[index];
    setClickHeading(updatedClickHeading);
  };

  return (
    <div className="w-10/12 ml-24 mr-2">
      <p className="font-medium text-lg pb-8">Course Content</p>
      <div className="flex justify-between pr-6">
        <span className="text-base font-normal text-mainParaColor">
          27 sections • 95 lectures
        </span>
        <span
          className="text-base font-normal text-btnColor cursor-pointer"
          onClick={onToggleAll}
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
            expanded={expandAll}
          />
        );
      })}
    </div>
  );
};

export default ContentAccordion;
