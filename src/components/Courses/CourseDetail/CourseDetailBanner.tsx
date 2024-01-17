import React from "react";
import DetailBanner from "@components/Courses/CourseDetail/DetailBanner";
import BannerSideSection from "@components/Courses/CourseDetail/BannerSideSection";
import CourseDescription from "@components/Courses/CourseDetail/CourseDescription";
import WhatLearn from "@components/Courses/CourseDetail/WhatLearn";
import Requirements from "@components/Courses/CourseDetail/Requirements";
import CourseContent from "@components/Courses/CourseDetail/CourseContent";
import ContentAccordion from "@components/Courses/CourseContent/ContentAccordion";
import Instructor from "@components/Courses/CourseDetail/Instructor"
import StudentFeedback from "@components/Courses/CourseDetail/StudentFeedback";
import ReviewContent from "@components/Courses/Reviews/index";
import ReviewWrite from "@components/Courses/CourseDetail/ReviewWrite";

const CourseDetailBanner = () => {
  return (
    <>
      <div className="flex">
        <div className="w-8/12">
          <DetailBanner />
          <CourseDescription />
          <WhatLearn />
          <Requirements />
          <CourseContent />
          <ContentAccordion />
          <Instructor />
          <StudentFeedback />
          <ReviewContent />
          <ReviewWrite />
        </div>
        <div className="w-[30%] bg-white p-3 pb-6 rounded h-full">
          <BannerSideSection />
        </div>
      </div>
    </>
  );
};

export default CourseDetailBanner;
