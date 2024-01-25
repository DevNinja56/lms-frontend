import React from "react";
import time from "../../../public/images/time.png";
import star from "../../../public/images/star-shape.png";
import heartIcon from "../../../public/images/favourite/heartIcon.svg";
import userIcon from "../../../public/images/user/userIcon.svg";
import {Link} from "react-router-dom";

interface ProgramCardProps {
  data: {
    id: string;
    image: string;
    name: string;
    lessonCount?: string;
    totalRating: number;
    avgRating: number;
    originalPrice?: string;
    salePrice?: string;
    studentCount?: string;

    usersActions?: Array<{}>;
  };
}

const CourseCard: React.FC<ProgramCardProps> = ({
  data,
}) => {
  const studentCount = data.usersActions?.length;

  return (
    <div className="rounded-[10px] max-w-[288px] w-full shadow-courseShadow relative bg-white ">
      <div>
        <img
          src={data.image}
          className="rounded-t-[10px] h-[200px]"
        />
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
              <img src={heartIcon} alt="" />
            </span>
          </div>
          <span className="flex  gap-[6px] text-sm font-normal leading-5">
            <img src={time} />
            15 week
          </span>
        </div>
        <p className="text-lg font-semibold text-lightBlackColor">
          <Link to={`/courseDetail/${data.id}`}>
            {data.name}
          </Link>
        </p>
        <div className="flex gap-2">
          <img src={star} />
          <img src={star} />
          <img src={star} />
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
        <div className="flex items-center">
          <img src={userIcon} alt="user" />
          <span className="text-sm font-normal text-mainParaColor">
            {`${
              studentCount ? studentCount : "0"
            } students`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
