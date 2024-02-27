import React, { useEffect } from "react";
import NewRating from "@components/Home/Rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button, { LinkButton } from "@components/button";
import { ROUTES } from "@route/constants.route";
import { useSearchParams } from "react-router-dom";
import { linksTypes } from "@pages/Subjects/SubjectWeeksDay";
import { useQuize } from "@hooks/quize-hook";
import { daysContent, days_categoryType } from "@utils/Types";
import { formatNumberToPoints, getAvrRatting } from "@utils/getAvrRatting";
import { modalType } from "@slices/ui.slice";
import { useUi } from "@hooks/user-interface";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import MarkAsCompletedButton from "./Button/MarkAsCompleted";
import ReportButton from "./Button/ReportButton";
import { useCourse } from "@hooks/course";
import { useProps } from "@context/PropsContext";

const SubjectWeekDayActionBottomBox: React.FC<{
  data: daysContent;
  refetch: () => void;
}> = ({ data, refetch }) => {
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { fetchQuizzes } = useQuize();
  const { updateModal } = useUi();
  const { course } = useCourse();
  const { setQuizResult } = useProps();

  useEffect(() => {
    const result = data?.userActions[0]?.submission?.result;
    setQuizResult(result);
  }, [data]);

  return (
    <div className="bottom-box flex flex-wrap-reverse md:flex-wrap gap-5 xl:gap-0 justify-between items-center py-4 mt-2">
      <div>
        <div className="flex gap-3">
          {type === linksTypes.quizze ? (
            data?.userActions[0]?.markAsCompleted ? (
              <LinkButton
                to={ROUTES.QUIZZES_DETAILS.replace(
                  ":id",
                  data.userActions[0].submission.id
                )}
                className="ml-0 font-semibold px-7 py-[7px]"
                text={"View Details"}
              />
            ) : (
              <LinkButton
                to={ROUTES.QUIZZES_TEST.replace(":id", data.id)}
                className="ml-0 font-semibold px-7 py-[7px]"
                text={"Start Quiz"}
                onClick={() =>
                  fetchQuizzes({
                    path: API_ENDPOINTS.QUIZE.QUESTION.replace(":id", data.id),
                  })
                }
              />
            )
          ) : (
            <div className="hidden lg:flex items-center gap-3">
              <Button
                text="Save Notes"
                className="ml-0 px-5 py-[10px] rounded-[5px] text-xs xl:text-base"
              />
              <MarkAsCompletedButton {...{ data, refetch }} />
            </div>
          )}
        </div>
      </div>
      <div className="flex text-mainTextColor whitespace-nowrap">
        <div
          className="rating-box grid place-items-center px-3 md:px-5 border-r border-r-mainTextColor select-none cursor-pointer "
          onClick={() =>
            updateModal({
              type: modalType.rating,
              state: {
                rating: data.userActions?.[0]?.review?.rating ?? 0,
                feedback: data.userActions?.[0]?.review?.feedback ?? "",
                avgRating: data.avgRating,
                totalRating: data.totalRating,
                url: API_ENDPOINTS.USER_ACTION[type].replace(":id", data.id),
                reviewField: {
                  resourceType: "review",
                  courseId: course.id,
                },
                callback: refetch,
              },
            })
          }
        >
          <NewRating
            initialRating={data.userActions?.[0]?.review?.rating ?? 0}
            readonly
            emptySymbol={
              <AiOutlineStar color="orange" className="text-sm md:text-lg" />
            }
            fullSymbol={
              <AiFillStar color="orange" className="text-sm md:text-lg" />
            }
          />
          <span className="text-[10px] md:text-xs/3 capitalize text-mainParaColor">
            {data.userActions[0]?.review?.rating
              ? `You Rated ${data.userActions[0]?.review?.rating ?? 0} / 5`
              : `Rate this ${type}`}
          </span>
        </div>
        <div className="rating grid place-items-center px-3 md:px-5 border-r border-r-mainTextColor">
          <span className="title text-xl md:text-3xl text-mainColor font-bold ">
            {formatNumberToPoints(
              getAvrRatting(data?.avgRating, data.totalRating)
            )}
          </span>
          <span className="text-[10px] md:text-xs/3 text-mainParaColor">
            {data.totalRating} Ratings
          </span>
        </div>
        <ReportButton {...{ data, refetch }} />
      </div>
    </div>
  );
};

export default SubjectWeekDayActionBottomBox;
