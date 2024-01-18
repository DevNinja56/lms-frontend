import React, { useState } from "react";
import { REVIEW_DATA, ReviewDataItems } from "./data";
import Button from "@components/Common/Button";
import SubHeading from "@components/Common/SubHeading";
import ReviewWrite from "@components/Courses/CourseDetail/ReviewWrite";

const ReviewContent = () => {
  const [visibleReviews, setVisibleReviews] = useState(2);

  const handleViewAllReviews = () => {
    setVisibleReviews(REVIEW_DATA.length);
  };
  return (
    <>
      <div className="flex gap-2 flex-col pt-24">
        <SubHeading heading="Reviews" className="font-medium" />
        {REVIEW_DATA.slice(0, visibleReviews).map((item: ReviewDataItems, index) => {
          return (
            <div
              key={"reviewData" + index}
              className="flex gap-3 pb-12 border-b-2 mb-8"
            >
              <div className="mt-3">
                <img src={item.image} alt="ReviewUser" />
              </div>
              <div className="flex flex-col gap-2 w-9/12">
                <div className="flex gap-3 items-center">
                  <span className="font-normal text-base">{item.Name}</span>
                  <span className="text-xs font-normal">{item.days}</span>
                </div>
                <span className="font-normal text-base">{item.comment}</span>
                <p className="font-normal text-base">{item.description}</p>
                <div className="flex  items-center gap-4">
                  <span className="text-mainColor">
                    Was this review helpful?
                  </span>
                  <div className="flex gap-1">
                    <Button
                      text="Yes"
                      className="bg-btnColor bg-opacity-100 text-white p-2"
                    />
                    <Button text="No" className="text-xs bg-slate-300 font-normal p-2 text-btnColor hover:bg-btnColor hover:text-white border-btnColor border" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {visibleReviews < REVIEW_DATA.length && (
          <Button
            text="View All Reviews"
            onClick={handleViewAllReviews}
            className="text-btnColor "
          />
        )}
      </div>
      <ReviewWrite />
    </>
  );
};

export default ReviewContent;
