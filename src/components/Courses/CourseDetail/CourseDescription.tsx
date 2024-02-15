import React, { useEffect } from "react";
import WhatLearn from "@components/Courses/CourseDetail/WhatLearn";
import Requirements from "@components/Courses/CourseDetail/Requirements";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "@slices/fetch-all-queries.slice";

const CourseDescription = () => {
  const { id } = useParams();
  const { data: singleCourse, refetch } = useGetCourseByIdQuery(id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <div className="mr-1 w-11/12 ml-24">
        <p className="font-medium text-lg pb-8">Description</p>
        <p className="pb-8 text-mainParaColor w-11/12 text-justify">{singleCourse?.full_desc}</p>
      </div>
      <WhatLearn />
      <Requirements />
    </>
  );
};

export default CourseDescription;
