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
      <div className="bg-white rounded-md p-6 pb-4 flex gap-5 2xl:gap-12 items-center">
        <div className="rounded-md">
          <img
            src={data.image}
            alt="course-title-image"
            className="min-w-[120px] w-[120px] h-[80px]"
            draggable={false}
          />
        </div>
        <div className="w-1/2">
          <div className="uppercase font-medium text-[13px] mb-2 text-mainParaColor">
            By Campus
          </div>
          <div className="text-lg uppercase font-bold mb-2 text-black">
            {data.name}
          </div>
          <div className="text-xs capitalize text-text-mainParaColor">
            End on {new Date(data.endDate).toLocaleDateString()}
          </div>
        </div>
        <div
          className="grid place-items-center cursor-pointer min-w-[110px]"
          onClick={() =>
            updateModal({
              type: modalType.rating,
              state: {
                rating: data?.usersActions?.[0]?.review ?? {
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
            initialRating={data?.usersActions?.[0]?.review?.rating ?? 0}
            readonly
            emptySymbol={
              <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
            }
            fullSymbol={
              <AiFillStar color="orange" style={{ fontSize: "20px" }} />
            }
          />
          <span className="text-xs font-semibold capitalize text-mainParaColor select-none whitespace-nowrap ">
            {data?.usersActions?.[0]?.review
              ? `You Rated ${data?.usersActions?.[0]?.review?.rating} / 5`
              : "Rate this Course"}
          </span>
        </div>
        <div className="grid place-items-center px-5 border-x border-x-mainColor mx-2">
          <span className="text-4xl text-mainColor font-bold ">
            {formatNumberToPoints(
              getAvrRatting(data?.avgRating, data.totalRating)
            )}
          </span>
          <span className="text-xs font-semibold capitalize text-mainParaColor min-w-max">
            {data.totalRating} rating
          </span>
        </div>
        <div className="btn-box">
          <LinkButton
            to={ROUTES.SUBJECTS}
            onClick={() => setCourse(data)}
            text="Go to Course"
            className="py-[11px] px-[28px] rounded-[5px] text-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
