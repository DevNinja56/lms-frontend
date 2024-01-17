import React from "react";

const CourseDescription = () => {
  return (
    <>
      <div className="mr-12">
        <div className="flex gap-4 text-mainParaColor border-b-2 border-b-mainParaColor pb-1.5">
          <span className="font-medium text-base hover:text-btnColor">Overview</span>
          <span className="font-medium text-base hover:text-btnColor">Course Content</span>
          <span className="font-medium text-base hover:text-btnColor">Instructors</span>
          <span className="font-medium text-base hover:text-btnColor">Reviews</span>
        </div>
        <p className="font-medium text-lg pt-24 pb-8">Description</p>
        <p className="pb-8 text-mainParaColor">
          Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut
          nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo.
          In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed
          consequat justo non mauris pretium at tempor justo sodales. Quisque
          tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur.
        </p>
        <p className="pb-8 text-mainParaColor">
          This course is aimed at people interested in UI/UX Design. We’ll start
          from the very beginning and work all the way through, step by step. If
          you already have some UI/UX Design experience but want to get up to
          speed using Adobe XD then this course is perfect for you too! First,
          we will go over the differences between UX and UI Design. We will look
          at what our brief for this real-world project is, then we will learn
          about low-fidelity wireframes and how to make use of existing UI
          design kits.
        </p>
      </div>
    </>
  );
};

export default CourseDescription;
