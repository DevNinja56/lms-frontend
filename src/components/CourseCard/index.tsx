import React from "react";
import heartIcon from "../../../public/images/favourite/heartIcon.svg";
import userIcon from "../../../public/images/user/userIcon.svg";
import lessonList from "../../../public/images/lessonList.svg";
import {Link} from "react-router-dom";
import {IoMdTime} from "react-icons/io";
import {capitalizeFirstLetter} from "@utils/capitalizeLetter";
import {
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import NewRating from "@components/Home/Rating";
import {courseType} from "@utils/Types";
import {ROUTES} from "@route/constants.route";

interface ProgramCardProps {
  data: courseType;
}

const CourseCard: React.FC<ProgramCardProps> = ({
  data,
}) => {
  return (
    <div className="rounded-[10px w-full shadow-courseShadow relative bg-white ">
      <div className="overflow-hidden rounded-t-[10px]">
        <img
          src={data.image}
          className="w-full h-[200px] hover:scale-125 transition duration-500 cursor-pointer object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 border-b lg:p-5 p-3">
        <div className="flex items-center justify-between">
          <span className="w-full flex items-center gap-[6px] text-xs lg:text-sm  font-normal leading-5">
            <img src={lessonList} alt="" />
            {/* {data.lessonCount} */}
            <span className="">15 Lessons</span>
          </span>
          <div>
            <span className="absolute top-4 left-4 text-mainColor py-1 px-3 bg-white rounded-[2px]">
              {data.skillLevel}
            </span>
            <span className="absolute top-4 right-4 bg-[#49505726] rounded-full p-2">
              <img src={heartIcon} alt="" />
            </span>
          </div>
          <span className="w-full flex items-center gap-[6px] justify-end text-sm font-normal leading-5">
            <span className="text-mainParaColor">
              <IoMdTime size={20} />
            </span>
            15 week
          </span>
        </div>
        <p className="text-lg font-semibold text-lightBlackColor hover:text-mainColor">
          <Link
            to={ROUTES.COURSE_DETAIL.replace(
              ":id",
              data.id
            )}>
            {capitalizeFirstLetter(data.name)}
          </Link>
        </p>
        <div className="flex gap-1 items-center">
          <NewRating
            initialRating={data?.avgRating ?? 0}
            readonly
            emptySymbol={
              <AiOutlineStar
                color="orange"
                style={{fontSize: "20px"}}
              />
            }
            fullSymbol={
              <AiFillStar
                color="orange"
                style={{fontSize: "20px"}}
              />
            }
          />

          <span className="text-sm font-normal">{`${data.totalRating} review`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between lg:py-6 lg:px-4 p-4 ">
        <div>
          <span className="text-base font-semibold text-mainColor">
            {/* {data.originalPrice} */}
            {"$45.00"}
          </span>
          {/* <span className="text-sm font-normal text-mainParaColor">
            {data.salePrice}
          </span> */}
        </div>
        <div className="flex items-center gap-1">
          <img src={userIcon} alt="user" />
          <span className="text-sm font-normal text-mainParaColor">
            {`${
              data.userActions.length
                ? data.userActions.length
                : "0"
            } Students`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
