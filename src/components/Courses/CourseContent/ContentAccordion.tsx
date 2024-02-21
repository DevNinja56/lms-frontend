import React, { useState, useEffect } from "react";
import CourseContent from "@components/Courses/CourseContent/index";
import SubHeading from "@components/Common/SubHeading";
import { useParams } from "react-router-dom";
import { useGetCourseContentQuery } from "@slices/fetch-all-queries.slice";

const ContentAccordion = () => {
  const [clickHeading, setClickHeading] = useState<boolean[]>([]);
  const [content, setContent] = useState([]);
  const { id } = useParams();
  const { data: courseContent } = useGetCourseContentQuery(id);

  useEffect(()=>{
    setContent(courseContent[0]?.subjects)
  })

  const onToggle = (index: number) => {
    const updatedClickHeading = [...clickHeading];
    updatedClickHeading[index] = !clickHeading[index];
    setClickHeading(updatedClickHeading);
  };

  const handleExpandClick = () => {
    const allExpanded = clickHeading.every((item) => item === true);
    if (allExpanded) {
      setClickHeading(Array(content.length).fill(false));
    } else {
      setClickHeading(Array(content.length).fill(true));
    }
  };

  return (
    <div className="w-10/12 ml-24 mr-2">
      <SubHeading heading="Course Content" />
      <div className="flex justify-between">
        <span className="text-base font-normal text-mainParaColor">
         {courseContent[0]?.subjects?.length} Sections
        </span>
        <span
          className="text-base font-normal text-btnColor cursor-pointer"
          onClick={handleExpandClick}
        >
          Expand All Sections
        </span>
      </div>
      {content?.map((item, index) => {
        return (
          <CourseContent
            key={"faqs" + index}
            clickHeading={clickHeading}
            item={item}
            index={index}
            onClick={() => onToggle(index)}
            tutorLastIndex={content.length}
          />
        );
      })}
    </div>
  );
};

export default ContentAccordion;
