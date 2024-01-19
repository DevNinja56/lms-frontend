import React from "react";
import time from "../../../public/images/time.png";
import star from "../../../public/images/star-shape.png";
interface ProgramCardProps {
  data: {
    image: string;
    name: string;
    lessonCount?: string;
    totalRating: number;
    originalPrice?: string;
    salePrice?: string;
    studentCount?: string;

    usersActions?: Array<{
      // user: {
      //   name: string;
      //   id: string;
      // };
      // review?: {
      //   rating: number;
      //   feedback: string;
      //   id: string;
      // } | null;
      // _id: string;
      // id: string;
    }>;
  };
}

const CourseCard: React.FC<ProgramCardProps> = ({ data }) => {
  const studentCount = data.usersActions?.length;
  console.log("student count",data.usersActions?.length);

  
  return (
    <div className="rounded-[10px] max-w-[288px] w-full shadow-courseShadow relative bg-white ">
      <div>
        <img src={data.image} className="rounded-t-[10px] h-[200px]" />
      </div>
      <div className="flex flex-col gap-4 border-b py-5 px-4">
        <div className="flex items-center justify-between">
          <span className="flex  gap-[6px] text-sm font-normal leading-5">
            <img src={time} />
            {data.lessonCount}
            15 Lessons
          </span>
          <div>
            <span className="absolute top-4 left-4 text-mainColor py-1 px-3 bg-white rounded-[2px]">
              Baginner
            </span>
            <span className="absolute top-4 right-4 bg-[#49505726] rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1.84619 6.23807C1.84619 9.23062 4.31969 10.8253 6.13033 12.2527C6.76927 12.7564 7.38465 13.2306 8.00004 13.2306C8.61542 13.2306 9.23081 12.7564 9.86976 12.2527C11.6804 10.8253 14.1539 9.23062 14.1539 6.23807C14.1539 3.24549 10.7691 1.12321 8.00004 4.00024C5.23091 1.12321 1.84619 3.24549 1.84619 6.23807Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <span className="flex  gap-[6px] text-sm font-normal leading-5">
            <img src={time} />
            15 week
          </span>
        </div>
        <p className="text-lg font-semibold text-lightBlackColor">
          {data.name}
        </p>
        <div className="flex gap-2">
          <img src={star} />
          <span className="text-sm font-normal">{`${data.totalRating} review`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 px-4">
        <div>
          <span className="text-base font-semibold text-mainColor">
            {/* {data.originalPrice} */}
            {"original price"}
          </span>
          <span className="text-sm font-normal text-mainParaColor">
            {data.salePrice}
          </span>
        </div>
        <div className="flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.3334 14C13.3334 13.0696 13.3334 12.6044 13.2186 12.2259C12.9601 11.3736 12.2931 10.7067 11.4408 10.4482C11.0623 10.3333 10.5971 10.3333 9.66675 10.3333H6.33342C5.40304 10.3333 4.93785 10.3333 4.55932 10.4482C3.70705 10.7067 3.04011 11.3736 2.78157 12.2259C2.66675 12.6044 2.66675 13.0696 2.66675 14M11.0001 5C11.0001 6.65685 9.65694 8 8.00008 8C6.34323 8 5.00008 6.65685 5.00008 5C5.00008 3.34315 6.34323 2 8.00008 2C9.65694 2 11.0001 3.34315 11.0001 5Z"
                stroke="#495057"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          {/* {data?.userAction?.map((std, index) => (
            <span
              key={index}
              className="text-sm font-normal text-mainParaColor"
            >
              {`${std.length} students`}
            </span>
          ))} */}
           <span
             
              className="text-sm font-normal text-mainParaColor"
            >
              {`${studentCount} students`}
            </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
