import React from "react";
import TopBanner from "@components/TopBanner";
import CourseDetailBanner from "@components/Courses/CourseDetail/CourseDetailBanner";

const CourseDetail = () => {
  return (
    <>
      <div className='px-14 flex flex-col'>
        <TopBanner />
        <CourseDetailBanner />
      </div>
    </>
  );
};

export default CourseDetail;
