import React, { useState } from "react";
import DetailBanner from "@components/Courses/CourseDetail/DetailBanner";
import BannerSideSection from "@components/Courses/CourseDetail/BannerSideSection";
import CourseDescription from "@components/Courses/CourseDetail/CourseDescription";
import ContentAccordion from "@components/Courses/CourseContent/ContentAccordion";
import Instructor from "@components/Courses/CourseDetail/Instructor";
import ReviewContent from "@components/Courses/Reviews/index";

const CourseDetailBanner = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step: any) => {
    setCurrentStep(step);
  };

  return (
    <div className="flex">
      <div className="w-8/12 mb-10">
        <DetailBanner />
        <div className="flex gap-4 text-mainParaColor border-b-2 border-b-mainParaColor mb-8 mr-5 ml-24 mt-10">
          <span
            className={` font-medium text-base hover:text-btnColor hover:border-btnColor hover:border-b-2 mb-[-2px] cursor-pointer ${
              currentStep === 1 && "text-btnColor border-btnColor border-b-2"
            }`}
            onClick={() => handleStepClick(1)}
          >
            Overview
          </span>
          <span
            className={` font-medium text-base hover:text-btnColor hover:border-btnColor hover:border-b-2 mb-[-2px] cursor-pointer ${
              currentStep === 2 && "text-btnColor border-btnColor border-b-2"
            }`}
            onClick={() => handleStepClick(2)}
          >
            Course Content
          </span>
          <span
            className={`font-medium text-base hover:text-btnColor hover:border-btnColor hover:border-b-2 mb-[-2px] cursor-pointer ${
              currentStep === 3 && "text-btnColor border-btnColor border-b-2"
            }`}
            onClick={() => handleStepClick(3)}
          >
            Instructors
          </span>
          <span
            className={`font-medium text-base hover:text-btnColor hover:border-btnColor hover:border-b-2 mb-[-2px] cursor-pointer ${
              currentStep === 4 && "text-btnColor border-btnColor border-b-2"
            }`}
            onClick={() => handleStepClick(4)}
          >
            Reviews
          </span>
        </div>
        {currentStep === 1 && <CourseDescription />}
        {currentStep === 2 && <ContentAccordion />}
        {currentStep === 3 && <Instructor />}
        {currentStep === 4 && <ReviewContent />}
      </div>
      <div className="w-[30%] bg-white p-3 pb-6 rounded h-full mr-24 mt-20">
        <BannerSideSection />
      </div>
    </div>
  );
};

export default CourseDetailBanner;
