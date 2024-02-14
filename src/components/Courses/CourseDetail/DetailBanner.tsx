import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "@components/Common/Heading";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NewRating from "@components/Home/Rating";
import { HiOutlineUser } from "react-icons/hi";
import { PiClockClockwiseFill } from "react-icons/pi";
import { useGetCourseByIdQuery } from "@slices/fetch-all-queries.slice";

const DetailBanner = () => {
  const { id } = useParams();
  const { data: SingleCourse, refetch } = useGetCourseByIdQuery(id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="flex flex-col gap-6 py-7 pb-36 bg-gray-100 pl-14">
      <div className="flex gap-2.5">
        <button className="px-4 py-1.5 border-2 rounded-3xl text-white bg-greenMain hover:border-2 hover:bg-white hover:border-blue-500 hover:text-black">
          BEST SELLER
        </button>
        <button className="px-4 py-1.5 border-2 rounded-3xl bg-red-500 text-white hover:border-2 hover:bg-white hover:border-blue-500 hover:text-black">
          NEW
        </button>
        <button className="px-4 py-1.5 border-2 rounded-3xl bg-blue-500 bg-opacity-100 text-white hover:border-2 hover:bg-white hover:border-blue-500 hover:text-black">
          POPULAR
        </button>
      </div>
      <div className="w-11/12">
        <Heading heading={SingleCourse?.name} />
      </div>
      <div className="w-4/6">
        <p className="text-base font-normal leading-5 text-lightBlackColor">
          {SingleCourse?.short_desc}
        </p>
      </div>
      <div className="flex font-normal text-sm gap-16">
        <div className="flex  gap-2 text-yellow-400 items-center">
          <span className="text-yellow">{SingleCourse?.avgRating}</span>
          <div className="flex gap-1 items-center pt-2">
            <NewRating
              initialRating={SingleCourse?.avgRating}
              readonly
              emptySymbol={
                <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
              }
              fullSymbol={
                <AiFillStar color="orange" style={{ fontSize: "20px" }} />
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xl">
            {" "}
            <HiOutlineUser />
          </div>
          <span className="text-sm font-normal text-mainParaColor">
            {SingleCourse?.enrolledStudents?.length !== undefined
              ? `${
                  SingleCourse.enrolledStudents.length 
                } enrolled on this course`
              : "Enrollment information not available"}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            <PiClockClockwiseFill />
          </div>
          <span className="text-sm font-normal text-mainParaColor">
            Last updated{" "}
            {SingleCourse?.updatedAt
              ? new Date(SingleCourse.updatedAt).toLocaleDateString()
              : "N/A"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-6">
        <img src="/images/Courses/Ellipse 415.png" alt="user" />
        <p className="font-normal text-sm">Daniyal Samim</p>
      </div>
    </div>
  );
};

export default DetailBanner;
