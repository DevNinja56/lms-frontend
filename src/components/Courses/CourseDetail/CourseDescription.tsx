import React, { useState, useEffect } from "react";
import WhatLearn from "@components/Courses/CourseDetail/WhatLearn";
import Requirements from "@components/Courses/CourseDetail/Requirements";
import Button from "@components/Common/Button";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "@slices/fetch-all-queries.slice";

const CourseDescription = () => {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  const { data: singleCourse, refetch } = useGetCourseByIdQuery(id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };
  return (
    <>
      <div className="mr-1 w-11/12 ml-14">
        <p className="font-medium text-lg pt-24 pb-8">Description</p>
        <p className="pb-8 text-mainParaColor">{singleCourse?.full_desc}</p>
        <p
          className={`pb-8 text-mainParaColor description-content transition-opacity ${
            showMore ? "opacity-100" : "opacity-50"
          }`}
        ></p>
        {!showMore && (
          <Button
            text="Show More"
            className="float-left text-btnColor mb-4 contents hover:border-b-2 hover:border-btnColor"
            onClick={handleShowMoreClick}
          />
        )}
      </div>
      <WhatLearn />
      <Requirements />
    </>
  );
};

export default CourseDescription;
