import React from "react";
import TopBanner from "@components/TopBanner";
import CourseDetailBanner from "@components/Courses/CourseDetail/CourseDetailBanner";

const CourseDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="px-14">
        <TopBanner />
      </div>
      <CourseDetailBanner />
    </div>
  );
};

export default CourseDetail;
