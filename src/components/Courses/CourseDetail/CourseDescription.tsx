import React, {useState} from "react";
import WhatLearn from "@components/Courses/CourseDetail/WhatLearn";
import Requirements from "@components/Courses/CourseDetail/Requirements";
import Button from "@components/Common/Button";

const CourseDescription = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };
  return (
    <>
      <div className="mr-1 w-11/12">
        <p className="font-medium text-lg pt-24 pb-8">
          Description
        </p>
        <p className="pb-8 text-mainParaColor">
          Phasellus enim magna, varius et commodo
          ut, ultricies vitae velit. Ut nulla
          tellus, eleifend euismod pellentesque
          vel, sagittis vel justo. In libero urna,
          venenatis sit amet ornare non, suscipit
          nec risus. Sed consequat justo non
          mauris pretium at tempor justo sodales.
          Quisque tincidunt laoreet malesuada. Cum
          sociis natoque penatibus et magnis dis
          parturient montes, nascetur.
        </p>
        <p
          className={`pb-8 text-mainParaColor description-content transition-opacity ${
            showMore
              ? "opacity-100"
              : "opacity-50"
          }`}>
          This course is aimed at people
          interested in UI/UX Design. We’ll start
          from the very beginning and work all the
          way through, step by step. If you
          already have some UI/UX Design
          experience but want to get up to speed
          using Adobe XD then this course is
          perfect for you too! First, we will go
          over the differences between UX and UI
          Design. We will look at what our brief
          for this real-world project is, then we
          will learn about low-fidelity wireframes
          and how to make use of existing UI
          design kits.
        </p>
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
