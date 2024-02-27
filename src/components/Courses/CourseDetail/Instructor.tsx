import React from "react";
import { FaStar } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { PiClockClockwiseFill } from "react-icons/pi";
import Paragraph from "@components/Common/Paragraph";
import StudentFeedback from "@components/Courses/CourseDetail/StudentFeedback";
import { useGetInstructorByCourseIdQuery } from "@slices/fetch-all-queries.slice";
import { useParams } from "react-router-dom";
import LoaderSpinner from "@components/LoaderSpinner";
import SubHeading from "@components/Common/SubHeading";

const Instructor = () => {
  const { id } = useParams();
  const { data: instructors, isLoading } = useGetInstructorByCourseIdQuery(id);

  const getInitials = (name: string) => {
    const words = name.split(" ");
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    } else if (words.length === 1) {
      return words[0][0].toUpperCase();
    } else {
      return "";
    }
  };

  return (
    <>
      <div>
        {isLoading ? (
          <div className=" flex justify-center items-center mt-12">
            <LoaderSpinner color={"text-5xl text-mainColor "} />
          </div>
        ) : (
          instructors?.map((item) => {
            return (
              <>
                <div className="w-11/12 ml-24">
                  <SubHeading heading="Instructor" />
                  <div className="flex gap-6 items-center">
                    {item?.avatar ? (
                      <img
                        src={item?.avatar}
                        alt="Instructor"
                        className="w-[100px] h-[100px] rounded-full"
                      />
                    ) : (
                      <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center text-2xl font-bold bg-mainColor text-white">
                        {getInitials(item?.name)}
                      </div>
                    )}
                    <div className="flex flex-col gap-2.5">
                      <span className="font-normal text-lg text-mainParaColor">
                        {item?.name.toUpperCase()}
                      </span>
                      <span className="text-sm font-normal text-mainParaColor">
                        {item?.role}
                      </span>
                      <div className="flex gap-6">
                        <div className=" flex items-center gap-3">
                          <div className="text-xl text-yellow-600">
                            <FaStar />
                          </div>
                          <span className="font-normal text-sm text-yellow-500">
                            {item.averageRating.toFixed(1)}
                          </span>
                          <span className="font-normal text-sm text-mainParaColor">
                            Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-xl text-mainParaColor">
                            <TbMessageDots />
                          </div>
                          <span className="font-normal text-sm text-mainParaColor">
                            {item.totalReviews} Reviews
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-xl text-mainParaColor">
                            <HiOutlineUser />
                          </div>
                          <span className="font-normal text-sm text-mainParaColor">
                            692 Students
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-xl text-mainParaColor">
                            <PiClockClockwiseFill />
                          </div>
                          <span className="font-normal text-sm text-mainParaColor">
                            {item.totalCourses} Course
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12">
                    <Paragraph paragraph={item?.bio_desc} />
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      <StudentFeedback />
    </>
  );
};

export default Instructor;
