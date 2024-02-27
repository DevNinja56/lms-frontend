import VideoBox from "@components/Subject/VideoBox";
import React, { useEffect } from "react";
import SubjectWeekDayActionBottomBox from "@components/Subject/SubjectWeekDayActionBottomBox";
import { useUi } from "@hooks/user-interface";
import { filterContentType } from "@components/SideFilter";
import { useParams, useSearchParams } from "react-router-dom";
import QuizzesBox from "@components/Subject/QuizzesBox";
import SubjectAssignment from "./SubjectAssignment";
import { useGetDayContentQuery } from "@slices/fetch-all-queries.slice";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import ScreenLoader from "@components/ScreenLoader";
import { days_categoryType } from "@utils/Types";
import BookmarkButton from "@components/Subject/Button/BookmarkButton";
import ReadingBox from "@components/Subject/readingBox";
import AttemptedQuizzesBox from "@components/Subject/AttemptedQuizzesBox";
import Button from "@components/button";
import MarkAsCompletedButton from "@components/Subject/Button/MarkAsCompleted";

export const linksTypes = {
  video: "videos",
  reading: "readings",
  quizze: "quizzes",
  assignment: "assignments",
};

const SubjectWeeksDay = () => {
  const { updateFilter, setNav } = useUi();
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { content: id = "" } = useParams();

  const { data, isLoading, refetch } = useGetDayContentQuery(
    API_ENDPOINTS.DAY_CONTENT[type].replace(":id", id)
  );

  useEffect(() => {
    setNav(true);
    (type === linksTypes.video || type === linksTypes.reading) &&
      updateFilter({
        type: filterContentType.subjectWeeksDay,
        state: {},
      });
  }, []);

  if (isLoading) return <ScreenLoader />;

  return (
    <>
      {data && (
        <div className="pb-12 pt-16 w-11/12 mx-auto">
          <div className="video-box bg-white w-full rounded-md shadow-md shadow-gray-200 overflow-y-auto px-3 md:px-6 pt-5 mb-5 lg:mb-0">
            <div className="flex justify-between items-center px-2 py-3 ">
              <h2 className="text-lg md:text-2xl font-bold uppercase">
                {data.name}
              </h2>
              {(type === linksTypes.reading || type === linksTypes.video) && (
                <BookmarkButton data={data} refetch={refetch} />
              )}
            </div>
            {type === linksTypes.video ? (
              <VideoBox data={data} />
            ) : type === linksTypes.reading ? (
              <ReadingBox data={data} />
            ) : type === linksTypes.quizze ? (
              type === linksTypes.quizze &&
              data?.userActions[0]?.markAsCompleted ? (
                <AttemptedQuizzesBox data={data} />
              ) : (
                <QuizzesBox data={data} />
              )
            ) : (
              <>Assignment Component</>
            )}
            <SubjectWeekDayActionBottomBox data={data} refetch={refetch} />
          </div>
          {type === linksTypes.quizze &&
            data?.userActions[0]?.markAsCompleted && <SubjectAssignment />}
          {type === linksTypes.quizze ? (
            ""
          ) : (
            <div className="flex items-center gap-3 w-fit lg:hidden">
              <Button
                text="Save Notes"
                className="ml-0 px-5 py-[10px] rounded-[5px] text-xs xl:text-base"
              />
              <MarkAsCompletedButton {...{ data, refetch }} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SubjectWeeksDay;
