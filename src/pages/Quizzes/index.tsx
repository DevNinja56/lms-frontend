import { filterContentType } from "@components/SideFilter";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useRightFilter } from "@hooks/right-filter";
import { useUi } from "@hooks/user-interface";
import { ROUTES } from "@route/constants.route";
import { useGetSubjectQuizQuery } from "@slices/fetch-all-queries.slice";
import { sendParams } from "@utils/link-param";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCourse } from "@hooks/course";

const Quizzes = () => {
  const { updateFilter } = useUi();
  const { subject, quiz_attempted } = useRightFilter();
  const { course } = useCourse();

  const { data: CardsData, refetch } = useGetSubjectQuizQuery(
    API_ENDPOINTS.QUIZE.COURSE_SUBJECT.replace(
      ":subjectID",
      subject ? subject.id : "null"
    ).replace(":courseID", course ? course.id : "null")
  );

  useEffect(() => {
    updateFilter({
      type: filterContentType.quizzes,
      state: {},
    });
    refetch();
  }, []);

  return (
    <div className="grid grow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-8 pr-8 md:pr-0 transition-all duration-300 w-[100%] md:w-[93%]">
      {CardsData &&
        CardsData?.filter((q) => {
          return quiz_attempted === "all"
            ? q
            : quiz_attempted === "attempted"
            ? q.userActions?.[0]?.markAsCompleted
            : !q.userActions?.[0]?.markAsCompleted;
        })?.map((item, i) => {
          return (
            <div className="w-[100%] shadow-lg hover:shadow-none transition-all duration-300 hover:translate-y-[-8px] hover:bg-mainColor rounded-[10px] pb-2">
              <Link
                to={{
                  pathname: ROUTES.QUIZZES_Attempt.replace(":content", item.id),
                  search: sendParams({
                    type: "quizzes",
                    attempt: !!item.userActions?.[0]?.markAsCompleted,
                  }),
                }}
                key={"quiz-card--" + i}
                className="rounded-[10px] bg-white transition-all duration-150 cursor-pointer group px-5 w-full flex flex-col pt-5 pb-4"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 w-20 md:w-auto">
                  <h1 className="font-bold text-[0.8rem] text-mainParaColor mb-2 md:mb-0 capitalize">
                    {item?.subject?.name}
                  </h1>
                  <div
                    className={`rounded-[3px] flex items-center justify-center text-white font-semi-bold pt-[7px] pb-[6px] px-[14px] text-xs ${
                      item.userActions?.[0]?.markAsCompleted
                        ? "bg-green-400"
                        : "bg-amber-400"
                    }`}
                  >
                    <p>
                      {item.userActions?.[0]?.markAsCompleted
                        ? "Attempted"
                        : "Unattempted"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 mb-8">
                  <h1 className="font-medium text-lg truncate capitalize text-lightBlackColor">
                    {item.name}
                  </h1>
                  <p className="text-mainParaColor text-xs truncate capitalize">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-mainParaColor font-medium text-xs">
                    {item.userActions?.[0]?.markAsCompleted
                      ? "VIEW RESULT"
                      : "START TEST"}
                  </p>
                  <button className="h-8 w-8 flex justify-center items-center bg-grayBg rounded-full group-hover:bg-mainColor transition-all duration-150">
                    <FaArrowRight className="text-white text-lg" />
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Quizzes;
