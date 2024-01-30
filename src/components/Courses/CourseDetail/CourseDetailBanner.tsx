import React, {useState} from "react";
import DetailBanner from "@components/Courses/CourseDetail/DetailBanner";
import BannerSideSection from "@components/Courses/CourseDetail/BannerSideSection";
import CourseDescription from "@components/Courses/CourseDetail/CourseDescription";
import ContentAccordion from "@components/Courses/CourseContent/ContentAccordion";
import Instructor from "@components/Courses/CourseDetail/Instructor";
import ReviewContent from "@components/Courses/Reviews/index";

const CourseDetailBanner = () => {
  const [currentStep, setCurrentStep] =
    useState(1);

  const handleStepClick = (step: any) => {
    setCurrentStep(step);
  };

  return (
    <div className="flex">
      <div className="w-8/12">
        <DetailBanner />
        <div className="flex gap-4 text-mainParaColor border-b-2 border-b-mainParaColor pb-1.5 mb-4 mr-5">
          <span
            className={`font-medium text-base hover:text-btnColor cursor-pointer ${
              currentStep === 1 && "text-btnColor"
            }`}
            onClick={() => handleStepClick(1)}>
            Overview
          </span>
          <span
            className={`font-medium text-base hover:text-btnColor cursor-pointer ${
              currentStep === 2 && "text-btnColor"
            }`}
            onClick={() => handleStepClick(2)}>
            Course Content
          </span>
          <span
            className={`font-medium text-base hover:text-btnColor cursor-pointer ${
              currentStep === 3 && "text-btnColor"
            }`}
            onClick={() => handleStepClick(3)}>
            Instructors
          </span>
          <span
            className={`font-medium text-base hover:text-btnColor cursor-pointer ${
              currentStep === 4 && "text-btnColor"
            }`}
            onClick={() => handleStepClick(4)}>
            Reviews
          </span>
        </div>
        {currentStep === 1 && (
          <CourseDescription />
        )}
        {currentStep === 2 && (
          <ContentAccordion />
        )}
        {currentStep === 3 && <Instructor />}
        {currentStep === 4 && <ReviewContent />}
      </div>
      <div className="w-[30%] bg-white p-3 pb-6 rounded h-full">
        <BannerSideSection />
      </div>
    </div>
  );
};

export default CourseDetailBanner;
