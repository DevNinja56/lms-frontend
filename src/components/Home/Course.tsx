import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NewRating from "./Rating";
import { LinkButton } from "@components/button";
import { ROUTES } from "@route/constants.route";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import { useCourse } from "@hooks/course";
import { courseType } from "@utils/Types";
import { formatNumberToPoints, getAvrRatting } from "@utils/getAvrRatting";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useGetCoursesQuery } from "@slices/fetch-all-queries.slice";

const Course = ({ data }: { data: courseType }) => {
  const { updateModal } = useUi();
  const { setCourse } = useCourse();
  const { refetch } = useGetCoursesQuery();

  return (
    <div className="w-full bg-white hover:bg-mainColor transition-all duration-300 rounded-xl hover:translate-y-[-8px] pb-2 cursor-pointer shadow-lg shadow-gray-300 hover:shadow-none">
      <div className="bg-white rounded-md px-4 py-8 md:p-5 lg:p-6 md:pb-4 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
        <div className="flex items-center gap-1 md:gap-2 lg:gap-5 w-full md:w-auto">
          <div className="rounded-md">
            <img
              src={data.image}
              alt="course-title-image"
              className="min-w-[120px] w-[120px] h-[80px]"
              draggable={false}
            />
          </div>
          <div className="w-1/2 pl-3 lg:pl-0">
            <div className="uppercase font-medium text-xs md:text-[13px] mb-2 text-mainParaColor">
              By Campus
            </div>
            <div className="text-base md:text-lg uppercase font-bold mb-2 text-black">
              {data.name}
            </div>
            <div className="text-xs capitalize text-text-mainParaColor">
              End on {new Date(data.endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 md:gap-2 lg:gap-5 w-full md:w-auto">
          <div
            className="grid place-items-center cursor-pointer min-w-min md:min-w-[110px] lg:min-w-[110px]"
            onClick={() =>
              updateModal({
                type: modalType.rating,
                state: {
                  rating: data?.userActions?.[0]?.review ?? {
                    rating: 0,
                    feedback: "",
                  },
                  avgRating: data.avgRating,
                  totalRating: data.totalRating,
                  url: API_ENDPOINTS.USER_ACTION.course.replace(":id", data.id),
                  reviewField: { type: "review" },
                  callback: refetch,
                },
              })
            }
          >
            <NewRating
              initialRating={data?.userActions?.[0]?.review?.rating ?? 0}
              readonly
              emptySymbol={
                <AiOutlineStar color="orange" className="text-sm md:text-xl" />
              }
              fullSymbol={
                <AiFillStar color="orange" className="text-sm md:text-xl" />
              }
            />
            <span className="text-[10px] md:text-xs font-semibold capitalize text-mainParaColor select-none whitespace-nowrap">
              {data?.userActions?.[0]?.review
                ? `You Rated ${data?.userActions?.[0]?.review?.rating} / 5`
                : "Course"}
            </span>
          </div>
          <div className="grid place-items-center px-3 md:px-2 lg:px-5 border-x border-x-mainColor mx-2">
            <span className="text-2xl md:text-4xl text-mainColor font-bold ">
              {formatNumberToPoints(
                getAvrRatting(data?.avgRating, data.totalRating)
              )}
            </span>
            <span className="text-[10px] md:text-xs font-semibold capitalize text-mainParaColor min-w-max">
              {data.totalRating} rating
            </span>
          </div>
          <div className="btn-box">
            <LinkButton
              to={ROUTES.SUBJECTS}
              onClick={() => setCourse(data)}
              text="Go to Course"
              className="py-[11px] px-5 md:px-[28px] rounded-[5px] text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
