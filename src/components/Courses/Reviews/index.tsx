import React from "react";
import { ReviewDataItems } from "@utils/Types";
import Button from "@components/Common/Button";
import ReviewWrite from "@components/Courses/CourseDetail/ReviewWrite";
import { useGetReviewsBaseOfIDQuery } from "@slices/fetch-all-queries.slice";
import { useParams } from "react-router-dom";
import LoaderSpinner from "@components/LoaderSpinner";
import SubHeading from "@components/Common/SubHeading";

const ReviewContent = () => {
  const { id } = useParams();
  const { data: allReviews, isLoading } = useGetReviewsBaseOfIDQuery({
    type: "Course",
    id: id ?? "",
    page: 1,
    limit: 10,
  });

  const getInitials = (name: string) => {
    const words = name?.split(" ");
    if (words?.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    } else if (words?.length === 1) {
      return words[0][0].toUpperCase();
    } else {
      return "";
    }
  };

  const calculateDaysAgo = (updatedAt: string) => {
    const updatedAtDate = new Date(updatedAt);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - updatedAtDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };


  return (
    <>
      <div className="flex gap-2 flex-col ml-24 mr-5">
        <SubHeading heading="Reviews" />
        {isLoading ? (
          <div className="flex justify-center items-center mb-12">
            <LoaderSpinner color={"text-5xl text-mainColor "}/>
          </div>
        ) : (
          allReviews?.map((item: ReviewDataItems, index) => {
            return (
              <div
                key={"reviewData" + index}
                className="flex gap-3 pb-12 border-b-2 mb-8"
              >
                <div>
                  {item?.userId?.avatar ? (
                    <img
                      src={item?.userId?.avatar}
                      alt="Review User"
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  ) : (
                    <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-xl font-bold bg-mainColor text-white">
                      {getInitials(item?.userId?.name)}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 w-9/12">
                  <div className="flex gap-3 items-center">
                    <span className="font-medium text-lg text-lightBlackColor">
                      {item?.userId?.name.toUpperCase()}
                    </span>
                    <span className="text-[13px] font-normal text-mainParaColor">
                      {calculateDaysAgo(item.createdAt)} Days ago
                    </span>
                  </div>
                  <p className="font-normal text-[15px] text-mainParaColor">
                    {item?.feedback}
                  </p>
                  <div className="flex  items-center gap-4">
                    <span className="text-mainColor">
                      Was this review helpful?
                    </span>
                    <div className="flex gap-1">
                      <Button
                        text="Yes"
                        className="bg-btnColor bg-opacity-100 text-white p-2"
                      />
                      <Button
                        text="No"
                        className="text-xs bg-slate-300 font-normal p-2 text-btnColor hover:bg-btnColor hover:text-white border-btnColor border"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <ReviewWrite />
    </>
  );
};

export default ReviewContent;
