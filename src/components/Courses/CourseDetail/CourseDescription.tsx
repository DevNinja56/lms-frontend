import React, { useEffect } from "react";
import WhatLearn from "@components/Courses/CourseDetail/WhatLearn";
import Requirements from "@components/Courses/CourseDetail/Requirements";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "@slices/fetch-all-queries.slice";
import SubHeading from "@components/Common/SubHeading";

const CourseDescription = () => {
  const { id } = useParams();
  const { data: singleCourse, refetch } = useGetCourseByIdQuery(id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <div className="mr-1 w-11/12 ml-24">
        <SubHeading heading="Description" />
        <p className="pb-8 text-mainParaColor w-11/12 text-justify leading-6">
          {singleCourse?.full_desc}
        </p>
      </div>
      <WhatLearn data={singleCourse} />
      <Requirements data={singleCourse}/>
    </>
  );
};

export default CourseDescription;
