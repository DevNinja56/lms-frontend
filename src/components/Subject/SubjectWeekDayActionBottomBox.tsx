import React from "react";
import NewRating from "@components/Home/Rating";
import {
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Button, {
  LinkButton,
} from "@components/button";
import {ROUTES} from "@route/constants.route";
import {useSearchParams} from "react-router-dom";
import {linksTypes} from "@pages/Subjects/SubjectWeeksDay";
import {useQuize} from "@hooks/quize-hook";
import {
  daysContent,
  days_categoryType,
} from "@utils/Types";
import {
  formatNumberToPoints,
  getAvrRatting,
} from "@utils/getAvrRatting";
import {modalType} from "@slices/ui.slice";
import {useUi} from "@hooks/user-interface";
import {API_ENDPOINTS} from "@constant/api-endpoints";
import MarkAsCompletedButton from "./Button/MarkAsCompleted";
import ReportButton from "./Button/ReportButton";

const SubjectWeekDayActionBottomBox: React.FC<{
  data: daysContent;
  refetch: () => void;
}> = ({data, refetch}) => {
  const [param] = useSearchParams();
  const type = param.get(
    "type"
  ) as days_categoryType;
  const {fetchQuizzes} = useQuize();
  const {updateModal} = useUi();

  return (
    <div className="bottom-box flex justify-between items-center py-4 mt-2">
      <div>
        <div className="flex gap-3">
          {type === linksTypes.quizze ? (
            data?.userActions[0]
              ?.markAsCompleted ? (
              <LinkButton
                to={ROUTES.QUIZZES_DETAILS.replace(
                  ":id",
                  data.userActions[0].submission
                    .id
                )}
                className="ml-0 font-semibold px-7 py-[7px]"
                text={"View Details"}
              />
            ) : (
              <LinkButton
                to={ROUTES.QUIZZES_TEST.replace(
                  ":id",
                  data.id
                )}
                className="ml-0 font-semibold px-7 py-[7px]"
                text={"Start Quiz"}
                onClick={() =>
                  fetchQuizzes({
                    path: API_ENDPOINTS.QUIZE.QUESTION.replace(
                      ":id",
                      data.id
                    ),
                  })
                }
              />
            )
          ) : (
            <>
              <Button
                text="Save Notes"
                className="ml-0 px-5 py-[10px] rounded-[5px]"
              />
              <MarkAsCompletedButton
                {...{data, refetch}}
              />
            </>
          )}
        </div>
      </div>
      <div className="flex text-mainTextColor whitespace-nowrap ">
        <div
          className="rating-box grid place-items-center px-5 border-r border-r-mainTextColor select-none cursor-pointer "
          onClick={() =>
            updateModal({
              type: modalType.rating,
              state: {
                rating:
                  data.userActions?.[0]?.review
                    ?.rating ?? 0,
                avgRating: data.avgRating,
                totalRating: data.totalRating,
                url: API_ENDPOINTS.USER_ACTION[
                  type
                ].replace(":id", data.id),
                reviewField: {type: "review"},
                callback: refetch,
              },
            })
          }>
          <NewRating
            initialRating={
              data.userActions?.[0]?.review
                ?.rating ?? 0
            }
            readonly
            emptySymbol={
              <AiOutlineStar
                color="orange"
                style={{fontSize: "18px"}}
              />
            }
            fullSymbol={
              <AiFillStar
                color="orange"
                style={{fontSize: "18px"}}
              />
            }
          />
          <span className="text-xs/3 capitalize text-mainParaColor">
            {data.userActions[0]?.review?.rating
              ? `You Rated ${
                  data.userActions[0]?.review
                    ?.rating ?? 0
                } / 5`
              : `Rate this ${type}`}
          </span>
        </div>
        <div className="rating grid place-items-center px-5 border-r border-r-mainTextColor">
          <span className="title text-3xl text-mainColor font-bold ">
            {formatNumberToPoints(
              getAvrRatting(
                data?.avgRating,
                data.totalRating
              )
            )}
          </span>
          <span className="text-xs/3 text-mainParaColor">
            {data.totalRating} Ratings
          </span>
        </div>
        <ReportButton {...{data, refetch}} />
      </div>
    </div>
  );
};

export default SubjectWeekDayActionBottomBox;
